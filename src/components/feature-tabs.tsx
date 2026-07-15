"use client";

import { useEffect, useRef, useState } from "react";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { ROUTE_ACCENT_CLASSES, RouteAccent } from "@/data/maker-routes";

type TabItem = { title: string; description: string; icon: ContentIconName };

const INTERVAL_MS = 5000;
const ACCENTS: RouteAccent[] = ["robotica", "diseno", "gastronomia", "construccion"];

/**
 * Panel de pestañas interactivo: reemplaza una grilla estática de
 * FeatureCard donde el usuario señaló que "solo cambiar colores" no
 * resolvía la sensación de página plana. Reutiliza los acentos de ruta
 * Maker (ya auditados WCAG) para dar variedad de color real entre ítems,
 * y el mismo patrón de auto-rotación con salvaguardas de accesibilidad
 * que el resto del sitio (pausa en hover/foco/pestaña oculta/reduced-motion,
 * control play/pausa explícito, navegación por teclado).
 */
export function FeatureTabs({ items, ariaLabel }: { items: TabItem[]; ariaLabel: string }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reducedMotionRef.current = matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(matches);
    if (matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing, items.length]);

  useEffect(() => {
    function onVisibility() {
      if (document.hidden) setPlaying(false);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  function go(next: number) {
    setIndex(((next % items.length) + items.length) % items.length);
  }

  function pauseForInteraction() {
    setPlaying(false);
  }

  function resumeIfAllowed() {
    if (!reducedMotionRef.current) setPlaying(true);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      go(index - 1);
    }
  }

  const active = items[index];
  const activeAccent = ROUTE_ACCENT_CLASSES[ACCENTS[index % ACCENTS.length]];
  const ActiveIcon = CONTENT_ICONS[active.icon];

  return (
    <div
      role="region"
      aria-roledescription="panel interactivo"
      aria-label={ariaLabel}
      onMouseEnter={pauseForInteraction}
      onMouseLeave={resumeIfAllowed}
      onFocus={pauseForInteraction}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) resumeIfAllowed();
      }}
      onKeyDown={onKeyDown}
      className="grid gap-4 lg:grid-cols-[300px_1fr] lg:gap-6"
    >
      <div role="tablist" aria-label={ariaLabel} className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {items.map((item, i) => {
          const accent = ROUTE_ACCENT_CLASSES[ACCENTS[i % ACCENTS.length]];
          const Icon = CONTENT_ICONS[item.icon];
          const isActive = i === index;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => go(i)}
              className={`flex flex-shrink-0 items-center gap-3 rounded-md border px-4 py-3 text-left transition-all duration-200 lg:w-full ${
                isActive ? `border-transparent ${accent.bg} shadow-[var(--shadow-float)]` : "border-border bg-white hover:border-border-strong"
              }`}
            >
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md ${
                  isActive ? `bg-white/70 ${accent.text}` : "bg-surface text-text-secondary"
                }`}
              >
                <Icon />
              </span>
              <span className={`whitespace-nowrap text-sm font-medium lg:whitespace-normal ${isActive ? "text-text" : "text-text-secondary"}`}>
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <div key={index} className="slide-enter relative overflow-hidden rounded-lg border border-border bg-white p-6 sm:p-8">
        <span className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${activeAccent.bg} opacity-60`} aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <span className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md ${activeAccent.bg} ${activeAccent.text}`}>
            <ActiveIcon className="h-7 w-7" />
          </span>
          <div>
            <p className={`font-mono text-xs uppercase tracking-[0.06em] ${activeAccent.text}`}>
              {index + 1} / {items.length}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-text sm:text-2xl">{active.title}</h3>
            <p className="mt-2 max-w-xl text-sm text-text-secondary sm:text-base">{active.description}</p>
          </div>
        </div>

        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-border" aria-hidden="true">
          {!reducedMotion && (
            <span
              key={index}
              className={`story-progress-bar block h-full ${activeAccent.solid}`}
              style={{ animationDuration: `${INTERVAL_MS}ms`, animationPlayState: playing ? "running" : "paused" }}
            />
          )}
        </span>
      </div>
    </div>
  );
}
