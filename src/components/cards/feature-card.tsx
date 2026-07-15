import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { ROUTE_ACCENT_CLASSES, RouteAccent } from "@/data/maker-routes";

export function FeatureCard({
  title,
  description,
  icon,
  accent,
}: {
  title: string;
  description: string;
  icon?: ContentIconName;
  /** Color de acento opcional para el chip de ícono (variedad real entre tarjetas de una misma grilla). Sin especificar, usa el verde secundario de siempre. */
  accent?: RouteAccent;
}) {
  const Icon = icon ? CONTENT_ICONS[icon] : null;
  const accentClasses = accent ? ROUTE_ACCENT_CLASSES[accent] : null;

  return (
    <div className="rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
      {Icon && (
        <span
          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-md ${
            accentClasses ? `${accentClasses.bg} ${accentClasses.text}` : "bg-secondary/10 text-secondary"
          }`}
        >
          <Icon />
        </span>
      )}
      <h3 className="font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
    </div>
  );
}
