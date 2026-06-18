import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import type { AppNavigate } from '../App';

interface Props { onNavigate: AppNavigate; }

const MODELS = ['GGL Pivotante (madera)', 'GGU Pivotante (poliuretano)', 'VSS Solar motorizada', 'FS Fija', 'GPL Proyectante', 'CFP/CVP Techo plano', 'TWR/TWF Túnel solar', 'No sé, necesito asesoramiento'];
const ROOF_TYPES = ['Tejas francesas/romanas', 'Chapa metálica/acanalada', 'Losa / techo plano', 'Otro'];
const ZONES = ['CABA', 'GBA Norte', 'GBA Sur', 'GBA Oeste', 'Pilar y alrededores', 'Interior del país'];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Presupuesto Online — Techos JAC",
      "url": "https://techosjac.com.ar/presupuesto",
      "description": "Solicitá un presupuesto online para ventanas de techo VELUX. Techos JAC responde en el día.",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
        { "@type": "ListItem", "position": 2, "name": "Presupuesto", "item": "https://techosjac.com.ar/presupuesto" },
      ],
    },
  ],
};

const PresupuestoPage: React.FC<Props> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    modelo: '',
    techo: '',
    cantidad: '1',
    zona: '',
    nombre: '',
    telefono: '',
    comentario: '',
  });

  useSEO({
    title: 'Presupuesto Online | Ventanas de Techo VELUX — Techos JAC Argentina',
    description: 'Solicitá tu presupuesto online para ventanas de techo VELUX. Respondemos en el día. Instalación certificada en Pilar, GBA y CABA. Importadores directos en Argentina.',
    canonical: 'https://techosjac.com.ar/presupuesto',
    schema,
  });

  const sendToWA = () => {
    const msg = [
      `*Presupuesto VELUX — Techos JAC*`,
      `👤 Nombre: ${form.nombre}`,
      `📱 Teléfono: ${form.telefono}`,
      `🪟 Modelo: ${form.modelo || 'Sin especificar'}`,
      `🏠 Tipo de techo: ${form.techo || 'Sin especificar'}`,
      `🔢 Cantidad: ${form.cantidad}`,
      `📍 Zona: ${form.zona || 'Sin especificar'}`,
      form.comentario ? `💬 Comentario: ${form.comentario}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/5491168396459?text=${encodeURIComponent(msg)}`, '_blank');
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-700 transition-colors">Inicio</button>
          <span>/</span>
          <span className="text-slate-700">Presupuesto</span>
        </nav>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">Sin cargo · Respondemos en el día</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4 leading-none">Solicitá tu Presupuesto</h1>
          <p className="text-slate-500 text-lg">Completá el formulario y te enviamos el precio con toda la información por WhatsApp.</p>
        </motion.div>

        {/* Progress */}
        <div className="flex gap-2 mb-10">
          {[1, 2, 3].map(n => (
            <div key={n} className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${step > n ? 'bg-red-600' : step === n ? 'bg-slate-900' : 'bg-slate-100'}`} />
          ))}
        </div>

        {step === 4 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-3">¡Presupuesto enviado!</h2>
            <p className="text-slate-500 mb-8">Abrimos WhatsApp con toda tu información. Te respondemos en el día con precios y disponibilidad.</p>
            <button onClick={() => onNavigate('home')} className="bg-slate-900 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-all hover:bg-red-600">
              Volver al inicio
            </button>
          </motion.div>
        ) : (
          <div className="bg-slate-50 rounded-[2rem] p-8 md:p-10">

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6">¿Qué tipo de ventana necesitás?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {MODELS.map(m => (
                    <button
                      key={m}
                      onClick={() => setForm({ ...form, modelo: m })}
                      className={`text-left p-4 rounded-2xl border-2 transition-all text-sm font-bold ${form.modelo === m ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Tipo de techo</label>
                  <div className="grid grid-cols-2 gap-3">
                    {ROOF_TYPES.map(t => (
                      <button
                        key={t}
                        onClick={() => setForm({ ...form, techo: t })}
                        className={`p-3 rounded-xl border-2 text-xs font-bold transition-all ${form.techo === t ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Cantidad de ventanas</label>
                  <div className="flex gap-2">
                    {['1', '2', '3', '4', '5+'].map(n => (
                      <button
                        key={n}
                        onClick={() => setForm({ ...form, cantidad: n })}
                        className={`flex-1 py-3 rounded-xl border-2 text-sm font-black transition-all ${form.cantidad === n ? 'border-red-600 bg-red-600 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!form.modelo}
                  className="w-full bg-slate-900 disabled:bg-slate-200 disabled:text-slate-400 text-white font-black uppercase tracking-widest text-xs py-4 rounded-2xl transition-all hover:bg-red-600"
                >
                  Siguiente →
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6">¿Dónde instalamos?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {ZONES.map(z => (
                    <button
                      key={z}
                      onClick={() => setForm({ ...form, zona: z })}
                      className={`p-4 rounded-2xl border-2 text-sm font-bold transition-all ${form.zona === z ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'}`}
                    >
                      {z}
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Comentario adicional (opcional)</label>
                  <textarea
                    placeholder="Ej: es un techo de tejas a 30°, el espacio mide 3x4m. Quiero instalar 2 ventanas pivot..."
                    value={form.comentario}
                    onChange={e => setForm({ ...form, comentario: e.target.value })}
                    rows={3}
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 bg-white border-2 border-slate-200 text-slate-700 font-black uppercase tracking-widest text-xs py-4 rounded-2xl transition-all hover:border-slate-400">
                    ← Atrás
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!form.zona}
                    className="flex-1 bg-slate-900 disabled:bg-slate-200 disabled:text-slate-400 text-white font-black uppercase tracking-widest text-xs py-4 rounded-2xl transition-all hover:bg-red-600"
                  >
                    Siguiente →
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6">¿Cómo nos contactamos?</h2>

                <div className="space-y-4 mb-8">
                  {[
                    { key: 'nombre', label: 'Tu nombre', placeholder: 'Juan García', type: 'text' },
                    { key: 'telefono', label: 'WhatsApp o teléfono', placeholder: '11 1234-5678', type: 'tel' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        className="w-full bg-white border-2 border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Resumen */}
                <div className="bg-slate-900 rounded-2xl p-5 mb-6 space-y-1.5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Resumen de tu pedido</p>
                  {[
                    ['Modelo', form.modelo || '—'],
                    ['Techo', form.techo || '—'],
                    ['Cantidad', form.cantidad],
                    ['Zona', form.zona || '—'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-slate-400">{k}</span>
                      <span className="text-white font-bold">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 bg-white border-2 border-slate-200 text-slate-700 font-black uppercase tracking-widest text-xs py-4 rounded-2xl transition-all hover:border-slate-400">
                    ← Atrás
                  </button>
                  <button
                    onClick={sendToWA}
                    disabled={!form.nombre || !form.telefono}
                    className="flex-1 bg-red-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-black uppercase tracking-widest text-xs py-4 rounded-2xl transition-all hover:bg-red-700"
                  >
                    Enviar por WhatsApp
                  </button>
                </div>
              </motion.div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default PresupuestoPage;
