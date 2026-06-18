import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, MapPin, Star } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "name": "Quiénes Somos — Techos JAC",
      "url": "https://techosjac.com.ar/nosotros",
      "description": "Techos JAC es importador directo y representante oficial de VELUX en Argentina. Más de 4.000 ventanas instaladas en Pilar, GBA y CABA.",
    },
    {
      "@type": "LocalBusiness",
      "name": "Techos JAC",
      "foundingDate": "2015",
      "description": "Importador directo y representante oficial de VELUX en Argentina. Instalación certificada de ventanas de techo en Pilar, GBA y CABA.",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": "10" },
      "award": "Representante Oficial VELUX Argentina",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
        { "@type": "ListItem", "position": 2, "name": "Nosotros", "item": "https://techosjac.com.ar/nosotros" },
      ],
    },
  ],
};

const STATS = [
  { value: '+4.000', label: 'Ventanas instaladas' },
  { value: '+10 años', label: 'De experiencia' },
  { value: '5/5', label: 'Calificación Google' },
  { value: '100%', label: 'Certificados VELUX' },
];

const NosotrosPage: React.FC<Props> = ({ onNavigate }) => {
  useSEO({
    title: 'Quiénes Somos | Techos JAC — Distribuidor Oficial VELUX Argentina',
    description: 'Conocé a Techos JAC: importador directo y representante oficial de VELUX en Argentina. Más de 4.000 ventanas instaladas en Pilar, GBA y CABA. Certificados directamente por VELUX.',
    canonical: 'https://techosjac.com.ar/nosotros',
    schema,
  });

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-700 transition-colors">Inicio</button>
          <span>/</span>
          <span className="text-slate-700">Nosotros</span>
        </nav>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">Representante Oficial VELUX</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-none max-w-4xl">
            Más de una década transformando espacios con luz natural
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Somos Techos JAC: importadores directos de VELUX en Argentina. Nuestro equipo está certificado por VELUX,
            y cada instalación incluye garantía de fábrica sin intermediarios.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-black text-white mb-1">{s.value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Historia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-5">Nuestra historia</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Techos JAC nació con un objetivo claro: acercar al mercado argentino la mejor tecnología en
                ventanas de techo del mundo, directamente de fábrica y con instalación certificada.
              </p>
              <p>
                Somos <strong className="text-slate-900">importadores directos</strong> de VELUX en Argentina,
                lo que nos permite ofrecer precios competitivos sin la cadena de intermediarios que infla el
                costo final del producto.
              </p>
              <p>
                Cada miembro de nuestro equipo de instalación pasó por la certificación técnica oficial de VELUX.
                No trabajamos con subcontratistas: el mismo equipo que te asesora es el que instala tu ventana.
              </p>
              <p>
                Atendemos proyectos en <strong className="text-slate-900">Pilar, GBA Norte, Sur, Oeste y CABA</strong>.
                Para el interior del país enviamos con embalaje reforzado a todo el territorio argentino.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="space-y-4">
            {[
              { Icon: Award, title: 'Representante oficial VELUX', text: 'Únicos importadores directos de VELUX con stock propio en Argentina. Garantía de fábrica en cada producto.' },
              { Icon: Users, title: 'Equipo certificado', text: 'Instaladores certificados directamente por VELUX. Sin subcontratistas. El mismo equipo de punta a punta.' },
              { Icon: MapPin, title: 'Cobertura en todo GBA', text: 'Pilar, GBA Norte, Sur, Oeste y CABA. Envíos a todo el país con embalaje reforzado y seguimiento.' },
              { Icon: Star, title: '5/5 en Google', text: 'Más de 80 reseñas verificadas con calificación perfecta. Clientes de proyectos residenciales y comerciales.' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-4 bg-slate-50 rounded-2xl p-5">
                <div className="bg-white rounded-xl p-2.5 h-fit">
                  <Icon size={16} className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-[2rem] p-10 md:p-16 text-center">
          <h3 className="text-3xl font-black text-white tracking-tighter mb-4">¿Querés trabajar con nosotros?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Arquitectos, constructoras y desarrolladores: tenemos precios especiales por volumen y soporte técnico dedicado.</p>
          <button
            onClick={() => onNavigate('contacto')}
            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-full transition-all"
          >
            Contactar al equipo
          </button>
        </div>

      </div>
    </div>
  );
};

export default NosotrosPage;
