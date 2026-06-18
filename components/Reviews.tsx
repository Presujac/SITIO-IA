import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: "Martina Rodríguez",
    initials: "MR",
    color: "#4285F4",
    stars: 5,
    date: "hace 2 semanas",
    text: "Excelente servicio de principio a fin. Instalaron dos ventanas VELUX en nuestro living y el resultado es increíble. Mucha luz, sin filtraciones. El equipo fue muy prolijo y puntual.",
  },
  {
    name: "Gonzalo Pereyra",
    initials: "GP",
    color: "#EA4335",
    stars: 5,
    date: "hace 1 mes",
    text: "Compramos un túnel solar para el baño que no tenía ventanas. La diferencia es brutal. Ya no necesitamos luz artificial durante el día. 100% recomendados, muy profesionales.",
  },
  {
    name: "Sofía Blanco",
    initials: "SB",
    color: "#34A853",
    stars: 5,
    date: "hace 3 semanas",
    text: "Contraté a JAC para el proyecto de mi estudio. Instalaron ventanas pivotantes en el techo y transformaron completamente el espacio. Atención personalizada y producto de primera calidad.",
  },
  {
    name: "Ricardo Mansilla",
    initials: "RM",
    color: "#FBBC04",
    stars: 5,
    date: "hace 2 meses",
    text: "Muy buena experiencia. Me asesoraron perfectamente sobre qué modelo se adaptaba a mi techo. La instalación fue rápida y sin obras. Los recomiendo sin dudarlo.",
  },
  {
    name: "Carolina Vega",
    initials: "CV",
    color: "#9C27B0",
    stars: 5,
    date: "hace 3 meses",
    text: "Instalaron ventanas VELUX en nuestra cocina y el ambiente cambió totalmente. Entran muchísima luz y aire. El equipo fue muy cuidadoso con los terminados. Excelentes profesionales.",
  },
  {
    name: "Diego Ferreyra",
    initials: "DF",
    color: "#FF5722",
    stars: 5,
    date: "hace 1 mes",
    text: "Tercera vez que trabajo con JAC. Siempre la misma calidad y seriedad. Esta vez instalamos el sistema de cortinas blackout y quedó perfecto. Canal oficial VELUX de confianza.",
  },
  {
    name: "Luciana Torres",
    initials: "LT",
    color: "#00BCD4",
    stars: 5,
    date: "hace 6 días",
    text: "Desde la consulta hasta la instalación todo fue impecable. Me explicaron todo el proceso, los plazos y el presupuesto fue claro desde el principio. Muy recomendables.",
  },
  {
    name: "Matías Herrera",
    initials: "MH",
    color: "#607D8B",
    stars: 5,
    date: "hace 5 meses",
    text: "Compramos las ventanas para techo plano y quedamos encantados. Buena relación calidad-precio y la garantía de 10 años nos dio mucha tranquilidad. Excelente empresa.",
  },
];

const Stars = React.memo(() => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
));

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.45em] italic">Reseñas verificadas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-[1000] tracking-tighter text-slate-900 uppercase italic leading-none">
              Lo que dicen<br />nuestros <span className="text-red-600">clientes.</span>
            </h2>
          </motion.div>

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4"
          >
            {/* Google G */}
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-[1000] text-slate-900 leading-none">5.0</span>
                <Stars />
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-0.5">+80 reseñas en Google</p>
            </div>
          </motion.div>
        </div>

        {/* SCROLL HORIZONTAL */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex-shrink-0 w-[300px] bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header reseña */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-black text-slate-900 leading-none truncate">{r.name}</p>
                  <p className="text-[9px] text-slate-400 font-medium mt-0.5">{r.date}</p>
                </div>
                {/* Google G pequeño */}
                <svg className="ml-auto flex-shrink-0" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <Stars />

              <p className="text-slate-600 text-[12px] leading-relaxed mt-3 font-medium">
                "{r.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hint deslizar */}
        <p className="text-center text-[9px] font-black uppercase tracking-widest text-slate-300 mt-4">
          Deslizá para ver más →
        </p>
      </div>
    </section>
  );
};

export default React.memo(Reviews);
