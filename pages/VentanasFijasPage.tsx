import React from 'react';
import ServiceDetailPage, { type ServicePageConfig } from './ServiceDetailPage';
import type { AppNavigate } from '../App';

const config: ServicePageConfig = {
  seo: {
    title: 'Ventanas de Techo Fijas VELUX FS | Luz Cenital — Techos JAC Argentina',
    description: 'Ventanas de techo fijas VELUX FS en Argentina. Máxima entrada de luz cenital sin apertura. Mejor precio del catálogo. Vidrio de control solar UV. Instalación en Pilar, GBA y CABA.',
    canonical: 'https://techosjac.com.ar/servicios/ventanas-fijas',
    ogImage: 'https://techosjac.com.ar/fija-e1633054439171.png',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Instalación de Ventanas Fijas VELUX FS",
          "provider": { "@type": "LocalBusiness", "name": "Techos JAC", "url": "https://techosjac.com.ar" },
          "areaServed": ["Pilar", "GBA", "CABA", "Argentina"],
          "description": "Venta e instalación certificada de ventanas de techo fijas VELUX FS. Máxima luz cenital sin apertura. El modelo más económico del catálogo VELUX.",
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://techosjac.com.ar/servicios" },
            { "@type": "ListItem", "position": 3, "name": "Ventanas Fijas", "item": "https://techosjac.com.ar/servicios/ventanas-fijas" },
          ],
        },
      ],
    },
  },
  breadcrumb: 'Ventanas Fijas',
  tag: 'Ventanas de Techo · FS · Luz cenital',
  h1: 'Ventanas Fijas VELUX FS',
  subtitle: 'La solución más económica para incorporar luz natural cenital. Sin mecanismo de apertura: máxima entrada de luz con el menor costo del catálogo VELUX. Ideal cuando la ventilación no es prioritaria.',
  models: ['FS — Fija (solo luz)'],
  sizes: ['78×98 cm', '78×140 cm', '114×118 cm'],
  features: [
    { title: 'Máxima transmisión de luz', text: 'Sin mecanismos de apertura: toda la sección de vidrio transmite luz al interior.' },
    { title: 'Control solar UV', text: 'Vidrio con filtro UV que protege muebles y tejidos de la decoloración.' },
    { title: 'Doble vidriado térmico', text: 'DVH con cámara de argón. Evita condensación y pérdidas de calor.' },
    { title: 'Marco de madera tratada', text: 'Pino finger-joint tratado con barniz blanco. Resistente y de bajo mantenimiento.' },
    { title: 'Mejor precio del catálogo', text: 'Al no tener mecanismo de apertura, es la opción más accesible de VELUX.' },
    { title: 'Instalación certificada', text: 'Técnicos VELUX. Garantía de estanqueidad sobre la instalación.' },
  ],
  img: '/fija-e1633054439171.png',
  imgAlt: 'Ventana de techo fija VELUX FS instalada en techo inclinado',
  specs: [
    { label: 'Apertura', value: 'No abre' },
    { label: 'Función', value: 'Solo luz' },
    { label: 'Marco', value: 'Madera tratada' },
    { label: 'Vidrio', value: 'DVH UV control' },
    { label: 'Precio relativo', value: 'Más económica' },
    { label: 'Garantía', value: '10 años' },
  ],
  faq: [
    {
      q: '¿Cuándo conviene una ventana fija en lugar de una pivotante?',
      a: 'Cuando el espacio ya tiene buena ventilación natural y solo necesita más luz. También es ideal en alturas inaccesibles donde la apertura no sería práctica, o cuando el presupuesto es ajustado.',
    },
    {
      q: '¿Se puede combinar una ventana fija con una pivotante?',
      a: 'Sí, es una combinación muy frecuente: una pivotante para ventilación y una fija adyacente para maximizar la entrada de luz. El resultado es visualmente uniforme ya que los marcos son idénticos.',
    },
  ],
};

const VentanasFijasPage: React.FC<{ onNavigate: AppNavigate }> = ({ onNavigate }) => (
  <ServiceDetailPage config={config} onNavigate={onNavigate} />
);

export default VentanasFijasPage;
