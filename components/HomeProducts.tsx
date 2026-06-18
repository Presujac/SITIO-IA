import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Props { onNavigate: (view: string) => void; }

const GGL_SPECS = [
  { k: 'Apertura', v: 'Pivotante central' },
  { k: 'Marco', v: 'Pino nórdico' },
  { k: 'Pendiente', v: '15° a 90°' },
  { k: 'Aislación', v: 'ThermoTechnology™' },
];

const FS_SPECS = [
  { k: 'Tipo', v: 'Fija · Solo luz' },
  { k: 'Marco', v: 'Madera pintada blanca' },
  { k: 'Vidrio', v: 'Laminado de seguridad' },
  { k: 'Protección', v: '99% rayos UV' },
];

const FV = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const VP = { once: true, margin: '-50px' };

const HomeProducts: React.FC<Props> = ({ onNavigate }) => (
  <section className="bg-[#F4F3EF] w-full overflow-hidden">

    {/* ── HEADER ── */}
    <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
      <motion.div
        variants={FV} initial="hidden" whileInView="visible" viewport={VP}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-red-600" />
            <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.45em]">
              Catálogo · Ventanas para techo
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[88px] font-[1000] tracking-tighter text-[#111111] uppercase italic leading-[0.86]">
            Nuestros<br /><span className="text-red-600">productos.</span>
          </h2>
        </div>
        <div className="lg:max-w-sm">
          <p className="text-[#666] text-sm md:text-base leading-relaxed mb-6">
            Ventanas originales VELUX con garantía de fábrica de 10 años. Stock permanente en Argentina.
          </p>
          <button
            onClick={() => onNavigate('product-detail')}
            className="group inline-flex items-center gap-3 bg-[#111] hover:bg-red-600 text-white pl-6 pr-3 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300"
          >
            Ver catálogo completo
            <div className="bg-white/15 group-hover:bg-white/25 p-2 rounded-full">
              <ArrowRight size={13} />
            </div>
          </button>
        </div>
      </motion.div>
    </div>

    {/* ── PRODUCT CARDS ── */}
    <div className="px-4 md:px-6 lg:px-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1600px] mx-auto">

        {/* ─ GGL · DARK CARD ─ */}
        <motion.div
          variants={FV} initial="hidden" whileInView="visible" viewport={VP}
          className="group relative bg-[#0D0D0D] rounded-3xl overflow-hidden cursor-pointer"
          onClick={() => onNavigate('product-detail')}
          whileHover="hovered"
        >
          {/* red radial glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            variants={{
              hovered: { background: 'radial-gradient(ellipse at 50% 90%, rgba(220,38,38,0.2) 0%, transparent 65%)' }
            }}
            initial={{ background: 'none' }}
            transition={{ duration: 0.5 }}
          />

          <div className="relative p-8 md:p-10 lg:p-14 flex flex-col">

            {/* badge row */}
            <div className="flex items-center justify-between mb-8">
              <span className="inline-flex items-center gap-1.5 text-[8px] font-black uppercase tracking-[0.45em] text-red-400 bg-red-500/15 border border-red-500/25 px-4 py-2 rounded-full">
                ★ Más vendida
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/20">GGL</span>
            </div>

            {/* name */}
            <h3 className="text-[42px] md:text-5xl lg:text-[60px] font-[1000] text-white uppercase italic tracking-tighter leading-[0.88] mb-3">
              Pivotante
              <br />
              <span className="text-red-600">GGL Full</span>
            </h3>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-[280px]">
              Apertura central con barra ergonómica. Marco de pino nórdico natural y vidrio termopanel laminado de seguridad.
            </p>

            {/* specs */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {GGL_SPECS.map(s => (
                <div key={s.k} className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-3.5">
                  <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/25 mb-0.5">{s.k}</p>
                  <p className="text-[11px] font-black uppercase tracking-wide text-white/80">{s.v}</p>
                </div>
              ))}
            </div>

            {/* sizes */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['55x98', '78x98', '78x140', '114x118', '114x140'].map(s => (
                <span key={s} className="text-[9px] font-black text-white/30 border border-white/10 rounded-full px-3 py-1.5">
                  {s} cm
                </span>
              ))}
            </div>

            {/* floating image */}
            <div className="relative flex items-end justify-center" style={{ minHeight: 300 }}>
              <motion.img
                src="/GGL-FULL-1.png"
                alt="Ventana pivotante VELUX GGL Full"
                className="relative z-10 w-auto object-contain select-none"
                style={{ maxHeight: 320 }}
                variants={{ hovered: { y: -12, filter: 'drop-shadow(0 40px 60px rgba(220,38,38,0.3))' } }}
                initial={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.9))' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-red-700/20 blur-2xl rounded-full" />
            </div>
          </div>

          {/* hover corner */}
          <motion.div
            className="absolute bottom-7 right-7 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"
            variants={{ hovered: { color: 'rgba(255,255,255,0.45)', y: 0 } }}
            initial={{ color: 'rgba(255,255,255,0)', y: 6 }}
            transition={{ duration: 0.3 }}
          >
            Ver detalle <ArrowRight size={10} />
          </motion.div>
        </motion.div>

        {/* ─ FS · RED CARD ─ */}
        <motion.div
          variants={FV} initial="hidden" whileInView="visible" viewport={VP}
          transition={{ delay: 0.15 } as object}
          className="group relative bg-red-600 rounded-3xl overflow-hidden cursor-pointer"
          onClick={() => onNavigate('product-detail')}
          whileHover="hovered"
        >
          {/* white glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            variants={{
              hovered: { background: 'radial-gradient(ellipse at 50% 90%, rgba(255,255,255,0.15) 0%, transparent 65%)' }
            }}
            initial={{ background: 'none' }}
            transition={{ duration: 0.5 }}
          />
          {/* diagonal texture */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 12px)' }} />

          <div className="relative p-8 md:p-10 lg:p-14 flex flex-col">

            <div className="flex items-center justify-between mb-8">
              <span className="inline-flex items-center gap-1.5 text-[8px] font-black uppercase tracking-[0.45em] text-white/80 bg-white/15 border border-white/25 px-4 py-2 rounded-full">
                ↓ Mejor precio
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">FS</span>
            </div>

            <h3 className="text-[42px] md:text-5xl lg:text-[60px] font-[1000] text-white uppercase italic tracking-tighter leading-[0.88] mb-3">
              Fija
              <br />
              <span className="text-white/50">FS Blanca</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[280px]">
              La mejor relación precio-calidad. Vidrio laminado de seguridad con bloqueo 99% rayos UV. Sin apertura.
            </p>

            {/* specs — white on red */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {FS_SPECS.map(s => (
                <div key={s.k} className="bg-white/[0.12] border border-white/[0.2] rounded-2xl p-3.5">
                  <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/50 mb-0.5">{s.k}</p>
                  <p className="text-[11px] font-black uppercase tracking-wide text-white">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {['78x98', '78x140', '114x118'].map(s => (
                <span key={s} className="text-[9px] font-black text-white/60 border border-white/25 rounded-full px-3 py-1.5">
                  {s} cm
                </span>
              ))}
            </div>

            <div className="relative flex items-end justify-center" style={{ minHeight: 300 }}>
              <motion.img
                src="/fija-e1633054439171.png"
                alt="Ventana de techo fija VELUX FS"
                className="relative z-10 w-auto object-contain select-none"
                style={{ maxHeight: 320 }}
                variants={{ hovered: { y: -12, filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.35))' } }}
                initial={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) brightness(1.1)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-black/20 blur-2xl rounded-full" />
            </div>
          </div>

          <motion.div
            className="absolute bottom-7 right-7 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"
            variants={{ hovered: { color: 'rgba(255,255,255,0.7)', y: 0 } }}
            initial={{ color: 'rgba(255,255,255,0)', y: 6 }}
            transition={{ duration: 0.3 }}
          >
            Ver detalle <ArrowRight size={10} />
          </motion.div>
        </motion.div>

      </div>
    </div>

    {/* ── BOTTOM BAR ── */}
    <motion.div
      variants={FV} initial="hidden" whileInView="visible" viewport={VP}
      transition={{ delay: 0.2 } as object}
      className="border-t border-[#E0DED8]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[#AAA8A3] text-[9px] font-black uppercase tracking-widest leading-relaxed">
          También disponibles · Proyectante GPL · Solar VSS · Túneles TWR/TWF · Losa Plana CVP/CFP
        </p>
        <button
          onClick={() => onNavigate('product-detail')}
          className="group shrink-0 flex items-center gap-2 text-[#999] hover:text-red-600 font-black text-[9px] uppercase tracking-widest transition-colors"
        >
          Ver todos los modelos
          <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>

  </section>
);

export default HomeProducts;
