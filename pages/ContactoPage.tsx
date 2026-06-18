import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contacto — Techos JAC",
      "url": "https://techosjac.com.ar/contacto",
      "description": "Contactá a Techos JAC para cotizar ventanas de techo VELUX. WhatsApp, teléfono, email y showroom en Pilar, Buenos Aires.",
    },
    {
      "@type": "LocalBusiness",
      "name": "Techos JAC",
      "telephone": ["+5491168396459"],
      "email": "ventanas.jac@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ruta 8 km 54, Official Work Pilar",
        "addressLocality": "Pilar",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR",
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "14:00" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
        { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://techosjac.com.ar/contacto" },
      ],
    },
  ],
};

const ContactoPage: React.FC<Props> = ({ onNavigate }) => {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  useSEO({
    title: 'Contacto | Techos JAC — Ventanas de Techo VELUX Argentina',
    description: 'Contactá a Techos JAC para cotizar ventanas de techo VELUX. Atención por WhatsApp, teléfono y email. Showroom en Pilar, Buenos Aires. Respondemos en el día.',
    canonical: 'https://techosjac.com.ar/contacto',
    schema,
  });

  const handleWA = () => {
    const msg = form.nombre
      ? `Hola%20Techos%20JAC%2C%20soy%20${encodeURIComponent(form.nombre)}.%20${encodeURIComponent(form.mensaje || 'Quisiera%20información%20sobre%20ventanas%20VELUX.')}`
      : 'Hola%20Techos%20JAC%2C%20quisiera%20cotizar%20ventanas%20VELUX';
    window.open(`https://wa.me/5491168396459?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-700 transition-colors">Inicio</button>
          <span>/</span>
          <span className="text-slate-700">Contacto</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Izquierda: info */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">Estamos para ayudarte</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6 leading-none">Contacto</h1>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
              Respondemos por WhatsApp en el día. También podés visitarnos en nuestro showroom en Pilar o escribirnos por email.
            </p>

            <div className="space-y-5">
              {[
                { Icon: MessageCircle, title: 'WhatsApp (principal)', value: '+54 11 6839-6459', href: 'https://wa.me/5491168396459', label: 'Abrir WhatsApp' },
                { Icon: Phone, title: 'Teléfono', value: '+54 11 6839-6459', href: 'tel:+5491168396459', label: 'Llamar' },
                { Icon: Mail, title: 'Email', value: 'ventanas.jac@gmail.com', href: 'mailto:ventanas.jac@gmail.com', label: 'Enviar email' },
                { Icon: MapPin, title: 'Showroom', value: 'Official Work Pilar, Ruta 8 km 54', href: 'https://maps.google.com/?q=Pilar+Buenos+Aires+Argentina', label: 'Ver en mapa' },
              ].map(({ Icon, title, value, href, label }) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="bg-slate-100 group-hover:bg-red-600 rounded-xl p-2.5 transition-colors mt-0.5">
                    <Icon size={16} className="text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{title}</p>
                    <p className="font-black text-slate-900">{value}</p>
                    <span className="text-xs text-red-500 font-bold">{label} →</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 bg-slate-50 rounded-2xl p-5 flex items-center gap-3">
              <Clock size={16} className="text-slate-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Horarios de atención</p>
                <p className="text-sm text-slate-700 font-medium">Lunes a viernes 9–18hs · Sábados 10–14hs</p>
              </div>
            </div>
          </motion.div>

          {/* Derecha: formulario rápido */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl font-black text-white tracking-tighter mb-2">Cotizá sin cargo</h2>
              <p className="text-slate-400 text-sm mb-7">Completá el formulario y te contactamos por WhatsApp en el día.</p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-white font-black text-xl mb-2">¡Mensaje enviado!</p>
                  <p className="text-slate-400 text-sm">Te respondemos en WhatsApp en breve.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {[
                    { key: 'nombre', label: 'Tu nombre', placeholder: 'Juan García', type: 'text' },
                    { key: 'email', label: 'Email (opcional)', placeholder: 'juan@email.com', type: 'email' },
                    { key: 'telefono', label: 'Teléfono / WhatsApp', placeholder: '11 1234-5678', type: 'tel' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        className="w-full bg-white/10 text-white placeholder-slate-500 rounded-2xl px-4 py-3 outline-none focus:ring-2 ring-red-500 text-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">Mensaje</label>
                    <textarea
                      placeholder="Ej: necesito cotizar una ventana pivotante 78x98 para techo de tejas en GBA Norte"
                      value={form.mensaje}
                      onChange={e => setForm({ ...form, mensaje: e.target.value })}
                      rows={3}
                      className="w-full bg-white/10 text-white placeholder-slate-500 rounded-2xl px-4 py-3 outline-none focus:ring-2 ring-red-500 text-sm resize-none"
                    />
                  </div>
                  <button
                    onClick={handleWA}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs py-4 rounded-2xl transition-all mt-2"
                  >
                    Enviar por WhatsApp
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ContactoPage;
