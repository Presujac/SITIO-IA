import React from 'react';
import ServiceDetailPage, { type ServicePageConfig } from './ServiceDetailPage';
import type { AppNavigate } from '../App';

const config: ServicePageConfig = {
  seo: {
    title: 'Túneles Solares VELUX TWR y TWF | Luz Natural sin Obra Mayor — Techos JAC Argentina',
    description: 'Túneles de luz solar VELUX TWR (rígido) y TWF (flexible) en Argentina. Iluminación natural donde no llega una ventana. 35 cm de diámetro. Instalación certificada en Pilar, GBA y CABA.',
    canonical: 'https://techosjac.com.ar/servicios/tuneles-solares',
    ogImage: 'https://techosjac.com.ar/TWR-1.jpg',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Instalación de Túneles Solares VELUX TWR y TWF",
          "provider": { "@type": "LocalBusiness", "name": "Techos JAC", "url": "https://techosjac.com.ar" },
          "areaServed": ["Pilar", "GBA", "CABA", "Argentina"],
          "description": "Venta e instalación de túneles solares VELUX. TWR (tubo rígido) y TWF (tubo flexible). Iluminación natural en espacios donde no es posible instalar una ventana de techo convencional.",
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://techosjac.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://techosjac.com.ar/servicios" },
            { "@type": "ListItem", "position": 3, "name": "Túneles Solares", "item": "https://techosjac.com.ar/servicios/tuneles-solares" },
          ],
        },
      ],
    },
  },
  breadcrumb: 'Túneles Solares',
  tag: 'Túneles de Luz · TWR · TWF · Solar',
  h1: 'Túneles Solares VELUX',
  subtitle: 'Llevá la luz del sol a cualquier espacio sin necesidad de una ventana de techo convencional. Un tubo reflectante conecta el exterior con el interior en pocas horas de instalación y sin obra estructural.',
  models: ['TWR — Tubo rígido', 'TWF — Tubo flexible'],
  sizes: ['35 cm diámetro (estándar)'],
  features: [
    { title: 'Sin obra estructural', text: 'No requiere refuerzos de viga ni modificaciones en la estructura del techo.' },
    { title: 'TWR rígido máxima eficiencia', text: 'Tubo rígido con reflexión superior al 98%. Ideal para recorridos cortos y directos.' },
    { title: 'TWF flexible para obstáculos', text: 'El tubo flexible sortea vigas, cielorrasos y otros obstáculos en recorridos complejos.' },
    { title: 'Cúpula de captación UV', text: 'Cúpula acrílica que capta luz incluso en días nublados.' },
    { title: 'Difusor empotrado', text: 'El difusor interior se instala en el cielorraso y parece una luminaria circular de diseño.' },
    { title: 'Instalación en medio día', text: 'Un túnel solar estándar se instala en 3-4 horas. Mínima suciedad y sin demolición.' },
  ],
  img: '/TWR-1.jpg',
  imgAlt: 'Túnel solar VELUX TWR instalado con difusor en cielorraso interior',
  specs: [
    { label: 'Diámetro tubo', value: '35 cm' },
    { label: 'TWR reflexión', value: '>98%' },
    { label: 'Recorrido máx', value: 'Hasta 6 m' },
    { label: 'Instalación', value: '3-4 horas' },
    { label: 'Obra requerida', value: 'Mínima' },
    { label: 'Garantía', value: '10 años' },
  ],
  faq: [
    {
      q: '¿Cuánta luz aporta un túnel solar de 35 cm?',
      a: 'Un túnel de 35 cm equivale aproximadamente a 2-3 luminarias de 60W en un día soleado. Para un baño o pasillo de entre 4 y 8 m², la iluminación es más que suficiente.',
    },
    {
      q: '¿Cuál elijo: TWR rígido o TWF flexible?',
      a: 'El TWR rígido es más eficiente y se usa cuando el recorrido entre el techo y el cielorraso es corto y sin obstáculos. El TWF flexible se usa cuando hay vigas, ductos u otros elementos que obligan a curvar el tubo.',
    },
    {
      q: '¿El túnel solar filtra calor en verano?',
      a: 'Sí. La cúpula incluye un filtro de control solar que reduce la transmisión de calor. En verano transmite luz sin calentar el ambiente como lo haría un vidrio sin tratamiento.',
    },
  ],
};

const TunelesSolaresPage: React.FC<{ onNavigate: AppNavigate }> = ({ onNavigate }) => (
  <ServiceDetailPage config={config} onNavigate={onNavigate} />
);

export default TunelesSolaresPage;
