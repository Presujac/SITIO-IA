import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { schemaFAQ, schemaBreadcrumb } from '../seo/schemas';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }
interface FaqItem { category: string; question: string; answer: string; }

const _sl = String.fromCharCode(47);
const _ds = _sl + _sl;
const BASE = 'https:' + _ds + 'techosjac.com.ar';
const WA = 'https:' + _ds + 'wa.me' + _sl + '5491168396459?text=Hola%20Techos%20JAC';

const schemaData = { '@graph': [schemaFAQ, schemaBreadcrumb([{ name: 'Inicio', url: _sl }, { name: 'Preguntas Frecuentes', url: _sl + 'preguntas-frecuentes' }])] };

const FAQS: FaqItem[] = [
  { category: 'General', question: 'Que es una ventana de techo VELUX?', answer: 'Una ventana de techo VELUX aporta hasta un 40% mas de luz natural que una ventana de pared. VELUX es lider mundial desde 1942. Techos JAC es distribuidor oficial e importador directo en Argentina.' },
  { category: 'General', question: 'Que diferencia hay entre una claraboya y una ventana VELUX?', answer: 'Una claraboya es generalmente fija y sin aislamiento termico. Una ventana VELUX es practicable, tiene doble vidrio aislante, puede motorizarse, y tiene 10 anos de garantia de fabrica.' },
  { category: 'General', question: 'Son importadores directos y representantes oficiales de VELUX?', answer: 'Si, Techos JAC es importador directo y representante oficial de VELUX en Argentina. Cada ventana incluye garantia de fabrica original, sin intermediarios.' },
  { category: 'General', question: 'Donde instalan ventanas VELUX en Argentina?', answer: 'Instalamos en Pilar, toda la zona del Gran Buenos Aires (GBA Norte, GBA Sur, GBA Oeste) y la Ciudad Autonoma de Buenos Aires (CABA).' },
  { category: 'Instalacion', question: 'Cual es el angulo minimo para techo inclinado?', answer: 'El angulo minimo es de 15 grados. Para inclinaciones menores, VELUX tiene soluciones especificas de techo plano. Techos JAC evalua tu techo sin cargo.' },
  { category: 'Instalacion', question: 'Se puede instalar una ventana VELUX en techo plano?', answer: 'Si. VELUX tiene una linea especifica para techo plano (0 a 15 grados) con cupula acrilica o vidrio plano, fija o con apertura.' },
  { category: 'Instalacion', question: 'Las ventanas VELUX se instalan en techo de chapa o teja?', answer: 'Si. Se instalan utilizando kits de tapajuntas (flashings) especificos para cada tipo de cubierta. Esto garantiza estanqueidad total.' },
  { category: 'Instalacion', question: 'Cuanto tarda la instalacion de una ventana VELUX?', answer: 'Entre 4 y 8 horas para una ventana estandar. Trabajos con impermeabilizacion adicional pueden requerir un dia completo.' },
  { category: 'Impermeabilizacion', question: 'Las ventanas VELUX son impermeables?', answer: 'Si. Con instalacion certificada y flashings originales VELUX, la estanqueidad esta garantizada.' },
  { category: 'Impermeabilizacion', question: 'Que pasa si hay goteras despues de la instalacion?', answer: 'Con instalacion certificada Techos JAC y flashings originales VELUX, las goteras no ocurren. Cualquier problema lo resolvemos sin cargo.' },
  { category: 'Garantia', question: 'Cuanto dura la garantia de una ventana VELUX en Argentina?', answer: 'Las ventanas VELUX tienen 10 anos de garantia en el producto y 5 anos en instalacion cuando la realiza un instalador certificado VELUX.' },
  { category: 'Garantia', question: 'Se pueden motorizar las ventanas de techo VELUX?', answer: 'Si. VELUX ofrece modelos con motorizacion solar (sin cables) y electrica. Ambos incluyen sensor de lluvia que cierra la ventana automaticamente.' },
  { category: 'Tuneles Solares', question: 'Que es un tunel solar VELUX?', answer: 'Un tunel solar capta luz natural desde el techo y la conduce mediante un tubo reflectante hasta un difusor en el cielorraso. Sin consumo electrico, sin obra mayor.' },
  { category: 'Tuneles Solares', question: 'Funciona en dias nublados?', answer: 'Si. Los tuneles solares funcionan con luz difusa. En dias muy nublados la intensidad es menor pero siempre aportan luz natural durante el dia.' },
  { category: 'Precios', question: 'Cuanto cuesta instalar una ventana de techo VELUX en Argentina?', answer: 'El precio varia segun el modelo, tamano, tipo de techo y accesorios. Techos JAC ofrece cotizaciones sin cargo y sin compromiso.' },
];

const CATS = [...new Set(FAQS.map(item => item.category))];
const ce = React.createElement;

const PreguntasFrecuentesPage: React.FC<Props> = ({ onNavigate }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useSEO({
    title: 'Preguntas Frecuentes sobre Ventanas VELUX Argentina | Techos JAC',
    description: 'Todas tus dudas sobre ventanas de techo VELUX resueltas: tipos, garantias, precios, instalacion y mas. Distribuidor oficial Argentina.',
    canonical: BASE + _sl + 'preguntas-frecuentes',
    schema: schemaData,
  });

  let gidx = 0;

  const catSections = CATS.map(cat => {
    const items = FAQS.filter(item => item.category === cat);
    const faqItems = items.map(item => {
      const idx = gidx++;
      const isOpen = openIdx === idx;
      return ce('div', { key: idx, className: 'border rounded-2xl overflow-hidden transition-all duration-300 ' + (isOpen ? 'border-red-500 shadow-lg' : 'border-slate-100') },
        ce('button', { onClick: () => setOpenIdx(isOpen ? null : idx), className: 'w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors', 'aria-expanded': isOpen },
          ce('h3', { className: 'text-sm font-bold text-slate-900' }, item.question),
          ce(ChevronDown, { size: 16, className: 'flex-shrink-0 text-slate-400 transition-transform duration-300 ' + (isOpen ? 'rotate-180 text-red-500' : '') })
        ),
        isOpen && ce('div', { className: 'overflow-hidden' },
          ce('p', { className: 'px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4' }, item.answer)
        )
      );
    });
    return ce('section', { key: cat, className: 'mb-10' },
      ce('h2', { className: 'text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 ml-1' }, cat),
      ce('div', { className: 'space-y-2' }, ...faqItems)
    );
  });

  const ctaBlock = ce('div', { className: 'mt-12 bg-slate-900 rounded-3xl p-8 md:p-12 text-center' },
    ce('p', { className: 'text-[10px] font-black uppercase tracking-[0.4em] text-red-400 mb-3' }, 'Mas preguntas?'),
    ce('h2', { className: 'text-2xl md:text-3xl font-black tracking-tighter text-white mb-3 leading-tight' }, 'Un asesor especializado te responde'),
    ce('p', { className: 'text-slate-400 text-sm mb-6' }, 'Respondemos en menos de 24 horas. Sin compromiso.'),
    ce('div', { className: 'flex flex-col sm:flex-row gap-3 justify-center' },
      ce('a', { href: WA, target: '_blank', rel: 'noopener noreferrer', className: 'flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black uppercase tracking-widest text-xs px-7 py-4 rounded-full transition-all' },
        ce(MessageCircle, { size: 14 }), ' WhatsApp'
      ),
      ce('button', { onClick: () => onNavigate('contacto'), className: 'flex items-center justify-center gap-2 bg-white text-slate-900 font-black uppercase tracking-widest text-xs px-7 py-4 rounded-full hover:bg-slate-100 transition-all' }, 'Enviar consulta')
    )
  );

  return ce('div', { className: 'min-h-screen bg-white pt-28 pb-20' },
    ce('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' },
      ce('nav', { className: 'flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10' },
        ce('button', { onClick: () => onNavigate('home'), className: 'hover:text-slate-700 transition-colors' }, 'Inicio'),
        ce('span', null, String.fromCharCode(47)),
        ce('span', { className: 'text-slate-700' }, 'Preguntas Frecuentes')
      ),
      ce('div', { className: 'text-center mb-14' },
        ce('span', { className: 'inline-block py-0.5 px-3 rounded-full bg-red-100 text-red-700 text-[10px] font-black tracking-widest uppercase mb-3 italic' }, 'Soporte y Dudas'),
        ce('h1', { className: 'text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4 leading-none uppercase italic' },
          'Preguntas ', ce('span', { className: 'text-red-600' }, 'Frecuentes')
        ),
        ce('p', { className: 'text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed' },
          'Resolvemos las consultas mas comunes sobre ventanas VELUX. ',
          ce('button', { onClick: () => onNavigate('contacto'), className: 'text-red-600 font-bold hover:underline' }, 'Contactanos'),
          ' si no encontras tu pregunta.'
        )
      ),
      ...catSections,
      ctaBlock
    )
  );
};

export default PreguntasFrecuentesPage;