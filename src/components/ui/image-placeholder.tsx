/**
 * El brief prohíbe fotografía de stock (docs/design-system.md §10). Hasta que
 * exista banco fotográfico propio y autorizado, este bloque ocupa el lugar de
 * la imagen sin fingir ser una fotografía real.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex ${aspect} items-start overflow-hidden rounded-md border border-border bg-gradient-to-br from-surface to-white ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full text-border"
        aria-hidden="true"
      >
        <pattern id="grain" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grain)" />
      </svg>
      <span className="relative z-10 m-4 rounded-sm bg-white/90 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-text-secondary">
        {label}
      </span>
    </div>
  );
}
