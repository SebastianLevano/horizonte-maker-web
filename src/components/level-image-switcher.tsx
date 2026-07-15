"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { LevelAccent, LEVEL_ACCENT_CLASSES } from "@/data/levels";
import { SiteImage } from "@/data/images";

type LevelSnapshot = {
  slug: LevelAccent;
  name: string;
  description: string;
  icon: ContentIconName;
  image: SiteImage;
};

const INTERVAL_MS = 5000;

/**
 * Selector de nivel con foto grande que cambia al elegir una píldora:
 * distinto del panel de pestañas (Inicio, Nosotros) y del riel horizontal
 * (Niveles) — aquí una sola fotografía a la vez, con transición de
 * cruce, en vez de una lista de tarjetas.
 */
export function LevelImageSwitcher({ levels }: { levels: LevelSnapshot[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotionRef.current) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % levels.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing, levels.length]);

  useEffect(() => {
    function onVisibility() {
      if (document.hidden) setPlaying(false);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  function resumeIfAllowed() {
    if (!reducedMotionRef.current) setPlaying(true);
  }

  const active = levels[index];
  const accent = LEVEL_ACCENT_CLASSES[active.slug];
  const Icon = CONTENT_ICONS[active.icon];

  return (
    <div
      role="region"
      aria-roledescription="selector de nivel"
      aria-label="Cómo se vive el Distrito Maker en cada nivel"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={resumeIfAllowed}
      onFocus={() => setPlaying(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) resumeIfAllowed();
      }}
    >
      <div role="tablist" aria-label="Elegir nivel" className="flex flex-wrap gap-2">
        {levels.map((l, i) => {
          const a = LEVEL_ACCENT_CLASSES[l.slug];
          const isActive = i === index;
          return (
            <button
              key={l.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setIndex(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive ? `border-transparent text-white ${a.solid}` : "border-border bg-white text-text-secondary hover:border-border-strong"
              }`}
            >
              {l.name}
            </button>
          );
        })}
        <button
          type="button"
          aria-label={playing ? "Pausar rotación automática" : "Reanudar rotación automática"}
          aria-pressed={playing}
          onClick={() => setPlaying((p) => !p)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-secondary hover:text-secondary"
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

      <div className="relative mt-5 h-[320px] overflow-hidden rounded-lg border border-border sm:h-[380px]">
        <div key={active.slug} className="slide-enter absolute inset-0">
          <Image
            src={active.image.src}
            alt={active.image.alt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            style={{ objectFit: "cover", objectPosition: active.image.focus }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 sm:p-6">
            <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
              <Icon />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white sm:text-xl">{active.name}</p>
              <p className="mt-0.5 max-w-md text-sm text-white/85">{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
