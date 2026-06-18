import React, { useState } from 'react';
// Usamos tu función específica que ya tiene todas las reglas de Velux
import { analyzeRoofForBudget } from '../services/geminiService';

const VisionShowcase = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [userData, setUserData] = useState({ nombre: '', zona: '' });

  // --- FUNCIÓN DE COMPRESIÓN ---
  const compressImage = (base64Str: string): Promise<string> => {
    return new Promise<string>((resolve) => {
      const img = new Image();
      img.src = base64Str;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800; 
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressed = canvas.toDataURL('image/jpeg', 0.7);
        resolve(compressed.split(',')[1]); 
      };
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const rawBase64 = reader.result as string;
      setPreviewUrl(rawBase64);

      setLoading(true);
      setError(null);

      try {
        const processedImg = await compressImage(rawBase64);
        const aiData = await analyzeRoofForBudget(processedImg);
        
        setResult({
          model: aiData.recommendedWindow,
          dimensions: aiData.flashing.split(' ').pop() || "Consultar",
          caseDescription: aiData.explanation,
          tag: 'ANÁLISIS IA TECHOS JAC',
          techItems: [
            { label: 'MATERIAL', value: aiData.material },
            { label: 'ESTADO', value: aiData.condition },
            { label: 'CERCO', value: aiData.flashing },
            { label: 'INVERSIÓN', value: `USD ${aiData.estimatedPriceUSD}` }
          ]
        });

      } catch (err) {
        console.error("Error en análisis:", err);
        setError("Límite de tokens excedido o error de red. Intentá con una foto más pequeña.");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const message = `¡Hola Techos JAC! 🏠\nMi nombre es ${userData.nombre} de ${userData.zona}.\nHice el análisis IA de mi techo:\n- Modelo: ${result.model}\n- Cerco: ${result.techItems[2].value}\n- Material: ${result.techItems[0].value}`;
    window.open(`https://wa.me/5491168396459?text=${encodeURIComponent(message)}`, '_blank');
  };

  // --- RENDERIZADO DEL COMPONENTE ---
  const MainContent = () => {
    if (loading) {
      return (
        <div className="relative max-w-4xl mx-auto h-[450px] bg-slate-950 rounded-[2.5rem] overflow-hidden flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
          {previewUrl && <img src={previewUrl} className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm" alt="scan" />}
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 border-t-2 border-red-600 rounded-full animate-spin mx-auto mb-6 shadow-[0_0_15px_red]"></div>
            <h4 className="text-white text-xs font-black uppercase italic tracking-widest">Escaneando estructura con Gemini...</h4>
          </div>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_20px_red] animate-[scan_2.5s_infinite]"></div>
        </div>
      );
    }

    if (result && previewUrl) {
      return (
        <>
          <div className="relative max-w-5xl mx-auto min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 border border-white/10 animate-in fade-in zoom-in-95 duration-700">
            <img src={previewUrl} alt="Obra" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 h-full min-h-[600px] p-8 md:p-14">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="bg-red-600 text-white text-[8px] font-black px-4 py-1.5 rounded-full mb-6 w-fit uppercase italic">{result.tag}</span>
                <h2 className="text-6xl md:text-8xl font-[1000] text-white italic leading-[0.8] mb-8 uppercase tracking-tighter">{result.model}</h2>
                <div className="max-w-lg mb-10 p-1">
                  <p className="text-white text-lg font-medium italic leading-relaxed opacity-90">"{result.caseDescription}"</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                  {result.techItems.map((item, i) => (
                    <div key={i}>
                      <p className="text-[8px] font-black text-red-500 uppercase mb-1">{item.label}</p>
                      <p className="text-[11px] font-bold text-white uppercase italic">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center lg:items-end">
                <div className="bg-white p-10 rounded-[2.5rem] w-full max-w-[280px] shadow-2xl mb-8 text-center">
                  <p className="text-[9px] font-black text-red-600 uppercase mb-3 italic">Código Cerco</p>
                  <span className="text-4xl font-[1000] text-slate-900 italic tracking-tighter">{result.techItems[2].value.split(' ').pop()}</span>
                </div>
                <button onClick={() => setShowLeadForm(true)} className="w-full max-w-[280px] bg-red-600 text-white py-5 rounded-full font-black text-[9px] uppercase italic shadow-xl hover:bg-red-700 transition-all scale-100 hover:scale-105 active:scale-95">Cotizar ahora</button>
                <button onClick={() => {setResult(null); setPreviewUrl(null);}} className="mt-4 text-white/40 hover:text-white text-[9px] font-black uppercase underline">Reiniciar</button>
              </div>
            </div>
          </div>

          {showLeadForm && (
            <div className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6">
              <div className="bg-white w-full max-w-md rounded-[3.5rem] p-12 shadow-2xl relative">
                <button onClick={() => setShowLeadForm(false)} className="absolute top-8 right-8 text-gray-300 hover:text-red-600 text-2xl font-black">×</button>
                <h3 className="text-4xl font-black italic uppercase mb-8 leading-none">¡CASI <span className="text-red-600">LISTO</span>!</h3>
                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <input required type="text" value={userData.nombre} onChange={(e) => setUserData({...userData, nombre: e.target.value})} placeholder="Tu Nombre" className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-8 py-5 text-[14px] font-black italic outline-none focus:ring-2 ring-red-600/20" />
                  <input required type="text" value={userData.zona} onChange={(e) => setUserData({...userData, zona: e.target.value})} placeholder="Tu Zona" className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-8 py-5 text-[14px] font-black italic outline-none focus:ring-2 ring-red-600/20" />
                  <button type="submit" className="w-full py-6 bg-red-600 text-white rounded-full font-black uppercase text-[12px] italic shadow-xl hover:bg-red-700 transition-colors">Confirmar WhatsApp 🚀</button>
                </form>
              </div>
            </div>
          )}
        </>
      );
    }

    return (
      <div className="max-w-4xl mx-auto bg-white rounded-[3.8rem] p-12 md:p-24 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white relative z-10">
        <p className="text-red-600 text-[9px] font-black tracking-widest mb-6 italic uppercase">JAC SIMULADOR </p>
        <h3 className="text-4xl md:text-6xl font-[1000] text-slate-900 mb-6 uppercase italic tracking-tighter leading-none">¿QUÉ VENTANA <br/> TE QUEDA <span className="text-red-600">MEJOR?</span></h3>
        <p className="text-slate-500 mb-12 text-lg font-medium italic opacity-80">Subí una foto de tu ambiente y calcularemos el presupuesto ideal.</p>
        <label className="cursor-pointer inline-flex items-center gap-8 bg-slate-900 text-white px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all group">
          <span className="font-black text-[10px] uppercase italic">Analizar mi ambiente</span>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path d="M12 4v16m8-8H4" /></svg>
          </div>
          <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
        </label>
        {error && <p className="mt-4 text-red-600 text-[10px] font-bold uppercase">{error}</p>}
      </div>
    );
  };

  // --- WRAPPER FUTURISTA ---
  return (
    <div className="relative min-h-screen w-full bg-[#020617] flex items-center justify-center p-6 overflow-hidden font-sans">
      
      {/* Fondo de Grilla Perspectiva */}
      <div className="absolute inset-0 z-0" 
           style={{
             backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
             transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2.5)',
             opacity: 0.4
           }}>
      </div>

      {/* Orbes de Luz Dinámicos (Glow) */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px] animate-bounce duration-[15s]"></div>

      {/* Partículas Flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-red-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/5 rounded-full"></div>
      </div>

      {/* El Componente Centrado */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 to-transparent blur-3xl opacity-30"></div>
        <MainContent />
      </div>

      {/* CSS para la animación de escaneo */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(450px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default VisionShowcase;