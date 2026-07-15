"use client";

import { useState } from "react";
import { EvidenceCard } from "@/components/cards/evidence-card";
import { IllustrativeEvidence, LevelSlug } from "@/data/evidence";
import { LEVEL_ACCENT_CLASSES } from "@/data/levels";

type Filter = "todos" | LevelSlug;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "inicial", label: "Inicial" },
  { value: "primaria", label: "Primaria" },
  { value: "secundaria", label: "Secundaria" },
];

/**
 * Filtro por nivel sobre la grilla completa de evidencias: interacción
 * nueva en el sitio (filtrar, no rotar/voltear/deslizar) — el usuario
 * decide qué subconjunto ver, no solo cómo se presenta uno fijo.
 */
export function EvidenceGallery({ evidences }: { evidences: IllustrativeEvidence[] }) {
  const [filter, setFilter] = useState<Filter>("todos");
  const visible = filter === "todos" ? evidences : evidences.filter((e) => e.level === filter);

  return (
    <div>
      <div role="group" aria-label="Filtrar proyectos por nivel" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = filter === f.value;
          const solid = f.value === "todos" ? "bg-primary" : LEVEL_ACCENT_CLASSES[f.value].solid;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive ? `border-transparent text-white ${solid}` : "border-border bg-white text-text-secondary hover:border-border-strong"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div key={filter} className="slide-enter mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((e) => (
          <EvidenceCard key={e.title} evidence={e} />
        ))}
      </div>
    </div>
  );
}
