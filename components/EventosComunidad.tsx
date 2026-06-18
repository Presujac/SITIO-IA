import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EVENTS = [
  {
    tag: 'Networking · Showroom Pilar Km 40',
    title: 'Networking\nVELUX',
    body: 'Encuentro en nuestro showroom de Pilar. Arquitectos, profesionales y las últimas soluciones VELUX en vivo.',
    photo: '/VELUX.png',
    position: 'object-center',
  },
  {
    tag: 'Evento · Palermo',
    title: 'Tendiendo\nRedes',
    body: 'Más de 150 arquitectos reunidos en el evento de Tendiendo Redes. Estuvimos presentes junto a la comunidad.',
    photo: '/TENDIENDO.JPEG',
    position: 'object-center',
  },
  {
    tag: 'Exposición · Puerto Madero',
    title: 'Expo\nConstruir',
    body: 'Presencia activa en la mayor feria de la industria. Stand VELUX con novedades y especificación técnica.',
    photo: '/EXPO.png',
    position: 'object-top',
  },
];

const EventosComunidad: React.FC = () => (
  <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">

    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)' }} />

    <div className="max-w-7xl mx-auto px-6 md:px-10">

      {/* Header grande */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-5 h-px bg-red-600" />
          <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.55em]">Comunidad · Eventos</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-[1000] uppercase italic tracking-tighter leading-[0.85] text-white">
            Más allá<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #ef4444 30%, #991b1b 100%)' }}>
              del producto.
            </span>
          </h2>
          <p className="text-white/30 text-base font-light max-w-sm md:text-right leading-relaxed pb-2">
            Generamos espacios de encuentro, capacitación e inspiración para la comunidad profesional de arquitectos.
          </p>
        </div>
      </motion.div>

      {/* Cards grandes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {EVENTS.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer flex flex-col"
            style={{ height: '520px' }}>

            <img
              src={ev.photo}
              alt={ev.title.replace('\n', ' ')}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover ${ev.position} transition-transform duration-700 ease-out group-hover:scale-[1.05]`}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-[#0a0a0a]/45 transition-opacity duration-500 group-hover:opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

            {/* Tag */}
            <div className="absolute top-5 left-5 z-10">
              <span className="bg-black/55 backdrop-blur-sm border border-white/10 text-white/50 text-[7px] font-black uppercase tracking-[0.35em] px-3 py-1.5 rounded-full">
                {ev.tag}
              </span>
            </div>

            {/* Arrow hover */}
            <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2.5">
                <ArrowUpRight size={14} className="text-white/80" />
              </div>
            </div>

            {/* Número watermark */}
            <span className="absolute top-4 right-5 text-[7rem] font-[1000] italic leading-none select-none pointer-events-none z-[1]"
              style={{ color: 'rgba(255,255,255,0.04)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-7 pt-20
              bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">
              <h3 className="text-[1.9rem] font-[1000] uppercase italic tracking-tighter leading-[0.88] text-white mb-3 whitespace-pre-line">
                {ev.title}
              </h3>
              <p className="text-white/45 text-sm font-light leading-relaxed transition-colors duration-300 group-hover:text-white/65">
                {ev.body}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

    </div>

    <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />

  </section>
);

export default EventosComunidad;
