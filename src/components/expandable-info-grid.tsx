"use client";

import { useState } from "react";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";

type InfoItem = { title: string; description: string; example: string; icon: ContentIconName };

/**
 * Cada tarjeta se expande con clic para revelar un ejemplo concreto —
 * interacción nueva: expandir dentro de la propia tarjeta, distinta al
 * panel lateral (FeatureTabs), el volteo 3D (FlipCard) o el acordeón de
 * lista (ProcessSequence) ya usados en el resto del sitio.
 */
export function ExpandableInfoGrid({ items }: { items: InfoItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item, i) => {
        const Icon = CONTENT_ICONS[item.icon];
        const open = openIndex === i;
        return (
          <div
            key={item.title}
            className="rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
              <Icon />
            </span>
            <h3 className="mt-3 font-semibold text-text">{item.title}</h3>
            <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="mt-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.04em] text-secondary"
            >
              {open ? "Ocultar ejemplo" : "Ver ejemplo"}
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-200 ${open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="rounded-sm bg-surface px-3 py-2 text-xs text-text-secondary">{item.example}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
