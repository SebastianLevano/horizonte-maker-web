import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactBlock } from "@/components/contact-block";
import { MapEmbed } from "@/components/map-embed";
import { ContactMessageForm } from "@/components/forms/contact-message-form";
import { SITE } from "@/data/site";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/contacto");

const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.social.instagram },
  { label: "Facebook", href: SITE.social.facebook },
];

export default function ContactoPage() {
  return (
    <>
      <Hero
        eyebrow="Contacto"
        title="Estamos en Lurín, cerca y accesibles"
        description="Escríbenos por WhatsApp o completa el formulario. Te respondemos en nuestro horario de atención."
        image={IMAGES.contacto}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactBlock />
          <MapEmbed />
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Envíanos un mensaje" />
        <div className="max-w-2xl">
          <ContactMessageForm />
        </div>
      </Section>

      <Section>
        <SectionHeading title="Redes sociales" />
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-white px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
