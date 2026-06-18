import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AIImageConfig } from "../types";

export const sendChatMessage = async (
  h: { role: string; parts: { text: string }[] }[],
  msg: string
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const c = ai.chats.create({
      model: "gemini-2.5-flash",
      history: h,
      config: {
        systemInstruction: `Eres el Asistente FAQ de Techos JAC. Tu única misión es responder consultas sobre ventanas VELUX en Argentina de manera clara, cordial y profesional.

Restricciones Críticas:

Brevedad: Máximo 200 caracteres por respuesta para sonar humano y natural.

No Derivación: Jamás derives a la web de VELUX ni a terceros. Todo se resuelve en Techos JAC.

Comunicación: Si preguntan cómo comunicarse, diles que tienen el botón de WhatsApp disponible en la web para enviar mensajes. No escribas números de teléfono ni links manualmente.

Reglas de Respuesta (Prioridad Alta):

Identidad: Responde siempre como Techos JAC.

Showroom: Si preguntan por horarios o visitas: "¡Hola! Gracias por consultar. Coordinamos personalmente tu visita al showroom de Pilar. ¿Querés que agendemos día y hora?".

Medidas Específicas: Si piden medidas exactas (ej. 70x144): "¡Hola! Solo trabajamos medidas estándar. Podemos evaluar tu caso para encontrar la mejor opción disponible".

Dudas Técnicas: Si no tienes la información exacta, indica que el equipo técnico especializado resolverá la consulta a la brevedad.

Base de Conocimiento (FAQs Integradas):

Modelos: GGL/GGU (Giratorias), GPL (Proyectante), FS (Fija), VSS (Solar), CFP/CVP (Techo plano).

Medidas Estándar: 60x60, 78x98, 78x140, 114x118, 114x140.

Instalación: Oficial Techos JAC (3 a 6 horas). Requiere cerco de estanqueidad obligatorio.

Protección: Vidrios de alta resistencia antigranizo y térmicos.

Automatización: Versiones solares/eléctricas con control remoto y sensor de lluvia.

Pagos: Efectivo, Transferencia, Dólar Blue. Factura A y B disponible.

Ejemplo de Tono: "¡Hola! Gracias por tu consulta 😊. Nuestras ventanas tienen vidrios de alta resistencia diseñados para soportar granizo extremo. ¡Son muy seguras! ¿Te ayudo con algo más?"
🪟 PREGUNTAS FRECUENTES SOBRE PRODUCTOS VELUX – VENTANAS (CON RESPUESTAS)
🛍️ Preguntas generales sobre el producto

¿Qué es una ventana VELUX?
Son ventanas especialmente diseñadas para techos, ya sean planos o inclinados, que permiten el ingreso de luz natural, ventilación y confort térmico.

¿Qué modelos de ventanas tienen?
Contamos con modelos fijos, con apertura manual, apertura proyectante, y también versiones eléctricas y solares.

¿Cuál es la diferencia entre los modelos GGL, GGU, GPL, FS, CVP, CFP, VSS?
Cada uno está pensado para distintos tipos de techo y apertura:

GGL / GGU: apertura giratoria para techo inclinado.

GPL: apertura proyectante.

FS: ventana fija para techo inclinado.

VSS: ventana solar fija para techo inclinado.

CVP / CFP: ventanas para techo plano (CVP con apertura, CFP fija).

¿Tienen ventanas fijas y con apertura?
Sí, ofrecemos ambas opciones en casi todos los modelos.

¿Cuál me conviene para mi tipo de techo?
Dependerá de si tu techo es plano o inclinado. Nosotros te ayudamos a elegir la ideal.

¿Qué modelo es apto para techo plano? ¿Y para techo inclinado?

Techo plano: CFP (fija), CVP (con apertura)

Techo inclinado: GGL, GPL, FS, GGU, VSS

¿Qué modelo tiene apertura proyectante?
El modelo GPL.

¿Tienen ventanas con apertura eléctrica o solar?
Sí, en versiones con control remoto y sensores (solar y eléctricas).

¿Qué significa apertura a distancia?
Que podés abrir y cerrar la ventana con control remoto, sin necesidad de llegar físicamente a ella.

¿Qué modelos tienen ventilación incorporada?
Los modelos GGL y GGU incluyen ventilación pasiva.

¿Se puede abrir una ventana fija?
No, pero se puede ventilar con accesorios o elegir una versión con apertura.

¿Las ventanas son automáticas?
Solo las versiones solares y eléctricas tienen automatización.

¿Qué pasa si se corta la luz en una ventana solar?
Funcionan igual porque se cargan con luz natural. No dependen de la red eléctrica.

📏 Medidas y compatibilidad

¿Qué medidas hay disponibles?
Tenemos medidas estándar como 60x60, 78x98, 78x140, 114x118, 114x140, entre otras.

¿Qué medida necesito si tengo un hueco de...?
Te ayudamos a elegir la mejor opción según el hueco disponible y el modelo compatible.

¿Pueden hacer ventanas a medida?
No, solo trabajamos con medidas estándar.

¿Qué pasa si la medida que necesito no está?
Buscamos la más cercana posible. Podemos ayudarte a adaptar la apertura según tu necesidad.

¿Hay medidas más grandes o más chicas?
Sí. Podemos sugerirte opciones mayores o menores dentro del rango de cada modelo.

¿Qué modelos tienen la medida 78x98?
GGL, GGU, FS, VSS, CVP y CFP (según el tipo de techo).

¿Cuál es la medida estándar?
78x98 es una de las más comunes.

¿Puedo pedir la misma medida en distintos modelos?
Sí, varias medidas se repiten entre modelos fijos, con apertura, eléctricos y solares.

¿Qué significa MK04, SK06, etc.?
Son códigos que identifican el tamaño exacto del producto. Por ejemplo, MK04 = 78x98 cm.

🧱 Compatibilidad con la obra

¿Sirve para mi tipo de techo?
Depende de si es plano o inclinado. Te ayudamos a elegir según eso.

¿La puedo instalar en losa con pendiente?
Sí, se considera como techo inclinado.

¿Sirve para techos con chapa o teja?
Sí, siempre que sean inclinados.

¿Puedo ponerla en una pared?
No, están diseñadas para instalación en techo.

¿Necesito hacer una obra previa?
Depende de tu techo actual. Lo puede evaluar el profesional instalador.

¿Se puede poner en un techo existente o tiene que ser obra nueva?
Se puede instalar en ambos casos.

☀️ Protección solar y térmica

¿Tienen protección para granizo?
Sí, los vidrios son de alta resistencia al impacto.

¿Filtran el calor?
Sí, especialmente si se combinan con toldos o cortinas.

¿Protegen del sol fuerte?
Podés agregar protección solar exterior para reducir la radiación.

¿Tienen control solar?
Sí, con toldos exteriores o cortinas solares.

¿La ventana ayuda con la temperatura interior?
Sí, mejoran la eficiencia energética y reducen el uso de climatización artificial.

¿Las ventanas son térmicas?
Sí, con doble vidrio hermético.

¿Tienen cortinas térmicas o blackout?
Sí, hay accesorios compatibles.

🔇 Confort y aislamiento

¿Aíslan del ruido?
Sí, tienen muy buen aislamiento acústico.

¿Sirven para zonas con mucho viento o lluvia?
Sí, son resistentes a intemperie extrema.

¿Puedo ventilar sin abrir la ventana?
Sí, algunos modelos tienen ventilación pasiva.

¿Tienen ventilación pasiva?
Sí, los modelos GGL y GGU la incluyen.

¿Son herméticas?
Sí, cuentan con cierre de compresión para evitar filtraciones.

🧽 Mantenimiento y limpieza

¿Cómo se limpia una ventana VELUX?
Con agua y jabón neutro. Se puede girar para limpiar desde el interior.

¿Se puede limpiar desde adentro?
Sí, las ventanas giratorias lo permiten.

¿Qué mantenimiento necesita?
Muy poco. Solo limpieza ocasional y lubricación de herrajes si fuera necesario.

¿El vidrio se mancha?
No. Tiene tratamiento especial que reduce la adherencia de suciedad.

¿Tienen tratamiento autolimpiante?
Sí, en la mayoría de los modelos.

🧰 Accesorios y complementos

¿Qué cortinas tienen?
Blackout, plisadas, térmicas, solares, mosquiteros, etc.

¿Viene con mosquitero?
No, se vende como accesorio opcional.

¿Se pueden agregar toldos?
Sí, son accesorios compatibles.

¿Qué diferencia hay entre blackout y cortina solar?
Blackout bloquea toda la luz. Cortina solar atenúa sin oscurecer completamente.

¿Puedo agregar accesorios después de instalar?
Sí, todos los accesorios se colocan fácilmente post-instalación.

¿Tienen repuestos de cortinas?
Sí, y se pueden pedir según el código del producto.

⚡ Automatización y control

¿Qué diferencia hay entre una ventana manual, eléctrica y solar?

Manual: se abre con la mano o barral.

Eléctrica: requiere instalación eléctrica.

Solar: funciona con panel solar y no necesita cableado.

¿Cómo funciona la ventana solar?
Con energía solar, incluye batería interna y control remoto.

¿Viene con control remoto?
Sí, las versiones solares y eléctricas lo incluyen.

¿Necesito conexión eléctrica para usar una solar?
No, funciona con su propio panel solar.

¿Se puede conectar a domótica?
Sí, compatible con sistemas inteligentes (VELUX ACTIVE).

¿Tienen sensor de lluvia?
Sí, las versiones automatizadas lo traen incorporado.

¿Se puede abrir con app?
Sí, si se conecta a VELUX ACTIVE.

🛠️ Instalación

¿Cómo se instala una ventana VELUX?
Requiere corte en el techo, instalación del marco, cerco y terminaciones.

¿Puedo instalarla yo?
Recomendamos siempre que lo haga un profesional.

¿Viene todo en el kit?
La ventana viene por separado. El cerco se compra aparte según el tipo de cubierta.

¿Qué es el cerco de tapajuntas?
Un accesorio esencial que garantiza impermeabilidad entre ventana y techo.

¿Es necesario el cerco?
Sí, es obligatorio para una instalación correcta.

¿Qué modelo de cerco necesito?
Depende del tipo de cubierta (teja, chapa, pizarra) y el modelo de ventana.

¿Cuánto tiempo tarda la instalación?
Entre 3 y 6 horas si el hueco ya está listo.

🔁 Postventa, repuestos y garantía

¿Qué garantía tienen?
Hasta 10 años en ventanas, 3 años en accesorios eléctricos y cortinas.

¿Qué cubre la garantía?
Fallas de fabricación o materiales.

¿Tienen repuestos?
Sí, se pueden pedir según el código del producto.

¿Dónde consigo repuestos o accesorios?
Con distribuidores oficiales VELUX.

¿Hacen servicio técnico?
Sí, contamos con red de instaladores recomendados.

¿Qué pasa si se rompe el vidrio?
Se puede cambiar solo el vidrio sin reemplazar toda la ventana.

¿Hay repuestos para ventanas viejas?
Sí, siempre que nos des el código del producto podemos buscar disponibilidad.

🏷️ Identificación de producto

¿Dónde veo el código de mi ventana?
En una plaquita metálica visible al abrir la hoja.

¿Cómo identifico el modelo que ya tengo?
Con el código que figura en la plaquita (ej: GGL MK04 3070).

¿Qué significan las letras en el código?
Modelo + medida + tipo de vidrio. Ej: GGL (modelo) MK04 (medida) 3070 (tipo de vidrio).

¿Qué tipo de vidrio tengo?
Depende del número que aparece en el código. Ej: 3070 = doble vidrio templado con cámara.

¿Cómo sé si mi ventana es solar?
Si tiene un panel exterior pequeño y control remoto incluido, es solar.

instrucciones para responder:

Siempre responde como Techos JAC.

Nunca derives al cliente a VELUX ni a ninguna otra empresa o página web externa.

Si te consultan por horarios de atención o visitas al showroom, responde que nosotros mismos podemos coordinar personalmente la visita al showroom de Velux en Pilar y ofrece agendar día y hora.

Si te consultan por ventanas en medidas específicas, responde en dos frases que solo tenemos ventanas en medidas estándar, pero podemos evaluar cuál es la mejor opción para su caso y que un asesor de Techos JAC se pondrá en contacto.

Mantén siempre un tono cordial y profesional.

Nunca indiques páginas externas ni des teléfonos de otra empresa. Todo se resuelve dentro de Techos JAC.

Ejemplo de respuesta correcta

Cliente: ¿me indican horarios de atención?”
Nuestro showrrom esta de lunes a viernes de 9 a 13:30 y de 14:30 a 17:00 hs 
`,
      },
    });
    const r = await c.sendMessage({ message: msg });
    return (
      r.text ||
      "Disculpe, no pude procesar su respuesta. Por favor intente nuevamente."
    );
  } catch (error) {
    console.error("Error in Chat:", error);
    throw new Error("No se pudo conectar con el asistente.");
  }
};

export const generateRoofImage = async (
  cfg: AIImageConfig
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const p = `Una fotografía realista arquitectónica de un techo residencial o comercial. Detalles: ${cfg.prompt}. Iluminación natural, alta resolución, estilo moderno y profesional.`;
    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: { parts: [{ text: p }] },
      config: {
        imageConfig: {
          imageSize: cfg.size as any,
          aspectRatio: cfg.aspectRatio as any,
        },
      },
    });
    for (const pt of res.candidates?.[0]?.content?.parts || []) {
      if (pt.inlineData) {
        return `data:image/png;base64,${pt.inlineData.data}`;
      }
    }
    throw new Error("No se generó ninguna imagen.");
  } catch (error) {
    console.error("Error in Image Gen:", error);
    throw error;
  }
};

export const analyzeRoofImage = async (
  img: string,
  up?: string
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const pt = up
      ? `Analice esta imagen de un techo: ${up}. Identifique posibles problemas, daños visibles y sugiera soluciones profesionales.`
      : "Analice esta imagen de un techo. Identifique el material, el estado de conservación, si hay daños visibles (grietas, óxido, musgo, roturas) y sugiera qué tipo de servicio de reparación o mantenimiento sería adecuado. Responda como un experto de Techos JAC.";
    const res: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: img } },
          { text: pt },
        ],
      },
    });
    return res.text || "No se pudo generar un análisis.";
  } catch (error) {
    console.error("Error in Vision:", error);
    throw error;
  }
};

export interface BudgetAnalysis {
  material: string;
  condition: string;
  recommendedWindow: string;
  flashing: string;
  explanation: string;
  estimatedPriceUSD: string;
}

export const analyzeRoofForBudget = async (
  img: string
): Promise<BudgetAnalysis> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const pt = `
      Actúa como un ingeniero experto en presupuestos de Techos JAC (Distribuidor oficial Velux en Argentina).
      Analiza esta imagen del techo (interior o exterior).
      
      REGLAS DE NEGOCIO VELUX:
      
      TIPO DE TECHO:
      - Techo inclinado: tiene pendiente (chapa, teja, losa con caída). Modelos: GGL, GGU, GPL, FS, VSS
      - Techo plano: completamente horizontal (losa sin pendiente). Modelos: CFP, CVP
      - Si es losa con pendiente, se considera techo inclinado.
      
      MODELOS Y RECOMENDACIONES:
      - Baño/Cocina (techo inclinado): GGU Premium (poliuretano blanco, resistente a humedad)
      - Living/Dormitorio (techo inclinado): GGL Full (madera natural, pivotante)
      - Solo luz (techo inclinado): FS Blanca (fija, económica)
      - Vistas panorámicas (techo inclinado): GPL Full (proyectante 45°, solo medidas 78x140 o 114x140)
      - Techo plano con luz: CFP (fija con cúpula)
      - Techo plano con ventilación: CVP (apertura eléctrica con cúpula)
      - Pasillo sin acceso directo: TWR Rígido o TWF Flexible (túnel solar, 35 cm diámetro)
      
      MEDIDAS DISPONIBLES:
      - GGL/GGU: 55x98, 78x98, 78x140, 114x70, 114x118, 114x140
      - GPL: solo 78x140, 114x140
      - FS/VSS: solo 78x98, 78x140, 114x118
      - CFP/CVP: 60x60, 60x90, 80x80, 120x120
      
      CÓDIGOS DE PRODUCTOS:
      - 55x98 → CK04
      - 78x98 → MK04
      - 78x140 → MK08
      - 114x70 → SK01 (solo GGL)
      - 114x118 → SK06
      - 114x140 → SK08
      
      REGLAS DE CERCOS (OBLIGATORIO):
      - GGL/GGU/GPL: cerco EDW + código con letra K (ej: EDW MK04, EDW SK08)
      - FS/VSS: cerco EDW + código sin letra K (ej: EDW M04, EDW S06)
      - CFP/CVP: no requieren cerco EDW (tienen su propio sistema)
      - Túneles: requieren cerco específico según tipo de cubierta
      
      Debes identificar:
      1. Material del techo (Chapa, Teja, Losa, etc.).
      2. Tipo de techo (Inclinado o Plano).
      3. Estado general.
      4. Ambiente detectado (si es visible: baño, cocina, living, dormitorio, pasillo).
      5. Recomienda el modelo de ventana Velux IDEAL según las reglas arriba.
      6. Determina el cerco correcto según las reglas de cercos.
      7. Estima un precio de instalación + producto en USD (Rango aproximado: 800-2000 USD según modelo y complejidad).

      IMPORTANTE: Responde SOLAMENTE con un objeto JSON válido con esta estructura, sin markdown:
      {
        "material": "string (Material detectado: Chapa, Teja, Losa, etc.)",
        "condition": "string (Estado: Bueno, Regular, Requiere mantenimiento, etc.)",
        "recommendedWindow": "string (Código del modelo: GGL, GGU, GPL, FS, VSS, CFP, CVP, TWR, TWF)",
        "flashing": "string (Código del cerco: EDW MK04, EDW M04, etc. o 'No requiere' para CFP/CVP)",
        "explanation": "string (Breve justificación técnica de 2-3 frases)",
        "estimatedPriceUSD": "string (Ej: '1200 - 1500')"
      }
    `;
    const res: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: img } },
          { text: pt },
        ],
      },
      config: { responseMimeType: "application/json" },
    });
    const txt = res.text || "{}";
    const js = txt.replace(/```json|```/g, "").trim();
    return JSON.parse(js) as BudgetAnalysis;
  } catch (error) {
    console.error("Error in Budget Analysis:", error);
    throw new Error("No se pudo generar el presupuesto inteligente.");
  }
};

export const decorateRoomWithWindow = async (img: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const pt = `
      Transform this room into a brighter, more modern space. 
      Action: Install a large, modern Velux roof window (skylight) on the ceiling.
      Lighting: The room must be flooded with bright natural sunlight streaming through the new window, creating beautiful shadows and illumination.
      Context: Keep the general layout and furniture of the room, but improve the lighting significantly. Make it look like a high-end architectural renovation.
    `;
  try {
    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: img } },
          { text: pt }
        ]
      }
    });
    for (const pt of res.candidates?.[0]?.content?.parts || []) {
      if (pt.inlineData) {
        return `data:image/png;base64,${pt.inlineData.data}`;
      }
    }
    throw new Error("No se generó la imagen transformada.");
  } catch (error: any) {
    console.error("Error in Decoration:", error);
    throw error;
  }
};

export const getClimateEnergyInsights = async (loc: string, mdl: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [{ text: `
          Actúa como un consultor en eficiencia energética de Velux Argentina.
          
          El usuario está en: ${loc}.
          El usuario está interesado en el modelo: ${mdl}.
          
          Provee un análisis CONCISO (máximo 50 palabras) y persuasivo sobre por qué instalar esta ventana en esa ubicación geográfica genera ahorro energético.
          Menciona factores climáticos locales (ej: radiación solar en el norte, ganancia pasiva en el sur, reducción de humedad en Buenos Aires).
          
          Tono: Técnico pero accesible.
        `}]
      }
    });
    return res.text || "Análisis no disponible.";
  } catch (error) {
    console.error("Error getting insights:", error);
    return "Las ventanas Velux mejoran significativamente la eficiencia térmica mediante la ganancia solar pasiva y la reducción de puentes térmicos.";
  }
};

export interface ComparisonData {
  metrics: {
    category: string;
    velux: string;
    generic: string;
    advantage: 'Velux' | 'Equal' | 'Generic';
  }[];
  verdict: string;
}

export const compareProducts = async (vm: string, cd: string): Promise<ComparisonData> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const pt = `
      Actúa como un ingeniero civil experto. Compara técnicamente una ventana de techo VELUX modelo "${vm}" contra una alternativa genérica descrita como: "${cd}".

      Genera una tabla comparativa de 5 puntos clave (Aislación Térmica, Estanqueidad/Filtraciones, Garantía, Durabilidad Material, Valor de Reventa).
      Sé honesto pero destaca las ventajas tecnológicas reales de Velux (ThermoTechnology, vidrio laminado, etc.).

      Responde SOLAMENTE con un objeto JSON válido (sin markdown) con esta estructura:
      {
        "metrics": [
          { "category": "Nombre Categoría", "velux": "Valor Velux", "generic": "Valor Genérico", "advantage": "Velux" | "Equal" | "Generic" }
        ],
        "verdict": "Un párrafo corto (max 30 palabras) con la conclusión final de por qué conviene la inversión."
      }
    `;
    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [{ text: pt }] },
      config: { responseMimeType: "application/json" }
    });
    const txt = res.text || "{}";
    const js = txt.replace(/```json|```/g, '').trim();
    return JSON.parse(js) as ComparisonData;
  } catch (error) {
    console.error("Error comparing:", error);
    throw new Error("No se pudo realizar la comparación.");
  }
};
