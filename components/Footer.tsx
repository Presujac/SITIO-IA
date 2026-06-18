import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import type { AppNavigate } from '../App';

interface FooterProps {
  onNavigate: (view: 'home' | 'product-detail' | 'admin', sectionId?: string) => void;
  onNavigateApp: AppNavigate;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateApp }) => (
  <>
    <div className="h-16 bg-gradient-to-b from-stone-900 to-white pointer-events-none" />

    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo + descripción */}
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Techos JAC" className="h-6 w-auto object-contain object-left opacity-80 mb-3" />
            <div className="flex items-center gap-1.5 text-slate-400 mb-3">
              <MapPin size={10} className="text-red-500 flex-shrink-0" />
              <span className="text-[10px] font-semibold">Official Work Pilar · Ruta 8 km 54</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">Distribuidor oficial e importador directo de VELUX en Argentina.</p>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 mb-4">Servicios</p>
            <div className="space-y-2">
              {[
                { label: 'Ventanas Pivotantes', view: 'servicios/ventanas-pivotantes' as const },
                { label: 'Ventanas Solares',    view: 'servicios/ventanas-solares' as const },
                { label: 'Ventanas Fijas',      view: 'servicios/ventanas-fijas' as const },
                { label: 'Techo Plano',         view: 'servicios/techo-plano' as const },
                { label: 'Túneles Solares',     view: 'servicios/tuneles-solares' as const },
              ].map(item => (
                <button
                  key={item.view}
                  onClick={() => onNavigateApp(item.view)}
                  className="block text-[10px] font-semibold text-slate-400 hover:text-slate-700 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 mb-4">Empresa</p>
            <div className="space-y-2">
              {[
                { label: 'Inicio',       action: () => onNavigate('home') },
                { label: 'Productos',    action: () => onNavigate('product-detail') },
                { label: 'Nosotros',     action: () => onNavigateApp('nosotros') },
                { label: 'Galería',      action: () => onNavigateApp('galeria') },
                { label: 'Presupuesto',  action: () => onNavigateApp('presupuesto') },
                { label: 'Contacto',     action: () => onNavigateApp('contacto') },
              ].map(item => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="block text-[10px] font-semibold text-slate-400 hover:text-slate-700 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 mb-4">Contacto</p>
            <address style={{ fontStyle: "normal" }} className="space-y-3 not-italic">
              <a href="https://wa.me/5491168396459" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                <MessageCircle size={10} className="text-green-500" />
                +54 9 11 6890-0014
              </a>
              <a href="https://wa.me/5491171518723" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                <MessageCircle size={10} className="text-green-500" />
                +54 9 11 7151-8723
              </a>
              <a href="https://www.instagram.com/techosjac" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                <Instagram size={10} className="text-pink-500" />
                @techosjac
              </a>
              <a href="mailto:ventanas.jac@gmail.com"
                className="block text-[10px] font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                ventanas.jac@gmail.com
              </a>
              <p className="text-[10px] text-slate-400">Lunes a Viernes: 9:00 a 18:00 hs<br />Sábados: 10:00 a 14:00 hs</p>
            </address>
          </div>
        </div>

        {/* Línea base */}
        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-1">
          <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-300">JAC Argentina · {new Date().getFullYear()}</p>
          <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-300">Representante Oficial VELUX</p>
          <div className="flex gap-4">
            <button onClick={() => onNavigateApp('nosotros')} className="text-[8px] font-bold uppercase tracking-widest text-slate-300 hover:text-slate-600 transition-colors">Quiénes somos</button>
            <button onClick={() => onNavigateApp('contacto')} className="text-[8px] font-bold uppercase tracking-widest text-slate-300 hover:text-slate-600 transition-colors">Contacto</button>
          </div>
        </div>

      </div>
    </footer>
  </>
);

export default Footer;
