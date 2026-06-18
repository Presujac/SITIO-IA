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

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={["group relative overflow-hidden rounded-2xl cursor-ew-resize select-none bg-slate-950", className].join(" ")}
      style={aspectRatio ? { aspectRatio } : undefined}
      ref={ref}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* After image */}
      <img src={pair.after} alt={pair.title} draggable={false} loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        style={pair.objectPosition ? { objectPosition: pair.objectPosition } : undefined} />

      {/* Before image */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - val}% 0 0)` }}>
        <img src={pair.before} alt={pair.title} draggable={false} loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={pair.objectPosition ? { objectPosition: pair.objectPosition } : undefined} />
        <div className="absolute inset-0 bg-slate-900/25 mix-blend-multiply" />
      </div>

      {/* Glowing divider */}
      <div
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{ left: `${val}%`, transform: 'translateX(-50%)' }}
      >
        <div className="h-full w-[1.5px] bg-white/90 shadow-[0_0_8px_2px_rgba(255,255,255,0.5),0_0_24px_6px_rgba(255,255,255,0.2)]" />
        <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-[0_0_0_5px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] transition-transform duration-200 ${hovered ? 'scale-115' : 'scale-100'}`}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M1 6h16M1 6L5 2M1 6L5 10M17 6L13 2M17 6L13 10" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className={`absolute top-3.5 left-3.5 z-10 bg-black/65 backdrop-blur-sm text-white text-[7px] font-black uppercase tracking-[0.28em] px-2.5 py-1 rounded-full border border-white/10 transition-opacity duration-300 ${val > 12 ? 'opacity-100' : 'opacity-0'}`}>
        Antes
      </span>
      <span className={`absolute top-3.5 right-3.5 z-10 bg-white/90 backdrop-blur-sm text-slate-900 text-[7px] font-black uppercase tracking-[0.28em] px-2.5 py-1 rounded-full transition-opacity duration-300 ${val < 88 ? 'opacity-100' : 'opacity-0'}`}>
        Después
      </span>

      {/* Large watermark number */}
      <span className="absolute -top-2 right-2 z-[5] text-[5rem] font-[1000] text-white/[0.04] leading-none select-none pointer-events-none italic tracking-tighter">
        {num}
      </span>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pt-16 pb-4 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
        <div className="flex items-end justify-between">
          <div>
            <span className="block text-[8px] font-black uppercase tracking-[0.42em] text-red-500/70 mb-1">
              {pair.location}
            </span>
            <p className="text-xl font-[1000] uppercase italic text-white leading-none tracking-tighter">
              {pair.title}
            </p>
          </div>
          <div className={`transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-[7px] font-black uppercase tracking-widest text-white/60 flex items-center gap-1.5">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 4h6M4 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Deslizá
            </div>
          </div>
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