"use client";

import { useEffect, useRef, useState } from "react";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";

type CycleStep = { step: string; icon: ContentIconName; description: string };

const INTERVAL_MS = 4500;

/**
 * "Así aprenden nuestros estudiantes" es un ciclo real (brief.md §8), no
 * una lista de 6 tarjetas sueltas: Comunicar retroalimenta el siguiente
 * Investigar. Se representa como flujo conectado con paso activo grande,
 * en vez de una grilla numerada sin relación visual entre pasos.
 * Mismas salvaguardas de accesibilidad que el resto de rotaciones
 * automáticas del sitio: pausa en hover/foco/pestaña oculta/reduced-motion,
 * control play/pausa explícito, navegación por teclado.
 */
export function LearningCycle({ steps }: { steps: readonly CycleStep[] }) {
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
      setIndex((i) => (i + 1) % steps.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing, steps.length]);

  useEffect(() => {
    function onVisibility() {
      if (document.hidden) setPlaying(false);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  function go(next: number) {
    setIndex(((next % steps.length) + steps.length) % steps.length);
  }

  function pauseForInteraction() {
    setPlaying(false);
  }

  function resumeIfAllowed() {
    if (!reducedMotionRef.current) setPlaying(true);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  }

  const active = steps[index];
  const ActiveIcon = CONTENT_ICONS[active.icon];

  return (
    <div
      role="region"
      aria-roledescription="ciclo interactivo"
      aria-label="Ciclo de aprendizaje Maker: Investigar, Diseñar, Construir, Probar, Mejorar y Comunicar"
      onMouseEnter={pauseForInteraction}
      onMouseLeave={resumeIfAllowed}
      onFocus={pauseForInteraction}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) resumeIfAllowed();
      }}
      onKeyDown={onKeyDown}
    >
      <div className="flex items-center">
        {steps.map((s, i) => {
          const Icon = CONTENT_ICONS[s.icon];
          const isActive = i === index;
          return (
            <div key={s.step} className="flex flex-1 items-center last:flex-none">
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={isActive}
                aria-label={`Ver paso ${i + 1}: ${s.step}`}
                className="group flex flex-shrink-0 flex-col items-center gap-2"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-14 sm:w-14 ${
                    isActive
                      ? "border-secondary bg-secondary text-white shadow-[var(--shadow-float)]"
                      : "border-border bg-white text-text-secondary group-hover:border-secondary/50"
                  }`}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.06em] sm:text-[11px] ${
                    isActive ? "text-secondary" : "text-text-secondary"
                  }`}
                >
                  {s.step}
                </span>
              </button>
              {i < steps.length - 1 && (
                <span
                  className={`mx-1.5 h-0.5 flex-1 rounded-full transition-colors duration-500 sm:mx-3 ${
                    i < index ? "bg-secondary" : "bg-border"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-lg border border-border bg-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
            <ActiveIcon className="h-6 w-6" />
          </span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">
              Paso {index + 1} de {steps.length}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-text sm:text-2xl">{active.step}</h3>
            <p className="mt-2 max-w-2xl text-sm text-text-secondary sm:text-base">{active.description}</p>
          </div>
          <button
            type="button"
            aria-label={playing ? "Pausar rotación automática" : "Reanudar rotación automática"}
            aria-pressed={playing}
            onClick={() => setPlaying((p) => !p)}
            className="ml-auto flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-secondary hover:text-secondary"
          >
            {playing ? (
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 5.5v13l11-6.5z" />
              </svg>
            )}
          </button>
        </div>

        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-border" aria-hidden="true">
          {!reducedMotion && (
            <span
              key={index}
              className="story-progress-bar block h-full bg-secondary"
              style={{ animationDuration: `${INTERVAL_MS}ms`, animationPlayState: playing ? "running" : "paused" }}
            />
          )}
        </span>
      </div>
    </div>
  );
}
