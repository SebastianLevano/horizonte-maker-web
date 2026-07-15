// Testimonios ILUSTRATIVOS para la vista previa. Atribuidos solo por rol,
// nunca con nombre propio inventado — ni siquiera en vista previa se
// fabrica la identidad de una familia o estudiante real (docs/content-guide.md
// §6: "Madre de familia, Primaria" es preferible a un nombre completo).
// Sustituir por testimonios reales, autorizados y verificables antes de
// publicar (docs/backlog.md).

export type Testimonial = {
  quote: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Mi hijo llegó a casa a terminar su prototipo de robot porque \"no le había quedado bien\". Nunca lo había visto tan enganchado con una tarea.",
    role: "Madre de familia, nivel Primaria",
  },
  {
    quote:
      "Lo que más valoro es que no separan lo académico de lo práctico. Mi hija aplica lo que aprende en matemática al mismo proyecto que construye en el taller.",
    role: "Padre de familia, nivel Secundaria",
  },
  {
    quote:
      "En Inicial pensé que el juego libre era solo recreo. Ahora entiendo que ahí está aprendiendo a clasificar, a esperar su turno y a resolver problemas pequeños.",
    role: "Madre de familia, nivel Inicial",
  },
];
