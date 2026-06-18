import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { schemaBreadcrumb } from '../seo/schemas';
import type { AppNavigate } from '../App';
import EventosComunidad from '../components/EventosComunidad';

const _s = String.fromCharCode(47);
const _h = 'https:' + _s + _s;

interface Props { onNavigate: AppNavigate; }

const ArquitectosPage: React.FC<Props> = ({ onNavigate }) => {
  useSEO({
    title: 'Arquitectos | Techos JAC Argentina',
    description: 'Comunidad de arquitectos VELUX Argentina. Eventos, networking y soluciones de luz natural para proyectos.',
    canonical: _h + 'techosjac.com.ar' + _s + 'arquitectos',
    schema: { "@context": _h + 'schema.org', "@graph": [ schemaBreadcrumb([{ name: 'Inicio', url: _s }, { name: 'Para Arquitectos', url: _s + 'arquitectos' }]) ] },
  });

  return (
    <div id="arquitectos-content" className="min-h-screen bg-[#0a0a0a]">
      <EventosComunidad />
    </div>
  );
};

export default ArquitectosPage;
