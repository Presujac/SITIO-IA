export const ASSETS = {
  heroBg: "/fondo2.jpg",
  chinaSuarez: "/china.jpeg",
  danielArcucci: "/dios.png",
  marcelaKloosterboer: "/marcela.jpeg",
  productHero: "/ventana_inclinados.png",
  modelPivot: "/GGL-FULL-1.png",
  modelBathroom: "/GGU-PREMIUM.png",
  modelProjecting: "/GPL-FULL.png",
  modelSolar: "/solar-e1633054424707.png",
  modelFixed: "/fija-e1633054439171.png",
  modelTunnel: "/TWR-1.jpg",
  modelTunnelFlexible: "/TWF.jpg",
  modelFlat: "/CFP.jpg",
  modelFlatOpening: "/CVP-1.jpg",
  showroom: "/marcela.jpeg",
storyDark:
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920&auto=format&fit=crop",
  storyTech: "/techos_inclinados.png",
  storyLight: "/cabrio2.jpg",
};

export const SUCCESS_STORIES = [
  {
    id: "cine-casa",
    title: "Cine en CASA",
    client: "China Suárez",
    image: ASSETS.chinaSuarez,
    description:
      "Transformación total de un altillo en un espacio de relax y entretenimiento. Instalación de ventanas VELUX para control lumínico y ventilación natural.",
    quote: "El lugar favorito de mi casa.",
  },
  {
    id: "oficina-d10s",
    title: "La oficina de D10S",
    client: "Daniel Arcucci",
    image: ASSETS.danielArcucci,
    description:
      "Un ambiente de trabajo inspirador para el reconocido periodista. Iluminación cenital estratégica para resaltar la colección de memorabilias de Diego Maradona.",
    quote: "Luz perfecta para contar historias.",
  },
  {
    id: "iluminacion-perfecta",
    title: "Iluminación PERFECTA",
    client: "Marcela Kloosterboer",
    image: ASSETS.marcelaKloosterboer,
    description:
      "Renovación de espacios interiores priorizando la luz natural. Soluciones estéticas que combinan diseño moderno con máxima funcionalidad energética.",
    quote: "Cambió la energía de mi hogar.",
  },
];

export interface RoofModelVariant {
  code: string;
  name: string;
  description: string;
  features: { title: string; text: string }[];
  installNote: string;
  image: string;
}

export interface RoofCategory {
  id: string;
  title: string;
  subtitle: string;
  sizes: string[];
  variants: RoofModelVariant[];
}

export const ROOF_MODELS: RoofCategory[] = [
  {
    id: "pivotante",
    title: "Pivotante",
    subtitle: "Apertura central para máxima versatilidad",
    sizes: [
      "55x98 cm",
      "78x98 cm",
      "78x140 cm",
      "114x70 cm",
      "114x118 cm",
      "114x140 cm",
    ],
    variants: [
      {
        code: "GGL",
        name: "GGL Full",
        description:
          "La barra de apertura y ventilación de la ventana para techo inclinado VELUX GGL ofrece un máximo confort debido a su diseño ergonómico. Fabricada en pino nórdico, incluye filtro de aire y sistema ThermoTechnology™. Termopanel con vidrio interior laminado y exterior endurecido.",
        features: [
          { title: "Material", text: "Pino nórdico natural" },
          { title: "Interior", text: "Madera natural" },
          { title: "Exterior", text: "Gris plomo" },
          { title: "Aislación", text: "ThermoTechnology™ + Low-E" },
          { title: "Operación", text: "Barra superior ergonómica" },
          { title: "Pendiente", text: "15° a 90°" },
        ],
        installNote:
          "El producto debe adquirirse junto con el cerco EDW + código con letra K (ej: EDW MK04).",
        image: ASSETS.modelPivot,
      },
      {
        code: "GGU",
        name: "GGU Premium",
        description:
          "Ideal para espacios húmedos como cocinas y baños gracias a su recubrimiento en poliuretano blanco libre de mantenimiento. Cuenta con núcleo de madera tratada térmicamente y termopanel laminado de seguridad.",
        features: [
          {
            title: "Material",
            text: "Poliuretano blanco (Libre mantenimiento)",
          },
          { title: "Interior", text: "Poliuretano blanco" },
          { title: "Exterior", text: "Gris plomo" },
          { title: "Uso Ideal", text: "Baños y Cocinas" },
          { title: "Seguridad", text: "Vidrio interior laminado" },
          { title: "Aislación", text: "ThermoTechnology™" },
        ],
        installNote:
          "El producto debe adquirirse junto con el cerco EDW + código con letra K (ej: EDW MK04).",
        image: ASSETS.modelBathroom,
      },
    ],
  },
  {
    id: "proyectante",
    title: "Proyectante",
    subtitle: "Vistas panorámicas y sensación de balcón",
    sizes: ["78x140 cm", "114x140 cm"],
    variants: [
      {
        code: "GPL",
        name: "GPL Full",
        description:
          "Diseñada para aumentar la sensación de espacio. Su apertura proyectante hasta 45° ofrece vistas ininterrumpidas. También gira 180° para limpieza. Incluye aleta de ventilación exclusiva. Solo disponible en medidas 78x140 y 114x140.",
        features: [
          { title: "Apertura", text: "Proyectante 45° + Giratoria" },
          { title: "Interior", text: "Madera natural" },
          { title: "Exterior", text: "Gris plomo" },
          { title: "Vistas", text: "Panorámicas sin obstrucciones" },
          { title: "Ventilación", text: "Aleta con filtro de aire" },
          { title: "Pendiente", text: "15° a 55°" },
        ],
        installNote:
          "El producto debe adquirirse junto con el cerco EDW + código con letra K (ej: EDW MK08). Solo disponible en 78x140 y 114x140.",
        image: ASSETS.modelProjecting,
      },
    ],
  },
  {
    id: "solar",
    title: "Solar",
    subtitle: "Tecnología autónoma y confort inteligente",
    sizes: ["78x98 cm", "78x140 cm", "114x118 cm"],
    variants: [
      {
        code: "VSS",
        name: "VSS Blanca",
        description:
          "Cuenta con un panel solar que captura la luz natural para recargar sus baterías. Sistema completamente inalámbrico con sensor de lluvia que cierra la ventana automáticamente.",
        features: [
          { title: "Energía", text: "Panel Solar Integrado" },
          { title: "Interior", text: "Madera pintada de blanco" },
          { title: "Exterior", text: "Gris plomo" },
          { title: "Control", text: "Remoto inalámbrico" },
          { title: "Automático", text: "Sensor de lluvia incluido" },
          { title: "Instalación", text: "Sin cables" },
        ],
        installNote:
          "El producto debe adquirirse junto con el cerco EDW + código sin letra K (ej: EDW M04). Disponible en 78x98, 78x140 y 114x118.",
        image: ASSETS.modelSolar,
      },
    ],
  },
  {
    id: "fija",
    title: "Fija",
    subtitle: "Luz natural al mejor precio",
    sizes: ["78x98 cm", "78x140 cm", "114x118 cm"],
    variants: [
      {
        code: "FS",
        name: "FS Blanca",
        description:
          "La mejor relación Precio-Calidad. Ventana fija con termopanel laminado de alto rendimiento y marco exterior metálico. Bloquea el calor y rayos UV.",
        features: [
          { title: "Tipo", text: "Fija (No abre)" },
          { title: "Interior", text: "Madera pintada de blanco" },
          { title: "Exterior", text: "Gris plomo" },
          { title: "Marco", text: "Metálico resistente" },
          { title: "Vidrio", text: "Laminado de seguridad" },
          { title: "Protección", text: "Bloqueo 99% UV" },
        ],
        installNote:
          "El producto debe adquirirse junto con el cerco EDW + código sin letra K (ej: EDW M04). Disponible en 78x98, 78x140 y 114x118.",
        image: ASSETS.modelFixed,
      },
    ],
  },
  {
    id: "tuneles",
    title: "Túneles Solares",
    subtitle: "Llevá luz natural a cada rincón",
    sizes: ["35 CM DE DIÁMETRO"],
    variants: [
      {
        code: "TWR",
        name: "TWR Rígido",
        description:
          "Ideal para pasillos y baños. Con difusor Edge Glow que propaga la luz efectivamente. Fabricado en aluminio con recubrimiento reflectante, compuesto por tubos telescópicos y codos. Admite extensiones hasta 6m.",
        features: [
          { title: "Sistema", text: "Flexi-Loc™ (Fácil instalación)" },
          { title: "Material", text: "Aluminio reflectante" },
          { title: "Vidrio", text: "Templado 4mm" },
          { title: "Marco", text: "Poliuretano con cerco" },
        ],
        installNote:
          "Puede instalarse en superficies lisas u onduladas y con una inclinación entre 15° y 60°.",
        image: ASSETS.modelTunnel,
      },
      {
        code: "TWF",
        name: "TWF Flexible",
        description:
          "Perfecto para sortear obstáculos gracias a su tubo flexible de 2 metros. Fabricado en poliéster metalizado altamente reflectante. Difusor Edge Glow incluido.",
        features: [
          { title: "Sistema", text: "Flexi-Loc™ (Fácil instalación)" },
          { title: "Material", text: "Poliéster metalizado" },
          { title: "Flexibilidad", text: "Tubo flexible 2m" },
          { title: "Vidrio", text: "Templado 4mm" },
        ],
        installNote:
          "Puede instalarse en superficies lisas u onduladas y con una inclinación entre 15° y 60°.",
        image: ASSETS.modelTunnelFlexible,
      },
    ],
  },
  {
    id: "plano",
    title: "Techo Plano",
    subtitle: "Soluciones para pendientes < 15°",
    sizes: ["60x60 cm", "60x90 cm", "80x80 cm", "120x120 cm"],
    variants: [
      {
        code: "CFP",
        name: "CFP Fija con Cúpula",
        description:
          "Solución para disfrutar la iluminación natural en techos planos. Cuenta con termopanel de 24mm y cúpula de acrílico. Perfiles de PVC blanco libres de mantenimiento.",
        features: [
          { title: "Material", text: "PVC blanco (100% reciclable)" },
          { title: "Interior", text: "PVC blanco" },
          { title: "Exterior", text: "PVC blanco" },
          { title: "Cúpula", text: "Acrílica transparente (PMMA)" },
          { title: "Aislamiento", text: "Doble acristalamiento laminado" },
          { title: "Mantenimiento", text: "No requiere" },
        ],
        installNote:
          "Adecuada para techos con pendiente inferior a 15 grados. Sin código alfanumérico para medidas.",
        image: ASSETS.modelFlat,
      },
      {
        code: "CVP",
        name: "CVP Apertura con Cúpula",
        description:
          "Ventilación e iluminación natural. Ventana con apertura de 15cm. Diseñada bajo altos estándares, sin plomo ni metales pesados.",
        features: [
          { title: "Apertura", text: "Eléctrica (15 cm)" },
          { title: "Material", text: "PVC blanco (100% reciclable)" },
          { title: "Interior", text: "PVC blanco" },
          { title: "Exterior", text: "PVC blanco" },
          { title: "Cúpula", text: "Acrílica transparente (PMMA)" },
          { title: "Aislamiento", text: "Térmico y acústico" },
        ],
        installNote:
          "Adecuada para techos con pendiente inferior a 15 grados. Sin código alfanumérico para medidas.",
        image: ASSETS.modelFlatOpening,
      },
    ],
  },
];

export const B2B_RESOURCES = [
  { id: '1', name: 'Detalle Constructivo EDW.dwg', size: '2.4 MB', type: 'CAD' },
  { id: '2', name: 'Familia Velux GGL.rfa', size: '15 MB', type: 'BIM' },
  { id: '3', name: 'Ficha Técnica GGL Full.pdf', size: '1.1 MB', type: 'PDF' },
  { id: '4', name: 'Manual Instalación Standard.pdf', size: '5.4 MB', type: 'PDF' },
  { id: '5', name: 'Planos Corte Transversal.dwg', size: '3.1 MB', type: 'CAD' },
  { id: '6', name: 'Certificación Energética.pdf', size: '0.8 MB', type: 'PDF' },
];

export const COMPANY_INFO = {
  phone: "+54 9 11 7151-8723",
  email: "ventanas.jac@gmail.com",
  address: "Oficina Work Pilar, Buenos Aires, Argentina",
  // Link base para botones generales
  whatsapp: "https://wa.me/5491168396459?text=" + encodeURIComponent("Hola Techos JAC, vengo de la web y me interesa recibir presupuesto para una ventana de techo VELUX."),
  // Función para mensajes específicos por producto
  getCustomProductMessage: (productName: string) => {
    const text = `Hola Techos JAC, vengo de la web y me interesa recibir presupuesto para la ventana VELUX modelo: ${productName}.`;
    return `https://wa.me/5491168396459?text=${encodeURIComponent(text)}`;
  }
};