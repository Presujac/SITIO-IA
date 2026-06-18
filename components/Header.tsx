import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import Magnetic from './Magnetic';
import AuroraBackground from './AuroraBackground';
import type { AppNavigate, AppView } from '../App';

interface HeaderProps {
  currentView: 'home' | 'product-detail' | 'admin';
  onNavigate: (view: 'home' | 'product-detail' | 'admin', sectionId?: string) => void;
  onAdminClick: () => void;
  onNavigateApp: AppNavigate;
}

type NavLink = {
  name: string;
  view: AppView;
  href: string;
  isSection?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { name: 'Inicio',       view: 'home',          href: '#hero',       isSection: true },
  { name: 'Productos',    view: 'product-detail', href: '/productos' },
  { name: 'Servicios',    view: 'servicios',      href: '/servicios' },
  { name: 'Arquitectos',  view: 'arquitectos',    href: '/arquitectos' },
  { name: 'Presupuesto',  view: 'presupuesto',    href: '/presupuesto' },
  { name: 'Contacto',     view: 'contacto',       href: '/contacto' },
];

const MOBILE_EXTRA: NavLink[] = [
  { name: 'Nosotros', view: 'nosotros', href: '/nosotros' },
  { name: 'Galería',  view: 'galeria',  href: '/galeria' },
];

const Header: React.FC<HeaderProps> = ({ currentView: cv, onNavigate: nav, onAdminClick, onNavigateApp }) => {
  const [sc, setSc] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const hs = () => setSc(window.scrollY > 20);
    window.addEventListener('scroll', hs);
    return () => window.removeEventListener('scroll', hs);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (e.detail === 1) {
      onNavigateApp('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (e.detail === 2) {
      onAdminClick();
    }
  };

  const handleLinkClick = (e: React.MouseEvent, lnk: NavLink) => {
    e.preventDefault();
    setMob(false);

    if (lnk.isSection) {
      const sid = lnk.href.startsWith('#') ? lnk.href.substring(1) : undefined;
      if (cv === 'home' && sid) {
        const el = document.getElementById(sid);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      nav('home', sid);
    } else {
      onNavigateApp(lnk.view);
    }
  };

  const glc = (lnk: NavLink) => {
    const isCurrent = lnk.view === 'product-detail'
      ? cv === 'product-detail'
      : window.location.pathname === lnk.href;
    if (isCurrent) return 'text-red-500';
    if (sc || cv === 'product-detail') return 'text-slate-600 hover:text-black';
    return 'text-slate-700 hover:text-black';
  };

  const allMobileLinks = [...NAV_LINKS, ...MOBILE_EXTRA];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${sc || cv === 'product-detail' ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className={`flex justify-between items-center px-6 transition-all duration-500 relative overflow-hidden ${sc || mob || cv === 'product-detail' ? 'w-full md:w-auto md:min-w-[800px] glass-panel rounded-full h-14 md:h-16 shadow-2xl shadow-gray-200/50' : 'w-full h-16 bg-transparent'}`}>
            {(sc || cv === 'product-detail') && <AuroraBackground />}

            <div className="relative z-10 flex w-full justify-between items-center">
              {/* Logo */}
              <Magnetic>
                <div onClick={handleLogoClick} className="flex items-center px-2 cursor-pointer active:scale-95 transition-transform select-none">
                  <img src="/logo.png" alt="Techos JAC" className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${sc || cv === 'product-detail' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                </div>
              </Magnetic>

              {/* Desktop nav */}
              <nav className="hidden md:flex space-x-6 items-center" aria-label="Navegación principal">
                {NAV_LINKS.map((lnk) => (
                  <Magnetic key={lnk.name}>
                    <a
                      href={lnk.href}
                      onClick={(e) => handleLinkClick(e, lnk)}
                      className={`text-xs font-medium tracking-wide uppercase transition-all duration-300 px-2 py-2 ${lnk.view === 'arquitectos' ? 'text-amber-600 hover:text-amber-500 font-black' : glc(lnk)}`}
                    >
                      {lnk.name}
                    </a>
                  </Magnetic>
                ))}
              </nav>

              <div className="hidden md:block w-10" />

              {/* Mobile hamburger */}
              <div className="md:hidden flex items-center gap-4">
                <button onClick={() => setMob(!mob)} className="p-1 text-slate-900" aria-label="Abrir menú">
                  {mob ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mob && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-50/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-6"
          >
            {allMobileLinks.map((lnk) => (
              <a
                key={lnk.name}
                href={lnk.href}
                onClick={(e) => handleLinkClick(e, lnk)}
                className="text-2xl font-light text-slate-900 tracking-tight hover:text-red-600 transition-colors"
              >
                {lnk.name}
              </a>
            ))}
            <button
              onClick={(e) => e.detail === 2 && onAdminClick()}
              className="text-slate-300 text-[10px] mt-10 tracking-[0.3em] uppercase select-none"
            >
              JAC ARGENTINA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;