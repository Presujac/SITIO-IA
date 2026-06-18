import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Building2, Award, Wrench, Package, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { schemaBreadcrumb } from '../seo/schemas';
import type { AppNavigate, AppView } from '../App';
import ArquitectosBanner from '../components/ArquitectosBanner';
import { PortraitSlider, comparisons } from '../components/AD';

interface Props { onNavigate: AppNavigate; }

const _s = String.fromCharCode(47);
const _h = 'https:' + _s + _s;

const schemaService = {
  "@context": _h + 'schema.org',
  "@type": "Service",
  "name": "VELUX para Proyectos de Arquitectura — Techos JAC",
  "description": "Soporte técnico especializado para arquitectos y estudios de diseño. Muestras físicas, fichas técnicas, planillas de especificación y soporte en obra para proyectos con ventanas de techo VELUX en Argentina.",
  "provider": { "@type": "LocalBusiness", "name": "Techos JAC", "url": _h + 'techosjac.com.ar' },
  "audience": { "@type": "Audience", "audienceType": "Architects, Interior Designers, Construction Professionals" },
  "areaServed": ["Pilar", "Gran Buenos Aires", "Buenos Aires"],
};

const FV = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
const FVO = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const VP = { once: true, margin: '-60px' };

const WHY = [
  { title: 'Luz natural controlada', body: 'Las ventanas VELUX permiten diseñar con luz natural como variable activa: orientación, tamaño, apertura y factor solar se especifican con precisión desde el proyecto. Disponibles con vidrio de control solar, baja emisividad o laminado de seguridad.' },
  { title: 'Integración arquitectónica', body: 'Perfiles de aluminio anodizado, vidrio plano al ras del techo y marcos de diseño mínimo. Las ventanas VELUX se integran limpiamente en cubiertas de teja, chapa, membrana o pizarra sin comprometer la estética.' },
  { title: 'Eficiencia energética certificada', body: 'Doble y triple acristalamiento con cámara de argón, marcos de pino de gestión forestal sostenible y valores Uw desde 1,3 W/m²K. Compatible con certificación LEED, EDGE y vivienda de bajo consumo.' },
  { title: 'Automatización inteligente', body: 'Sistema VELUX ACTIVE: apertura motorizada, sensor de lluvia, control por app y domótica integrada. Especificable desde proyecto, instalado y programado por nuestro equipo técnico.' },
];

const SERVICES = [
  { Icon: Package,   title: 'Muestras físicas para reuniones', body: 'Ventanas de muestra disponibles para llevar a reuniones o instalar en showroom propio. Coordinamos entrega y retiro sin cargo.' },
  { Icon: FileText,  title: 'Fichas técnicas y CAD · BIM',     body: 'Planillas de especificación, cortes técnicos, archivos DWG y objetos BIM listos para incluir en planos y pliegos.' },
  { Icon: Award,     title: 'Fichas LEED y certificaciones',   body: 'Documentación técnica completa para proyectos de certificación energética o sustentable.' },
  { Icon: Building2, title: 'Presupuesto por proyecto',        body: 'Cotizamos directamente con vos o con el cliente final. Precios de distribuidor oficial con respaldo de importador directo.' },
  { Icon: Wrench,    title: 'Soporte en obra',                 body: 'Instaladores certificados VELUX coordinan con el constructor. Certificado de instalación que activa la garantía de fábrica.' },
  { Icon: BookOpen,  title: 'Capacitaciones técnicas',         body: 'Charlas de especificación para tu estudio, con muestras, catálogos y consultas técnicas. Sin cargo y a coordinarse.' },
];

const PRODUCTS: { title: string; body: string; view: AppView | null }[] = [
  { title: 'Ventanas para techo inclinado — Serie GGL · GPL · GGU', body: 'Para cubiertas con 15° a 90° de pendiente. 9 tamaños estándar (55×78 a 114×118 cm), versión motorizada INTEGRA®. Vidrio estándar, control solar, baja emisividad o laminado de seguridad.', view: 'product-detail' },
  { title: 'Ventanas para techo plano — Serie CVP · CFP · CSP · CXP', body: 'Para cubiertas de 0° a 15°. Cúpula acrílica o vidrio plano laminado, perfil de aluminio anodizado. Opciones fijas o practicables para viviendas, oficinas y comercios.', view: 'servicios/techo-plano' },
  { title: 'Túneles solares — Serie TCR · TCF', body: 'Conducto de luz de alta reflectancia para ambientes sin acceso al techo (baños, pasillos, halls). Diámetros 25 y 35 cm. Ilumina hasta 15 m² sin consumo eléctrico.', view: 'servicios/tuneles-solares' },
  { title: 'Cortinas y control solar', body: 'Blackout, plisadas, venecianas y persianas de protección solar. Especificables por modelo de ventana y orientación. Versión manual y motorizada.', view: null },
];

const ARCHITECTS = [
  { name: 'Arq. María González', studio: 'MG Arquitectura', city: 'Pilar', photo: '/living_room.jpg' },
  { name: 'Arq. Carlos Herrera', studio: 'Herrera & Asociados', city: 'Nordelta', photo: '/kitchen.jpg' },
  { name: 'Arq. Valentina Ruiz', studio: 'VR Estudio', city: 'Vicente López', photo: '/bathroom.jpg' },
  { name: 'Arq. Diego Fontana', studio: 'Fontana Proyectos', city: 'San Isidro', photo: '/bedroom.jpg' },
  { name: 'Arq. Lucía Salas', studio: 'Salas Diseño', city: 'CABA', photo: '/AD8.jpeg' },
  { name: 'Arq. Tomás Ibáñez', studio: 'TI Diseño', city: 'Tigre', photo: '/AD3.jpeg' },
];

const ArquitectosPage: React.FC<Props> = ({ onNavigate }) => {
  useSEO({
    title: 'VELUX para Arquitectos y Estudios de Diseño | Techos JAC Argentina',
    description: 'Soluciones VELUX para proyectos de arquitectura en Argentina. Muestras, planillas técnicas, fichas LEED y soporte especializado para estudios de diseño. Distribuidor oficial.',
    canonical: _h + 'techosjac.com.ar' + _s + 'arquitectos',
    schema: { "@context": _h + 'schema.org', "@graph": [ schemaService, schemaBreadcrumb([{ name: 'Inicio', url: _s }, { name: 'Para Arquitectos', url: _s + 'arquitectos' }]) ] },
  });

  return (
    <div id="arquitectos-content" className="min-h-screen bg-white">

      <ArquitectosBanner onNavigate={onNavigate} />

      {/* ─── PORTFOLIO ─── */}
      <section className="bg-[#F5F5F7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#6E6E73]">Portfolio de obras · 2026</span>
              <h2 className="text-4xl md:text-6xl font-[1000] text-[#1D1D1F] tracking-tighter leading-[0.88] uppercase italic mt-3">
                Espacios que<br /><span className="text-red-600">iluminamos.</span>
              </h2>
            </div>
            <p className="text-[#6E6E73] text-sm leading-relaxed max-w-xs">
              Deslizá sobre cada proyecto para ver la transformación. Obras reales instaladas por nuestro equipo certificado VELUX.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {comparisons.map((pair, i) => (
              <PortraitSlider key={pair.id} pair={pair} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-[#D2D2D7] flex flex-wrap gap-10 md:gap-20">
            {([['4.000+', 'Ventanas instaladas'], ['10 años', 'Garantía de fábrica'], ['CAD · BIM', 'Archivos técnicos']] as [string, string][]).map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl md:text-3xl font-[1000] italic tracking-tighter text-[#1D1D1F] leading-none">{n}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mt-1.5">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ARQUITECTOS QUE TRABAJAN CON NOSOTROS ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-12">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#6E6E73]">Aliados · Red de diseño</span>
            <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-[#1D1D1F] leading-[0.88] uppercase italic mt-3">
              Arquitectos que<br />trabajan con <span className="text-red-600">nosotros.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ARCHITECTS.map((arq, idx) => (
              <motion.div
                key={idx}
                variants={FV} initial="hidden" whileInView="visible" viewport={VP}
                transition={{ delay: idx * 0.07 } as object}
                className="group cursor-default">
                {/* Photo */}
                <div className="relative overflow-hidden rounded-2xl bg-[#F5F5F7] mb-3" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={arq.photo}
                    alt={"Proyecto de " + arq.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                {/* Info below card */}
                <p className="font-[1000] text-[#1D1D1F] text-xs uppercase italic tracking-tight leading-tight">{arq.name}</p>
                <p className="text-[#6E6E73] text-[10px] font-black uppercase tracking-widest mt-0.5">{arq.studio}</p>
                <p className="text-red-600 text-[9px] font-black uppercase tracking-widest mt-0.5">{arq.city}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-[#D2D2D7] flex items-center justify-between gap-4">
            <p className="text-[#6E6E73] text-[10px] font-black uppercase tracking-widest">
              Más de 15 estudios trabajan con nosotros activamente
            </p>
            <button
              onClick={() => onNavigate('contacto')}
              className="inline-flex items-center gap-2 text-[#1D1D1F] hover:text-red-600 font-black text-[10px] uppercase tracking-widest transition-colors cursor-pointer group/btn">
              Sumate a la red
              <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── POR QUÉ VELUX ─── */}
      <section className="bg-[#F5F5F7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex items-end justify-between pb-8 border-b border-[#D2D2D7]">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#6E6E73]">01 — Por qué especificarlo</span>
              <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-[#1D1D1F] leading-[0.88] uppercase italic mt-3">
                Por qué los<br />arquitectos<br />eligen <span className="text-red-600">VELUX</span>
              </h2>
            </motion.div>
            <div className="hidden lg:block text-[160px] font-[1000] text-[#1D1D1F]/[0.03] leading-none italic uppercase select-none -mb-4">
              01
            </div>
          </div>

          <div className="divide-y divide-[#D2D2D7]">
            {WHY.map((item, idx) => (
              <motion.div
                key={idx}
                variants={FV} initial="hidden" whileInView="visible" viewport={VP}
                transition={{ delay: idx * 0.07 } as object}
                className="grid grid-cols-12 gap-4 md:gap-8 py-10 group">
                <div className="col-span-2 md:col-span-1 flex items-start pt-1">
                  <span className="text-5xl font-[1000] italic text-[#1D1D1F]/[0.06] leading-none select-none">0{idx + 1}</span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <div className="w-5 h-[2px] bg-red-600 mb-3 group-hover:w-8 transition-all duration-300" />
                  <h3 className="font-[1000] text-[#1D1D1F] text-sm md:text-base uppercase tracking-tight italic leading-snug">{item.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-7 md:col-start-6">
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex items-end justify-between pb-8 border-b border-[#D2D2D7] mb-2">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#6E6E73]">02 — Servicios para estudios</span>
              <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-[#1D1D1F] leading-[0.88] uppercase italic mt-3">
                Lo que ofrecemos<br />a tu estudio
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D2D2D7]">
            {SERVICES.map(({ Icon, title, body }, idx) => (
              <motion.div
                key={idx}
                variants={FVO} initial="hidden" whileInView="visible" viewport={VP}
                transition={{ delay: idx * 0.06 } as object}
                className="group bg-white p-8 hover:bg-[#F5F5F7] transition-colors duration-200 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F7] group-hover:bg-white flex items-center justify-center mb-5 transition-colors">
                  <Icon size={16} className="text-[#1D1D1F]" />
                </div>
                <h3 className="font-[1000] text-[#1D1D1F] text-xs uppercase tracking-wide italic mb-2 leading-snug">{title}</h3>
                <p className="text-[#6E6E73] text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTOS ─── */}
      <section className="bg-[#F5F5F7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex items-end justify-between pb-8 border-b border-[#D2D2D7] mb-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#6E6E73]">03 — Catálogo técnico</span>
              <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-[#1D1D1F] leading-[0.88] uppercase italic mt-3">
                Productos más<br /><span className="text-red-600">especificados</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRODUCTS.map((prod, idx) => (
              <motion.article
                key={idx}
                variants={FV} initial="hidden" whileInView="visible" viewport={VP}
                transition={{ delay: idx * 0.08 } as object}
                className="group bg-white rounded-2xl p-8 md:p-10 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 cursor-default">
                <div className="w-5 h-[2px] bg-red-600 mb-5 group-hover:w-10 transition-all duration-300" />
                <h3 className="font-[1000] text-[#1D1D1F] text-sm md:text-base uppercase tracking-tight italic mb-3 leading-snug">{prod.title}</h3>
                <p className="text-[#6E6E73] text-sm leading-relaxed mb-5">{prod.body}</p>
                {prod.view && (
                  <button
                    onClick={() => onNavigate(prod.view as AppView)}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-[1000] text-[10px] uppercase tracking-widest italic transition-colors cursor-pointer group/btn">
                    Ver especificaciones técnicas
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contacto-arq" className="bg-[#1D1D1F] py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div variants={FVO} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">04 — Contacto</span>
            <h2 className="text-[52px] md:text-[80px] lg:text-[100px] font-[1000] tracking-tighter text-white leading-[0.85] uppercase italic mt-4">
              Hablemos<br />de tu<br /><span className="text-red-500">proyecto.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={FVO} initial="hidden" whileInView="visible" viewport={VP}
            transition={{ delay: 0.15 } as object}
            className="border-t border-white/10 pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <ul className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-8 text-white/40 text-[10px] font-black uppercase tracking-widest list-none p-0 m-0">
              <li className="flex items-center gap-3"><span className="text-red-500">—</span> Fichas técnicas y CAD por mail</li>
              <li className="flex items-center gap-3"><span className="text-red-500">—</span> Visita con muestras (coordinar)</li>
              <li className="flex items-center gap-3"><span className="text-red-500">—</span> Presupuesto sin cargo</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => onNavigate('contacto')}
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-red-600 text-[#1D1D1F] font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
                Consultar por un proyecto
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={'https:' + String.fromCharCode(47, 47) + 'wa.me/5491168396459?text=Hola%20Techos%20JAC%2C%20soy%20arquitecto%20y%20quiero%20consultar%20por%20un%20proyecto'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/40 text-white/60 hover:text-white font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300">
                <MessageCircle size={13} />
                WhatsApp directo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ArquitectosPage;
