import Link from "next/link";
import { LEVELS, LEVEL_ACCENT_CLASSES, Level } from "@/data/levels";
import { SiteImageBlock } from "@/components/ui/site-image";
import { IMAGES } from "@/data/images";

export function LevelCard({ level }: { level: Level }) {
  const accent = LEVEL_ACCENT_CLASSES[level.slug];
  const index = LEVELS.findIndex((l) => l.slug === level.slug) + 1;

  return (
    <Link
      href={`/niveles/${level.slug}`}
      className={`group relative block overflow-visible rounded-md border border-border border-t-2 bg-white transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[var(--shadow-float)] ${accent.borderTop}`}
    >
      {/* Badge numerado superpuesto: sobresale del borde de la tarjeta a propósito. */}
      <span
        className={`absolute -top-3 -left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white font-mono text-xs font-medium shadow-[var(--shadow-float)] ${accent.text}`}
        aria-hidden="true"
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="overflow-hidden rounded-t-[calc(var(--radius-md)-2px)]">
        <SiteImageBlock
          image={IMAGES.levelCards[level.slug]}
          aspect="aspect-[16/10]"
          className="rounded-none border-0 border-b border-border transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-5">
        <span className={`inline-block rounded-sm px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.04em] ${accent.bg} ${accent.text}`}>
          {level.ages}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-text">{level.name}</h3>
        <p className="mt-3 text-sm text-text-secondary">{level.summary}</p>
        <span className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${accent.text}`}>
          Conocer el nivel
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
