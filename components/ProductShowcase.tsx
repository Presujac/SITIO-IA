import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="relative overflow-hidden">

      {/* --- CORTINAS & ACCESORIOS — FULL WIDTH --- */}
      <div className="relative overflow-hidden" style={{ minHeight: 520 }}>

        {/* Transición suave desde arriba */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/60 to-transparent z-10 pointer-events-none" />
        <img
          src="/cortinas.jpg"
          alt="Cortinas y accesorios VELUX"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay muy sutil — solo para leer el texto izquierdo */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.30) 50%, transparent 100%)'
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-10 md:p-16 flex flex-col justify-center gap-8">

            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-white/40" />
              <span className="text-white/45 text-[9px] font-black uppercase tracking-[0.45em]">Accesorios Oficiales VELUX</span>
            </div>

            <div>
              <h3 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter leading-[0.88] mb-4">
                Protegé<br />tu espacio.<br />
                <span className="text-white/65">Controlá la luz.</span>
              </h3>
              <p className="text-white/50 text-sm font-medium leading-relaxed max-w-sm">
                Tenemos todo para completar tu ventana VELUX. Desde cortinas blackout hasta toldos solares con control remoto — diseñados exclusivamente para cada modelo.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🌑", title: "Blackout total",  desc: "Sin filtración de luz" },
                { icon: "☀️", title: "Toldo solar",     desc: "Reduce calor hasta 74%" },
                { icon: "📡", title: "Control remoto",  desc: "Sistema inalámbrico" },
                { icon: "🪟", title: "Mosquitero",       desc: "Con marco integrado" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="text-white text-[11px] font-black uppercase tracking-wide leading-none">{f.title}</p>
                    <p className="text-white/45 text-[10px] mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5491168396459?text=Hola%20JAC!%20Me%20interesan%20las%20cortinas%20y%20accesorios%20VELUX."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white border border-white/15 hover:border-transparent backdrop-blur-sm hover:text-slate-900 text-white pl-7 pr-3 py-3 rounded-full w-fit font-black uppercase text-[10px] tracking-widest transition-all duration-300"
            >
              Ver accesorios disponibles
              <div className="bg-white/15 group-hover:bg-slate-100 p-2.5 rounded-full transition-all">
                <ArrowUpRight size={13} />
              </div>
            </a>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

    </section>
  );
};

export default ProductShowcase;
