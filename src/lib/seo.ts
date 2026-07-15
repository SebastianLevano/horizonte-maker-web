import { Metadata } from "next";
import { SITE } from "@/data/site";

// Meta titles y descriptions de docs/seo.md §4, una entrada por ruta.
export const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${SITE.name} · Colegio en Lurín`,
    description:
      "Colegio en Lurín donde los estudiantes aprenden investigando, creando y resolviendo desafíos reales. Inicial, Primaria y Secundaria. Agenda una visita.",
  },
  "/nosotros": {
    title: "Nosotros",
    description:
      "Conoce nuestra misión, visión y valores. Un proyecto educativo con raíces en Lurín que forma jóvenes que hacen, resuelven y construyen.",
  },
  "/modelo-educativo": {
    title: "Modelo educativo",
    description:
      "Currículo Nacional, aprendizaje basado en proyectos, STEAM y Reggio Emilia. Descubre cómo aprenden nuestros estudiantes.",
  },
  "/niveles": {
    title: "Niveles educativos",
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
    title: "Vida escolar y proyectos",
    description:
      "Proyectos, ferias, portafolios y evidencias de aprendizaje. Mira lo que construyen nuestros estudiantes en Lurín.",
  },
  "/admision": {
    title: "Admisión",
    description:
      "Conoce el proceso de admisión, requisitos y vacantes. Solicita información y agenda una visita a nuestro colegio en Lurín.",
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
    title: "Políticas de privacidad",
    description: "Política de privacidad, cookies, tratamiento de datos personales y uso de imágenes.",
  },
};

export function buildMetadata(path: string): Metadata {
  const entry = PAGE_META[path];
  if (!entry) return {};
  const url = `${SITE.url}${path}`;
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      type: "website",
    },
  };
}
