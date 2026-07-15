import { SITE } from "@/data/site";

export function ContactBlock() {
  const channels = [
    { label: "WhatsApp", value: SITE.contact.whatsapp },
    { label: "Teléfono", value: SITE.contact.phone },
    { label: "Correo", value: SITE.contact.email },
    { label: "Horario de atención", value: SITE.contact.hours },
  ];

  return (
    <div className="rounded-md border border-border bg-white p-6">
      <dl className="grid gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <div key={c.label}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">
              {c.label}
            </dt>
            <dd className="mt-1 text-sm text-text">{c.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
