import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Building2, Award, Wrench, Package, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { schemaBreadcrumb } from '../seo/schemas';
import type { AppNavigate, AppView } from '../App';
import ArquitectosBanner from '../components/ArquitectosBanner';
import EventosComunidad from '../components/EventosComunidad';

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

const FEATURED: { name: string; studio: string; city: string; photo: string; project: string; quote: string; description: string; category: string; cta: string }[] = [
  {
    name: 'Agos Marchesini',
    studio: 'Agos Arquitectura',
    city: 'Nordelta',
    photo: '/AGOS MARCHESINI.JPEG',
    project: '/living_room.jpg',
    category: 'Diseño de interiores · Proyecto',
    quote: 'Cada apertura en el techo es una oportunidad para conectar interior y exterior.',
    description: 'Agos integra ventanas de techo desde la etapa de anteproyecto, logrando que la luz sea un material más en la paleta de diseño. Sus espacios comunican calidez sin renunciar a la eficiencia energética.',
    cta: 'Conocer su trabajo',
  },
  {
    name: 'Yago Bongiovanni',
    studio: 'Estudio Yago',
    city: 'Buenos Aires',
    photo: '/marcela.jpeg',
    project: '/AD2.jpeg',
    category: 'Iluminación natural · Vivienda',
    quote: 'La luz natural transforma completamente la experiencia de un espacio.',
    description: 'Yago lleva más de 10 años especificando soluciones VELUX en proyectos residenciales de alta gama. Su enfoque coloca la iluminación cenital como variable de diseño desde el primer boceto.',
    cta: 'Ver proyecto',
  },
  {
    name: 'Sara Plazibat',
    studio: 'Sara Diseño',
    city: 'San Isidro',
    photo: '/cholila.jpeg',
    project: '/kitchen.jpg',
    category: 'Arquitectura sustentable · LEED',
    quote: 'La arquitectura no solo se ve, también se siente a través de la luz.',
    description: 'Sara trabaja en proyectos de certificación energética donde la ventilación natural y la iluminación cenital son requisitos técnicos. Con VELUX, logra cumplir normativas sin comprometer la estética.',
    cta: 'Leer entrevista',
  },
];

const INTERESTS = [
  'Recibir catálogo VELUX',
  'Solicitar asesoramiento técnico',
  'Mostrar un proyecto',
  'Participar de entrevistas',
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
  const [form, setForm] = useState({ nombre: '', estudio: '', email: '', telefono: '', ciudad: '', web: '', interes: '' });
  const [sent, setSent] = useState(false);

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  useSEO({
    title: 'VELUX para Arquitectos y Estudios de Diseño | Techos JAC Argentina',
    description: 'Soluciones VELUX para proyectos de arquitectura en Argentina. Muestras, planillas técnicas, fichas LEED y soporte especializado para estudios de diseño. Distribuidor oficial.',
    canonical: _h + 'techosjac.com.ar' + _s + 'arquitectos',
    schema: { "@context": _h + 'schema.org', "@graph": [ schemaService, schemaBreadcrumb([{ name: 'Inicio', url: _s }, { name: 'Para Arquitectos', url: _s + 'arquitectos' }]) ] },
  });

  return (
    <div id="arquitectos-content" className="min-h-screen bg-white">

      <ArquitectosBanner onNavigate={onNavigate} />

      {/* ─── POR QUÉ ELEGIRNOS ─── */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Foto de fondo */}
        <img src="/DSC00580.JPEG" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '50% 28%' }} />
        {/* Overlay fuerte para legibilidad */}
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.82)' }} />
        {/* Fade superior para fundir con el hero */}
        <div className="absolute top-0 inset-x-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #0a0a0a, transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-red-600" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-red-500">Por qué elegirnos</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-[1000] tracking-tighter text-white leading-[0.9] uppercase italic">
              No somos solo un proveedor.<br />Somos tu socio técnico.
            </h2>
          </motion.div>

          <div className="divide-y divide-white/10">
            {[
              { n: '01', title: 'Respaldo técnico real', text: 'Fichas LEED, archivos CAD·BIM y soporte especializado desde el anteproyecto.' },
              { n: '02', title: 'Instalación certificada', text: 'Equipo propio certificado VELUX. Garantía de 10 años activada con cada obra.' },
              { n: '03', title: 'Socio en cada etapa', text: 'Acompañamos desde la especificación hasta la entrega, sin intermediarios.' },
            ].map((item, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-10 py-5 cursor-default">
                <span className="text-[10px] font-black text-white/30 tracking-widest shrink-0 w-8">{item.n}</span>
                <h3 className="font-[1000] text-white text-base md:text-lg uppercase italic tracking-tight leading-none md:w-64 shrink-0 group-hover:text-red-500 transition-colors duration-200">{item.title}</h3>
                <div className="hidden md:block h-px flex-1 bg-white/10 group-hover:bg-red-600/40 transition-colors duration-300" />
                <p className="text-white/55 text-sm leading-relaxed md:max-w-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── PODCAST OBRA EN OBRA ─── */}
      <section className="relative bg-[#0a0a0a] py-20 md:py-28 overflow-hidden">

        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '256px' }} />

        {/* Red glow top */}
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.4) 50%, transparent)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* 3 cards iguales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURED.map((arq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col bg-[#111] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500 cursor-pointer">

                {/* Foto */}
                <div className="relative overflow-hidden" style={{ height: '320px' }}>
                  <img src={arq.photo} alt={arq.name} loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />

                  {/* Ep + play */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white/40 text-[7px] font-black uppercase tracking-[0.4em] px-2.5 py-1 rounded-full">
                      Ep. {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm
                      flex items-center justify-center pl-1
                      opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
                      transition-all duration-300">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path d="M1 1L15 9L1 17V1Z" fill="white" fillOpacity="0.95"/>
                      </svg>
                    </div>
                  </div>

                  {/* Número watermark */}
                  <span className="absolute bottom-2 right-4 text-[5rem] font-[1000] italic leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.05)' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Texto */}
                <div className="flex flex-col flex-1 p-6 pt-5">
                  <p className="text-white/25 text-[8px] font-black uppercase tracking-[0.5em] mb-1">{arq.studio} · {arq.city}</p>
                  <h3 className="text-2xl font-[1000] uppercase italic tracking-tighter text-white leading-none mb-5">
                    {arq.name}
                  </h3>

                  {/* Quote — lo que dicen */}
                  <div className="flex-1 relative pl-4 border-l-2 border-red-600/40">
                    <span className="absolute -top-2 -left-1 text-red-600/30 text-3xl font-serif leading-none">"</span>
                    <p className="text-white/55 text-sm font-light italic leading-relaxed">
                      {arq.quote}
                    </p>
                    <span className="text-red-600/30 text-3xl font-serif leading-none">"</span>
                  </div>

                  {/* Category tag */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.4em]">{arq.category}</span>
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                        <path d="M0.5 0.5L7.5 5L0.5 9.5V0.5Z" fill="white" fillOpacity="0.5"/>
                      </svg>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.04]" />
      </section>

      <EventosComunidad />

      {/* ─── FORMULARIO COMUNIDAD ─── */}
      <section id="form-comunidad" className="bg-[#F5F5F7] py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 md:px-10">

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#6E6E73]">05 — Sumate</span>
            <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter text-[#1D1D1F] leading-[0.9] uppercase italic mt-3">
              Empezá acá.
            </h2>
            <p className="text-[#6E6E73] text-sm leading-relaxed mt-3 max-w-sm mx-auto">
              Completá tus datos y te contactamos para hablar de tu próximo proyecto.
            </p>
          </motion.div>

          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 text-center border border-[#D2D2D7]">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-[1000] uppercase italic tracking-tighter text-[#1D1D1F] mb-2">¡Nos vemos pronto!</h3>
              <p className="text-[#6E6E73] text-sm">Te contactamos en menos de 24 horas hábiles.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              onSubmit={handleForm}
              className="bg-white rounded-3xl p-8 md:p-10 border border-[#D2D2D7] space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mb-2">Nombre y apellido *</label>
                  <input required type="text" placeholder="Ej: María González"
                    className="w-full bg-[#F5F5F7] border-0 rounded-xl px-4 py-3.5 text-sm text-[#1D1D1F] font-medium outline-none focus:ring-2 ring-red-600 transition-all placeholder:text-[#B0B0B5]"
                    value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mb-2">Estudio de arquitectura</label>
                  <input type="text" placeholder="Ej: MG Arquitectura"
                    className="w-full bg-[#F5F5F7] border-0 rounded-xl px-4 py-3.5 text-sm text-[#1D1D1F] font-medium outline-none focus:ring-2 ring-red-600 transition-all placeholder:text-[#B0B0B5]"
                    value={form.estudio} onChange={e => setForm({ ...form, estudio: e.target.value })} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mb-2">Email profesional *</label>
                  <input required type="email" placeholder="vos@estudio.com"
                    className="w-full bg-[#F5F5F7] border-0 rounded-xl px-4 py-3.5 text-sm text-[#1D1D1F] font-medium outline-none focus:ring-2 ring-red-600 transition-all placeholder:text-[#B0B0B5]"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mb-2">Teléfono</label>
                  <input type="tel" placeholder="+54 9 11 ..."
                    className="w-full bg-[#F5F5F7] border-0 rounded-xl px-4 py-3.5 text-sm text-[#1D1D1F] font-medium outline-none focus:ring-2 ring-red-600 transition-all placeholder:text-[#B0B0B5]"
                    value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mb-2">Ciudad</label>
                  <input type="text" placeholder="Buenos Aires"
                    className="w-full bg-[#F5F5F7] border-0 rounded-xl px-4 py-3.5 text-sm text-[#1D1D1F] font-medium outline-none focus:ring-2 ring-red-600 transition-all placeholder:text-[#B0B0B5]"
                    value={form.ciudad} onChange={e => setForm({ ...form, ciudad: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mb-2">Web o Instagram</label>
                  <input type="text" placeholder="@estudio o www.estudio.com"
                    className="w-full bg-[#F5F5F7] border-0 rounded-xl px-4 py-3.5 text-sm text-[#1D1D1F] font-medium outline-none focus:ring-2 ring-red-600 transition-all placeholder:text-[#B0B0B5]"
                    value={form.web} onChange={e => setForm({ ...form, web: e.target.value })} />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-[#6E6E73] mb-3">Interés principal</label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map(opt => (
                    <button key={opt} type="button"
                      onClick={() => setForm({ ...form, interes: opt })}
                      className={`px-3.5 py-2 rounded-full text-[9px] font-black uppercase tracking-wide transition-all cursor-pointer ${form.interes === opt ? 'bg-red-600 text-white' : 'bg-[#F5F5F7] text-[#6E6E73] hover:bg-[#E5E5E7]'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit"
                className="w-full bg-[#1D1D1F] hover:bg-red-600 text-white font-[1000] uppercase tracking-widest text-[10px] italic py-5 rounded-2xl transition-all duration-300 cursor-pointer mt-2">
                Enviar y sumarme a la comunidad →
              </button>

              <p className="text-center text-[9px] text-[#B0B0B5] font-medium">
                Tu información es confidencial. No compartimos tus datos con terceros.
              </p>
            </motion.form>
          )}

        </div>
      </section>


    </div>
  );
};

export default ArquitectosPage;
