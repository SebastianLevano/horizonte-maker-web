"use client";

import { useState } from "react";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";

/**
 * Se voltea con clic/Enter (no solo hover, para que funcione con teclado
 * y en pantallas táctiles): el reverso revela un dato adicional, no repite
 * el frente. Interacción distinta a los paneles de pestañas ya usados en
 * Inicio, Nosotros y Modelo educativo.
 */
export function FlipCard({
  title,
  description,
  detail,
  icon,
}: {
  title: string;
  description: string;
  detail: string;
  icon: ContentIconName;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = CONTENT_ICONS[icon];

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${title}. Toca para ${flipped ? "ver menos" : "ver más"}.`}
      onClick={() => setFlipped((f) => !f)}
      className={`flip-card h-56 w-full text-left ${flipped ? "is-flipped" : ""}`}
    >
      <div className="flip-card-inner h-full w-full">
        <div className="flip-card-face relative flex h-full w-full flex-col rounded-md border border-border bg-white p-5 transition-shadow duration-200 hover:shadow-[var(--shadow-float)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Icon />
          </span>
          <h3 className="mt-3 font-semibold text-text">{title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{description}</p>
          <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-mono uppercase tracking-[0.04em] text-secondary">
            Ver más
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-5M20 15a8 8 0 01-14 5" />
            </svg>
          </span>
        </div>
        <div className="flip-card-face flip-card-back flex h-full w-full flex-col rounded-md border border-primary bg-primary p-5 text-white">
          <p className="font-mono text-xs uppercase tracking-[0.06em] text-white/70">{title}</p>
          <p className="mt-3 text-sm leading-relaxed">{detail}</p>
          <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-mono uppercase tracking-[0.04em] text-white/70">
            Volver
          </span>
        </div>
      </div>
    </button>
  );
}
