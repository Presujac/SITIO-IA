import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

interface HeroSliderProps {
  onCTA: () => void;
}


const HeroSlider: React.FC<HeroSliderProps> = ({ onCTA }) => {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-black flex items-end md:items-center">

      {/* Foto de fondo — más visible */}
      <img
        src="/2-Ventana-para-Techos-INCLINADOS-04.png"
        alt="Ventana de techo inclinado VELUX instalada por Techos JAC Argentina"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55) saturate(0.85)" }}
      />

      {/* Gradiente: solo izquierda y abajo para leer el texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pb-16 pt-28 md:pt-0">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-[2px] bg-red-600 flex-shrink-0" />
            <span className="text-white/55 text-[9px] font-black uppercase tracking-[0.45em]">
              Representantes Oficiales VELUX · Argentina
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-[1000] text-white uppercase italic leading-[0.9] tracking-tighter mb-3"
          >
            Transformá
            <br />
            tus ambientes
            <br />
            con <span className="text-red-500">luz natural</span>
          </motion.h1>

          {/* Subtag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mb-7 space-y-2"
          >
            <p className="text-white/70 text-[11px] font-black uppercase tracking-[0.45em]">
              Ventanas para techo VELUX · Argentina
            </p>
            <p className="text-white/45 text-[11px] font-medium max-w-sm leading-relaxed">
              Más luz, mejor ventilación y eficiencia energética para cada rincón de tu hogar. Representantes oficiales con instalación certificada.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Magnetic>
              <button
                onClick={onCTA}
                className="group flex items-center gap-4 bg-white text-black pl-8 pr-2 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-2xl"
              >
                <span className="text-[10px] font-black uppercase tracking-widest italic">Conocer nuestras soluciones</span>
                <div className="bg-slate-900 p-3 rounded-full text-white group-hover:bg-white group-hover:text-red-600 transition-all">
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
              </button>
            </Magnetic>
          </motion.div>

          {/* Stats — compactos al fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
          >
            {[["4.000+", "Ventanas"], ["2.500+", "Hogares"], ["40 años", "Experiencia"]].map(([num, label]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-white font-[1000] text-xl md:text-2xl italic leading-none">{num}</span>
                <span className="text-white/35 text-[8px] font-black uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default HeroSlider;

