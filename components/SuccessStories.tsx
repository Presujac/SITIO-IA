import React from 'react';
import { SUCCESS_STORIES } from '../constants';

const SuccessStories: React.FC = () => {
  return (
    /* CAMBIO CLAVE: 
       - py-32 (128px) bajó a py-8 (32px) en mobile y py-12 (48px) en desktop.
       - Eliminado border-t si quieres que se vea más fluido con lo de arriba.
    */
    <section id="success-stories" className="py-8 md:py-12 dark:bg-gray-900 bg-white relative overflow-hidden transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título: mb-16 bajó a mb-6 para que las fotos suban */}
        <h2 className="text-3xl md:text-6xl font-[1000] mb-6 md:mb-10 tracking-tighter dark:text-white text-slate-900 uppercase italic">
          Casos de <span className="text-red-600">Éxito.</span>
        </h2>

        {/* Grid: gap-8 bajó a gap-4 en mobile para compactar lateralmente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {SUCCESS_STORIES.map((s) => (
            /* h-[500px] se mantiene como pediste */
            <div key={s.id} className="group relative h-[500px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-xl">
              <img
                src={s.image}
                alt={s.client}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-red-500 font-[1000] uppercase tracking-widest text-[10px] mb-1 italic">
                  {s.client}
                </p>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1 leading-none uppercase italic">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2 italic">
                  "{s.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
