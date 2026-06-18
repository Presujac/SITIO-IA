import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { useSEO, type SEOMeta } from '../hooks/useSEO';
import type { AppNavigate } from '../App';

export interface ServicePageConfig {
  seo: SEOMeta;
  breadcrumb: string;
  tag: string;
  h1: string;
  subtitle: string;
  models: string[];
  sizes: string[];
  features: { title: string; text: string }[];
  img: string;
  imgAlt: string;
  specs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
}

interface Props {
  config: ServicePageConfig;
  onNavigate: AppNavigate;
}

const ServiceDetailPage: React.FC<Props> = ({ config: c, onNavigate }) => {
  useSEO(c.seo);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-700 transition-colors">Inicio</button>
          <span>/</span>
          <button onClick={() => onNavigate('servicios')} className="hover:text-slate-700 transition-colors">Servicios</button>
          <span>/</span>
          <span className="text-slate-700">{c.breadcrumb}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left: info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">{c.tag}</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-5 leading-none">{c.h1}</h1>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">{c.subtitle}</p>

            {/* Modelos */}
            <div className="flex flex-wrap gap-2 mb-8">
              {c.models.map(m => (
                <span key={m} className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">{m}</span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {c.features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-0.5 flex-shrink-0 bg-green-100 rounded-full p-1">
                    <Check size={12} className="text-green-600" />
                  </div>
                  <div>
                    <span className="font-black text-slate-900 text-sm">{f.title}:</span>{' '}
                    <span className="text-slate-500 text-sm">{f.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/5491168396459?text=Hola%20JAC%2C%20quiero%20cotizar%20${encodeURIComponent(c.breadcrumb)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs px-7 py-4 rounded-full transition-all"
              >
                <Phone size={14} />
                Cotizar por WhatsApp
              </a>
              <button
                onClick={() => onNavigate('home', 'wizard-anchor')}
                className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs px-7 py-4 rounded-full transition-all"
              >
                Configurar con IA
              </button>
            </div>
          </motion.div>

          {/* Right: imagen + specs */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bg-slate-50 rounded-[2rem] p-8 mb-8 flex items-center justify-center min-h-[320px]">
              <img src={c.img} alt={c.imgAlt} className="max-h-72 w-auto object-contain" />
            </div>

            {/* Especificaciones */}
            <div className="grid grid-cols-2 gap-3">
              {c.specs.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
                  <p className="font-black text-slate-900 text-sm">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Medidas */}
            {c.sizes.length > 0 && (
              <div className="mt-4 bg-slate-900 rounded-2xl p-5">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Medidas disponibles</p>
                <div className="flex flex-wrap gap-2">
                  {c.sizes.map(sz => (
                    <span key={sz} className="bg-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">{sz}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* FAQ de la página */}
        {c.faq.length > 0 && (
          <div className="border-t border-slate-100 pt-16">
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 mb-8">Preguntas frecuentes</h2>
            <div className="space-y-6 max-w-3xl">
              {c.faq.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-black text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nav interna a otros servicios */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('servicios')}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={14} />
              Ver todos los servicios
            </button>
            <button
              onClick={() => onNavigate('presupuesto')}
              className="text-xs font-black uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
            >
              Solicitar presupuesto →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailPage;
