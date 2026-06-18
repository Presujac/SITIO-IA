import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const FV = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } } };
const VP = { once: true, margin: '-40px' };

const STATS = [
  { value: '+4.000', label: 'Ventanas instaladas' },
  { value: '10 años', label: 'Garantía de fábrica' },
  { value: 'CAD·BIM', label: 'Archivos técnicos' },
];

const ArquitectosBanner: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative bg-white overflow-hidden pt-20 md:pt-24">

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">

        {/* Copy — left */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-14 lg:py-0 order-2 lg:order-1">

          <motion.div variants={FV} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] text-[#1D1D1F] text-[9px] font-black uppercase tracking-[0.35em] mb-8">
              Para Arquitectos y Estudios de Diseño
            </span>
          </motion.div>

          <motion.h1
            variants={FV} initial="hidden" animate="visible"
            transition={{ delay: 0.05 }}
            className="text-[48px] md:text-[60px] lg:text-[68px] font-[1000] text-[#1D1D1F] tracking-tighter leading-[0.9] mb-6 uppercase italic">
            Proyectá los<br />espacios que tus<br />clientes<br />
            <span className="text-amber-500">van a recordar.</span>
          </motion.h1>

          <motion.p
            variants={FV} initial="hidden" animate="visible"
            transition={{ delay: 0.1 }}
            className="text-[#6E6E73] text-base leading-relaxed mb-10 max-w-sm">
            Distribuidor oficial VELUX en Argentina. Soporte técnico especializado, muestras físicas y archivos CAD·BIM desde el anteproyecto hasta la entrega de obra.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={FV} initial="hidden" animate="visible"
            transition={{ delay: 0.15 }}
            className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-[#D2D2D7]">
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <div className="text-xl md:text-2xl font-[1000] italic text-[#1D1D1F] tracking-tight mb-1">{stat.value}</div>
                <div className="text-[#6E6E73] text-[9px] uppercase tracking-wider font-black leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={FV} initial="hidden" animate="visible"
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('contacto')}
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-[#1D1D1F] hover:bg-black text-white font-black uppercase tracking-widest text-[10px] px-7 py-4 rounded-full transition-all duration-300 cursor-pointer">
              Hablar con un especialista
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('arquitectos-content')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-[#D2D2D7] hover:border-[#1D1D1F] text-[#1D1D1F] font-black uppercase tracking-widest text-[10px] px-7 py-4 rounded-full transition-all duration-300 cursor-pointer">
              Ver servicios
              <ArrowDown size={12} />
            </button>
          </motion.div>

        </div>

        {/* Foto grid — right */}
        <div className="relative order-1 lg:order-2 h-[55vw] max-h-[560px] lg:h-auto lg:max-h-none overflow-hidden bg-[#F5F5F7]">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full p-2">

            <motion.div
              variants={FV} initial="hidden" animate="visible"
              transition={{ delay: 0.1 }}
              className="row-span-2 relative overflow-hidden rounded-2xl bg-[#E8E8ED]">
              <img src="/AD2.jpeg" alt="Living con ventana VELUX · Pilar" loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-white/80 backdrop-blur-sm text-[#1D1D1F] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Living · Pilar
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={FV} initial="hidden" animate="visible"
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-[#E8E8ED]">
              <img src="/AD4.jpeg" alt="Escalera con luz natural · Nordelta" loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-block bg-white/80 backdrop-blur-sm text-[#1D1D1F] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Escalera · Nordelta
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={FV} initial="hidden" animate="visible"
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-[#E8E8ED]">
              <img src="/AD10.jpeg" alt="Altillo con ventana VELUX · Pilar" loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-block bg-white/80 backdrop-blur-sm text-[#1D1D1F] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Altillo · Pilar
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ArquitectosBanner;
