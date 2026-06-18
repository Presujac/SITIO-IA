import React, { useState, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const comparisons = [
  { id: 1, before: '/AD1.jpeg', after: '/AD2.jpeg',  title: 'Living',        location: 'Pilar' },
  { id: 2, before: '/AD3.jpeg', after: '/AD4.jpeg',  title: 'Escalera',      location: 'Nordelta' },
  { id: 3, before: '/AD5.jpeg', after: '/AD6.jpeg',  title: 'Sala de estar', location: 'San Isidro' },
  { id: 4, before: '/AD7.png',  after: '/AD8.jpeg',  title: 'Cocina',        location: 'Vicente López', objectPosition: 'center 70%' },
  { id: 5, before: '/AD9.jpeg', after: '/AD10.jpeg', title: 'Altillo',       location: 'Pilar' },
];

interface PSPair {
  id: number; before: string; after: string;
  title: string; location: string; objectPosition?: string;
}

export const PortraitSlider: React.FC<{
  pair: PSPair;
  index: number;
  aspectRatio?: string;
  className?: string;
}> = ({ pair, index, aspectRatio, className = "" }) => {
  const [val, setVal] = useState(50);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setVal(x);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={["group relative overflow-hidden rounded-3xl cursor-ew-resize select-none bg-slate-900 shadow-2xl", className].join(" ")}
      style={aspectRatio ? { aspectRatio } : undefined}
      ref={ref}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={pair.after} alt={pair.title} draggable={false} loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={pair.objectPosition ? { objectPosition: pair.objectPosition } : undefined} />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - val}% 0 0)` }}>
        <img src={pair.before} alt={pair.title} draggable={false} loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={pair.objectPosition ? { objectPosition: pair.objectPosition } : undefined} />
      </div>

      <div className="absolute inset-y-0 w-[2px] bg-white z-20 pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.5)]"
        style={{ left: `${val}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center ring-4 ring-white/30">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 5h14M1 5L4 2M1 5L4 8M15 5L12 2M15 5L12 8" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <span className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/10">
        Antes
      </span>
      <span className="absolute top-4 right-4 z-10 bg-white text-slate-900 text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
        Después
      </span>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pt-20 pb-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none">
        <span className="block text-[9px] font-black uppercase tracking-[0.35em] text-white/50 mb-1.5">
          {pair.location}
        </span>
        <p className="text-2xl md:text-3xl font-black uppercase italic text-white leading-none tracking-tighter drop-shadow-lg">
          {pair.title}
        </p>
        <div className={["mt-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/60 transition-all duration-300", hovered ? "opacity-100" : "opacity-0"].join(" ")}>
          <div className="w-4 h-[1px] bg-white/40" />
          Deslizá para comparar
        </div>
      </div>
    </motion.div>
  );
};

const ObrasJAC: React.FC = () => (
  <section className="relative w-full bg-slate-50 overflow-hidden py-12 md:py-16">
    <div className="max-w-7xl mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-red-600" />
            <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.45em] italic">Portfolio 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase italic leading-[0.9]">
            Antes & <span className="text-red-600">Después.</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="flex flex-col items-start md:items-end gap-4">
          <p className="text-slate-400 text-sm font-medium max-w-xs md:text-right leading-relaxed">
            Deslizá sobre cada proyecto para ver la transformación.
          </p>
          <a href="https://instagram.com/techosjac" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-slate-900 hover:bg-red-600 text-white pl-6 pr-3 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300">
            Ver en Instagram
            <div className="bg-white/15 group-hover:bg-white/25 p-2 rounded-full transition-all">
              <MoveRight size={14} />
            </div>
          </a>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {comparisons.map((pair, i) => (
          <PortraitSlider key={pair.id} pair={pair} index={i} aspectRatio="3/4" />
        ))}
      </div>
    </div>
  </section>
);

export default ObrasJAC;