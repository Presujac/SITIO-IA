import React from 'react';
import ServiceDetailPage, { type ServicePageConfig } from './ServiceDetailPage';
import type { AppNavigate } from '../App';

const config: ServicePageConfig = {
  seo: {
    title: 'Ventanas de Techo Solares VELUX VSS | Motorización Autónoma — Techos JAC Argentina',
    description: 'Ventanas de techo solares VELUX VSS en Argentina. Motorización solar autónoma, sensor de lluvia y control remoto. Sin obra eléctrica. Instalación certificada en Pilar, GBA y CABA.',
    canonical: 'https://techosjac.com.ar/servicios/ventanas-solares',
    ogImage: 'https://techosjac.com.ar/solar-e1633054424707.png',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Instalación de Ventanas Solares VELUX VSS",
          "provider": { "@type": "LocalBusiness", "name": "Techos JAC", "url": "https://techosjac.com.ar" },
          "areaServed": ["Pilar", "GBA", "CABA", "Argentina"],
          "description": "Venta e instalación certificada de ventanas de techo solares VELUX VSS. Motorización solar autónoma con panel integrado, sensor de lluvia, control remoto.",
        },
        {
          "@type": "Product",
          "name": "Ventana Solar VELUX VSS",
          "brand": { "@type": "Brand", "name": "VELUX" },
          "description": "Ventana de techo con motorización solar integrada. Panel solar en el marco exterior recarga la batería interna. Sensor de lluvia cierra la ventana automáticamente.",
          "offers": { "@type": "Offer", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Techos JAC" } },
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://techosjac.com.ar/servicios" },
            { "@type": "ListItem", "position": 3, "name": "Ventanas Solares", "item": "https://techosjac.com.ar/servicios/ventanas-solares" },
          ],
        },
      ],
    },
  },
  breadcrumb: 'Ventanas Solares',
  tag: 'Ventanas de Techo · VSS · Solar',
  h1: 'Ventanas Solares VELUX VSS',
  subtitle: 'La ventana de techo más inteligente: motorización solar autónoma sin obra eléctrica. El panel solar integrado en el marco carga la batería interna. Sensor de lluvia que cierra automáticamente.',
  models: ['VSS — Solar Motorizada'],
  sizes: ['78×98 cm', '78×140 cm', '114×118 cm'],
  features: [
    { title: 'Panel solar integrado', text: 'El propio marco carga la batería. Sin cableado eléctrico, sin obra adicional.' },
    { title: 'Sensor de lluvia', text: 'Detecta la lluvia y cierra la ventana automáticamente aunque no estés en casa.' },
    { title: 'Control remoto incluido', text: 'Mando inalámbrico de largo alcance. Compatible con VELUX ACTIVE y app.' },
    { title: 'Doble vidriado con argón', text: 'Máximo aislamiento térmico y acústico. Baja emisividad (low-e).' },
    { title: 'VELUX ACTIVE compatible', text: 'Integración con sensores de CO₂ y temperatura para ventilación automática.' },
    { title: 'Garantía de fábrica', text: '10 años de garantía VELUX. 3 años sobre electrónica y motor.' },
  ],
  img: '/solar-e1633054424707.png',
  imgAlt: 'Ventana de techo solar VELUX VSS con panel integrado',
  specs: [
    { label: 'Motorización', value: 'Solar autónoma' },
    { label: 'Batería', value: 'Recargable integrada' },
    { label: 'Sensor lluvia', value: 'Incluido' },
    { label: 'Control', value: 'Remoto + App' },
    { label: 'Vidrio', value: 'DVH low-e' },
    { label: 'Garantía', value: '10 / 3 años' },
  ],
  faq: [
    {
      q: '¿La ventana solar funciona sin sol?',
      a: 'Sí. La batería interna almacena energía para operar la ventana incluso varios días nublados. En condiciones normales, la batería se mantiene cargada con la luz ambiente.',
    },
    {
      q: '¿Requiere alguna obra eléctrica?',
      a: 'No. La VSS es 100% autónoma. Solo se instala la ventana en la estructura del techo, sin necesidad de tendido eléctrico ni electricista.',
    },
    {
      q: '¿Qué pasa si llueve y la ventana está abierta?',
      a: 'El sensor de lluvia detecta las primeras gotas y cierra la ventana automáticamente, en segundos. El sensor funciona incluso con la batería en bajo nivel de carga.',
    },
  ],
};

const VentanasSolaresPage: React.FC<{ onNavigate: AppNavigate }> = ({ onNavigate }) => (
  <ServiceDetailPage config={config} onNavigate={onNavigate} />
);

export default VentanasSolaresPage;
