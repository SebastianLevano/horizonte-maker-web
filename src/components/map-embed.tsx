import { SITE } from "@/data/site";

/**
 * Embed de Google Maps sin API key, sobre la dirección de vista previa
 * (src/data/site.ts). No requiere carga con la página — se difiere con
 * loading="lazy" (docs/seo.md §7: el mapa nunca se carga con la página).
 */
export function MapEmbed() {
  const query = encodeURIComponent(SITE.location.address);

  return (
    <div className="overflow-hidden rounded-md border border-border">
      <iframe
        title={`Mapa: ${SITE.location.address}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[16/9] w-full sm:aspect-[21/9]"
      />
      <div className="border-t border-border bg-surface px-4 py-3">
        <p className="text-sm font-medium text-text">{SITE.location.address}</p>
        <p className="text-xs text-text-secondary">{SITE.location.reference}</p>
      </div>
    </div>
  );
}
