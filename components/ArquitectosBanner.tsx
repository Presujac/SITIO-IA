import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const FV = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const ArquitectosBanner: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#0e0e0e] min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Fondos decorativos ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.10) 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(220,38,38,0.55) 40%, rgba(220,38,38,0.55) 60%, transparent 95%)' }} />

      {/* ── Contenido ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-14 w-full py-28 md:py-36">

        {/* Badge VELUX */}
        <motion.div {...FV(0)} className="mb-10">
          <span className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white/60 text-[9px] font-black uppercase tracking-[0.4em] px-4 py-2.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
            Distribuidor Oficial VELUX · Argentina
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.h1 {...FV(0.07)}
            className="text-[clamp(3rem,8vw,7.5rem)] font-[1000] text-white tracking-tighter leading-[0.85] uppercase italic mb-8">
            Formá parte<br />
            de algo más<br />
            <span className="text-red-600">grande.</span>
          </motion.h1>

          <motion.p {...FV(0.14)}
            className="text-white/40 text-base md:text-lg leading-relaxed max-w-xl mb-12 font-light">
            La comunidad de arquitectos que trabajan con Techos JAC y VELUX. Respaldo técnico, especificación precisa y soporte en cada etapa del proyecto.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div {...FV(0.2)}
          className="flex flex-wrap gap-x-12 gap-y-6 mb-14 pb-14 border-b border-white/8">
          {[
            { n: '+50', label: 'Estudios activos' },
            { n: '4.000+', label: 'Ventanas instaladas' },
            { n: '15 años', label: 'Respaldo técnico' },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-[1000] italic text-white tracking-tighter leading-none mb-1">{n}</p>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...FV(0.25)} className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => document.getElementById('form-comunidad')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-red-600 text-[#1D1D1F] hover:text-white font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
            Sumate a la comunidad
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('arquitectos-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 border border-white/12 hover:border-white/30 text-white/50 hover:text-white font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
            Ver más
            <ArrowDown size={12} />
          </button>
        </motion.div>

        {/* Fotos flotantes — decorativas, esquina inferior derecha */}
        <div className="hidden lg:flex absolute bottom-12 right-14 gap-3 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-40 h-52 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 rotate-[-3deg]">
            <img src="/AD2.jpeg" alt="Proyecto Living" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-44 h-60 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img src="/AD4.jpeg" alt="Proyecto Escalera" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-36 h-48 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 rotate-[2deg]">
            <img src="/living_room.jpg" alt="Proyecto interior" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default ArquitectosBanner;
