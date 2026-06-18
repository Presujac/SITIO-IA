import React, { useState } from 'react';

const fd = [
  { question: "¿Cuánto cuesta una ventana de techo VELUX en Argentina?", answer: "El precio varía según el modelo, tamaño y tipo de apertura (fija, pivotante, proyectante o solar). Somos importadores directos, por lo que ofrecemos los precios más competitivos del mercado con garantía de fábrica VELUX. Escribinos por WhatsApp y te cotizamos sin cargo en el día." },
  { question: "¿Instalan ventanas VELUX en Pilar, GBA y CABA?", answer: "Sí, instalamos ventanas de techo VELUX en Pilar, GBA Norte, GBA Sur, GBA Oeste y CABA. Nuestra oficina está en Oficina Work Pilar, Buenos Aires. También enviamos a todo el país con embalaje reforzado y seguimiento." },
  { question: "¿Son importadores directos y representantes oficiales de VELUX?", answer: "Sí, Techos JAC es importador directo y representante oficial de VELUX en Argentina. Cada ventana incluye garantía de fábrica original, sin intermediarios. Somos el canal autorizado con mayor trayectoria en el país." },
  { question: "¿Las ventanas VELUX se instalan en techo de chapa o teja?", answer: "Sí. Las ventanas de techo VELUX se instalan en techos de chapa y teja utilizando kits de tapajuntas específicos para cada tipo de cubierta. Esto garantiza estanqueidad total y evita filtraciones." },
  { question: "¿Se pueden motorizar las ventanas de techo VELUX?", answer: "Sí. VELUX ofrece modelos con motorización solar (sin cables, completamente autónomos) y eléctrica. Ambos se controlan con el mando KLR 200 e incluyen sensor de lluvia que cierra la ventana automáticamente ante la lluvia." },
  { question: "¿Cuánto tarda la instalación de una ventana VELUX?", answer: "La instalación de una ventana de techo VELUX se realiza generalmente en un solo día. Nuestros técnicos están certificados directamente por VELUX y trabajan sin subcontratistas, garantizando calidad y prolijidad en cada obra." },
  { question: "¿Cómo solicito un presupuesto?", answer: "Podés enviarnos las medidas aproximadas y fotos del espacio a intervenir. Te asesoraremos y prepararemos una propuesta acorde a tu proyecto." },
];

const FAQ: React.FC = () => {
  const [oi, setOi] = useState<number | null>(0);
  const tf = (i: number) => {
    setOi(oi === i ? null : i);
  };

  return (
    /* Reducido py-24 a py-10 en móvil y py-16 en escritorio */
    <section id="faq" className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Luces de fondo - Ajustadas para ocupar menos espacio visual */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-25 pointer-events-none">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-12 w-48 h-48 bg-red-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Reducido mb-16 a mb-8 */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-0.5 px-2 rounded-full bg-red-100 text-red-700 text-[10px] font-black tracking-wider uppercase mb-2 italic">
            Soporte y Dudas
          </span>
          <h2 className="text-3xl font-[1000] text-gray-900 tracking-tighter sm:text-5xl mb-2 uppercase italic">
            Preguntas <span className="text-red-600">Frecuentes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-500 font-bold italic leading-tight">
            Resolvemos las inquietudes más comunes sobre instalaciones y productos.
          </p>
        </div>

        {/* Lista: Espaciado reducido de space-y-4 a space-y-2 */}
        <div className="space-y-2 md:space-y-3">
          {fd.map((it, idx) => (
            <div 
              key={idx} 
              className={`group border border-gray-100 rounded-2xl transition-all duration-300 ${
                oi === idx 
                  ? 'bg-white shadow-xl ring-1 ring-red-500/20 border-red-500' 
                  : 'bg-white hover:border-red-100'
              }`}
            >
              <button 
                onClick={() => tf(idx)} 
                /* Padding reducido de p-8 a p-4 en móvil y p-6 en escritorio */
                className="w-full flex justify-between items-center p-4 md:p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-black transition-colors ${
                    oi === idx ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-400 group-hover:bg-red-50 group-hover:text-red-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className={`text-base md:text-lg font-[1000] uppercase italic tracking-tight leading-tight transition-colors ${
                    oi === idx ? 'text-slate-900' : 'text-gray-700 group-hover:text-red-700'
                  }`}>
                    {it.question.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 p-1.5 rounded-full ${
                  oi === idx 
                    ? 'transform rotate-180 bg-red-50 text-red-600' 
                    : 'bg-gray-50 text-gray-300 group-hover:text-red-400'
                }`}>
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                oi === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {/* Padding interno del contenido reducido */}
                <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0">
                  <div className="h-px w-full bg-gray-50 mb-4"></div>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base font-bold italic">
                    {it.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;