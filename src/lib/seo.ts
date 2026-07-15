import { Metadata } from "next";
import { SITE } from "@/data/site";

// Meta titles y descriptions de docs/seo.md §4, una entrada por ruta.
// "title" es opcional: si se omite (como en "/"), la pestaña usa el título
// por defecto del layout raíz en vez de duplicarlo con la plantilla "%s -".
export const PAGE_META: Record<string, { title?: string; description: string }> = {
  "/": {
    description:
      "Colegio en Lurín donde los estudiantes aprenden investigando, creando y resolviendo desafíos reales. Inicial, Primaria y Secundaria. Agenda una visita.",
  },
  "/nosotros": {
    title: "Nosotros",
    description:
      "Conoce nuestra misión, visión y valores. Un proyecto educativo con raíces en Lurín que forma jóvenes que hacen, resuelven y construyen.",
  },
  "/nosotros/infraestructura": {
    title: "Infraestructura",
    description:
      "Conoce el campus de Horizonte Maker en Lurín: un espacio diseñado para que cada nivel y cada ruta del Distrito Maker tengan su propio lugar.",
  },
  "/nosotros/historia": {
    title: "Historia",
    description:
      "La historia detrás de Horizonte Maker: cómo nació el proyecto y por qué el Distrito Maker es la columna vertebral del colegio.",
  },
  "/modelo-educativo": {
    title: "Modelo educativo",
    description:
      "Currículo Nacional, aprendizaje basado en proyectos, STEAM y Reggio Emilia. Descubre cómo aprenden nuestros estudiantes.",
  },
  "/niveles": {
    title: "Niveles",
    description:
      "Inicial, Primaria y Secundaria en Lurín. Una propuesta coherente de los 3 a los 16 años. Conoce cada nivel.",
  },
  "/niveles/inicial": {
    title: "Inicial",
    description:
      "Educación inicial en Lurín para 3, 4 y 5 años. 15 niños por sección, atelier, psicomotricidad e inglés por inmersión.",
  },
  "/niveles/primaria": {
    title: "Primaria",
    description:
      "Primaria en Lurín que conecta el Currículo Nacional con proyectos reales. 25 estudiantes por sección y dos experiencias Maker por semana.",
  },
  "/niveles/secundaria": {
    title: "Secundaria",
    description:
      "Secundaria en Lurín con rigor académico, orientación vocacional y cuatro rutas de formación técnica progresiva.",
  },
  "/distrito-maker": {
    title: "Distrito Maker",
    description:
      "Cuatro rutas de aprendizaje práctico: robótica, diseño y fabricación, gastronomía y construcción. El eje de nuestro colegio en Lurín.",
  },
  "/vida-escolar": {
    title: "Vida escolar",
    description:
      "Proyectos, ferias, portafolios y evidencias de aprendizaje. Mira lo que construyen nuestros estudiantes en Lurín.",
  },
  "/admision": {
    title: "Admisión",
    description:
      "Conoce el proceso de admisión, requisitos y vacantes. Solicita información y agenda una visita a nuestro colegio en Lurín.",
  },
  "/admision/fechas-y-costos": {
    title: "Fechas y costos",
    description:
      "Matrícula, pensión, beneficios y fechas de la campaña de admisión de Horizonte Maker en Lurín.",
  },
  "/admision/preguntas-frecuentes": {
    title: "Preguntas frecuentes",
    description:
      "Resolvemos las dudas más comunes sobre el proceso de admisión, costos, vacantes y requisitos de Horizonte Maker.",
  },
  "/familias": {
    title: "Familias",
    description:
      "Acompañamiento, escuela para padres, bienestar y convivencia. Así acompañamos a las familias de Horizonte Maker.",
  },
  "/trabaja-con-nosotros": {
    title: "Trabaja con nosotros",
    description:
      "Buscamos diseñadores de experiencias de aprendizaje. Conoce nuestro perfil docente y postula.",
  },
  "/alianzas": {
    title: "Alianzas",
    description:
      "Conectamos aprendizaje, comunidad y sector productivo. Conoce nuestras modalidades de colaboración y propón una alianza.",
  },
  "/contacto": {
    title: "Contacto",
    description: "Visítanos en Lurín. Teléfono, WhatsApp, correo, horarios de atención y cómo llegar.",
  },
  "/politicas": {
    title: "Políticas",
    description: "Política de privacidad, cookies, tratamiento de datos personales y uso de imágenes.",
  },
};

export function buildMetadata(path: string): Metadata {
  const entry = PAGE_META[path];
  if (!entry) return {};
  const url = `${SITE.url}${path}`;
  return {
    ...(entry.title && { title: entry.title }),
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      ...(entry.title && { title: entry.title }),
      description: entry.description,
      url,
      type: "website",
    },
  };
}
