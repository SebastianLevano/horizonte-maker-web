"use client";

import { useState } from "react";

type Step = { step: string; description?: string };

/**
 * Acordeón vertical con línea conectora: la numeración está justificada
 * (son secuencias reales — admisión, selección docente, exploración
 * Maker — donde el orden porta información, docs/components.md §5), pero
 * antes eran cajas sueltas sin relación visual entre pasos. El paso
 * activo se expande con clic; la línea entre círculos comunica que es
 * un flujo, no una grilla.
 */
export function ProcessSequence({ steps }: { steps: (string | Step)[] }) {
  const items: Step[] = steps.map((s) => (typeof s === "string" ? { step: s } : s));
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ol className="max-w-2xl">
      {items.map((item, i) => {
        const open = openIndex === i;
        const isLast = i === items.length - 1;
        return (
          <li key={item.step} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs transition-colors duration-200 ${
                  open ? "border-secondary bg-secondary text-white" : "border-border bg-white text-text-secondary"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {!isLast && <span className={`w-0.5 flex-1 ${open ? "bg-secondary/40" : "bg-border"}`} />}
            </div>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex-1 pb-6 text-left"
            >
              <span className={`font-semibold ${open ? "text-text" : "text-text-secondary"}`}>{item.step}</span>
              {item.description && (
                <p className={`mt-1.5 text-sm text-text-secondary transition-all duration-200 ${open ? "block" : "hidden"}`}>
                  {item.description}
                </p>
              )}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
