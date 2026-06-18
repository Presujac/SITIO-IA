import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Wind, Square, Maximize2, Circle, Zap } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import type { AppNavigate } from '../App';

interface Props {
  onNavigate: AppNavigate;
}

const SERVICES = [
  {
    view: 'servicios/ventanas-pivotantes' as const,
    icon: Wind,
    title: 'Ventanas Pivotantes',
    models: 'GGL · GGU',
    desc: 'Apertura central de 15° a 90°. Disponibles en madera y poliuretano resistente a la intemperie.',
    img: '/GGL-FULL-1.png',
    keyword: 'Ideal para habitaciones y estudios',
  },
  {
    view: 'servicios/ventanas-proyectantes' as const,
    icon: Maximize2,
    title: 'Ventanas Proyectantes',
    models: 'GPL',
    desc: 'Apertura de 45°, máximas vistas panorámicas y flujo de aire superior.',
    img: '/GPL-FULL.png',
    keyword: 'Vistas despejadas al exterior',
  },
  {
    view: 'servicios/ventanas-solares' as const,
    icon: Sun,
    title: 'Ventanas Solares',
    models: 'VSS',
    desc: 'Motorización solar autónoma con sensor de lluvia y mando a distancia. Sin obra eléctrica.',
    img: '/solar-e1633054424707.png',
    keyword: 'Cero consumo eléctrico adicional',
  },
  {
    view: 'servicios/ventanas-fijas' as const,
    icon: Square,
    title: 'Ventanas Fijas',
    models: 'FS',
    desc: 'Solo luz cenital, sin apertura. Mejor precio del catálogo. Vidrio de control solar UV.',
    img: '/fija-e1633054439171.png',
    keyword: 'Máxima luz al menor costo',
  },
  {
    view: 'servicios/techo-plano' as const,
    icon: Circle,
    title: 'Techo Plano',
    models: 'CFP · CVP',
    desc: 'Cúpula acrílica para cubiertas planas. Dimensiones de 60x60 hasta 120x120 cm.',
    img: '/CFP.jpg',
    keyword: 'Solución para losas y terrazas',
  },
  {
    view: 'servicios/tuneles-solares' as const,
    icon: Zap,
    title: 'Túneles Solares',
    models: 'TWR · TWF',
    desc: 'Iluminación natural sin obra mayor. Rígido o flexible. 35 cm de diámetro estándar.',
    img: '/TWR-1.jpg',
    keyword: 'Luz donde no llega una ventana',
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Servicios de Ventanas de Techo VELUX — Techos JAC",
  "url": "https://techosjac.com.ar/servicios",
  "itemListElement": SERVICES.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": s.title,
    "url": `https://techosjac.com.ar/${s.view}`,
  })),
};

const ServiciosPage: React.FC<Props> = ({ onNavigate }) => {
  useSEO({
    title: 'Servicios de Ventanas de Techo VELUX en Argentina | Techos JAC',
    description: 'Conocé todos los servicios de Techos JAC: ventanas pivotantes, solares, fijas, proyectantes, techo plano y túneles solares VELUX. Distribuidor oficial en Argentina.',
    canonical: 'https://techosjac.com.ar/servicios',
    ogImage: 'https://techosjac.com.ar/GGL-FULL-1.png',
    schema,
  });

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-700 transition-colors">Inicio</button>
          <span>/</span>
          <span className="text-slate-700">Servicios</span>
        </nav>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">Catálogo completo</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-5 leading-none">
            Servicios y<br />Productos VELUX
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Somos importadores directos y representantes oficiales de VELUX en Argentina.
            Cada modelo tiene su solución específica para tu tipo de techo.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.button
                key={s.view}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => onNavigate(s.view)}
                className="group text-left bg-slate-50 hover:bg-slate-900 rounded-[2rem] p-6 transition-all duration-500 border border-slate-100 hover:border-slate-900"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white group-hover:bg-red-600 rounded-2xl p-3 transition-colors duration-300">
                    <Icon size={20} className="text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-500 mt-1">{s.models}</span>
                </div>

                <div className="aspect-video relative overflow-hidden rounded-2xl mb-5 bg-white">
                  <img src={s.img} alt={`${s.title} VELUX`} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>

                <h2 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-white mb-2 transition-colors">{s.title}</h2>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 mb-4 transition-colors leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-green-600 group-hover:text-green-400">{s.keyword}</span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="bg-slate-900 rounded-[2rem] p-10 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">¿No sabés qué modelo elegir?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Usá nuestro configurador con IA o escribinos por WhatsApp — te asesoramos sin cargo en el día.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home', 'wizard-anchor')}
              className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-all"
            >
              Configurar mi ventana
            </button>
            <a
              href="https://wa.me/5491168396459?text=Hola%20Techos%20JAC%2C%20quisiera%20asesorarme%20sobre%20ventanas%20VELUX"
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-all border border-white/20"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiciosPage;
