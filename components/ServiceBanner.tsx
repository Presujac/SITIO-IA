import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    number: "01",
    title: "Importadores\nDirectos VELUX",
    desc: "Representantes oficiales VELUX en Argentina. Ventana original con garantía de fábrica y precio directo al público.",
  },
  {
    number: "02",
    title: "Envíos a todo\nel país",
    desc: "Instalamos en Pilar, todo el GBA y CABA. Enviamos a todo el país con embalaje reforzado certificado.",
  },
  {
    number: "03",
    title: "Instalación\nCertificada VELUX",
    desc: "Técnicos certificados por VELUX. Sin subcontratistas. Más de 4.000 ventanas instaladas en Argentina.",
  },
];

const ServiceBanner: React.FC = () => (
  <section className="relative w-full overflow-hidden" style={{ minHeight: 620 }}>

    {/* Foto de fondo — mucho más visible */}
    <img
      src="/logistica1.jpg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      style={{ filter: 'brightness(0.55) saturate(0.9)' }}
    />

    {/* Gradiente direccional — oscuro a la izquierda, transparente a la derecha */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

      {/* TAG */}
      <motion.div
        className="flex items-center gap-3 mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-6 h-[2px] bg-red-500" />
        <span className="text-red-400 text-[9px] font-black uppercase tracking-[0.5em]">Servicio completo · Buenos Aires · Argentina</span>
      </motion.div>

      {/* HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <h2 className="text-5xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.88] text-white mb-6">
          Distribuimos<br />
          <span className="text-red-500">&amp; Colocamos.</span>
        </h2>
        <p className="text-white/75 text-base md:text-lg font-medium max-w-xl leading-relaxed">
          Un solo equipo que hace todo — desde el producto original VELUX hasta la instalación certificada en tu hogar. Sin vueltas.
        </p>
      </motion.div>

      {/* PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {PILLARS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl p-7 border border-white/15 bg-white/8 backdrop-blur-sm hover:bg-white/14 hover:border-red-500/50 transition-all duration-400 overflow-hidden"
          >
            <span className="absolute -top-3 -right-2 text-8xl font-[1000] text-white/5 italic pointer-events-none select-none leading-none">
              {p.number}
            </span>
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-[0.45em] text-red-400 mb-4 block">{p.number}</span>
              <h3 className="text-xl md:text-2xl font-[1000] text-white uppercase italic tracking-tight leading-tight mb-3 whitespace-pre-line">
                {p.title}
              </h3>
              <p className="text-white/65 text-sm font-medium leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pt-10 border-t border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h3 className="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter text-white leading-[0.9] mb-4">
            La ventana correcta,{' '}
            <span className="relative inline-block">
              instalada
              <motion.span
                className="absolute bottom-0.5 left-0 h-[3px] bg-red-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
              />
            </span>{' '}
            <span className="text-red-500">correctamente.</span>
          </h3>
          <p className="text-white/60 text-sm font-medium max-w-md leading-relaxed">
            Sin intermediarios. Sin sorpresas. Con garantía oficial de 10 años y más de 4.000 instalaciones en Argentina.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          {['VELUX Oficial', 'Garantía 10 años', 'Envíos al país'].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-white/12 border border-white/20 rounded-full text-[9px] font-black uppercase tracking-widest text-white/85 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default ServiceBanner;