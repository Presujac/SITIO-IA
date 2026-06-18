import React from 'react';

const ITEMS = [
  "📦 Envíos a todo el país 🇦🇷",
  "✅ Representantes Oficiales VELUX",
  "📦 Envíos a todo el país 🇦🇷",
  "✅ Representantes Oficiales VELUX",
  "📦 Envíos a todo el país 🇦🇷",
  "✅ Representantes Oficiales VELUX",
  "📦 Envíos a todo el país 🇦🇷",
  "✅ Representantes Oficiales VELUX",
];

const ShippingBanner: React.FC = () => (
  <div className="relative w-full bg-white overflow-hidden z-40 border-b border-slate-100">
    {/* Shimmer sweep */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(105deg, transparent 40%, rgba(220,38,38,0.04) 50%, transparent 60%)',
        animation: 'shimmer 4s ease-in-out infinite',
      }}
    />

    <div
      className="flex whitespace-nowrap py-2.5"
      style={{ animation: 'marquee 36s linear infinite', width: 'max-content' }}
    >
      {ITEMS.concat(ITEMS).map((item, i) => (
        <span key={i} className="inline-flex items-center text-[9px] font-black uppercase tracking-[0.4em] px-10 text-slate-500">
          {item}
          <span className="ml-10 text-slate-200">·</span>
        </span>
      ))}
    </div>

    <style>{`
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes shimmer {
        0%   { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }
    `}</style>
  </div>
);

export default ShippingBanner;
