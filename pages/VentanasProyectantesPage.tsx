import React from 'react';
import ServiceDetailPage, { type ServicePageConfig } from './ServiceDetailPage';
import type { AppNavigate } from '../App';

const config: ServicePageConfig = {
  seo: {
    title: 'Ventanas Proyectantes VELUX GPL | Vistas Panorámicas — Techos JAC Argentina',
    description: 'Ventanas de techo proyectantes VELUX GPL en Argentina. Apertura de 45° para máximas vistas y flujo de aire. Solo en medidas 78×140 y 114×140 cm. Instalación certificada en GBA y CABA.',
    canonical: 'https://techosjac.com.ar/servicios/ventanas-proyectantes',
    ogImage: 'https://techosjac.com.ar/GPL-FULL.png',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Instalación de Ventanas Proyectantes VELUX GPL",
          "provider": { "@type": "LocalBusiness", "name": "Techos JAC", "url": "https://techosjac.com.ar" },
          "areaServed": ["Pilar", "GBA", "CABA", "Argentina"],
          "description": "Venta e instalación de ventanas de techo proyectantes VELUX GPL. Hoja abatible hacia afuera 45°. Panorámicas y con mayor flujo de aire que la pivotante estándar.",
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://techosjac.com.ar/servicios" },
            { "@type": "ListItem", "position": 3, "name": "Ventanas Proyectantes", "item": "https://techosjac.com.ar/servicios/ventanas-proyectantes" },
          ],
        },
      ],
    },
  },
  breadcrumb: 'Ventanas Proyectantes',
  tag: 'Ventanas de Techo · GPL · Proyectante',
  h1: 'Ventanas Proyectantes VELUX GPL',
  subtitle: 'La ventana que se abre como un balcón en el techo. La hoja se proyecta hacia afuera en un ángulo de 45°, ofreciendo vistas panorámicas despejadas y el mayor flujo de aire del catálogo VELUX.',
  models: ['GPL — Proyectante (hoja abatible)'],
  sizes: ['78×140 cm', '114×140 cm'],
  features: [
    { title: 'Apertura proyectante 45°', text: 'La hoja abate hacia afuera. Vistas despejadas sin obstrucción del marco.' },
    { title: 'Mayor flujo de aire', text: 'La apertura proyectada crea un efecto chimenea más eficiente que la pivotante.' },
    { title: 'Vistas panorámicas', text: 'El vidrio queda en posición vertical al abrir: ventana de cielo despejada.' },
    { title: 'Solo medidas grandes', text: 'Disponible en 78×140 y 114×140 cm. El modelo más imponente del catálogo.' },
    { title: 'DVH con argón y low-e', text: 'Aislamiento térmico y acústico superior. Protección UV integrada.' },
    { title: 'Compatible con motorización', text: 'Kits eléctrico y solar disponibles. Control por app VELUX ACTIVE.' },
  ],
  img: '/GPL-FULL.png',
  imgAlt: 'Ventana de techo proyectante VELUX GPL abierta mostrando vistas al exterior',
  specs: [
    { label: 'Apertura', value: '45° exterior' },
    { label: 'Tipo hoja', value: 'Abatible exterior' },
    { label: 'Marco', value: 'Madera tratada' },
    { label: 'Medidas', value: '78×140 / 114×140' },
    { label: 'Ventilación', value: 'Máxima del catálogo' },
    { label: 'Garantía', value: '10 años' },
  ],
  faq: [
    {
      q: '¿Para qué espacios es ideal la GPL proyectante?',
      a: 'Para ático-estudio, living o sala principal donde se quiere maximizar la vista al cielo y la entrada de aire. También es muy usada en terrazas de altillo para crear una zona lounge con vista panorámica.',
    },
    {
      q: '¿Por qué solo viene en medidas grandes?',
      a: 'El diseño proyectante requiere un mínimo de superficie de vidrio para que las vistas sean panorámicas. VELUX solo comercializa la GPL en las medidas donde la experiencia visual es realmente superior.',
    },
  ],
};

const VentanasProyectantesPage: React.FC<{ onNavigate: AppNavigate }> = ({ onNavigate }) => (
  <ServiceDetailPage config={config} onNavigate={onNavigate} />
);

export default VentanasProyectantesPage;
