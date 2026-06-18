import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const ArquitectosBanner: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#0e0e0e] min-h-[92vh] flex flex-col justify-center overflow-hidden">

      {/* Dot grid muy sutil */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

      {/* Glow rojo — único, suave, esquina superior */}
      <div className="absolute -top-80 -left-80 w-[800px] h-[800px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 60%)' }} />

      {/* Línea superior */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.45) 50%, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 w-full py-32 md:py-40">

        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-10">
            <div className="w-5 h-px bg-red-600" />
            <span className="text-white/40 text-[9px] font-black uppercase tracking-[0.55em]">
              Techos JAC · Distribuidor oficial VELUX Argentina
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,7.5vw,7rem)] font-[1000] text-white tracking-tighter leading-[0.88] uppercase italic mb-8">
            Comunidad<br />
            de <span className="text-red-600">Arquitectos.</span>
          </motion.h1>

          {/* Bajada */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/35 text-base md:text-lg leading-relaxed max-w-lg mb-14 font-light">
            No somos solo un proveedor. Somos el socio técnico que acompaña a tu estudio desde el anteproyecto hasta la entrega de obra.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 mb-20">
            <button
              onClick={() => document.getElementById('form-comunidad')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-red-600 text-[#0e0e0e] hover:text-white font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
              Sumate a la comunidad
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 text-white/40 hover:text-white/70 font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
              Hablar con un especialista
            </button>
          </motion.div>

          {/* Stats — línea horizontal con separadores */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-10 pt-10 border-t border-white/8">
            {[
              { n: '+50', label: 'Estudios activos' },
              { n: '4.000+', label: 'Ventanas instaladas' },
              { n: '15 años', label: 'Experiencia técnica' },
              { n: 'CAD · BIM', label: 'Archivos técnicos' },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="text-xl md:text-2xl font-[1000] italic text-white tracking-tighter leading-none mb-1.5">{n}</p>
                <p className="text-[8px] font-black uppercase tracking-[0.45em] text-white/25">{label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Línea inferior */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />

    </section>
  );
};

export default ArquitectosBanner;
