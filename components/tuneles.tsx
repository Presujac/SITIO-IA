import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  { n: '01', src: '/tunel2.jpeg', label: 'Cúpula exterior',   desc: 'Capta luz solar directa e indirecta desde la cubierta.' },
  { n: '02', src: '/tunel6.jpg',  label: 'Tubo reflectante',  desc: 'Interior pulido transporta luz sin pérdida por la losa.' },
  { n: '03', src: '/tunel5.jpg',  label: 'Difusor interior',  desc: 'Plafón distribuye luz suave y uniforme en el ambiente.'  },
];

const STATS = [
  { val: '0 W',  label: 'Consumo eléctrico' },
  { val: '98%',  label: 'Eficiencia lumínica' },
  { val: 'Sin obra', label: 'Instalación limpia' },
];

const Tuneles = () => {
  const handleWhatsApp = () => {
    const msg = '¡Hola Techos JAC! Me interesa recibir información sobre los Túneles Solares.';
    window.open('https://wa.me/5491168396459?text=' + encodeURIComponent(msg), '_blank');
  };

  return (
    <section className="bg-slate-50 overflow-hidden">

      {/* IMAGEN PRINCIPAL — full ancho */}
      <div className="relative w-full overflow-hidden" style={{ height: '55vh', minHeight: 340, maxHeight: 520 }}>
        <img
          src="/tunel3.jpg"
          alt="Túnel solar VELUX instalado"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay gradiente de abajo hacia arriba para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        {/* Tag arriba izquierda */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-3">
          <div className="w-6 h-[2px] bg-red-500" />
          <span className="text-white text-[9px] font-black uppercase tracking-[0.5em] drop-shadow">Ingeniería de luz natural</span>
        </div>
      </div>

      {/* CONTENIDO — debajo de la imagen */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 -mt-2">

        {/* Título + descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-slate-900 uppercase italic">
            Túneles<br /><span className="text-red-600">Solares.</span>
          </h2>
          <div className="max-w-sm md:text-right">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-5">
              Luz natural donde antes no llegaba. Pasillos, baños y vestidores iluminados sin obra y sin electricidad.
            </p>
            <button
              onClick={handleWhatsApp}
              className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-red-600 text-white pl-6 pr-3 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300"
            >
              Consultar ahora
              <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </motion.div>

        {/* 3 FOTOS DE PROCESO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group"
            >
              {/* Foto */}
              <div className="relative rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
                <img
                  src={step.src}
                  alt={step.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Número flotante */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                  <span className="text-[9px] font-black text-slate-900 tracking-tight">{step.n}</span>
                </div>
              </div>
              {/* Info */}
              <h3 className="text-base font-black uppercase italic tracking-tight text-slate-900 mb-1">{step.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* STATS + separador */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-10 md:gap-16">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-black italic tracking-tighter text-slate-900 leading-none">{s.val}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 hidden md:block">
            VELUX · Túneles Solares · Argentina
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Tuneles;