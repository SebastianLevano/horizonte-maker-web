// Datos institucionales. Los marcados "confirmado: true" vienen de brief.md.
// Los marcados "confirmado: false" son DATOS DE VISTA PREVIA: coherentes y
// con formato real, pero no confirmados por el colegio — se pidieron así
// para ver el sitio completo como en producción (ver docs/backlog.md).
// Reemplazar antes de publicar.

export const SITE = {
  name: "I.E.P. Colegio Horizonte Maker",
  legalName: "I.E.P. Colegio Horizonte Maker S.A.C.", // vista previa
  ruc: "20601234567", // vista previa — formato válido, número no real
  shortName: "Horizonte Maker",
  tagline: "Aprender haciendo, crear para transformar",
  description:
    "Colegio en Lurín, Lima, con propuesta educativa que integra el Currículo Nacional, el ABP, STEAM, Reggio Emilia y el Distrito Maker. Inicial, Primaria y Secundaria.",
  url: "https://www.horizontemaker.pe", // vista previa: dominio oficial
  positioning: "Jóvenes que hacen, resuelven y construyen.",
  location: {
    district: "Lurín, Lima",
    reference:
      "Zona entre Av. México, Av. Perú y Av. Independencia, conectada con la Panamericana Sur",
    address: "Av. México 1450, Lurín, Lima", // vista previa — dentro de la zona confirmada
    addressConfirmed: false,
    mapsQuery: "Lurín, Lima, Perú", // consulta genérica al distrito, no un pin exacto inventado
  },
  contact: {
    whatsapp: "+51 987 654 321", // vista previa
    phone: "(01) 430 5566", // vista previa
    email: "admision@horizontemaker.edu.pe", // vista previa
    hours: "Lunes a viernes, 8:00 a.m. – 5:00 p.m.", // vista previa
    confirmed: false,
  },
  social: {
    instagram: "https://instagram.com/horizontemaker.pe", // vista previa
    facebook: "https://facebook.com/horizontemaker.pe", // vista previa
    confirmed: false,
  },
} as const;

export const VALUE_PROPOSITION =
  "En Horizonte Maker, los estudiantes aprenden investigando, creando y resolviendo desafíos reales. Integramos una formación académica rigurosa con proyectos, tecnología, arte, emprendimiento y habilidades para la vida, desde Inicial hasta Secundaria.";

export const MAKER_DISTRICT_INTRO =
  "Nuestro Distrito Maker articula cuatro rutas de aprendizaje práctico: Robótica e Innovación, Diseño y Fabricación, Gastronomía y Emprendimiento, y Construcción y Prototipado. Los estudiantes exploran, diseñan, construyen, prueban y mejoran soluciones con acompañamiento docente y protocolos de seguridad.";

export const ADMISSION_CLOSING =
  "Conoce una escuela donde el conocimiento se convierte en acción. Solicita información y agenda una visita para descubrir la experiencia Horizonte Maker.";

export const MISSION =
  "Brindar una educación integral, innovadora y práctica que empodere a los estudiantes mediante un aprendizaje activo que integra el conocimiento académico, las artes técnicas y las habilidades para la vida, para desenvolverse con autonomía, tomar decisiones, emprender y enfrentar con seguridad los desafíos del mundo real.";

export const VISION =
  "Ser un referente en educación innovadora y práctica, formando jóvenes que no solo saben, sino que hacen, resuelven y construyen, capaces de desenvolverse con criterio, conciencia y capacidad de acción en el mundo real.";

export const HISTORY =
  "Horizonte Maker nace de una pregunta simple: ¿qué pasaría si un colegio tomara tan en serio el \"aprender haciendo\" como el currículo académico? El proyecto se diseñó desde cero en Lurín, un distrito en expansión con una comunidad que valora el trabajo práctico y el emprendimiento. En vez de sumar un taller de tecnología a un modelo tradicional, se construyó el Distrito Maker como columna vertebral del colegio: cuatro rutas de aprendizaje práctico que atraviesan Inicial, Primaria y Secundaria desde el primer día. Hoy el proyecto se prepara para abrir sus puertas con una promesa concreta: una educación rigurosa que se demuestra construyendo, no solo describiendo.";

// Es un ciclo real, no una lista suelta: cada proyecto Maker recorre estos
// 6 pasos y "Comunicar" retroalimenta el siguiente "Investigar" (brief.md
// §8). El componente LearningCycle lo representa como flujo circular.
export const LEARNING_SEQUENCE = [
  {
    step: "Investigar",
    icon: "compass",
    description:
      "Cada proyecto parte de una pregunta o un problema real, no de un tema aislado. Los estudiantes indagan, observan y recogen información antes de proponer una solución.",
  },
  {
    step: "Diseñar",
    icon: "pencilRuler",
    description:
      "Bocetos, planos y prototipos en papel o digital. Se decide qué se va a construir y con qué recursos, antes de tocar una herramienta.",
  },
  {
    step: "Construir",
    icon: "hammer",
    description:
      "El diseño se vuelve objeto o solución concreta, con supervisión docente y protocolos de seguridad en cada taller del Distrito Maker.",
  },
  {
    step: "Probar",
    icon: "flask",
    description:
      "Lo construido se pone a prueba contra la pregunta original. Fallar en esta etapa es parte del método, no un tropiezo.",
  },
  {
    step: "Mejorar",
    icon: "target",
    description:
      "Se ajusta el diseño con lo aprendido en la prueba. Un proyecto Maker rara vez termina en el primer intento.",
  },
  {
    step: "Comunicar",
    icon: "megaphone",
    description:
      "El resultado se presenta a la comunidad Maker — compañeros, docentes y familias — con evidencia del proceso, no solo del producto final.",
  },
] as const;

export const ADMISSION_PROCESS = [
  {
    step: "Contacto",
    description: "Solicitas información a través del formulario, WhatsApp o correo.",
  },
  {
    step: "Visita o charla",
    description: "Conoces el colegio, sus laboratorios y su propuesta educativa.",
  },
  {
    step: "Entrevista informativa",
    description: "Conversamos sobre el proceso y respondemos tus preguntas.",
  },
  {
    step: "Evaluación o entrevista correspondiente",
    description: "Según el nivel al que postula el estudiante.",
  },
  {
    step: "Vacante",
    description: "Confirmación de disponibilidad para el grado solicitado.",
  },
  {
    step: "Matrícula",
    description: "Formalización del ingreso del estudiante al colegio.",
  },
] as const;

// Vista previa — montos ilustrativos, no aprobados. El brief pide
// expresamente no anticipar cifras reales hasta que estén confirmadas.
export const ADMISSION_PRICING = {
  matricula: "S/ 1,200",
  pension: "S/ 850 al mes, en 10 cuotas (marzo a diciembre)",
  note: "Incluye materiales del Distrito Maker. No incluye uniforme ni alimentación.",
};

export const ADMISSION_REQUIREMENTS = [
  "Partida de nacimiento del estudiante (original y copia)",
  "DNI del estudiante y de los apoderados",
  "Libreta de notas o informe de progreso del año anterior (Primaria y Secundaria)",
  "Certificado de estudios del colegio de procedencia",
  "2 fotos tamaño carné",
  "Ficha de matrícula completada",
  "Carné de vacunas (Inicial)",
];

export const ADMISSION_DATES = {
  campaign: "Campaña de admisión: abril a agosto, para inicio de clases en marzo del año siguiente.",
  openingYear: "Apertura del campus: marzo de 2027.",
  vacanciesNote:
    "Vacantes limitadas por sección: 15 en Inicial, 25 en Primaria y Secundaria. Disponibilidad exacta por grado, sujeta a confirmación en el proceso de admisión.",
};

export const ADMISSION_BENEFITS = [
  "Descuento por pronto pago de matrícula",
  "Convenio familiar para hermanos matriculados",
  "Beneficio para hijos de exalumnos (cuando aplique)",
];

export const RESERVATION_POLICY =
  "La vacante se reserva con el pago de matrícula. En caso de retiro antes del inicio de clases, el monto de matrícula no es reembolsable; las pensiones no generadas sí se liberan. Política sujeta a confirmación final por administración.";
