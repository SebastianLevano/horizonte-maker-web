import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteImageBlock } from "@/components/ui/site-image";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/nosotros/infraestructura");

const CAMPUS_ZONES: { zone: string; icon: ContentIconName }[] = [
  { zone: "Nivel Inicial", icon: "heart" },
  { zone: "Nivel Primaria", icon: "book" },
  { zone: "Nivel Secundaria", icon: "laptop" },
  { zone: "Distrito Maker", icon: "hammer" },
  { zone: "Comedor / Cafetín", icon: "chefHat" },
  { zone: "Auditorio", icon: "megaphone" },
  { zone: "Cancha multiuso", icon: "target" },
  { zone: "Zona administrativa", icon: "briefcase" },
];

const SPACES = [
  { title: "Aulas y talleres", image: IMAGES.vidaEscolar, icon: "book" as const },
  { title: "Laboratorios con protocolos de seguridad", image: IMAGES.distritoMakerSeguridad, icon: "shield" as const },
];

export default function InfraestructuraPage() {
  return (
    <>
      <Hero
        eyebrow="Nosotros · Infraestructura"
        title="Un campus diseñado para cada ruta y cada nivel"
        description="Un espacio pensado para que Inicial, Primaria, Secundaria y las cuatro rutas del Distrito Maker tengan su propio lugar."
        image={IMAGES.nosotrosInstalaciones}
      />

      <Section>
        <SectionHeading title="Plano del campus" />
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <ScrollReveal>
            <SiteImageBlock image={IMAGES.plano} aspect="aspect-[940/788]" sizes="(min-width: 1024px) 700px, 100vw" />
          </ScrollReveal>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">
              Zonas del campus
            </p>
            <div className="mt-3 grid gap-2">
              {CAMPUS_ZONES.map(({ zone, icon }, i) => {
                const Icon = CONTENT_ICONS[icon];
                return (
                  <ScrollReveal key={zone} delay={i * 40}>
                    <div className="flex items-center gap-2.5 rounded-md border border-border bg-white px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-text-secondary">{zone}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Un vistazo" title="Espacios del campus" />
        <div className="grid gap-5 sm:grid-cols-2">
          {SPACES.map((s, i) => {
            const Icon = CONTENT_ICONS[s.icon];
            return (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="overflow-hidden rounded-md border border-border bg-white">
                  <SiteImageBlock image={s.image} aspect="aspect-[4/3]" className="rounded-none border-0 border-b border-border" />
                  <div className="flex items-center gap-3 p-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon />
                    </span>
                    <p className="font-medium text-text">{s.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <CloseBlock
        title="¿Quieres conocer el campus en persona?"
        primaryCta={{ label: "Agendar una visita", href: "/admision" }}
        secondaryCta={{ label: "Ver nuestra historia", href: "/nosotros/historia" }}
      />
    </>
  );
}
