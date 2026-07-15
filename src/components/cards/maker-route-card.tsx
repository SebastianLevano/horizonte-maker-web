import { MakerRoute, ROUTE_ACCENT_CLASSES } from "@/data/maker-routes";
import { ROUTE_ICONS } from "@/components/icons";
import { SiteImageBlock } from "@/components/ui/site-image";

export function MakerRouteCard({ route }: { route: MakerRoute }) {
  const accent = ROUTE_ACCENT_CLASSES[route.accent];
  const Icon = ROUTE_ICONS[route.icon];

  return (
    <div
      className={`group overflow-hidden rounded-md border border-border border-t-2 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] ${accent.borderTop}`}
    >
      <div className="overflow-hidden">
        <SiteImageBlock
          image={route.image}
          aspect="aspect-[16/9]"
          className="rounded-none border-0 border-b border-border transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-md ${accent.bg} ${accent.text} transition-transform duration-200 group-hover:scale-110`}
        >
          <Icon />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-text">{route.name}</h3>
        <p className="mt-3 text-sm text-text-secondary">{route.develops}</p>
        <p className={`mt-4 font-mono text-xs uppercase tracking-[0.04em] ${accent.text}`}>
          Ejemplos
        </p>
        <p className="mt-1 text-sm text-text">{route.examples}</p>
        <p className="mt-4 rounded-sm bg-surface px-3 py-2 text-xs text-text-secondary">
          {route.precaution}
        </p>
      </div>
    </div>
  );
}
