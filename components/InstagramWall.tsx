import React from 'react';
import { Instagram, ArrowUpRight, Home, Search, PlusSquare, Heart, User } from 'lucide-react';


const InstagramWallInner: React.FC = () => (
  <section className="relative py-20 md:py-28 bg-white overflow-hidden">

    {/* Fondo decorativo muy sutil */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-pink-50/30 pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* IZQUIERDA — Copy */}
      <div className="flex flex-col gap-8 order-2 lg:order-1">

        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-red-600" />
          <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.45em] italic">Instagram</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[1000] tracking-tighter text-slate-900 uppercase italic leading-[0.88]">
            Sumate a<br />
            nuestra<br />
            <span className="text-red-600">comunidad.</span>
          </h2>
        </div>

        <p className="text-slate-500 text-base font-medium leading-relaxed max-w-sm">
          Más de 2.500 personas siguen nuestros proyectos en tiempo real. Techos, ventanas, instalaciones — todo lo que hacemos, lo mostramos.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-8 py-6 border-y border-slate-100">
          {[
            { val: "28,2K", label: "Seguidores" },
            { val: "400+", label: "Publicaciones" },
            { val: "4K+", label: "Ventanas instaladas" },
          ].map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <div className="w-px h-8 bg-slate-200" />}
              <div>
                <p className="text-2xl font-[1000] text-slate-900 italic tracking-tighter leading-none">{s.val}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-0.5">{s.label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.instagram.com/techosjac"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white pl-6 pr-3 py-3 rounded-full w-fit shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:scale-[1.02] transition-all duration-300"
        >
          <Instagram size={16} />
          <span className="text-[11px] font-black uppercase tracking-widest">Seguir @techosjac</span>
          <div className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all">
            <ArrowUpRight size={13} />
          </div>
        </a>
      </div>

      {/* DERECHA — iPhone mockup */}
      <div className="flex justify-center order-1 lg:order-2">
        <div className="relative">

          {/* Glow de fondo */}
          <div className="absolute -inset-8 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-orange-200/20 rounded-full blur-3xl" />

          {/* Cuerpo del iPhone */}
          <div className="relative w-[260px] md:w-[290px]">
            {/* Marco exterior */}
            <div className="relative bg-[#1a1a1a] rounded-[3rem] p-[3px] shadow-[0_40px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)]">
              {/* Reflejo lateral */}
              <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b from-white/20 via-white/5 to-white/15 rounded-full" />
              <div className="absolute right-0 top-8 bottom-8 w-[3px] bg-gradient-to-b from-white/10 via-white/3 to-white/8 rounded-full" />

              {/* Pantalla completa */}
              <div className="rounded-[2.7rem] overflow-hidden flex flex-col bg-white" style={{ height: 580 }}>

                {/* ── STATUS BAR ── */}
                <div className="bg-white flex items-center justify-between px-5 pt-3 pb-1 flex-shrink-0 z-10">
                  <span className="text-[9px] font-semibold text-slate-900 tabular-nums">9:41</span>
                  {/* Dynamic Island */}
                  <div className="bg-black rounded-full w-[72px] h-[22px]" />
                  {/* Íconos derecha */}
                  <div className="flex items-center gap-[4px]">
                    {/* Señal */}
                    <div className="flex items-end gap-[1.5px] h-[10px]">
                      {[3,5,7,9].map((h,i) => (
                        <div key={i} className="w-[2px] rounded-[1px] bg-slate-900" style={{height: h}} />
                      ))}
                    </div>
                    {/* WiFi */}
                    <svg width="12" height="10" viewBox="0 0 14 11" fill="none">
                      <path d="M7 8.5a1 1 0 110 2 1 1 0 010-2z" fill="#1a1a1a"/>
                      <path d="M4.2 6.3a4 4 0 015.6 0" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"/>
                      <path d="M1.5 3.7a7.5 7.5 0 0111 0" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    {/* Batería */}
                    <div className="flex items-center">
                      <div className="w-[18px] h-[9px] border border-slate-900 rounded-[2px] relative flex items-center px-[1.5px]">
                        <div className="h-[5px] w-[13px] bg-slate-900 rounded-[1px]" />
                      </div>
                      <div className="w-[1.5px] h-[4px] bg-slate-900 rounded-r-sm ml-[1px]" />
                    </div>
                  </div>
                </div>

                {/* ── FOTO DEL PERFIL (ocupa todo el espacio disponible) ── */}
                <div className="flex-1 overflow-hidden">
                  <img
                    src="/officia.jpeg"
                    alt="@techosjac Instagram"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* ── BOTTOM NAV INSTAGRAM ── */}
                <div className="bg-white border-t border-slate-100 flex items-center justify-around px-2 py-2 flex-shrink-0">
                  <button className="flex flex-col items-center gap-0.5 p-2">
                    <Home size={20} strokeWidth={2} className="text-slate-900" />
                  </button>
                  <button className="flex flex-col items-center gap-0.5 p-2">
                    <Search size={20} strokeWidth={2} className="text-slate-400" />
                  </button>
                  <button className="flex flex-col items-center gap-0.5 p-2">
                    <PlusSquare size={20} strokeWidth={2} className="text-slate-400" />
                  </button>
                  <button className="flex flex-col items-center gap-0.5 p-2">
                    <Heart size={20} strokeWidth={2} className="text-slate-400" />
                  </button>
                  <button className="flex flex-col items-center gap-0.5 p-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-slate-900">
                      <img src="/officia.jpeg" alt="" className="w-full h-full object-cover object-top" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Botón lateral derecho */}
            <div className="absolute right-[-4px] top-24 h-14 w-[4px] bg-[#2a2a2a] rounded-full" />
            {/* Botones laterales izquierdos */}
            <div className="absolute left-[-4px] top-20 h-8 w-[4px] bg-[#2a2a2a] rounded-full" />
            <div className="absolute left-[-4px] top-32 h-10 w-[4px] bg-[#2a2a2a] rounded-full" />
            <div className="absolute left-[-4px] top-44 h-10 w-[4px] bg-[#2a2a2a] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InstagramWall = React.memo(InstagramWallInner);
export default InstagramWall;
