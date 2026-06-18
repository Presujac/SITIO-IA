import React from 'react';
import ServiceDetailPage, { type ServicePageConfig } from './ServiceDetailPage';
import type { AppNavigate } from '../App';

const config: ServicePageConfig = {
  seo: {
    title: 'Ventanas Pivotantes VELUX GGL y GGU | Distribuidor Oficial Argentina — Techos JAC',
    description: 'Ventanas de techo pivotantes VELUX GGL (madera) y GGU (poliuretano) en Argentina. Apertura central de 15° a 90°. Instalación certificada en Pilar, GBA y CABA. Cotizá gratis.',
    canonical: 'https://techosjac.com.ar/servicios/ventanas-pivotantes',
    ogImage: 'https://techosjac.com.ar/GGL-FULL-1.png',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Instalación de Ventanas Pivotantes VELUX GGL y GGU",
          "provider": { "@type": "LocalBusiness", "name": "Techos JAC", "url": "https://techosjac.com.ar" },
          "areaServed": ["Pilar", "GBA", "CABA", "Argentina"],
          "description": "Venta e instalación certificada de ventanas de techo pivotantes VELUX modelo GGL (madera) y GGU (poliuretano). Apertura central 15°-90°, disponibles en 6 medidas.",
          "url": "https://techosjac.com.ar/servicios/ventanas-pivotantes",
        },
        {
          "@type": "Product",
          "name": "Ventana Pivotante VELUX GGL",
          "brand": { "@type": "Brand", "name": "VELUX" },
          "description": "Ventana de techo pivotante en madera natural con doble vidriado hermético. Marco de pino tratado, apertura central 15° a 90°.",
          "offers": { "@type": "Offer", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Techos JAC" } },
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://techosjac.com.ar/servicios" },
            { "@type": "ListItem", "position": 3, "name": "Ventanas Pivotantes", "item": "https://techosjac.com.ar/servicios/ventanas-pivotantes" },
          ],
        },
      ],
    },
  },
  breadcrumb: 'Ventanas Pivotantes',
  tag: 'Ventanas de Techo · GGL · GGU',
  h1: 'Ventanas Pivotantes VELUX',
  subtitle: 'La ventana de techo más versátil del mercado. Apertura central de 15° a 90° para máxima ventilación y entrada de luz natural. Disponibles en madera (GGL) y poliuretano resistente a la intemperie (GGU).',
  models: ['GGL — Madera', 'GGU — Poliuretano'],
  sizes: ['55×98 cm', '78×98 cm', '78×140 cm', '114×70 cm', '114×118 cm', '114×140 cm'],
  features: [
    { title: 'Doble vidriado hermético', text: 'DVH con cámara de argón para máximo aislamiento térmico y acústico.' },
    { title: 'Apertura central', text: 'Se abre desde el centro del marco: fácil limpieza de ambas caras desde el interior.' },
    { title: 'Control solar integrado', text: 'Vidrio de baja emisividad que bloquea hasta el 62% del calor solar.' },
    { title: 'Compatible con motorización', text: 'Kits de motorización solar o eléctrica disponibles. Sensor de lluvia incluido.' },
    { title: 'Garantía de fábrica', text: '10 años de garantía VELUX sobre el producto. 3 años sobre electrónica.' },
    { title: 'Instalación certificada', text: 'Técnicos certificados directamente por VELUX. Sin subcontratistas.' },
  ],
  img: '/GGL-FULL-1.png',
  imgAlt: 'Ventana de techo pivotante VELUX GGL instalada en techo de tejas',
  specs: [
    { label: 'Apertura', value: '15° a 90°' },
    { label: 'Marco GGL', value: 'Pino tratado' },
    { label: 'Marco GGU', value: 'Poliuretano' },
    { label: 'Vidrio', value: 'DVH + argón' },
    { label: 'Inclinación techo', value: '15° a 90°' },
    { label: 'Garantía', value: '10 años' },
  ],
  faq: [
    {
      q: '¿Cuál es la diferencia entre GGL y GGU?',
      a: 'El GGL tiene marco de madera de pino tratado, ideal para interiores secos y ambientes sin mucha humedad. El GGU tiene marco de poliuretano totalmente impermeable, recomendado para baños, cocinas o zonas húmedas.',
    },
    {
      q: '¿En qué tipos de techo se puede instalar la ventana pivotante?',
      a: 'Se instala en techos de teja (francesa, romana, colonial) y chapa, usando los tapajuntas EDW específicos para cada cubierta. La inclinación del techo debe ser entre 15° y 90°.',
    },
    {
      q: '¿Se puede motorizar una ventana pivotante VELUX?',
      a: 'Sí. Existe un kit de motorización solar que no requiere cableado eléctrico, y un kit eléctrico para conexión a 220V. Ambos incluyen control remoto y sensor de lluvia automático.',
    },
  ],
};

const VentanasPivotantesPage: React.FC<{ onNavigate: AppNavigate }> = ({ onNavigate }) => (
  <ServiceDetailPage config={config} onNavigate={onNavigate} />
);

export default VentanasPivotantesPage;
