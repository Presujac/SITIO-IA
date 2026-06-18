import React from 'react';
import ServiceDetailPage, { type ServicePageConfig } from './ServiceDetailPage';
import type { AppNavigate } from '../App';

const config: ServicePageConfig = {
  seo: {
    title: 'Ventanas para Techo Plano VELUX CFP y CVP | Cúpula Acrílica — Techos JAC Argentina',
    description: 'Ventanas VELUX para techo plano CFP y CVP en Argentina. Cúpula acrílica de 60×60 a 120×120 cm. Solución para losas y terrazas. Instalación certificada en Pilar, GBA y CABA.',
    canonical: 'https://techosjac.com.ar/servicios/techo-plano',
    ogImage: 'https://techosjac.com.ar/CFP.jpg',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Instalación de Ventanas para Techo Plano VELUX CFP y CVP",
          "provider": { "@type": "LocalBusiness", "name": "Techos JAC", "url": "https://techosjac.com.ar" },
          "areaServed": ["Pilar", "GBA", "CABA", "Argentina"],
          "description": "Venta e instalación de ventanas VELUX para techo plano. Modelos CFP (fija) y CVP (apertura). Cúpula acrílica para losas y terrazas horizontales.",
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://techosjac.com.ar/servicios" },
            { "@type": "ListItem", "position": 3, "name": "Techo Plano", "item": "https://techosjac.com.ar/servicios/techo-plano" },
          ],
        },
      ],
    },
  },
  breadcrumb: 'Techo Plano',
  tag: 'Ventanas de Techo · CFP · CVP · Losa',
  h1: 'Ventanas VELUX para Techo Plano',
  subtitle: 'Solución específica para losas y cubiertas horizontales. Cúpula acrílica de doble cámara que incorpora luz natural a espacios imposibles de iluminar con ventanas convencionales.',
  models: ['CFP — Techo plano fija', 'CVP — Techo plano con apertura'],
  sizes: ['60×60 cm', '60×90 cm', '80×80 cm', '120×120 cm'],
  features: [
    { title: 'Cúpula acrílica de doble cámara', text: 'Alta transmisión de luz con excelente aislamiento térmico. Resiste granizo y lluvia intensa.' },
    { title: 'Collarín de hormigón incluido', text: 'El kit incluye el marco elevador (collarín) para garantizar la impermeabilización.' },
    { title: 'Modelo CFP fijo y CVP con apertura', text: 'El CFP solo transmite luz. El CVP se abre para ventilación adicional.' },
    { title: 'Cuatro medidas estándar', text: '60×60, 60×90, 80×80 y 120×120 cm. Compatible con modular de losa estándar.' },
    { title: 'Sin infiltraciones', text: 'Sistema de impermeabilización perimetral de fábrica. Llave en mano.' },
    { title: 'Instalación en un día', text: 'La instalación de una cúpula de techo plano se realiza en pocas horas de trabajo.' },
  ],
  img: '/CFP.jpg',
  imgAlt: 'Ventana VELUX para techo plano CFP con cúpula acrílica instalada en losa',
  specs: [
    { label: 'Tipo cubierta', value: 'Techo plano / losa' },
    { label: 'Material cúpula', value: 'Acrílico doble cámara' },
    { label: 'Inclinación mínima', value: '0° (plano)' },
    { label: 'Medidas max', value: '120×120 cm' },
    { label: 'Collarín', value: 'Incluido' },
    { label: 'Apertura', value: 'CFP no / CVP sí' },
  ],
  faq: [
    {
      q: '¿Se puede instalar en losa de hormigón?',
      a: 'Sí. El sistema incluye un collarín prefabricado que se fija sobre la losa con impermeabilizante. La instalación es limpia y no requiere demolición.',
    },
    {
      q: '¿Cuál es la diferencia entre CFP y CVP?',
      a: 'El CFP es fijo, solo transmite luz cenital. El CVP tiene una manija que permite levantar la cúpula para ventilación natural. Para espacios sin otra ventilación, el CVP es recomendable.',
    },
    {
      q: '¿La cúpula acrílica amarilla con el tiempo?',
      a: 'VELUX utiliza acrílico con estabilizador UV. El material no amarilla ni se torna opaco con los años. La garantía de fábrica cubre cualquier defecto del material.',
    },
  ],
};

const TechoPlanoPage: React.FC<{ onNavigate: AppNavigate }> = ({ onNavigate }) => (
  <ServiceDetailPage config={config} onNavigate={onNavigate} />
);

export default TechoPlanoPage;
