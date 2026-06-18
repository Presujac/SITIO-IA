import React, { useState } from 'react';

const SPACES = [
  { id: 'habitacion', label: 'Habitación', sub: 'Descanso y confort',    img: '/bedroom.jpg'     },
  { id: 'living',     label: 'Living',     sub: 'Espacio principal',      img: '/living_room.jpg' },
  { id: 'bano',       label: 'Baños',      sub: 'Humedad y ventilación',  img: '/bathroom.jpg'    },
  { id: 'escalera',   label: 'Escalera',   sub: 'Doble altura',           img: '/AD4.jpeg'        },
  { id: 'altillo',    label: 'Altillo',    sub: 'Espacios en altura',     img: '/AD9.jpeg'        },
];

const RECOMMENDED: Record<string, string[]> = {
  habitacion: ['GGL', 'GGU', 'VSS'],
  living:     ['GPL', 'GGL', 'CVP'],
  bano:       ['GGU', 'CVP', 'CFP'],
  escalera:   ['FS', 'GGL', 'CFP'],
  altillo:    ['GGL', 'GGU', 'CVP'],
};

const MODELS_DB = [
  { id: 'GGL', name: 'GGL VENTANA FULL',      tagline: 'Pino Nórdico Natural',  img: '/GGL-FULL-1.png',           type: 'inclinado', cat: 'apertura', variants: ['55x98','78x98','78x140','114x70','114x118','114x140'] },
  { id: 'GGU', name: 'GGU VENTANA PREMIUM',   tagline: 'Ideal Baños y Cocinas', img: '/GGU-PREMIUM.png',          type: 'inclinado', cat: 'apertura', variants: ['55x98','78x98','78x140','114x118','114x140'] },
  { id: 'GPL', name: 'GPL PANORÁMICA',         tagline: 'Doble apertura 45°',    img: '/GPL-FULL.png',             type: 'inclinado', cat: 'apertura', variants: ['78x140','114x140'] },
  { id: 'VSS', name: 'VSS SOLAR INTELIGENTE',  tagline: 'Autonomía Total',       img: '/solar-e1633054424707.png', type: 'inclinado', cat: 'apertura', variants: ['78x98','78x140','114x118'] },
  { id: 'FS',  name: 'FS VENTANA FIJA',        tagline: 'Luz Cenital Pura',      img: '/fija-e1633054439171.png',  type: 'inclinado', cat: 'fija',     variants: ['78x98','78x140','114x118'] },
  { id: 'CVP', name: 'CVP LOSA APERTURA',      tagline: 'Manual con Vara',       img: '/CVP-1.jpg',                type: 'plano',     cat: 'apertura', variants: ['60x60','60x90','80x80','120x120'] },
  { id: 'CFP', name: 'CFP LOSA FIJA',          tagline: 'Minimalismo en Losa',   img: '/CFP.jpg',                  type: 'plano',     cat: 'fija',     variants: ['60x60','60x90','80x80','120x120'] },
];

interface RoofWizardProps { onNavigate?: (view: string) => void; }

const RoofWizard = ({ onNavigate }: RoofWizardProps) => {
  const [step, setStep] = useState(1);
  const [sel, setSel] = useState({ space: '', roof: '', cat: '', modelId: '', size: '' });

  const filteredModels = MODELS_DB.filter(m => m.type === sel.roof && m.cat === sel.cat);
  const isRec = (id: string) => !!(RECOMMENDED[sel.space] && RECOMMENDED[sel.space].includes(id));
  const currentSpace = SPACES.find(s => s.id === sel.space);

  const sendWhatsApp = () => {
    const model = MODELS_DB.find(m => m.id === sel.modelId);
    const msg = '¡Hola Techos JAC! 🏠✨\n\nQuiero asesoramiento para:\n✅ Modelo: ' +
      (model ? model.name : '') + '\n📏 Medida: ' + sel.size + ' cm\n🏠 Espacio: ' +
      (currentSpace ? currentSpace.label : '') + '\n\n¡Quedo a la espera de su contacto!';
    window.open('https://wa.me/5491168396459?text=' + encodeURIComponent(msg), '_blank');
  };

  return (
    <div className="text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1,2,3,4].map(n => (
              <div
                key={n}
                className={[
                  'h-[3px] rounded-full transition-all duration-500',
                  n === step ? 'w-12 bg-red-500' : n < step ? 'w-6 bg-slate-600' : 'w-6 bg-slate-800'
                ].join(' ')}
              />
            ))}
          </div>
          {/* Title */}
          <div className="text-center">
            <span className="text-[9px] font-black tracking-[0.5em] uppercase text-slate-500 italic block mb-3">
              Cotizador inteligente · Paso {step} de 4
            </span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.85]">
              {step === 1 && (<>¿Qué espacio<br className="hidden md:block" /> querés <span className="text-red-500">iluminar?</span></>)}
              {step === 2 && (<>¿Cómo es<br className="hidden md:block" /> tu <span className="text-red-500">techo?</span></>)}
              {step === 3 && (<>¿Ventilación<br className="hidden md:block" /> o solo <span className="text-red-500">luz?</span></>)}
              {step === 4 && (<>Tu ventana<br className="hidden md:block" /> <span className="text-red-500">ideal.</span></>)}
            </h2>
          </div>
          {step > 1 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setStep(step - 1)}
                className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors flex items-center gap-2"
              >
                ← Cambiar selección
              </button>
            </div>
          )}
        </div>

        {/* STEP 1 — Espacio */}
        {step === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
            {SPACES.map((space, i) => (
              <div
                key={space.id}
                onClick={() => { setSel({ space: space.id, roof: '', cat: '', modelId: '', size: '' }); setStep(2); }}
                style={{ aspectRatio: '3/4' }}
                className={[
                  'group relative cursor-pointer rounded-2xl overflow-hidden ring-2 ring-transparent hover:ring-red-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/30',
                  i === 4 ? 'col-span-2 md:col-span-1' : ''
                ].join(' ')}
              >
                <img src={space.img} alt={space.label} draggable={false}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-lg md:text-2xl font-black uppercase italic text-white leading-none tracking-tighter">{space.label}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mt-1">{space.sub}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center shadow-xl shadow-red-900/50">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STEP 2 — Tipo de techo */}
        {step === 2 && (
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              { id: 'inclinado', label: 'Inclinado', sub: 'Teja · Chapa · Madera', img: '/images (2).jpg' },
              { id: 'plano',     label: 'Losa Plana', sub: 'Hormigón · Cubierta plana', img: '/plano2.jpg' }
            ].map(roof => (
              <div
                key={roof.id}
                onClick={() => { setSel({...sel, roof: roof.id}); setStep(3); }}
                className="group relative h-[260px] md:h-[380px] cursor-pointer rounded-2xl overflow-hidden ring-2 ring-transparent hover:ring-red-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/30"
              >
                <img src={roof.img} alt={roof.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-2xl md:text-4xl font-black uppercase italic text-white leading-none tracking-tighter">{roof.label}</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-2">{roof.sub}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STEP 3 — Apertura o Fija */}
        {step === 3 && (
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div
              onClick={() => { setSel({...sel, cat: 'apertura'}); setStep(4); }}
              className="group p-8 md:p-12 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800 group-hover:bg-red-600 flex items-center justify-center mb-6 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-slate-300 group-hover:stroke-white transition-colors">
                  <path d="M3 12h18M12 3l9 9-9 9"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-white mb-2">Apertura</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Ventilación + luz natural</p>
            </div>
            <div
              onClick={() => { setSel({...sel, cat: 'fija'}); setStep(4); }}
              className="group p-8 md:p-12 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800 group-hover:bg-red-600 flex items-center justify-center mb-6 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-slate-300 group-hover:stroke-white transition-colors">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-white mb-2">Solo Luz</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Máxima entrada de luz</p>
            </div>
          </div>
        )}

        {/* STEP 4 — Productos */}
        {step === 4 && (
          <div>
            {currentSpace && (
              <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-600 mb-10">
                {currentSpace.label} · Techo {sel.roof} · {sel.cat === 'apertura' ? 'Con apertura' : 'Solo luz'}
              </p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredModels.map(model => (
                <div
                  key={model.id}
                  className={[
                    'rounded-2xl overflow-hidden border transition-all',
                    isRec(model.id)
                      ? 'border-red-600 shadow-xl shadow-red-900/30 bg-slate-900'
                      : 'border-slate-800 bg-slate-900'
                  ].join(' ')}
                >
                  {isRec(model.id) && (
                    <div className="bg-red-600 px-4 py-2 text-center">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">
                        ★ Ideal para {currentSpace ? currentSpace.label : ''}
                      </span>
                    </div>
                  )}
                  <div className="h-52 bg-slate-800/50 flex items-center justify-center p-6">
                    <img src={model.img} className="max-h-full object-contain" alt={model.name} />
                  </div>
                  <div className="p-6 border-t border-slate-800">
                    <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">{model.name}</h3>
                    <p className="text-red-500 text-[9px] font-black uppercase tracking-widest mb-5 mt-0.5">{model.tagline}</p>
                    <select
                      value={sel.modelId === model.id ? sel.size : ''}
                      onChange={(e) => setSel({...sel, modelId: model.id, size: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-[11px] font-black uppercase outline-none focus:border-red-500 mb-4 cursor-pointer text-white"
                    >
                      <option value="" disabled>Elegir medida...</option>
                      {model.variants.map(v => <option key={v} value={v}>{v} cm</option>)}
                    </select>
                    <button
                      disabled={sel.modelId !== model.id || !sel.size}
                      onClick={sendWhatsApp}
                      className={[
                        'w-full py-4 rounded-full font-black uppercase text-[10px] tracking-widest transition-all',
                        sel.modelId === model.id && sel.size
                          ? 'bg-red-600 text-white hover:bg-white hover:text-slate-900 shadow-lg shadow-red-900/30'
                          : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                      ].join(' ')}
                    >
                      Consultar por WhatsApp →
                    </button>
                    <button
                      onClick={() => onNavigate?.('product-detail')}
                      className="w-full mt-2 py-3 rounded-full font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-white border border-slate-800 hover:border-slate-600 transition-all duration-300"
                    >
                      Ver ficha del producto →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default RoofWizard;