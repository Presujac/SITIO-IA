import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const FV = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.22 } },
};

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

  const STEP_LABELS = ['Espacio', 'Techo', 'Función', 'Producto'];

  return (
    <section className="relative w-full overflow-hidden bg-[#141416] py-16 md:py-24">

      {/* ── FONDO: imagen difuminada ── */}
      <img
        src="/inclinado1.png"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        style={{ opacity: 0.04, filter: 'blur(2px) saturate(0)', transform: 'scale(1.05)' }}
      />

      {/* ── PATRÓN DE PUNTOS ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── GLOWS DE COLOR ── */}
      <div className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(220,38,38,0.08) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(251,191,36,0.06) 0%, transparent 65%)' }} />

      {/* ── LÍNEA SUPERIOR ── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── CONTENIDO ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="mb-12 md:mb-16">

          {/* Step pills */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-10 flex-wrap">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1;
              const done    = n < step;
              const current = n === step;
              return (
                <div key={n} className="flex items-center gap-1.5">
                  <div className={[
                    'flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-400 border',
                    current ? 'bg-white/10 border-white/25 text-white backdrop-blur-sm'
                    : done  ? 'bg-white/5 border-white/10 text-white/40'
                    :          'bg-transparent border-white/5 text-white/15'
                  ].join(' ')}>
                    <span className={[
                      'w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black flex-shrink-0',
                      current ? 'bg-red-600 text-white'
                      : done  ? 'bg-white/20 text-white/60'
                      :          'bg-white/5 text-white/20'
                    ].join(' ')}>
                      {done ? '✓' : n}
                    </span>
                    {label}
                  </div>
                  {i < 3 && <div className={['w-4 md:w-6 h-[1px]', done || current ? 'bg-white/15' : 'bg-white/5'].join(' ')} />}
                </div>
              );
            })}
          </div>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div key={step} variants={FV} initial="hidden" animate="visible" exit="exit" className="text-center">
              <h2 className="text-4xl md:text-6xl lg:text-[76px] font-[1000] tracking-tighter uppercase italic leading-[0.88] text-white">
                {step === 1 && (<>¿Qué espacio<br className="hidden md:block" /> querés <span className="text-red-500">iluminar?</span></>)}
                {step === 2 && (<>¿Cómo es<br className="hidden md:block" /> tu <span className="text-red-500">techo?</span></>)}
                {step === 3 && (<>¿Ventilación<br className="hidden md:block" /> o solo <span className="text-red-500">luz?</span></>)}
                {step === 4 && (<>Tu ventana<br className="hidden md:block" /> <span className="text-red-500">ideal.</span></>)}
              </h2>
            </motion.div>
          </AnimatePresence>

          {step > 1 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setStep(step - 1)}
                className="text-[10px] font-black uppercase tracking-widest text-white/25 hover:text-white/70 transition-colors flex items-center gap-2"
              >
                ← Cambiar selección
              </button>
            </div>
          )}
        </div>

        {/* STEP 1 — Espacio */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" variants={FV} initial="hidden" animate="visible" exit="exit">

              {/* ── BENTO GRID — layout editorial variado ── */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto"
                style={{ gridTemplateRows: 'auto' }}>

                {/* LIVING — hero card grande, ocupa 2 cols y 2 filas en desktop */}
                {(() => {
                  const space = SPACES[1]; // living
                  return (
                    <motion.div
                      key={space.id}
                      onClick={() => { setSel({ space: space.id, roof: '', cat: '', modelId: '', size: '' }); setStep(2); }}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1, transition: { delay: 0.05, duration: 0.6 } }}
                      className="group relative cursor-pointer overflow-hidden ring-1 ring-white/10 hover:ring-red-500/60 transition-all duration-400 hover:shadow-2xl hover:shadow-red-900/30 col-span-2 md:col-span-2 md:row-span-2"
                      style={{ borderRadius: '20px', height: '280px', minHeight: '280px' }}
                    >
                      <img src={space.img} alt={space.label} draggable={false}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                      <div className="absolute inset-0 bg-[#141416]/20 group-hover:bg-transparent transition-colors duration-400" />
                      {/* Tag esquina */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/50 backdrop-blur-sm border border-white/10 text-white/50 text-[7px] font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full">
                          Espacio principal
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                        <p className="text-2xl md:text-4xl font-[1000] uppercase italic text-white leading-none tracking-tighter">{space.label}</p>
                        <p className="text-[8px] font-black uppercase tracking-widest text-white/35 mt-1.5">{space.sub}</p>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <div className="bg-red-600 rounded-full w-9 h-9 flex items-center justify-center shadow-lg">
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* HABITACIÓN — card vertical tall */}
                {(() => {
                  const space = SPACES[0]; // habitacion
                  return (
                    <motion.div
                      key={space.id}
                      onClick={() => { setSel({ space: space.id, roof: '', cat: '', modelId: '', size: '' }); setStep(2); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.55 } }}
                      className="group relative cursor-pointer overflow-hidden ring-1 ring-white/10 hover:ring-red-500/60 transition-all duration-400 hover:shadow-xl hover:shadow-red-900/20 col-span-1 md:col-span-1 md:row-span-2"
                      style={{ borderRadius: '20px', height: '280px', minHeight: '280px' }}
                    >
                      <img src={space.img} alt={space.label} draggable={false}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                      <div className="absolute inset-0 bg-[#141416]/25 group-hover:bg-transparent transition-colors duration-400" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                        <p className="text-xl md:text-2xl font-[1000] uppercase italic text-white leading-none tracking-tighter">{space.label}</p>
                        <p className="text-[8px] font-black uppercase tracking-widest text-white/35 mt-1">{space.sub}</p>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* BAÑOS — card más pequeña/cuadrada */}
                {(() => {
                  const space = SPACES[2]; // bano
                  return (
                    <motion.div
                      key={space.id}
                      onClick={() => { setSel({ space: space.id, roof: '', cat: '', modelId: '', size: '' }); setStep(2); }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.55 } }}
                      className="group relative cursor-pointer overflow-hidden ring-1 ring-white/10 hover:ring-red-500/60 transition-all duration-400 hover:shadow-xl hover:shadow-red-900/20 col-span-1"
                      style={{ borderRadius: '20px', height: '160px' }}
                    >
                      <img src={space.img} alt={space.label} draggable={false}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.07] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute inset-0 bg-[#141416]/30 group-hover:bg-transparent transition-colors duration-400" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-lg font-[1000] uppercase italic text-white leading-none tracking-tighter">{space.label}</p>
                        <p className="text-[7px] font-black uppercase tracking-widest text-white/35 mt-0.5">{space.sub}</p>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* ESCALERA — card ancha horizontal */}
                {(() => {
                  const space = SPACES[3]; // escalera
                  return (
                    <motion.div
                      key={space.id}
                      onClick={() => { setSel({ space: space.id, roof: '', cat: '', modelId: '', size: '' }); setStep(2); }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.55 } }}
                      className="group relative cursor-pointer overflow-hidden ring-1 ring-white/10 hover:ring-red-500/60 transition-all duration-400 hover:shadow-xl hover:shadow-red-900/20 col-span-2 md:col-span-2"
                      style={{ borderRadius: '20px', height: '160px' }}
                    >
                      <img src={space.img} alt={space.label} draggable={false}
                        className="absolute inset-0 w-full h-full object-cover object-[center_35%] group-hover:scale-[1.04] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                      <div className="absolute inset-0 bg-[#141416]/20 group-hover:bg-transparent transition-colors duration-400" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                        <div>
                          <p className="text-xl md:text-2xl font-[1000] uppercase italic text-white leading-none tracking-tighter">{space.label}</p>
                          <p className="text-[7px] font-black uppercase tracking-widest text-white/35 mt-1">{space.sub}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                          <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* ALTILLO — card cuadrada */}
                {(() => {
                  const space = SPACES[4]; // altillo
                  return (
                    <motion.div
                      key={space.id}
                      onClick={() => { setSel({ space: space.id, roof: '', cat: '', modelId: '', size: '' }); setStep(2); }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.55 } }}
                      className="group relative cursor-pointer overflow-hidden ring-1 ring-white/10 hover:ring-red-500/60 transition-all duration-400 hover:shadow-xl hover:shadow-red-900/20 col-span-2 md:col-span-1"
                      style={{ borderRadius: '20px', height: '160px' }}
                    >
                      <img src={space.img} alt={space.label} draggable={false}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.07] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                      <div className="absolute inset-0 bg-[#141416]/25 group-hover:bg-transparent transition-colors duration-400" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-lg font-[1000] uppercase italic text-white leading-none tracking-tighter">{space.label}</p>
                        <p className="text-[7px] font-black uppercase tracking-widest text-white/35 mt-0.5">{space.sub}</p>
                      </div>
                    </motion.div>
                  );
                })()}

              </div>
            </motion.div>
          )}

          {/* STEP 2 — Techo */}
          {step === 2 && (
            <motion.div key="s2" variants={FV} initial="hidden" animate="visible" exit="exit"
              className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { id: 'inclinado', label: 'Inclinado',  sub: 'Teja · Chapa · Madera',    img: '/images (2).jpg' },
                { id: 'plano',     label: 'Losa Plana', sub: 'Hormigón · Cubierta plana', img: '/plano2.jpg'     }
              ].map((roof, i) => (
                <motion.div
                  key={roof.id}
                  onClick={() => { setSel({...sel, roof: roof.id}); setStep(3); }}
                  initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.5 } }}
                  className="group relative h-[280px] md:h-[480px] cursor-pointer rounded-3xl overflow-hidden ring-1 ring-white/10 hover:ring-red-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20"
                >
                  <img src={roof.img} alt={roof.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-[#141416]/25 group-hover:bg-transparent transition-colors duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-3xl md:text-4xl font-[1000] uppercase italic text-white leading-none tracking-tighter mb-2">{roof.label}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">{roof.sub}</p>
                  </div>
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-red-600 rounded-full w-9 h-9 flex items-center justify-center shadow-lg shadow-red-900/50">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* STEP 3 — Apertura o Fija */}
          {step === 3 && (
            <motion.div key="s3" variants={FV} initial="hidden" animate="visible" exit="exit"
              className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">

              {/* APERTURA — glass card */}
              <motion.div
                onClick={() => { setSel({...sel, cat: 'apertura'}); setStep(4); }}
                initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.45 } }}
                className="group cursor-pointer rounded-3xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 backdrop-blur-md"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                whileHover={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-red-600/20 group-hover:bg-red-600 flex items-center justify-center mb-6 transition-all duration-300 border border-red-500/20 group-hover:border-red-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-red-400 group-hover:stroke-white transition-colors">
                    <path d="M3 12h18M12 3l9 9-9 9"/>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-[1000] uppercase italic tracking-tighter text-white mb-2">Apertura</h3>
                <p className="text-white/35 text-[10px] font-black uppercase tracking-widest">Ventilación + luz natural</p>
              </motion.div>

              {/* FIJA — glass card con borde rojo */}
              <motion.div
                onClick={() => { setSel({...sel, cat: 'fija'}); setStep(4); }}
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.45 } }}
                className="group cursor-pointer rounded-3xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-md"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                whileHover={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/8 group-hover:bg-white/15 flex items-center justify-center mb-6 transition-all duration-300 border border-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white/50 group-hover:stroke-white transition-colors">
                    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-[1000] uppercase italic tracking-tighter text-white mb-2">Solo Luz</h3>
                <p className="text-white/35 text-[10px] font-black uppercase tracking-widest">Máxima entrada de luz</p>
              </motion.div>

            </motion.div>
          )}

          {/* STEP 4 — Productos */}
          {step === 4 && (
            <motion.div key="s4" variants={FV} initial="hidden" animate="visible" exit="exit">
              {currentSpace && (
                <p className="text-center text-[9px] font-black uppercase tracking-widest text-white/20 mb-10">
                  {currentSpace.label} · Techo {sel.roof} · {sel.cat === 'apertura' ? 'Con apertura' : 'Solo luz'}
                </p>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredModels.map((model, i) => (
                  <motion.div
                    key={model.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.09 } }}
                    className={[
                      'rounded-2xl overflow-hidden transition-all backdrop-blur-sm',
                      isRec(model.id)
                        ? 'shadow-xl shadow-red-900/20'
                        : ''
                    ].join(' ')}
                    style={{
                      background: isRec(model.id) ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
                      border: isRec(model.id) ? '1px solid rgba(220,38,38,0.35)' : '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    {isRec(model.id) && (
                      <div className="bg-red-600 px-4 py-2 text-center">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">
                          ★ Ideal para {currentSpace ? currentSpace.label : ''}
                        </span>
                      </div>
                    )}
                    <div className="h-52 flex items-center justify-center p-6" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <img src={model.img} className="max-h-full object-contain" alt={model.name} />
                    </div>
                    <div className="p-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                      <h3 className="text-xl font-[1000] italic uppercase tracking-tighter text-white">{model.name}</h3>
                      <p className="text-red-400/70 text-[9px] font-black uppercase tracking-widest mb-5 mt-0.5">{model.tagline}</p>
                      <select
                        value={sel.modelId === model.id ? sel.size : ''}
                        onChange={(e) => setSel({...sel, modelId: model.id, size: e.target.value})}
                        className="w-full rounded-xl px-4 py-3 text-[11px] font-black uppercase outline-none mb-4 cursor-pointer text-white"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
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
                            : 'text-white/15 cursor-not-allowed'
                        ].join(' ')}
                        style={!(sel.modelId === model.id && sel.size) ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' } : {}}
                      >
                        Consultar por WhatsApp →
                      </button>
                      <button
                        onClick={() => onNavigate?.('product-detail')}
                        className="w-full mt-2 py-3 rounded-full font-black uppercase text-[9px] tracking-widest text-white/25 hover:text-white/60 transition-all duration-300"
                        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        Ver ficha del producto →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default RoofWizard;
