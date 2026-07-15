// Preguntas frecuentes. Las respuestas de costos, vacantes y requisitos usan
// los datos de vista previa de site.ts (ADMISSION_PRICING, etc.) — no son
// montos aprobados, ver docs/backlog.md.

export type FaqItem = {
  question: string;
  answer: string;
};

export const ADMISSION_FAQ: FaqItem[] = [
  {
    question: "¿Cuál es el proceso de admisión?",
    answer:
      "Contacto, visita o charla informativa, entrevista informativa, evaluación o entrevista según el nivel, confirmación de vacante y matrícula.",
  },
  {
    question: "¿Cuánto cuesta la matrícula y la pensión?",
    answer:
      "La matrícula es de S/ 1,200 y la pensión de S/ 850 mensuales, en 10 cuotas de marzo a diciembre. Incluye materiales del Distrito Maker; no incluye uniforme ni alimentación.",
  },
  {
    question: "¿Hay vacantes disponibles para este año?",
    answer:
      "Las secciones tienen 15 estudiantes en Inicial y 25 en Primaria y Secundaria. La disponibilidad exacta por grado se confirma durante el proceso de admisión — escríbenos para conocerla.",
  },
  {
    question: "¿Qué documentos necesito para postular?",
    answer:
      "Partida de nacimiento, DNI del estudiante y los apoderados, libreta de notas o certificado de estudios del año anterior, dos fotos tamaño carné y la ficha de matrícula. En Inicial, además el carné de vacunas.",
  },
  {
    question: "¿Ofrecen becas o descuentos?",
    answer:
      "Sí: descuento por pronto pago de matrícula, convenio para hermanos matriculados y beneficio para hijos de exalumnos cuando corresponda.",
  },
  {
    question: "¿Puedo visitar el colegio antes de postular?",
    answer:
      "Sí, la visita guiada es parte del proceso: conoces el campus, los laboratorios del Distrito Maker y la propuesta educativa antes de la entrevista informativa.",
  },
  {
    question: "¿Dónde está ubicado el colegio?",
    answer:
      "En Lurín, Lima, en la zona entre Av. México, Av. Perú y Av. Independencia, conectada con la Panamericana Sur.",
  },
];

export const FAMILIES_FAQ: FaqItem[] = [
  {
    question: "¿Cómo se comunica el colegio con las familias?",
    answer:
      "A través de una agenda digital con notas y avisos por sección, correo institucional y reuniones bimestrales por nivel.",
  },
  {
    question: "¿Hay acompañamiento psicológico?",
    answer:
      "Sí, el colegio cuenta con orientación psicológica por nivel como parte del acompañamiento a estudiantes y familias.",
  },
  {
    question: "¿Existe una escuela para padres?",
    answer:
      "Sí, con talleres bimestrales sobre acompañamiento socioemocional, límites y convivencia, y uso saludable de tecnología.",
  },
];
