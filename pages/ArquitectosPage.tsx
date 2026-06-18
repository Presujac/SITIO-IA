import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Building2, Award, Wrench, Package, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { schemaBreadcrumb } from '../seo/schemas';
import type { AppNavigate, AppView } from '../App';
import ArquitectosBanner from '../components/ArquitectosBanner';

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
    name: 'Yago',
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
    name: 'Agos',
    studio: 'Agos Arquitectura',
    city: 'Nordelta',
    photo: '/officia.jpeg',
    project: '/living_room.jpg',
    category: 'Diseño de interiores · Proyecto',
    quote: 'Cada apertura en el techo es una oportunidad para conectar interior y exterior.',
    description: 'Agos integra ventanas de techo desde la etapa de anteproyecto, logrando que la luz sea un material más en la paleta de diseño. Sus espacios comunican calidez sin renunciar a la eficiencia energética.',
    cta: 'Conocer su trabajo',
  },
  {
    name: 'Sara',
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
  'Capacitación profesional',
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

      {/* ─── POR QUÉ + SERVICIOS UNIFICADO ─── */}
      <section className="relative bg-[#111] py-20 md:py-28 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 pb-12 border-b border-white/8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-red-600" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-red-500/70">El socio técnico</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-3xl md:text-[2.8rem] font-[1000] tracking-tighter text-white leading-[0.9] uppercase italic">
                Por qué los arquitectos<br />eligen trabajar con nosotros.
              </h2>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs font-light shrink-0">
                Desde el primer boceto hasta la entrega de obra, somos el respaldo técnico de tu estudio.
              </p>
            </div>
          </motion.div>

          {/* Dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 lg:divide-x divide-white/8">

            {/* Izquierda — razones */}
            <div className="lg:pr-16">
              <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20 mb-8">Razones para especificarnos</p>
              <div className="divide-y divide-white/6">
                {WHY.map((item, idx) => (
                  <motion.div key={idx}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group py-7 flex gap-5 items-start">
                    <span className="text-[10px] font-black text-white/12 tracking-widest pt-0.5 shrink-0 tabular-nums">0{idx + 1}</span>
                    <div>
                      <div className="w-4 h-[1.5px] bg-red-600 mb-3 group-hover:w-6 transition-all duration-300" />
                      <h3 className="font-[1000] text-white text-sm uppercase italic tracking-tight mb-2">{item.title}</h3>
                      <p className="text-white/35 text-xs leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Derecha — servicios */}
            <div className="lg:pl-16">
              <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20 mb-8">Servicios para tu estudio</p>
              <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
                {SERVICES.map(({ Icon, title, body }, idx) => (
                  <motion.div key={idx}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="group bg-[#111] hover:bg-white/[0.04] transition-colors duration-200 p-6 cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-red-600/15 flex items-center justify-center mb-4 transition-colors duration-200">
                      <Icon size={14} className="text-white/35 group-hover:text-red-500 transition-colors duration-200" />
                    </div>
                    <h3 className="font-[1000] text-white text-[11px] uppercase italic tracking-tight mb-1.5 leading-snug">{title}</h3>
                    <p className="text-white/30 text-[11px] leading-relaxed">{body}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── COMUNIDAD DE ARQUITECTOS ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-600" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-red-600">Red JAC · Comunidad</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-[#1D1D1F] leading-[0.88] uppercase italic mt-2">
              Arquitectos que<br />hacen historia.
            </h2>
            <p className="text-[#6E6E73] text-sm leading-relaxed max-w-lg mt-4">
              Tres estudios. Tres visiones sobre la luz natural. Proyectos reales desarrollados con el respaldo técnico de Techos JAC y VELUX.
            </p>
          </motion.div>

          {FEATURED.map((arq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center py-14 border-t border-[#E5E5E7]`}
            >
              {/* Imagen del proyecto */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl bg-[#F5F5F7]" style={{ aspectRatio: '4/3' }}>
                  <img src={arq.project} alt={`Proyecto de ${arq.name}`} loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                  {/* Badge del arquitecto sobre la foto */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md rounded-full pl-1.5 pr-4 py-1.5 shadow-lg">
                      <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-200 flex-shrink-0 ring-2 ring-white">
                        <img src={arq.photo} alt={arq.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wide text-slate-900 leading-none">{arq.name}</p>
                        <p className="text-[9px] text-slate-400 font-medium leading-none mt-0.5">{arq.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido editorial */}
              <div className="w-full md:w-1/2">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#6E6E73]">{arq.category}</span>
                <blockquote className="text-2xl md:text-3xl font-[1000] italic tracking-tighter text-[#1D1D1F] leading-[1.1] mt-3 mb-5">
                  "{arq.quote}"
                </blockquote>
                <p className="text-[#6E6E73] text-sm leading-relaxed mb-7">{arq.description}</p>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="inline-flex items-center gap-2 text-[#1D1D1F] hover:text-red-600 font-[1000] text-[10px] uppercase tracking-widest italic transition-colors cursor-pointer group/btn border-b border-[#1D1D1F]/30 hover:border-red-600 pb-0.5">
                  {arq.cta}
                  <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ─── CTA COMUNIDAD ─── */}
      <section className="relative bg-[#111] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(220,38,38,0.6) 40%, rgba(220,38,38,0.6) 60%, transparent 95%)' }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(220,38,38,0.1) 0%, transparent 65%)' }} />

        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-500 text-[9px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Para arquitectos
            </span>
            <h2 className="text-5xl md:text-7xl font-[1000] tracking-tighter text-white leading-[0.85] uppercase italic mb-5">
              ¿Sos<br />arquitecto?
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-10 max-w-md mx-auto">
              Formá parte de nuestra comunidad. Compartí proyectos, accedé al respaldo técnico de VELUX y conectá con otros estudios de diseño.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.getElementById('form-comunidad')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-red-600 text-[#1D1D1F] hover:text-white font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
                Solicitar catálogo completo
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('form-comunidad')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-red-500/40 text-white/60 hover:text-white font-[1000] uppercase tracking-widest text-[10px] italic px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
                Quiero sumarme
                <ArrowRight size={11} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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
