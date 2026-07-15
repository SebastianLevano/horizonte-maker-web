// Evidencias ILUSTRATIVAS para que el sitio se vea completo en vista previa
// (pedido explícito: "ver la página completa como si fuese en producción").
// Son proyectos de ejemplo con las imágenes ya disponibles, no evidencia
// real y autorizada de estudiantes — nunca se presentan como tal fuera de
// esta vista previa. Ver docs/backlog.md #9: sustituir por evidencia real
// documentada antes de publicar.
//
// Orden y elección de imagen pensados para que Inicio (que muestra las
// primeras 3) y Vida escolar (que muestra las 8) no repitan ninguna foto
// ya usada en el resto de esa misma página — ver docs/backlog.md "Vista
// previa de producción" para el mapa completo de imágenes por página.

import { Evidence } from "@/components/cards/evidence-card";
import { EVIDENCE_IMAGES } from "@/data/images";

export type LevelSlug = "inicial" | "primaria" | "secundaria";

export type IllustrativeEvidence = Evidence & { level: LevelSlug };

export const EVIDENCES: IllustrativeEvidence[] = [
  {
    level: "secundaria",
    title: "Sensor de distancia para prototipo robótico",
    context: "Ruta Robótica e Innovación Tecnológica",
    grade: "Secundaria · 4.° año",
    learning: "Electrónica básica y pensamiento computacional",
    image: EVIDENCE_IMAGES.A,
  },
  {
    level: "secundaria",
    title: "Placa soldada para proyecto final",
    context: "Ruta Robótica e Innovación Tecnológica",
    grade: "Secundaria · 5.° año",
    learning: "Soldadura y ensamblaje de componentes electrónicos",
    image: EVIDENCE_IMAGES.I,
  },
  {
    level: "primaria",
    title: "Feria de proyectos Maker",
    context: "Presentación abierta a familias, Comunidad Maker",
    grade: "Primaria · varios grados",
    learning: "Comunicación de proyectos y trabajo colaborativo",
    image: EVIDENCE_IMAGES.H,
  },
  {
    level: "inicial",
    title: "Torre clasificada por color y forma",
    context: "Juego en sectores, taller de construcción",
    grade: "Inicial · 5 años",
    learning: "Clasificación, coordinación motora fina y trabajo en equipo",
    image: EVIDENCE_IMAGES.D,
  },
  {
    level: "primaria",
    title: "Robot explorador programado en equipo",
    context: "Experiencia Maker semanal, ruta Robótica",
    grade: "Primaria · 5.° grado",
    learning: "Programación básica por bloques y colaboración",
    image: EVIDENCE_IMAGES.B,
  },
  {
    level: "secundaria",
    title: "Análisis de muestras en laboratorio",
    context: "Curso de Ciencias, trabajo con microscopio",
    grade: "Secundaria · 3.° año",
    learning: "Método científico y uso de instrumentos de precisión",
    image: EVIDENCE_IMAGES.C,
  },
  {
    level: "secundaria",
    title: "Soporte impreso en 3D para exhibición",
    context: "Ruta Diseño y Fabricación, taller con impresoras 3D",
    grade: "Secundaria · 4.° año",
    learning: "Modelado 3D e iteración de prototipos",
    image: EVIDENCE_IMAGES.M,
  },
  {
    level: "secundaria",
    title: "Circuito ensamblado a mano",
    context: "Ruta Construcción y Prototipado",
    grade: "Secundaria · 3.° año",
    learning: "Precisión manual y ensamblaje de componentes",
    image: EVIDENCE_IMAGES.P,
  },
];

export function evidencesForLevel(level: LevelSlug) {
  return EVIDENCES.filter((e) => e.level === level);
}
