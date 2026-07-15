// Imágenes reales, tomadas del sitio Wix preliminar del propio colegio
// (marciarubidiazmele.wixsite.com/colegio-horizonte-ma). Las fotografías
// están etiquetadas en origen como "ai-generated-IMAGE.jpg": son
// ilustraciones generadas por IA, no fotografías de estudiantes reales.
// El plano del colegio es un documento propio, no generado por IA.
//
// Por eso las fotos se usan como imagen atmosférica/decorativa (hero,
// tarjetas, secciones de apoyo) pero NUNCA en `TarjetaEvidencia`: esa pieza
// exige contexto, grado y aprendizaje verificables de un proyecto real
// (docs/design-system.md §1). Ver docs/backlog.md — banco fotográfico real
// (con autorización) sigue pendiente.
//
// 16 fotos distintas repartidas a propósito para que ninguna imagen se
// repita DENTRO de una misma página (con dos excepciones inevitables,
// marcadas abajo, por no existir una segunda foto de esa edad/ruta). El
// reuso ocurre solo *entre* páginas distintas, donde es mucho menos
// perceptible.

export type SiteImage = {
  src: string;
  alt: string;
  /** object-position: mantiene el sujeto encuadrado al recortar. */
  focus: string;
};

// --- Banco de fotos ---------------------------------------------------

const A_PROTOTIPO: SiteImage = {
  src: "/images/maker-prototipo-estudiante.jpg",
  alt: "Estudiante de secundaria ensamblando un prototipo electrónico",
  focus: "center 25%",
};
const B_ROBOTICA_GRUPO: SiteImage = {
  src: "/images/primaria-robotica-grupo.jpg",
  alt: "Estudiantes construyendo y programando robots en equipo",
  focus: "center 30%",
};
const C_LABORATORIO: SiteImage = {
  src: "/images/secundaria-laboratorio.jpg",
  alt: "Estudiantes de secundaria trabajando con microscopios en el laboratorio",
  focus: "center 40%",
};
const D_BLOQUES_INICIAL: SiteImage = {
  src: "/images/inicial-bloques.jpg",
  alt: "Niños de Inicial jugando y construyendo con bloques de colores en el aula",
  focus: "center 45%",
};
const E_DOCENTE: SiteImage = {
  src: "/images/docente-acompanamiento.jpg",
  alt: "Docente guiando a un grupo de estudiantes en un proyecto de robótica",
  focus: "center 30%",
};
const F_TALLER_FABRICACION: SiteImage = {
  src: "/images/distrito-maker-taller.jpg",
  alt: "Estudiantes trabajando con impresoras 3D y herramientas en el taller Maker",
  focus: "center 35%",
};
const G_SEGURIDAD: SiteImage = {
  src: "/images/seguridad-proteccion.jpg",
  alt: "Estudiante usando lentes de protección al trabajar con un prototipo",
  focus: "center 25%",
};
const H_VIDA_ESCOLAR: SiteImage = {
  src: "/images/vida-escolar-proyectos.jpg",
  alt: "Grupo de estudiantes trabajando juntos en proyectos con herramientas y electrónica",
  focus: "center 35%",
};
const I_ADMISION_DETALLE: SiteImage = {
  src: "/images/admision-detalle.jpg",
  alt: "Estudiante soldando un circuito en el laboratorio",
  focus: "center 25%",
};
const J_CAMPUS_FACHADA: SiteImage = {
  src: "/images/campus-fachada.jpg",
  alt: "Fachada del campus del colegio con estudiantes caminando por el patio",
  focus: "center 55%",
};
const K_PERFIL_ESTUDIANTE: SiteImage = {
  src: "/images/perfil-estudiante.jpg",
  alt: "Estudiante de secundaria observando por la ventana del aula, en actitud reflexiva",
  focus: "center 30%",
};
const L_ROBOTICA_TALLER: SiteImage = {
  src: "/images/robotica-taller-grupo.jpg",
  alt: "Grupo numeroso de estudiantes de secundaria programando y ensamblando robots en el laboratorio",
  focus: "center 40%",
};
const M_DISENO_TALLER: SiteImage = {
  src: "/images/diseno-taller-grupo.jpg",
  alt: "Estudiantes diseñando y ensamblando modelos robóticos a partir de bocetos en papel",
  focus: "center 35%",
};
const N_GASTRONOMIA: SiteImage = {
  src: "/images/gastronomia-producto.jpg",
  alt: "Productos horneados y utensilios de cocina sobre una mesa de trabajo",
  focus: "center 55%",
};
const O_CONSTRUCCION: SiteImage = {
  src: "/images/construccion-herramientas.jpg",
  alt: "Herramientas de carpintería y medición sobre una superficie de trabajo",
  focus: "center 60%",
};
const P_MANOS_CREANDO: SiteImage = {
  src: "/images/manos-creando.jpg",
  alt: "Manos de un estudiante moldeando material en un proyecto de diseño",
  focus: "center 55%",
};

// --- Asignación por uso -------------------------------------------------

export const IMAGES = {
  logo: "/images/logo-horizonte-maker.png",
  plano: {
    src: "/images/plano-del-colegio.png",
    alt: "Plano isométrico del colegio con sus zonas: niveles educativos, Distrito Maker, comedor, auditorio, cancha y zona administrativa",
    focus: "center",
  } satisfies SiteImage,

  // Hero por página. Cada página evita repetir una imagen ya usada en su
  // propio cuerpo (tarjetas, carrusel, evidencias) — el reuso, si existe,
  // es siempre con una página distinta.
  heroHome: J_CAMPUS_FACHADA,
  nosotros: C_LABORATORIO,
  modeloEducativo: A_PROTOTIPO,
  nivelesIndex: K_PERFIL_ESTUDIANTE,
  distritoMaker: F_TALLER_FABRICACION,
  vidaEscolar: E_DOCENTE,
  admision: P_MANOS_CREANDO,
  familias: D_BLOQUES_INICIAL,
  trabajaConNosotros: H_VIDA_ESCOLAR,
  alianzas: C_LABORATORIO,
  contacto: J_CAMPUS_FACHADA,

  distritoMakerSeguridad: G_SEGURIDAD,
  nosotrosInstalaciones: J_CAMPUS_FACHADA,
  nosotrosPerfilEstudiante: K_PERFIL_ESTUDIANTE,

  // Miniaturas de nivel: se muestran JUNTAS en Inicio y en el índice de
  // Niveles, así que las tres deben ser mutuamente distintas.
  levelCards: {
    inicial: D_BLOQUES_INICIAL,
    primaria: B_ROBOTICA_GRUPO,
    secundaria: C_LABORATORIO,
  },

  // Hero de la página propia de cada nivel. Secundaria usa una foto distinta
  // de su miniatura (L en vez de C) para no repetir con su propia grilla de
  // evidencias, que sí incluye C. Inicial y Primaria repiten una vez con su
  // única evidencia — es la única foto de esa edad en el banco disponible.
  levelHero: {
    inicial: D_BLOQUES_INICIAL,
    primaria: B_ROBOTICA_GRUPO,
    secundaria: L_ROBOTICA_TALLER,
  },

  // Carrusel de rutas Maker (Inicio): cuatro fotos grandes y exclusivas,
  // ninguna se repite en otra parte de la home.
  makerRoutes: {
    robotica: L_ROBOTICA_TALLER,
    diseno: M_DISENO_TALLER,
    gastronomia: N_GASTRONOMIA,
    construccion: O_CONSTRUCCION,
  },

  // Selector "Cómo se vive en cada nivel" (Distrito Maker): distintas de
  // las 4 fotos de rutas y de las evidencias que aparecen en esa misma
  // página.
  distritoMakerLevels: {
    inicial: D_BLOQUES_INICIAL,
    primaria: B_ROBOTICA_GRUPO,
    secundaria: K_PERFIL_ESTUDIANTE,
  },
} satisfies Record<string, SiteImage | string | Record<string, SiteImage>>;

// Reexport individual para armar evidence.ts con las mismas constantes.
export const EVIDENCE_IMAGES = {
  A: A_PROTOTIPO,
  B: B_ROBOTICA_GRUPO,
  C: C_LABORATORIO,
  D: D_BLOQUES_INICIAL,
  H: H_VIDA_ESCOLAR,
  I: I_ADMISION_DETALLE,
  M: M_DISENO_TALLER,
  P: P_MANOS_CREANDO,
};
