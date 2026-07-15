// Pilares del modelo educativo, brief.md §5 (fila "Modelo educativo") y §3.
// Los ejemplos de aula son contenido de vista previa: redactados para que
// el sitio se vea completo, pendientes de validación por coordinación
// académica antes de publicarse como definitivos (docs/backlog.md #29).

export type Pillar = {
  name: string;
  description: string;
  classroomExample: string | null;
};

export const PILLARS: Pillar[] = [
  {
    name: "Socio-constructivismo",
    description:
      "El aprendizaje se construye con otros, a partir de la interacción y la experiencia compartida.",
    classroomExample:
      "En Primaria, un equipo de cuatro estudiantes diseña juntos una maqueta de biohuerto: cada uno propone una idea, la discuten y solo avanzan cuando todos entienden por qué se eligió esa solución.",
  },
  {
    name: "Aprendizaje Basado en Proyectos",
    description:
      "Los contenidos académicos se organizan alrededor de un problema real que el estudiante debe resolver.",
    classroomExample:
      "En Secundaria, el curso de Matemática usa el diseño de una rampa de acceso para calcular ángulos y proporciones — el estudiante aplica trigonometría a un problema que el colegio realmente necesita resolver.",
  },
  {
    name: "STEAM",
    description:
      "Ciencia, tecnología, ingeniería, arte y matemática integradas en un mismo proyecto, no como cursos aislados.",
    classroomExample:
      "Un proyecto de Inicial sobre \"cómo se mueve el agua\" combina observación científica, construcción de canales con material reciclado y registro gráfico del proceso, todo en la misma sesión.",
  },
  {
    name: "Reggio Emilia",
    description:
      "El entorno y la documentación del proceso son parte activa del aprendizaje, no solo un registro posterior.",
    classroomExample:
      "Cada aula mantiene un panel visible con fotografías y notas del proyecto en curso, para que los propios estudiantes vean cómo evolucionó su idea desde el primer boceto.",
  },
];

export const EVALUATION = {
  title: "Evaluación formativa",
  description:
    "El progreso se sigue con portafolio, rúbricas y autoevaluación a lo largo del proceso, no solo al final.",
};

export const COLLABORATIVE_LEARNING = {
  title: "Aprendizaje colaborativo",
  description:
    "El trabajo con otros es parte del contenido que se aprende, no solo la forma en que se organiza la clase.",
};

export const ERROR_CULTURE = {
  title: "Cultura del error",
  description:
    "El error es información para mejorar, no una falta. Un prototipo que falla es parte del proceso de investigar, diseñar, construir, probar, mejorar y comunicar.",
};
