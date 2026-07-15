import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SiteImageBlock } from "@/components/ui/site-image";
import { SiteImage } from "@/data/images";

export type Evidence = {
  title: string;
  context: string;
  grade: string;
  learning: string;
  image?: SiteImage;
};

/**
 * Componente de firma del sitio (docs/design-system.md §1): cada evidencia
 * se presenta como registro verificable, no como foto con pie publicitario.
 * Los tres datos —contexto, grado, aprendizaje— son obligatorios; sin ellos
 * no se publica. Las imágenes son ilustrativas (docs/backlog.md #9) hasta
 * tener banco fotográfico real con autorización.
 */
export function EvidenceCard({ evidence }: { evidence: Evidence }) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
      {evidence.image ? (
        <SiteImageBlock image={evidence.image} aspect="aspect-[4/3]" className="rounded-none border-0 border-b border-border" />
      ) : (
        <ImagePlaceholder label="Fotografía pendiente de autorización" aspect="aspect-[4/3]" className="rounded-none border-0 border-b border-border" />
      )}
      <div className="p-5">
        <p className="font-display text-lg font-semibold text-text">{evidence.title}</p>
        <div className="mt-4 space-y-1 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.04em] text-secondary">
          <p>{evidence.grade}</p>
          <p className="text-text-secondary normal-case tracking-normal">
            Aprendizaje · {evidence.learning}
          </p>
          <p className="text-text-secondary normal-case tracking-normal">{evidence.context}</p>
        </div>
      </div>
    </div>
  );
}

export function EvidenceEmptyState() {
  return (
    <div className="rounded-md border border-dashed border-border-strong bg-surface p-8 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">
        Pendiente de definición
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm text-text-secondary">
        Todavía no hay evidencias con autorización vigente para publicar. Esta sección se
        completa con proyectos reales, documentados con contexto, grado y aprendizaje —
        nunca con fotografía de stock.
      </p>
    </div>
  );
}
