"use client";

import { useRef } from "react";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";

type RailItem = { title: string; description: string; icon?: ContentIconName };

/**
 * Riel de tarjetas con scroll horizontal: el usuario arrastra o usa los
 * botones para navegar a su ritmo, sin auto-avance — a propósito distinto
 * del carrusel automático de rutas Maker y de los paneles de pestañas
 * usados en el resto del sitio.
 */
export function HorizontalCardRail({ items, ariaLabel }: { items: RailItem[]; ariaLabel: string }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? 280) + 16;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div role="group" aria-label={ariaLabel} className="relative">
      <div
        ref={trackRef}
        className="card-rail flex gap-4 overflow-x-auto pb-2"
        tabIndex={0}
      >
        {items.map((item) => {
          const Icon = item.icon ? CONTENT_ICONS[item.icon] : null;
          return (
            <div
              key={item.title}
              className="w-[260px] flex-shrink-0 rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] sm:w-[280px]"
            >
              {Icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                  <Icon />
                </span>
              )}
              <h3 className={`font-semibold text-text ${Icon ? "mt-3" : ""}`}>{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollByCard(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-secondary hover:text-secondary"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => scrollByCard(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-secondary hover:text-secondary"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <span className="ml-1 text-xs text-text-secondary">Desliza o usa las flechas</span>
      </div>
    </div>
  );
}
