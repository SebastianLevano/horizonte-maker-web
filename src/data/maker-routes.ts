// Cuatro rutas del Distrito Maker, brief.md §8.
// "accent" resuelve docs/backlog.md #38 (acentos por ruta), auditado WCAG.

import { IMAGES, SiteImage } from "@/data/images";

export type RouteAccent = "robotica" | "diseno" | "gastronomia" | "construccion";

export type MakerRoute = {
  slug: string;
  name: string;
  develops: string;
  examples: string;
  precaution: string;
  accent: RouteAccent;
  icon: "cpu" | "pencil-ruler" | "chef-hat" | "hammer";
  image: SiteImage;
};

export const MAKER_ROUTES: MakerRoute[] = [
  {
    slug: "robotica-e-innovacion",
    name: "Robótica e Innovación Tecnológica",
    develops:
      "Pensamiento computacional, programación, automatización y solución tecnológica.",
    examples: "Robots, sensores, programación, proyectos de automatización.",
    precaution: "No se promete equipos específicos hasta confirmar el inventario.",
    accent: "robotica",
    icon: "cpu",
    image: IMAGES.makerRoutes.robotica,
  },
  {
    slug: "diseno-y-fabricacion",
    name: "Diseño y Fabricación",
    develops: "Creatividad, representación, modelado y fabricación de prototipos.",
    examples: "Bocetos, planos, diseño 3D, corte y ensamblaje.",
    precaution: "Uso siempre seguro y supervisado.",
    accent: "diseno",
    icon: "pencil-ruler",
    image: IMAGES.makerRoutes.diseno,
  },
  {
    slug: "gastronomia-y-emprendimiento",
    name: "Gastronomía y Emprendimiento",
    develops:
      "Planificación, transformación de alimentos, costos, trabajo colaborativo y valor para la comunidad.",
    examples: "Productos, campañas, presupuestos y ferias.",
    precaution: "Protocolos de higiene y alergias cuando corresponda.",
    accent: "gastronomia",
    icon: "chef-hat",
    image: IMAGES.makerRoutes.gastronomia,
  },
  {
    slug: "construccion-y-prototipado",
    name: "Construcción y Prototipado",
    develops: "Carpintería, estructuras, medición, seguridad y fabricación.",
    examples: "Maquetas, mobiliario, pruebas de resistencia y soluciones comunitarias.",
    precaution: "Ningún menor usa herramientas sin equipo de protección.",
    accent: "construccion",
    icon: "hammer",
    image: IMAGES.makerRoutes.construccion,
  },
];

// "borderTop" colorea solo el borde superior (border-t-2 en la tarjeta);
// los otros tres lados quedan en el gris neutro de siempre. "solid" es la
// versión saturada, para usar como badge sobre una fotografía oscura
// (docs/design-system.md — carrusel grande de rutas Maker).
export const ROUTE_ACCENT_CLASSES: Record<
  RouteAccent,
  { text: string; bg: string; borderTop: string; solid: string }
> = {
  robotica: {
    text: "text-route-robotica",
    bg: "bg-route-robotica-tint",
    borderTop: "border-t-route-robotica",
    solid: "bg-route-robotica",
  },
  diseno: {
    text: "text-route-diseno",
    bg: "bg-route-diseno-tint",
    borderTop: "border-t-route-diseno",
    solid: "bg-route-diseno",
  },
  gastronomia: {
    text: "text-route-gastronomia",
    bg: "bg-route-gastronomia-tint",
    borderTop: "border-t-route-gastronomia",
    solid: "bg-route-gastronomia",
  },
  construccion: {
    text: "text-route-construccion",
    bg: "bg-route-construccion-tint",
    borderTop: "border-t-route-construccion",
    solid: "bg-route-construccion",
  },
};
