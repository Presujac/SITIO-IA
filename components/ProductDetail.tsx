import React, { useState, useEffect } from 'react';
import { Sun, Send, ArrowLeft, ExternalLink, ChevronRight, MessageCircle } from 'lucide-react';
import { ROOF_MODELS, ASSETS, COMPANY_INFO } from '../constants';

interface ProductDetailProps {
  onBack: () => void;
  onContact: () => void;
  onStartWizard: () => void;
}

const CATEGORY_ICONS: Record<string, string> = {
  pivotante:  '↺',
  proyectante:'⟋',
  solar:      '☀',
  fija:       '◻',
  tuneles:    '◎',
  plano:      '⬛',
};

const ProductDetail: React.FC<ProductDetailProps> = ({ onBack, onContact, onStartWizard }) => {
  const [activeTabId, setActiveTabId] = useState(ROOF_MODELS[0].id);
  const [activeVariant, setActiveVariant] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setActiveVariant(0);
  }, [activeTabId]);

  const activeCategory = ROOF_MODELS.find(m => m.id === activeTabId) || ROOF_MODELS[0];
  const variant = activeCategory.variants[activeVariant];

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-20">

      {/* ── HERO HEADER ── */}
      <div className="relative overflow-hidden bg-[#0a0a0a]" style={{ height: '42vh', minHeight: 280 }}>
        <img
          src={ASSETS.productHero}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-10">
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest w-fit"
          >
            <ArrowLeft size={14} strokeWidth={3} /> Volver
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-[2px] bg-red-600" />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em]">Catálogo VELUX</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-[1000] tracking-tighter text-white uppercase italic leading-none">
            {activeCategory.title}
          </h1>
          <p className="text-white/40 text-sm font-medium mt-2 uppercase tracking-wide">
            {activeCategory.subtitle}
          </p>
        </div>
      </div>

      {/* ── STICKY NAV ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 h-14">
            {ROOF_MODELS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-200 ${
                  activeTabId === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="text-[12px]">{CATEGORY_ICONS[cat.id]}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-16">

        {/* ── MEDIDAS ── */}
        {activeCategory.sizes.length > 0 && (
          <div className="mb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-red-600 mb-4">Medidas disponibles</p>
            <div className="flex flex-wrap gap-2">
              {activeCategory.sizes.map((size, i) => (
                <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-black text-slate-700 uppercase tracking-wide">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── SELECTOR DE VARIANTES (si hay más de 1) ── */}
        {activeCategory.variants.length > 1 && (
          <div className="flex gap-3 mb-10">
            {activeCategory.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveVariant(i)}
                className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeVariant === i
                    ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-100'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                }`}
              >
                {v.code} — {v.name}
              </button>
            ))}
          </div>
        )}

        {/* ── TARJETA DE PRODUCTO PRINCIPAL ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">

          {/* IMAGEN */}
          <div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100" style={{ minHeight: 420 }}>
            <img
              src={variant.image}
              alt={variant.name}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute top-5 left-5">
              <span className="bg-red-600 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                Serie {variant.code}
              </span>
            </div>
            <div className="absolute top-5 right-5">
              <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-200">
                Original JAC
              </span>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">

            {/* Nombre + descripción */}
            <div>
              <h2 className="text-4xl md:text-5xl font-[1000] tracking-tighter text-slate-900 italic uppercase leading-none mb-4">
                {variant.name}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed font-medium">
                {variant.description}
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {variant.features.map((f, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all">
                  <p className="text-[8px] font-black uppercase tracking-widest text-red-500 mb-1">{f.title}</p>
                  <p className="text-[12px] font-black text-slate-900 uppercase leading-tight">{f.text}</p>
                </div>
              ))}
            </div>

            {/* Nota técnica */}
            <div className="flex gap-4 bg-slate-900 rounded-2xl p-5 items-start">
              <div className="bg-red-600 p-2 rounded-lg text-white flex-shrink-0 mt-0.5">
                <Sun size={16} />
              </div>
              <div>
                <p className="text-white text-[9px] font-black uppercase tracking-widest mb-1">Nota Técnica</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">{variant.installNote}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onStartWizard}
                className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white pl-7 pr-3 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-red-100 active:scale-95"
              >
                Cotizar este modelo
                <div className="bg-white/20 group-hover:bg-white/30 p-2 rounded-full transition-all">
                  <Send size={12} />
                </div>
              </button>
              <a
                href={COMPANY_INFO.getCustomProductMessage(variant.name)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 bg-white border border-slate-200 hover:border-green-400 text-slate-700 hover:text-green-600 pl-7 pr-3 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all"
              >
                WhatsApp
                <div className="bg-slate-100 group-hover:bg-green-50 p-2 rounded-full transition-all">
                  <MessageCircle size={12} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── OTROS MODELOS DE LA MISMA CATEGORÍA ── */}
        {activeCategory.variants.length > 1 && (
          <div className="mb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Otros modelos en esta categoría</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCategory.variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVariant(i)}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${
                    activeVariant === i
                      ? 'border-red-200 bg-red-50'
                      : 'border-slate-100 hover:border-slate-300 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[9px] font-black uppercase tracking-widest mb-0.5 ${activeVariant === i ? 'text-red-500' : 'text-slate-400'}`}>Serie {v.code}</p>
                    <p className="text-sm font-black text-slate-900 uppercase italic truncate">{v.name}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{v.description.slice(0, 60)}…</p>
                  </div>
                  <ChevronRight size={16} className={`flex-shrink-0 transition-transform ${activeVariant === i ? 'text-red-500 translate-x-1' : 'text-slate-300 group-hover:translate-x-1'}`} />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── NAVEGAR ENTRE CATEGORÍAS ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {ROOF_MODELS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTabId(cat.id)}
              className={`group p-4 rounded-2xl border text-center transition-all duration-200 ${
                activeTabId === cat.id
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-2xl block mb-1">{CATEGORY_ICONS[cat.id]}</span>
              <p className="text-[9px] font-black uppercase tracking-widest leading-tight">{cat.title}</p>
              <p className={`text-[8px] mt-0.5 font-medium leading-tight ${activeTabId === cat.id ? 'text-white/50' : 'text-slate-400'}`}>
                {cat.variants.length} modelo{cat.variants.length > 1 ? 's' : ''}
              </p>
            </button>
          ))}
        </div>

        {/* ── CTA FINAL ── */}
        <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-red-500 mb-3">Garantía Oficial</p>
              <h2 className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter uppercase italic leading-none mb-3">
                10 Años de<br /><span className="text-red-500">respaldo.</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium max-w-sm leading-relaxed">
                Más de 40 años perfeccionando la instalación de luz natural en Argentina.
              </p>
            </div>
            <button
              onClick={onStartWizard}
              className="group flex items-center gap-4 bg-white text-slate-900 hover:bg-red-600 hover:text-white pl-8 pr-3 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all shadow-2xl whitespace-nowrap"
            >
              Iniciar cotización
              <div className="bg-slate-100 group-hover:bg-white/20 p-3 rounded-full transition-all">
                <Send size={14} />
              </div>
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ProductDetail;
