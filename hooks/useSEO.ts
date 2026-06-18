import { useEffect } from 'react';

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attr: string, key: string, value: string) {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (el) el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  const el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (el) el.setAttribute('href', href);
}

export function useSEO({ title, description, canonical, ogImage, schema }: SEOMeta) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setLink('canonical', canonical);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (ogImage) setMeta('property', 'og:image', ogImage);

    const SCHEMA_ID = 'dynamic-page-schema';
    document.getElementById(SCHEMA_ID)?.remove();
    if (schema) {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = SCHEMA_ID;
      el.textContent = JSON.stringify(schema);
      document.head.appendChild(el);
    }
  }, [title, description, canonical, ogImage]);
}

export const HOME_SEO: SEOMeta = {
  title: 'Ventanas de Techo VELUX | Distribuidor Oficial Argentina — Techos JAC',
  description: 'Distribuidor oficial e importador directo de ventanas de techo VELUX en Argentina. Instalación certificada en Pilar, GBA y CABA. Más de 4.000 ventanas instaladas. Cotizá sin cargo.',
  canonical: 'https://techosjac.com.ar/',
  ogImage: 'https://techosjac.com.ar/cabrio.jpg',
};
