import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, Zap, CreditCard, CheckCircle2, MapPin, Hammer, Wallet } from 'lucide-react';
import { sendChatMessage } from '../services/geminiService';

const ProductComparator = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([
    { role: 'bot', content: '¡Hola! Soy Nina de TECHOS JAC. ¿En qué puedo ayudarte hoy con tus ventanas Velux?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll automático
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat, loading]);

  const handleQuery = async (userText: string) => {
    setLoading(true);
    try {
      const history = chat.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const botMsg = await sendChatMessage(history, userText);
      
      setChat(prev => [...prev, { role: 'bot', content: botMsg }]);
    } catch (error) {
      console.error(error);
      setChat(prev => [...prev, { role: 'bot', content: "Lo siento, tuve un error técnico. ¿Me lo repetís?" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    
    const messageToSend = customText || input.trim();
    if (!messageToSend || loading) return;

    setChat(prev => [...prev, { role: 'user', content: messageToSend }]);
    setInput('');
    
    handleQuery(messageToSend);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/5491168396459?text=Hola! Vengo del asistente web de Techos JAC.`, '_blank');
  };

  // Función para los botones rápidos
  const handleQuickAction = (text: string) => {
    handleSend(undefined, text);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 font-sans px-4 py-6 rounded-[2.5rem] bg-slate-50 border border-gray-200 shadow-xl">
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter">
          ASISTENTE <span className="text-red-600">JAC</span>
        </h2>
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-[2rem] border border-white overflow-hidden flex flex-col md:grid md:grid-cols-12 h-[600px] shadow-2xl">
        
        {/* Sidebar Info */}
        <aside className="hidden md:flex md:col-span-4 bg-gray-50/70 p-7 border-r border-gray-100 flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                <Zap className="text-white" size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 italic">Asesoría Técnica</span>
            </div>
            
            <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="text-red-600" size={16} />
                  <p className="text-[10px] font-black text-slate-900 uppercase">Pagos</p>
                </div>
                <p className="text-[9px] font-bold text-gray-500 uppercase">Efectivo, Transf, Dólar.</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="text-red-600" size={16} />
                  <p className="text-[10px] font-black text-slate-900 uppercase">Garantía</p>
                </div>
                <p className="text-[9px] font-bold text-gray-500 uppercase">10 años en ventanas Velux.</p>
            </div>
          </div>
          
          <div className="bg-slate-900 p-5 rounded-2xl text-white">
            <p className="text-[12px] font-black italic uppercase">TECHOS JAC</p>
            <p className="text-[9px] font-bold uppercase opacity-70">Instalador Velux Oficial</p>
          </div>
        </aside>

        {/* Área de Mensajes */}
        <div className="flex flex-col md:col-span-8 bg-white overflow-hidden">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
            {chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-red-600 text-white font-medium rounded-tr-none' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-gray-200'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="p-4 text-red-600 animate-pulse text-[10px] font-black uppercase tracking-tighter">
                  Nina está redactando...
                </div>
              </div>
            )}
          </div>

          {/* Formulario de Entrada y Botones Rápidos */}
          <div className="p-4 md:p-6 border-t border-gray-100 bg-white">
            
            {/* BOTONES RÁPIDOS */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button 
                onClick={() => handleQuickAction("¿Cuáles son las formas de pago?")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-gray-200 hover:border-red-200 rounded-full text-[11px] font-bold uppercase transition-all shadow-sm"
              >
                <Wallet size={14} /> Formas de pago
              </button>
              <button 
                onClick={() => handleQuickAction("¿Dónde queda el showroom de Pilar?")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-gray-200 hover:border-red-200 rounded-full text-[11px] font-bold uppercase transition-all shadow-sm"
              >
                <MapPin size={14} /> Showroom Pilar
              </button>
              <button 
                onClick={() => handleQuickAction("¿Realizan instalaciones de ventanas Velux?")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-gray-200 hover:border-red-200 rounded-full text-[11px] font-bold uppercase transition-all shadow-sm"
              >
                <Hammer size={14} /> Instalaciones
              </button>
            </div>

            <form onSubmit={handleSend} className="relative">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Preguntame sobre modelos o instalación..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-red-500 focus:bg-white outline-none pr-28 transition-all" 
              />
              <div className="absolute right-2 top-2 flex gap-1.5">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="p-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-300 transition-colors shadow-lg shadow-red-200"
                >
                  <Send size={18} />
                </button>
                <button 
                  type="button" 
                  onClick={openWhatsApp} 
                  className="p-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
                >
                  <MessageSquare size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparator;