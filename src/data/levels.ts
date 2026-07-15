// Datos por nivel, brief.md §2 y §7.
// "accent" resuelve docs/backlog.md #38 (acentos por nivel), auditado WCAG.

export type LevelAccent = "inicial" | "primaria" | "secundaria";

export type Level = {
  slug: LevelAccent;
  name: string;
  ages: string;
  grades: string;
  sectionSize: string;
  centralMessage: string;
  summary: string;
  features: { title: string; description: string }[];
  evidenceTypes: string[];
};

export const LEVEL_ACCENT_CLASSES: Record<LevelAccent, { text: string; bg: string; borderTop: string; solid: string }> = {
  inicial: {
    text: "text-level-inicial",
    bg: "bg-level-inicial-tint",
    borderTop: "border-t-level-inicial",
    solid: "bg-level-inicial",
  },
  primaria: {
    text: "text-level-primaria",
    bg: "bg-level-primaria-tint",
    borderTop: "border-t-level-primaria",
    solid: "bg-level-primaria",
  },
  secundaria: {
    text: "text-level-secundaria",
    bg: "bg-level-secundaria-tint",
    borderTop: "border-t-level-secundaria",
    solid: "bg-level-secundaria",
  },
};

export const LEVELS: Level[] = [
  {
    slug: "inicial",
    name: "Inicial",
    ages: "3, 4 y 5 años",
    grades: "3 grados",
    sectionSize: "15 estudiantes por sección",
    centralMessage:
      "Aprender mediante juego, movimiento, exploración, proyectos y expresión.",
    summary:
      "Secciones pequeñas, tutora y auxiliar por aula, y experiencias Maker adecuadas a la edad, siempre con supervisión.",
    features: [
      {
        title: "Tutora y auxiliar por aula",
        description: "Dos adultos acompañando a quince niños en cada sección.",
      },
      {
        title: "Atelier y psicomotricidad",
        description: "Espacios dedicados a la expresión y el movimiento.",
      },
      {
        title: "Inglés por inmersión",
        description: "El idioma se vive en el día a día, no solo en una clase aparte.",
      },
      {
        title: "Experiencias Maker seguras",
        description:
          "Una primera aproximación al Distrito Maker, adaptada a la edad y con protocolos claros.",
      },
      {
        title: "Alimentación en aula",
        description: "Lunch y almuerzo acompañados por el equipo docente.",
      },
      {
        title: "Patios diferenciados",
        description: "Espacios de juego pensados para cada edad del nivel.",
      },
    ],
    evidenceTypes: [
      "Juego en sectores",
      "Movimiento y expresión corporal",
      "Arte y documentación pedagógica",
      "Construcciones simples",
    ],
  },
  {
    slug: "primaria",
    name: "Primaria",
    ages: "1.° a 6.° grado",
    grades: "6 grados",
    sectionSize: "25 estudiantes por sección",
    centralMessage:
      "Conectar los aprendizajes académicos con proyectos y soluciones concretas.",
    summary:
      "Cobertura completa del Currículo Nacional, con Aprendizaje Basado en Proyectos y dos experiencias Maker por semana.",
    features: [
      {
        title: "Áreas del CNEB",
        description: "Cobertura completa del Currículo Nacional de Educación Básica.",
      },
      {
        title: "Aprendizaje Basado en Proyectos",
        description: "Lo académico se aplica a problemas reales, no se estudia aislado.",
      },
      {
        title: "Dos experiencias Maker semanales",
        description: "Frecuencia fija dentro del horario regular.",
      },
      {
        title: "Docentes especialistas",
        description: "Por área, además del acompañamiento de tutoría.",
      },
      {
        title: "Tutoría y portafolio",
        description: "Seguimiento individual del progreso de cada estudiante.",
      },
      {
        title: "Comunidad Maker",
        description:
          "Espacio donde los estudiantes comparten proyectos entre secciones y grados, y reciben retroalimentación de sus pares antes de presentar sus soluciones a la comunidad.",
      },
    ],
    evidenceTypes: [
      "Investigaciones",
      "Maquetas y prototipos",
      "Campañas y presentaciones",
      "Trabajo colaborativo",
    ],
  },
  {
    slug: "secundaria",
    name: "Secundaria",
    ages: "12 a 16 años",
    grades: "1.° a 5.° grado",
    sectionSize: "25 estudiantes por sección",
    centralMessage:
      "Integrar rigor académico, orientación vocacional y formación técnica progresiva.",
    summary:
      "De 1.° a 3.° los estudiantes exploran las cuatro rutas Maker; desde 4.° profundizan en una, acompañados en la decisión.",
    features: [
      {
        title: "Exploración (1.° a 3.°)",
        description: "Rotación por las cuatro rutas del Distrito Maker.",
      },
      {
        title: "Especialización (4.° y 5.°)",
        description:
          "Profundización en una ruta, a partir de portafolio, desempeño, autoevaluación y una conversación con la familia.",
      },
      {
        title: "Portafolio y rúbricas",
        description: "Evaluación formativa a lo largo de todo el proceso.",
      },
      {
        title: "Orientación psicológica",
        description: "Acompañamiento en la decisión de especialización.",
      },
      {
        title: "Proyectos complejos",
        description: "Trabajos de mayor alcance, cercanos a un problema real.",
      },
    ],
    evidenceTypes: [
      "Prototipos funcionales",
      "Modelos de negocio",
      "Planos y soluciones tecnológicas",
      "Proyectos de impacto",
    ],
  },
];

export function getLevel(slug: string) {
  return LEVELS.find((l) => l.slug === slug);
}
