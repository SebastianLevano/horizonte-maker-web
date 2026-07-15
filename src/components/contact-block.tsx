import { SITE } from "@/data/site";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { ROUTE_ACCENT_CLASSES, RouteAccent } from "@/data/maker-routes";

const ACCENTS: RouteAccent[] = ["robotica", "diseno", "gastronomia", "construccion"];

export function ContactBlock() {
  const channels: { label: string; value: string; icon: ContentIconName }[] = [
    { label: "WhatsApp", value: SITE.contact.whatsapp, icon: "chat" },
    { label: "Teléfono", value: SITE.contact.phone, icon: "phone" },
    { label: "Correo", value: SITE.contact.email, icon: "mail" },
    { label: "Horario de atención", value: SITE.contact.hours, icon: "clock" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {channels.map((c, i) => {
        const Icon = CONTENT_ICONS[c.icon];
        const accent = ROUTE_ACCENT_CLASSES[ACCENTS[i % ACCENTS.length]];
        return (
          <div
            key={c.label}
            className={`flex items-start gap-3 rounded-md border border-border border-t-2 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] ${accent.borderTop}`}
          >
            <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
              <Icon />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">{c.label}</p>
              <p className="mt-1 text-sm text-text">{c.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
