import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteImageBlock } from "@/components/ui/site-image";
import { FeatureTabs } from "@/components/feature-tabs";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { VALUES, STUDENT_PROFILE_TRAITS } from "@/data/values";
import { MISSION, VISION, HISTORY } from "@/data/site";
import { IMAGES } from "@/data/images";
import { TESTIMONIALS } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/nosotros");

const STORY_TABS = [
  { title: "Historia", description: HISTORY, icon: "compass" as const },
  { title: "Misión", description: MISSION, icon: "target" as const },
  { title: "Visión", description: VISION, icon: "spark" as const },
];

const VALUE_ICONS: Record<string, ContentIconName> = {
  Emprendimiento: "target",
  Integridad: "shield",
  Colaboración: "users",
};

const VALUE_TABS = VALUES.map((v) => ({
  title: v.name,
  description: v.description,
  icon: VALUE_ICONS[v.name] ?? "spark",
}));

const TRAIT_ICONS: ContentIconName[] = ["compass", "flask", "book", "target"];

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

// Roles institucionales, sin nombres propios inventados: el brief exige
// confirmar qué autoridades sí se publican antes de nombrarlas (§15).
const AUTHORITIES: { role: string; description: string; icon: ContentIconName }[] = [
  { role: "Dirección General", description: "Conduce el proyecto educativo y su vínculo con la comunidad de Lurín.", icon: "compass" },
  { role: "Coordinación Pedagógica", description: "Responsable del modelo educativo y su aplicación en los tres niveles.", icon: "book" },
  { role: "Coordinación del Distrito Maker", description: "A cargo de las cuatro rutas, sus laboratorios y protocolos de seguridad.", icon: "target" },
  { role: "Psicología escolar", description: "Acompañamiento emocional y orientación vocacional por nivel.", icon: "heart" },
];

export default function NosotrosPage() {
  return (
    <>
      <Hero
        eyebrow="Nosotros"
        title="Un proyecto educativo con raíces en Lurín"
        description="Educación integral, innovadora y práctica, pensada para la comunidad que la rodea."
        image={IMAGES.nosotros}
      />

      <Section>
        <SectionHeading eyebrow="Nuestra historia" title="De una pregunta simple a un proyecto educativo" />
        <ScrollReveal>
          <FeatureTabs items={STORY_TABS} ariaLabel="Historia, misión y visión de Horizonte Maker" />
        </ScrollReveal>
      </Section>

      <Section surface>
        <SectionHeading title="Nuestros valores" />
        <ScrollReveal>
          <FeatureTabs items={VALUE_TABS} ariaLabel="Nuestros valores" />
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <figure className="mx-auto max-w-3xl text-center">
            <svg className="mx-auto h-10 w-10 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.5 6C4.5 8 3 11 3 14.5 3 17.5 5 19 7 19c2.2 0 4-1.8 4-4 0-2-1.4-3.6-3.3-3.9C8.2 9.3 9.6 7.8 12 6.5L7.5 6zm10 0c-3 2-4.5 5-4.5 8.5 0 3 2 4.5 4 4.5 2.2 0 4-1.8 4-4 0-2-1.4-3.6-3.3-3.9 .5-1.8 1.9-3.3 4.3-4.6L17.5 6z" />
            </svg>
            <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-text sm:text-3xl">
              &ldquo;{TESTIMONIALS[1].quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.06em] text-secondary">
              {TESTIMONIALS[1].role}
            </figcaption>
          </figure>
        </ScrollReveal>
      </Section>

      <Section surface>
        <SectionHeading title="Perfil del estudiante" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <SiteImageBlock image={IMAGES.nosotrosPerfilEstudiante} aspect="aspect-[4/3]" />
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {STUDENT_PROFILE_TRAITS.map((trait, i) => {
              const Icon = CONTENT_ICONS[TRAIT_ICONS[i % TRAIT_ICONS.length]];
              return (
                <ScrollReveal key={trait} delay={i * 60}>
                  <div className="flex items-center gap-3 rounded-md border border-border bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon />
                    </span>
                    <span className="text-sm text-text-secondary">{trait}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Infraestructura"
          title="Nuestras instalaciones"
          description="Un campus diseñado para que cada nivel y cada ruta del Distrito Maker tengan su propio espacio."
        />
        <ScrollReveal>
          <SiteImageBlock
            image={IMAGES.nosotrosInstalaciones}
            aspect="aspect-[21/9]"
            className="mb-8"
            sizes="100vw"
          />
        </ScrollReveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <ScrollReveal delay={70}>
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
        <SectionHeading
          title="Autoridades"
          description="Roles institucionales. Los nombres se publican cuando el colegio confirme su difusión."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {AUTHORITIES.map((a, i) => {
            const Icon = CONTENT_ICONS[a.icon];
            return (
              <ScrollReveal key={a.role} delay={i * 60}>
                <div className="rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                    <Icon />
                  </span>
                  <p className="mt-3 font-semibold text-text">{a.role}</p>
                  <p className="mt-2 text-sm text-text-secondary">{a.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <CloseBlock
        title="Conoce la propuesta educativa"
        primaryCta={{ label: "Ver el modelo educativo", href: "/modelo-educativo" }}
        secondaryCta={{ label: "Agendar una visita", href: "/admision" }}
      />
    </>
  );
}
