import React, { useState } from 'react';
import { ShoppingCart, Search, Zap, Plus, Minus, Trash2, ExternalLink, Palette, RefreshCcw } from 'lucide-react';

// --- CONFIGURACIÓN DE WEBHOOKS ---
const WEBHOOKS = {
  1: "https://hook.us2.make.com/mw931mmp6g36ubmmbpfv8ko37ln4g4ri",
  2: "https://hook.us2.make.com/wwc9xjyvox4qc2x9c5u9i6nt9hdt5njc",
  3: "https://hook.us2.make.com/dj87gaansov633xiy65i8zvpr0eoaaz8",
  4: "https://hook.us2.make.com/xql4vub0y9ucn6wwiutaoa3yu54zmi9p",
  5: "https://hook.us2.make.com/8tobxotdwlslc9kvxoewn3hil4ne70o8",
  6: "https://hook.us2.make.com/bwytx8bgub1d9lkzrlrm4bguf46siun9",
  7: "https://hook.us2.make.com/57u9gg2fsilehikjdrabbhcv6bdh4z5n"
};

const MEASURES = {
  "CK02": "55x78", "CK04": "55x98", "CK06": "55x118", "MK04": "78x98", "MK08": "78x140", "MK10": "78x160", "SK01": "114x70", "SK06": "114x118", "SK08": "114x140", "PK19": "94x252", "UK10": "134x160", "M04": "78x98", "M08": "78x140", "S06": "114x118", "60x60": "60x60", "80x80": "80x80", "120x120": "120x120", "CK00": "55x98", "MK00": "78x140", "UK00": "134x140",
  "0K14": "Estándar", "014": "Plano", "ÚNICO": ""
};

const CATALOG = {
  VENTANAS: [
    { code: "GGL", name: "Pivotantes", sizes: ["CK04", "MK04", "MK08", "SK01", "SK06", "SK08"] },
    { code: "GGU", name: "Premium Blanca", sizes: ["CK04", "MK04", "MK08", "SK06", "SK08"] },
    { code: "GPL", name: "Proyectante Madera", sizes: ["MK08", "SK08"] },
    { code: "VSS", name: "Solar Apertura", sizes: ["M04", "M08", "S06"] },
    { code: "FS", name: "Fija Solar", sizes: ["M04", "M08", "S06"] },
    { code: "CVP", name: "Techo Plano Apert.", sizes: ["60x60", "60x90", "80x80", "120x120"] },
    { code: "CFP", name: "Techo Plano Fija", sizes: ["60x60", "60x90", "80x80", "120x120"] },
    { code: "ALT", name: "Altaterra Eco", sizes: ["CK04", "MK04", "MK08", "SK06"] },
  ],
  CORTINAS: [
    { code: "DKL", name: "Blackout Manual", sizes: ["CK04", "MK04", "MK08", "SK01", "SK06", "SK08"], hasColor: true },
    { code: "ALT DKL", name: "Blackout Altaterra", sizes: ["CK04", "MK04", "MK08", "SK06"], hasColor: false },
    { code: "FHL", name: "Plisada Traslúcida", sizes: ["CK04", "MK04", "MK08", "SK01", "SK06", "SK08"], hasColor: false },
    { code: "DFD", name: "Duo Blackout", sizes: ["CK04", "MK04", "MK08", "SK01", "SK06", "SK08"], hasColor: true },
    { code: "FSCD", name: "Cortina FS", sizes: ["M04", "M08", "S06"], hasColor: true },
    { code: "FSCH", name: "Cortina VSS", sizes: ["M04", "M08", "S06"], hasColor: true },
    { code: "DML", name: "Cortina Eléctrica DML", sizes: ["CK04", "MK04", "MK08", "SK01", "SK06", "SK08"], hasColor: true },
  ],
  TOLDOS: [
    { code: "MHL", name: "Toldo Exterior Manual", sizes: ["CK04", "MK04", "MK08", "SK01", "SK06", "SK08"], hasColor: false },
  ],
  MOSQUITEROS: [
    { code: "ZIL", name: "Mosquitero Velux", sizes: ["CK04", "MK04", "MK08", "SK01", "SK06", "SK08"] },
    { code: "ALT ZIL", name: "Mosquitero Altaterra", sizes: ["CK04", "MK04", "MK08", "SK06"] },
  ],
  TUNELES: [
    { code: "TWR 0K14", name: "Túnel rígido techo inclinado", sizes: ["ÚNICO"] },
    { code: "TWF 0K14", name: "Túnel flexible techo inclinado", sizes: ["ÚNICO"] },
    { code: "TCF 014", name: "Túnel flexible techo plano", sizes: ["ÚNICO"] },
    { code: "ZTR 0K14 (62)", name: "Extensión túnel rígido 62 cm", sizes: ["ÚNICO"] },
    { code: "ZTR 0K14 (124)", name: "Extensión túnel rígido 124 cm", sizes: ["ÚNICO"] },
  ],
  ACCESORIOS: [
    { code: "COMBO_KLI", name: "KIT MOTORIZACIÓN + KLI 310", sizes: ["ÚNICO"] },
    { code: "COMBO_KLR", name: "KIT MOTORIZACIÓN + TÁCTIL", sizes: ["ÚNICO"] },
    { code: "VARA", name: "Vara extensible", sizes: ["ÚNICO"] },
    { code: "ALT VARA", name: "Vara Altaterra", sizes: ["ÚNICO"] },
    { code: "ZOZ 100", name: "Extension vara", sizes: ["ÚNICO"] },
    { code: "ZOZ 085", name: "Adaptador para cortina", sizes: ["ÚNICO"] },
    { code: "ZOZ 095 VENTANA", name: "Adaptador para ventana", sizes: ["ÚNICO"] },
    { code: "KIX 300 PACK ACTIVE", name: "Pack active velux", sizes: ["ÚNICO"] },
    { code: "KLI 310", name: "Control de mando", sizes: ["ÚNICO"] },
    { code: "KMG 100 K", name: "Motor para motorizacion", sizes: ["ÚNICO"] },
    { code: "KLC 500", name: "Transformador", sizes: ["ÚNICO"] },
    { code: "KLR 300", name: "Control tactil", sizes: ["ÚNICO"] },
  ]
};

const InternalPanel = ({ onExit }) => {
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState('VENTANAS');
  const [searchTerm, setSearchTerm] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [colorSelector, setColorSelector] = useState(null);

  const resetOrder = () => {
    setItems([]);
  };

  const handleFinalizar = async () => {
    if (!customer) return alert("Falta nombre del cliente");
    const count = items.length;
    if (count === 0) return;
    setIsSending(true);
    // Lógica actualizada para soportar hasta 7 y usar el 7 como fallback para más cantidad
    const targetWebhook = count > 7 ? WEBHOOKS[7] : WEBHOOKS[count];
    const pedidoTxt = `${customer.toUpperCase()}, ` + items.map(i => `${i.qty} ${i.code} ${i.size} ${i.color || ""}`.trim()).join(", ");

    try {
      const response = await fetch(targetWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pedido: pedidoTxt })
      });
      const data = await response.json();
      if (data?.pdfUrl) setPdfUrl(data.pdfUrl);
      else alert("Pedido enviado. PDF en proceso.");
      setItems([]); setCustomer("");
    } catch (e) { alert("Error al enviar el pedido"); } finally { setIsSending(false); }
  };

  const addItem = (product, size, color = null) => {
    if (product.hasColor && !color) {
      setColorSelector({ product, size });
      return;
    }

    if (product.code === "COMBO_KLI" || product.code === "COMBO_KLR") {
      const comboId = Math.random().toString(36).substr(2, 9);
      const controlCode = product.code === "COMBO_KLI" ? "KLI 310" : "KLR 300";
      const comboItems = [
        { id: comboId + "_1", code: "KLC 500", size: "", displaySize: "", qty: 1 },
        { id: comboId + "_2", code: "KMG 100 K", size: "", displaySize: "", qty: 1 },
        { id: comboId + "_3", code: controlCode, size: "", displaySize: "", qty: 1 }
      ];
      setItems([...items, ...comboItems]);
      return;
    }

    const mainId = Math.random().toString(36).substr(2, 9);
    
    let finalCode = product.code;
    let finalSize = size === "ÚNICO" ? "" : size;
    let displaySize = size === "ÚNICO" ? "" : size;

    if (product.code.startsWith("ALT") && product.code !== "ALT" && size !== "ÚNICO") {
        finalCode = `${product.code} ${size}`;
        finalSize = ""; 
    }

    const mainItem = { 
      id: mainId, 
      code: finalCode, 
      size: finalSize, 
      displaySize: displaySize,
      qty: 1, 
      color 
    };
    
    let newItems = [...items, mainItem];
    
    if (activeTab === 'VENTANAS' && !["CVP", "CFP", "GDL", "ALT"].includes(product.code)) {
       newItems.push({ id: mainId + "_c", code: "EDW", size: size, displaySize: size === "ÚNICO" ? "" : size, qty: 1, isAuto: true });
    } else if (activeTab === 'VENTANAS' && product.code === "ALT") {
       newItems.push({ id: mainId + "_c", code: `ALT EDW ${size}`, size: "", displaySize: size, qty: 1, isAuto: true });
    }
    
    setItems(newItems);
    setColorSelector(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans antialiased">
      <header className="bg-[#111111] border-b-4 border-red-600 px-8 py-5 sticky top-0 z-50 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="bg-red-600 p-2 rounded shadow-lg animate-pulse shadow-red-600/30"><Zap size={20} className="text-white fill-white" /></div>
          <h1 className="text-lg font-black tracking-tighter text-white uppercase italic">TECHOS <span className="text-red-600">JAC</span></h1>
        </div>
        <button onClick={onExit} className="text-[10px] font-black px-6 py-2 rounded bg-white text-black hover:bg-red-600 hover:text-white transition-all shadow-md uppercase">Salir</button>
      </header>

      <main className="max-w-[1600px] mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
            <input placeholder="CLIENTE / OBRA..." className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-red-600 transition-all uppercase" value={customer} onChange={(e) => setCustomer(e.target.value)} />
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input placeholder="BUSCAR PRODUCTO..." className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 pl-12 text-sm font-bold outline-none focus:border-red-600 transition-all uppercase" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {Object.keys(CATALOG).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-xl text-[10px] font-black transition-all border-2 flex items-center gap-2 whitespace-nowrap ${activeTab === tab ? 'bg-black border-black text-white shadow-xl' : 'bg-white border-slate-100 text-slate-400 hover:border-red-600 hover:text-red-600'}`}>{tab}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATALOG[activeTab].filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.code.toLowerCase().includes(searchTerm.toLowerCase())).map(prod => (
              <div key={prod.name} className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-sm transition-all hover:border-red-600/30 group">
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-black text-red-600 uppercase italic tracking-widest">{prod.code.startsWith('COMBO') ? 'OFERTA' : prod.code}</span>
                    <h3 className="font-black text-lg mt-1 text-slate-900 uppercase italic">{prod.name}</h3>
                  </div>
                  {prod.hasColor && <Palette className="text-red-600" size={18}/>}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {prod.sizes.map(size => (
                    <button key={size} onClick={() => addItem(prod, size)} className="p-4 rounded-3xl bg-[#F8F9FA] border-2 border-slate-50 hover:bg-white hover:border-black transition-all text-left">
                      <p className="text-[12px] font-black text-black">{size === "ÚNICO" ? "" : size}</p>
                      <p className="text-[9px] text-slate-400 font-bold italic">{MEASURES[size] || 'Accesorio'}</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-[#111111] rounded-[3rem] p-8 border-b-[12px] border-red-600 sticky top-28 shadow-2xl flex flex-col h-[calc(100vh-140px)] text-white">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[11px] font-black flex items-center gap-3 text-red-600 uppercase tracking-widest italic"><ShoppingCart size={20}/> Comanda Pro</h2>
              {items.length > 0 && (
                <button onClick={resetOrder} className="text-[9px] font-black text-white/30 hover:text-red-600 flex items-center gap-1 uppercase transition-colors">
                  <RefreshCcw size={12}/> Limpiar
                </button>
              )}
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
              {items.map(item => (
                <div key={item.id} className="bg-white/5 p-5 rounded-[1.5rem] border border-white/5 flex justify-between items-center group animate-in slide-in-from-right-4">
                  <div className="flex-1">
                    <p className="text-[9px] font-black text-red-600 uppercase italic mb-1">{item.code} {item.color ? `(${item.color})` : ""}</p>
                    <p className="text-xs font-black">{item.displaySize} <span className="text-white/20 text-[9px] ml-1">{MEASURES[item.displaySize] && item.displaySize !== "" ? `(${MEASURES[item.displaySize]})` : ""}</span></p>
                    <div className="flex items-center gap-4 mt-4 bg-black/40 rounded-xl px-4 py-2 w-fit border border-white/5">
                      <button onClick={() => setItems(items.map(i => i.id === item.id ? {...i, qty: Math.max(1, i.qty-1)} : i))} className="hover:text-red-600"><Minus size={12}/></button>
                      <span className="text-sm font-black w-4 text-center">{item.qty}</span>
                      <button onClick={() => setItems(items.map(i => i.id === item.id ? {...i, qty: i.qty+1} : i))} className="hover:text-red-600"><Plus size={12}/></button>
                    </div>
                  </div>
                  <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="text-white/10 hover:text-red-600 p-2"><Trash2 size={20}/></button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 space-y-3">
              <button disabled={items.length === 0 || isSending} onClick={handleFinalizar} className={`w-full py-6 rounded-2xl font-black text-[11px] tracking-[0.3em] uppercase italic transition-all shadow-xl ${items.length === 0 || isSending ? 'bg-white/5 text-white/10' : 'bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-red-600/40'}`}>
                {isSending ? "ENVIANDO..." : "GENERAR PDF DRIVE"}
              </button>
              {items.length > 0 && !isSending && (
                <button onClick={resetOrder} className="w-full py-3 text-[9px] font-black text-white/20 hover:text-red-600 transition-colors uppercase tracking-widest">
                  Reiniciar Comanda
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {colorSelector && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] rounded-[3rem] p-12 border-2 border-red-600 w-full max-w-sm text-center shadow-2xl">
            <h3 className="text-white text-xl font-black italic uppercase mb-8">Elegir Color</h3>
            <div className="flex flex-col gap-4">
              <button onClick={() => addItem(colorSelector.product, colorSelector.size, "BEIGE")} className="bg-white text-black py-5 rounded-2xl font-black uppercase italic hover:bg-red-600 hover:text-white transition-all">BEIGE</button>
              <button onClick={() => addItem(colorSelector.product, colorSelector.size, "GRIS")} className="bg-white text-black py-5 rounded-2xl font-black uppercase italic hover:bg-red-600 hover:text-white transition-all">GRIS</button>
              <button onClick={() => setColorSelector(null)} className="text-red-600 text-xs font-black uppercase mt-4">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {pdfUrl && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <div className="bg-[#111111] rounded-[3rem] p-12 border-2 border-red-600 text-center shadow-2xl max-w-sm w-full">
            <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-600/40"><ExternalLink size={24} /></div>
            <h3 className="text-2xl font-black text-white italic mb-8 uppercase">PDF Generado</h3>
            <a href={pdfUrl} target="_blank" rel="noreferrer" className="bg-white text-black py-5 w-full rounded-2xl font-black uppercase italic flex items-center justify-center gap-3 hover:bg-red-600 hover:text-white transition-all">ABRIR DOCUMENTO</a>
            <button onClick={() => setPdfUrl(null)} className="text-red-600 text-[10px] font-black uppercase mt-6 tracking-widest">Cerrar</button>
          </div>
        </div>
      )}
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .custom-scrollbar::-webkit-scrollbar { width: 3px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }`}</style>
    </div>
  );
};

export default InternalPanel;