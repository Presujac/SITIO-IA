const _s = String.fromCharCode(47);
const _d = _s + _s;
const BASE = 'https:' + _d + 'techosjac.com.ar';
const SC = 'https:' + _d + 'schema.org';

export const schemaOrganization = {
  '@context': SC,
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': BASE + '/#organization',
  'name': 'Techos JAC',
  'url': BASE,
  'logo': { '@type': 'ImageObject', 'url': BASE + '/logo.png' },
  'image': BASE + '/cabrio.jpg',
  'description': 'Distribuidor oficial e importador directo de ventanas de techo VELUX en Argentina. Mas de 4.000 ventanas instaladas.',
  'telephone': ['+5491168396459'],
  'email': 'ventanas.jac@gmail.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Ruta 8 km 54, Official Work Pilar',
    'addressLocality': 'Pilar',
    'addressRegion': 'Buenos Aires',
    'postalCode': '1629',
    'addressCountry': 'AR',
  },
  'openingHoursSpecification': [
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'], 'opens': '09:00', 'closes': '18:00' },
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': 'Saturday', 'opens': '10:00', 'closes': '14:00' },
  ],
  'areaServed': [
    { '@type': 'City', 'name': 'Pilar' },
    { '@type': 'AdministrativeArea', 'name': 'Gran Buenos Aires' },
    { '@type': 'City', 'name': 'Buenos Aires' },
  ],
  'sameAs': ['https:' + _d + 'www.instagram.com/techosjac', 'https:' + _d + 'wa.me/5491168396459'],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Catalogo VELUX Argentina',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Ventanas Pivotantes VELUX GGL GGU', 'url': BASE + '/servicios/ventanas-pivotantes' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Ventanas Solares VELUX VSS', 'url': BASE + '/servicios/ventanas-solares' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Ventanas Fijas VELUX FS', 'url': BASE + '/servicios/ventanas-fijas' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Ventanas Proyectantes VELUX GPL', 'url': BASE + '/servicios/ventanas-proyectantes' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Ventanas Techo Plano VELUX CFP CVP', 'url': BASE + '/servicios/techo-plano' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Tuneles Solares VELUX TWR TWF', 'url': BASE + '/servicios/tuneles-solares' } },
    ],
  },
};

export const schemaFAQ = {
  '@context': SC,
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Que es una ventana de techo VELUX?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Una ventana de techo VELUX aporta hasta un 40% mas de luz natural. VELUX lider mundial desde 1942. Techos JAC es distribuidor oficial en Argentina.' } },
    { '@type': 'Question', 'name': 'Cuanto dura la garantia VELUX?', 'acceptedAnswer': { '@type': 'Answer', 'text': '10 anos de garantia en el producto y 5 anos en instalacion con instalador certificado VELUX.' } },
    { '@type': 'Question', 'name': 'Cual es el angulo minimo para techo inclinado?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El angulo minimo es de 15 grados. Para inclinaciones menores existen soluciones de techo plano.' } },
    { '@type': 'Question', 'name': 'Se puede instalar en techo plano?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Si. VELUX tiene linea especifica para techo plano (0 a 15 grados) con cupula acrilica o vidrio plano.' } },
    { '@type': 'Question', 'name': 'Se pueden motorizar las ventanas VELUX?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Si. VELUX ofrece modelos con motorizacion solar y electrica. Incluyen sensor de lluvia.' } },
    { '@type': 'Question', 'name': 'Cuanto tarda la instalacion?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Entre 4 y 8 horas para una ventana estandar. Con impermeabilizacion adicional puede requerir un dia completo.' } },
    { '@type': 'Question', 'name': 'Las ventanas VELUX son impermeables?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Si. Con instalacion certificada y flashings originales VELUX, la estanqueidad esta garantizada.' } },
    { '@type': 'Question', 'name': 'Que es un tunel solar VELUX?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Un tunel solar capta luz natural desde el techo y la conduce a un difusor en el cielorraso. Sin consumo electrico.' } },
    { '@type': 'Question', 'name': 'Donde instalan en Argentina?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Techos JAC instala en Pilar, Gran Buenos Aires (GBA) y CABA.' } },
    { '@type': 'Question', 'name': 'Cuanto cuesta instalar una ventana VELUX?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El precio varia segun modelo, tamano y tipo de techo. Techos JAC ofrece cotizaciones sin cargo.' } },
  ],
};

export function schemaBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': SC,
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': BASE + item.url,
    })),
  };
}