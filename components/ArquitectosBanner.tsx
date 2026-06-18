import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const ArquitectosBanner: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">

      {/* Foto de fondo */}
      <img
        src="/DSC02242.JPEG"
        alt="Comunidad de Arquitectos"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay oscuro con degradado */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(10,10,10,0.82) 40%, rgba(10,10,10,0.35) 100%)' }} />

      {/* Línea superior roja */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.5) 50%, transparent)' }} />

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
            className="text-[clamp(2rem,4.5vw,4.5rem)] font-[1000] tracking-tighter leading-[0.9] uppercase italic mb-8">
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.45) 100%)' }}>
              Comunidad<br />de{' '}
            </span>
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #ef4444 30%, #991b1b 100%)' }}>
              Arquitectos.
            </span>
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


        </div>
      </div>

      {/* Fade inferior hacia la sección siguiente */}
      <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

    </section>
  );
};

export default ArquitectosBanner;
