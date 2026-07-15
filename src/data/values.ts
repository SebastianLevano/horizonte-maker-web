// Valores institucionales, brief.md §2. La conducta observable es redacción
// editorial sobre el valor declarado, no un hecho nuevo inventado.

export type Value = {
  name: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    name: "Emprendimiento",
    description:
      "Identificar una oportunidad o un problema y actuar para resolverlo, en vez de esperar a que alguien más lo haga.",
  },
  {
    name: "Integridad",
    description:
      "Sostener lo que se dice y se hace, incluso cuando nadie más lo está viendo.",
  },
  {
    name: "Colaboración",
    description:
      "Construir con otros, escuchando y aportando, porque los mejores proyectos rara vez son obra de una sola persona.",
  },
];

export const STUDENT_PROFILE_TRAITS = [
  "Autonomía para tomar decisiones",
  "Capacidad de resolver problemas reales",
  "Rigor académico junto con habilidad práctica",
  "Criterio para actuar con conciencia",
];
