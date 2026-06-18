import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const PROJECTS = [
  { img: '/cabrio2.jpg', title: 'Altillo convertido en estudio', location: 'Pilar, Buenos Aires', model: 'GGL Pivotante' },
  { img: '/ventana_inclinados.png', title: 'Living con luz cenital', location: 'CABA', model: 'GGL Pivotante 114×140' },
  { img: '/techos_inclinados.png', title: 'Renovación de techo a dos aguas', location: 'GBA Norte', model: 'GGU Pivotante' },
  { img: '/solar-e1633054424707.png', title: 'Motorización solar en dormitorio principal', location: 'Nordelta', model: 'VSS Solar' },
  { img: '/GPL-FULL.png', title: 'Ventana proyectante panorámica', location: 'San Isidro', model: 'GPL Proyectante' },
  { img: '/CFP.jpg', title: 'Cúpula en terraza loft', location: 'CABA Palermo', model: 'CFP Techo Plano' },
  { img: '/TWR-1.jpg', title: 'Túnel solar en baño interior', location: 'GBA Oeste', model: 'TWR Túnel rígido' },
  { img: '/TWF.jpg', title: 'Luz natural en pasillo sin ventanas', location: 'Pilar', model: 'TWF Túnel flexible' },
  { img: '/CVP-1.jpg', title: 'Apertura en techo plano de oficinas', location: 'Microcentro CABA', model: 'CVP Techo Plano' },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Galería de Proyectos — Instalaciones VELUX por Techos JAC",
  "url": "https://techosjac.com.ar/galeria",
  "description": "Galería de instalaciones de ventanas de techo VELUX realizadas por Techos JAC en Argentina. Proyectos residenciales y comerciales en Pilar, GBA y CABA.",
};

const GaleriaPage: React.FC<Props> = ({ onNavigate }) => {
  const [selected, setSelected] = useState<number | null>(null);

  useSEO({
    title: 'Galería de Proyectos | Instalaciones VELUX — Techos JAC Argentina',
    description: 'Galería de proyectos de ventanas de techo VELUX instaladas por Techos JAC en Argentina. Residencias, estudios y espacios comerciales en Pilar, GBA y CABA.',
    canonical: 'https://techosjac.com.ar/galeria',
    ogImage: 'https://techosjac.com.ar/cabrio2.jpg',
    schema,
  });

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-700 transition-colors">Inicio</button>
          <span>/</span>
          <span className="text-slate-700">Galería</span>
        </nav>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">Proyectos realizados</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-5 leading-none">Galería</h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Más de 4.000 instalaciones. Acá mostramos una selección de proyectos residenciales y comerciales en Argentina.
          </p>
        </motion.div>

        {/* Grid masonry-style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setSelected(i)}
              className="break-inside-avoid cursor-pointer group rounded-2xl overflow-hidden relative bg-slate-100"
            >
              <img
                src={p.img}
                alt={`${p.title} — ${p.model} instalado en ${p.location}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-black text-sm">{p.title}</p>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest">{p.model} · {p.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden"
              >
                <img src={PROJECTS[selected].img} alt={PROJECTS[selected].title} className="w-full object-cover max-h-[70vh]" />
                <div className="p-6">
                  <p className="font-black text-slate-900 text-lg">{PROJECTS[selected].title}</p>
                  <p className="text-slate-500 text-sm">{PROJECTS[selected].model} · {PROJECTS[selected].location}</p>
                </div>
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black transition-colors">
                  <X size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">¿Querés tu proyecto en nuestra galería?</p>
          <button
            onClick={() => onNavigate('presupuesto')}
            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-full transition-all"
          >
            Solicitar presupuesto
          </button>
        </div>

      </div>
    </div>
  );
};

export default GaleriaPage;
