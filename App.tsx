import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, MoveRight } from "lucide-react";

// === EAGER (above-the-fold) components ===
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ShippingBanner from "./components/ShippingBanner";
import { PortraitSlider, comparisons } from "./components/AD";

// === LAZY (below-the-fold) components ===
const FAQ = React.lazy(() => import("./components/FAQ"));
const SuccessStories = React.lazy(() => import("./components/SuccessStories"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
const ShowroomBooking = React.lazy(() => import("./components/ShowroomBooking"));
const HomeProducts = React.lazy(() => import("./components/HomeProducts"));
const WhatsAppButton = React.lazy(() => import("./components/WhatsAppButton"));
const RoofWizard = React.lazy(() => import("./components/RoofWizard"));
const InternalPanel = React.lazy(() => import("./components/InternalPanel"));
const Tuneles = React.lazy(() => import("./components/tuneles"));
const InstagramWall = React.lazy(() => import("./components/InstagramWall"));
const Reviews = React.lazy(() => import("./components/Reviews"));
const Footer = React.lazy(() => import("./components/Footer"));
const ArquitectosPage = React.lazy(() => import("./pages/ArquitectosPage"));
const ServiceBanner = React.lazy(() => import("./components/ServiceBanner"));

// === NEW PAGES (lazy) ===
const ServiciosPage = React.lazy(() => import("./pages/ServiciosPage"));
const VentanasPivotantesPage = React.lazy(() => import("./pages/VentanasPivotantesPage"));
const VentanasSolaresPage = React.lazy(() => import("./pages/VentanasSolaresPage"));
const VentanasFijasPage = React.lazy(() => import("./pages/VentanasFijasPage"));
const VentanasProyectantesPage = React.lazy(() => import("./pages/VentanasProyectantesPage"));
const TechoPlanoPage = React.lazy(() => import("./pages/TechoPlanoPage"));
const TunelesSolaresPage = React.lazy(() => import("./pages/TunelesSolaresPage"));
const ContactoPage = React.lazy(() => import("./pages/ContactoPage"));
const NosotrosPage = React.lazy(() => import("./pages/NosotrosPage"));
const GaleriaPage = React.lazy(() => import("./pages/GaleriaPage"));
const PresupuestoPage = React.lazy(() => import("./pages/PresupuestoPage"));
const PreguntasFrecuentesPage = React.lazy(() => import("./pages/PreguntasFrecuentesPage"));

// === ROUTING TYPES ===
export type AppView =
  | "home"
  | "product-detail"
  | "admin"
  | "servicios"
  | "servicios/ventanas-pivotantes"
  | "servicios/ventanas-solares"
  | "servicios/ventanas-fijas"
  | "servicios/ventanas-proyectantes"
  | "servicios/techo-plano"
  | "servicios/tuneles-solares"
  | "contacto"
  | "nosotros"
  | "galeria"
  | "presupuesto"
  | "preguntas-frecuentes"
  | "arquitectos";

export type AppNavigate = (view: AppView, sectionId?: string) => void;

// Legacy type alias for components that only handle narrow views
type NarrowView = "home" | "product-detail" | "admin";
type NarrowNavigate = (vw: NarrowView, sectionId?: string) => void;

const PATH_TO_VIEW: Record<string, AppView> = {
  "/": "home",
  "/productos": "product-detail",
  "/admin": "admin",
  "/servicios": "servicios",
  "/servicios/ventanas-pivotantes": "servicios/ventanas-pivotantes",
  "/servicios/ventanas-solares": "servicios/ventanas-solares",
  "/servicios/ventanas-fijas": "servicios/ventanas-fijas",
  "/servicios/ventanas-proyectantes": "servicios/ventanas-proyectantes",
  "/servicios/techo-plano": "servicios/techo-plano",
  "/servicios/tuneles-solares": "servicios/tuneles-solares",
  "/contacto": "contacto",
  "/nosotros": "nosotros",
  "/galeria": "galeria",
  "/presupuesto": "presupuesto",
  "/preguntas-frecuentes": "preguntas-frecuentes",
  "/arquitectos": "arquitectos",
};

function viewToPath(view: AppView): string {
  if (view === "home") return "/";
  if (view === "product-detail") return "/productos";
  return "/" + view;
}

function isNarrowView(v: AppView): v is NarrowView {
  return v === "home" || v === "product-detail" || v === "admin";
}

// Spinner fallback
const SectionFallback: React.FC = () => (
  <div className="w-full flex items-center justify-center py-16" aria-hidden="true">
    <div className="w-6 h-6 border-2 border-slate-200 border-t-slate-500 rounded-full animate-spin" />
  </div>
);

// Fire GA4 + Meta Pixel pageview
function trackPageView(path: string) {
  if (typeof window.gtag === "function") {
    window.gtag("config", "G-P409RTB01L", { page_path: path });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(() => {
    return PATH_TO_VIEW[window.location.pathname] ?? "home";
  });
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminAuth, setAdminAuth] = useState({ user: "", pass: "" });

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPop = () => {
      const v = PATH_TO_VIEW[window.location.pathname] ?? "home";
      setView(v);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Admin keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "j") {
        e.preventDefault();
        setShowAdminModal(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminAuth.user.toLowerCase() === "jac" && adminAuth.pass === "2026") {
      setShowAdminModal(false);
      setAdminAuth({ user: "", pass: "" });
      navigate("admin");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const navigate: AppNavigate = (vw, sid) => {
    setView(vw);
    const path = viewToPath(vw);
    window.history.pushState({}, "", path);
    trackPageView(path);

    if (sid) {
      setTimeout(() => {
        const el = document.getElementById(sid);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  };

  // For Header/Footer that expect NarrowNavigate
  const narrowNavigate: NarrowNavigate = (vw, sid) => {
    navigate(vw === "admin" ? "admin" : vw === "product-detail" ? "product-detail" : "home", sid);
  };

  const isHomeLike = view === "home";
  const isAdmin = view === "admin";
  const isProductDetail = view === "product-detail";
  const isPage = !isHomeLike && !isAdmin && !isProductDetail;

  // Header currentView mapping
  const headerView: NarrowView = isProductDetail ? "product-detail" : isAdmin ? "admin" : "home";

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 overflow-x-hidden selection:bg-red-500 selection:text-white">

      {/* Admin login modal */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100"
            >
              <div className="p-6 md:p-12">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-600 p-2 rounded-lg text-white"><Lock size={18} /></div>
                    <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tighter">Acceso JAC</h2>
                  </div>
                  <button onClick={() => setShowAdminModal(false)} className="text-slate-400 hover:text-black transition-colors">
                    <X size={24} />
                  </button>
                </div>
                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 mb-2 block">Usuario</label>
                    <input autoFocus type="text" className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-black outline-none focus:ring-2 ring-red-600 transition-all font-bold" value={adminAuth.user} onChange={(e) => setAdminAuth({ ...adminAuth, user: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 mb-2 block">Contraseña</label>
                    <input type="password" className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-black outline-none focus:ring-2 ring-red-600 transition-all font-bold" value={adminAuth.pass} onChange={(e) => setAdminAuth({ ...adminAuth, pass: e.target.value })} />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-600 transition-all shadow-lg italic mt-4">Ingresar al Panel</button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense fallback={<SectionFallback />}>
        {isAdmin ? (
          <InternalPanel onExit={() => navigate("home")} />
        ) : (
          <>
            <Header
              currentView={headerView}
              onNavigate={narrowNavigate}
              onAdminClick={() => setShowAdminModal(true)}
              onNavigateApp={navigate}
            />
            {!isPage && <ShippingBanner />}

            <main>
              <AnimatePresence mode="wait">

                {/* HOME */}
                {isHomeLike && (
                  <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <HeroSlider onCTA={() => navigate("home", "wizard-anchor")} />

                    {/* ESPACIOS QUE ILUMINAMOS */}
                    <section className="relative bg-[#0b0b0b] py-24 md:py-36 overflow-hidden">
                      {/* Ambient glows */}
                      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
                      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[120px] pointer-events-none" />

                      <div className="max-w-7xl mx-auto px-4 md:px-10">

                        {/* Header */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          className="mb-14 md:mb-20"
                        >
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-amber-400/70" />
                            <span className="text-amber-400/80 text-[9px] font-black uppercase tracking-[0.5em]">
                              Portfolio · Obras reales 2026
                            </span>
                          </div>

                          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <h2 className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-[1000] tracking-tighter text-white uppercase italic leading-[0.85]">
                              Espacios<br />
                              que <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">iluminamos.</span>
                            </h2>

                            <div className="max-w-sm shrink-0">
                              <p className="text-white/35 text-sm leading-relaxed mb-6 font-light">
                                Deslizá sobre cada foto para ver la transformación. Obras reales instaladas por nuestro equipo certificado VELUX.
                              </p>
                              <a href="https://instagram.com/techosjac" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 border border-white/10 hover:border-amber-400/40 hover:bg-amber-400/5 text-white pl-6 pr-4 py-3.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500 group">
                                Ver más en Instagram
                                <div className="bg-white/8 group-hover:bg-amber-400/15 p-2 rounded-full transition-all">
                                  <MoveRight size={12} />
                                </div>
                              </a>
                            </div>
                          </div>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                          <div className="md:row-span-2 min-h-[300px] md:min-h-0">
                            <PortraitSlider pair={comparisons[0]} index={0} className="h-full min-h-[300px] md:min-h-0" />
                          </div>
                          {comparisons.slice(1).map((pair, i) => (
                            <PortraitSlider key={pair.id} pair={pair} index={i + 1} aspectRatio="4/3" />
                          ))}
                        </div>

                        {/* Stats row */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="mt-10 grid grid-cols-3 divide-x divide-white/5 border border-white/5 rounded-2xl overflow-hidden"
                        >
                          {[
                            { n: '200+', label: 'Obras instaladas' },
                            { n: '15', label: 'Años de experiencia' },
                            { n: '100%', label: 'Instalación certificada' },
                          ].map(({ n, label }) => (
                            <div key={label} className="px-6 py-7 text-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                              <div className="text-2xl md:text-3xl font-[1000] text-white italic tracking-tighter mb-1">{n}</div>
                              <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25">{label}</div>
                            </div>
                          ))}
                        </motion.div>

                      </div>
                    </section>
                    <div className="bg-white">
                      <Suspense fallback={<SectionFallback />}>
                        <section id="wizard-anchor" className="bg-slate-950 py-16 md:py-24"><RoofWizard onNavigate={navigate} /></section>
                      </Suspense>
                      <Suspense fallback={<SectionFallback />}><HomeProducts onNavigate={navigate} /></Suspense>
                      <Suspense fallback={<SectionFallback />}><ServiceBanner /></Suspense>
                      <Suspense fallback={<SectionFallback />}><Tuneles /></Suspense>
                      <Suspense fallback={<SectionFallback />}>
                        <section id="success-stories" className="py-8 md:py-12"><SuccessStories /></section>
                      </Suspense>
                      <Suspense fallback={<SectionFallback />}><Reviews /></Suspense>
                      <Suspense fallback={<SectionFallback />}><InstagramWall /></Suspense>
                      <Suspense fallback={<SectionFallback />}>
                        <section id="faq" className="py-8 md:py-12 bg-slate-50 md:bg-transparent"><FAQ /></section>
                      </Suspense>
                    </div>
                    <Suspense fallback={<SectionFallback />}><ShowroomBooking /></Suspense>
                  </motion.div>
                )}

                {/* PRODUCT DETAIL */}
                {isProductDetail && (
                  <Suspense key="products" fallback={<SectionFallback />}>
                    <ProductDetail
                      onBack={() => navigate("home")}
                      onContact={() => navigate("contacto")}
                      onStartWizard={() => navigate("home", "wizard-anchor")}
                    />
                  </Suspense>
                )}

                {/* NEW PAGES */}
                {view === "servicios" && (
                  <Suspense key="servicios" fallback={<SectionFallback />}>
                    <ServiciosPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "servicios/ventanas-pivotantes" && (
                  <Suspense key="pivotantes" fallback={<SectionFallback />}>
                    <VentanasPivotantesPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "servicios/ventanas-solares" && (
                  <Suspense key="solares" fallback={<SectionFallback />}>
                    <VentanasSolaresPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "servicios/ventanas-fijas" && (
                  <Suspense key="fijas" fallback={<SectionFallback />}>
                    <VentanasFijasPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "servicios/ventanas-proyectantes" && (
                  <Suspense key="proyectantes" fallback={<SectionFallback />}>
                    <VentanasProyectantesPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "servicios/techo-plano" && (
                  <Suspense key="techo-plano" fallback={<SectionFallback />}>
                    <TechoPlanoPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "servicios/tuneles-solares" && (
                  <Suspense key="tuneles" fallback={<SectionFallback />}>
                    <TunelesSolaresPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "contacto" && (
                  <Suspense key="contacto" fallback={<SectionFallback />}>
                    <ContactoPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "nosotros" && (
                  <Suspense key="nosotros" fallback={<SectionFallback />}>
                    <NosotrosPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "galeria" && (
                  <Suspense key="galeria" fallback={<SectionFallback />}>
                    <GaleriaPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "presupuesto" && (
                  <Suspense key="presupuesto" fallback={<SectionFallback />}>
                    <PresupuestoPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "preguntas-frecuentes" && (
                  <Suspense key="preguntas-frecuentes" fallback={<SectionFallback />}>
                    <PreguntasFrecuentesPage onNavigate={navigate} />
                  </Suspense>
                )}
                {view === "arquitectos" && (
                  <Suspense key="arquitectos" fallback={<SectionFallback />}>
                    <ArquitectosPage onNavigate={navigate} />
                  </Suspense>
                )}

              </AnimatePresence>
            </main>

            <Suspense fallback={null}><WhatsAppButton /></Suspense>
            <Suspense fallback={null}>
              <Footer onNavigate={narrowNavigate} onNavigateApp={navigate} />
            </Suspense>
          </>
        )}
      </Suspense>
    </div>
  );
};

export default App;


