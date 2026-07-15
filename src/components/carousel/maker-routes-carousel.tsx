"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MAKER_ROUTES, ROUTE_ACCENT_CLASSES } from "@/data/maker-routes";

const INTERVAL_MS = 5500;

/**
 * Carrusel a pantalla completa (full-bleed) de las cuatro rutas Maker,
 * solo en Inicio: rompe el ancho de 1200px del resto de la página a
 * propósito — es la pieza de mayor impacto visual de la home, no una
 * tarjeta más. El texto y los controles se mantienen alineados al ancho
 * de contenido normal, superpuestos a la fotografía.
 * /distrito-maker mantiene la grilla estática completa como referencia
 * comparable (docs/design-system.md §9).
 *
 * Reconcilia "carrusel automático" con la regla previa de no usarlos:
 * pausa en hover/foco/pestaña oculta/reduced-motion, control play/pausa
 * explícito (WCAG 2.2.2) y navegación por teclado.
 */
export function MakerRoutesCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MAKER_ROUTES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    function onVisibility() {
      if (document.hidden) setPlaying(false);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  function go(next: number) {
    setIndex(((next % MAKER_ROUTES.length) + MAKER_ROUTES.length) % MAKER_ROUTES.length);
  }

  function pauseForInteraction() {
    setPlaying(false);
  }

  function resumeIfAllowed() {
    if (!reducedMotion.current) setPlaying(true);
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

  const route = MAKER_ROUTES[index];
  const accent = ROUTE_ACCENT_CLASSES[route.accent];

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Las cuatro rutas del Distrito Maker"
      className="relative ml-[calc(50%-50vw)] w-screen overflow-hidden"
      onMouseEnter={pauseForInteraction}
      onMouseLeave={resumeIfAllowed}
      onFocus={pauseForInteraction}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) resumeIfAllowed();
      }}
      onKeyDown={onKeyDown}
    >
      <div
        key={route.slug}
        role="group"
        aria-roledescription="diapositiva"
        aria-label={`Ruta ${index + 1} de ${MAKER_ROUTES.length}: ${route.name}`}
        className="slide-enter relative h-[560px] w-full sm:h-[640px] lg:h-[85vh] lg:min-h-[680px] lg:max-h-[860px]"
      >
        <Image
          src={route.image.src}
          alt={route.image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: route.image.focus }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

        {/* Contenido y controles alineados al ancho de contenido normal
            (igual que <Container>), aunque la foto ocupe todo el ancho. */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14">
            <span
              className={`inline-block rounded-sm px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-white ${accent.solid}`}
            >
              Ruta {index + 1} de {MAKER_ROUTES.length}
            </span>
            <h3 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-white sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
              {route.name}
            </h3>
            <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg lg:text-xl">
              {route.develops}
            </p>
            <p className="mt-4 max-w-xl text-xs text-white/70 sm:text-sm">
              <span className="font-mono uppercase tracking-[0.04em] text-white/90">Ejemplos · </span>
              {route.examples}
            </p>
            <p className="mt-4 inline-block rounded-sm border border-white/25 bg-black/30 px-3 py-2 text-xs text-white/85 backdrop-blur-sm">
              {route.precaution}
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
              <div className="flex gap-2">
                {MAKER_ROUTES.map((r, i) => (
                  <button
                    key={r.slug}
                    type="button"
                    aria-label={`Ir a ${r.name}`}
                    aria-current={i === index}
                    onClick={() => go(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? `w-8 ${ROUTE_ACCENT_CLASSES[r.accent].solid}` : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Ruta anterior"
                  onClick={() => go(index - 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label={playing ? "Pausar rotación automática" : "Reanudar rotación automática"}
                  aria-pressed={playing}
                  onClick={() => setPlaying((p) => !p)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15"
                >
                  {playing ? (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 5.5v13l11-6.5z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  aria-label="Siguiente ruta"
                  onClick={() => go(index + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
