import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteImageBlock } from "@/components/ui/site-image";
import { FeatureTabs } from "@/components/feature-tabs";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { VALUES, STUDENT_PROFILE_TRAITS } from "@/data/values";
import { MISSION, VISION } from "@/data/site";
import { IMAGES } from "@/data/images";
import { TESTIMONIALS } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/nosotros");

const STORY_TABS = [
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

// Roles institucionales, sin nombres propios inventados: el brief exige
// confirmar qué autoridades sí se publican antes de nombrarlas (§15).
const AUTHORITIES: { role: string; description: string; icon: ContentIconName }[] = [
  { role: "Dirección General", description: "Conduce el proyecto educativo y su vínculo con la comunidad de Lurín.", icon: "compass" },
  { role: "Coordinación Pedagógica", description: "Responsable del modelo educativo y su aplicación en los tres niveles.", icon: "book" },
  { role: "Coordinación del Distrito Maker", description: "A cargo de las cuatro rutas, sus laboratorios y protocolos de seguridad.", icon: "target" },
  { role: "Psicología escolar", description: "Acompañamiento emocional y orientación vocacional por nivel.", icon: "heart" },
];

const MORE_ABOUT_US = [
  {
    title: "Infraestructura",
    description: "Un recorrido por el campus: laboratorios, niveles y zonas comunes.",
    href: "/nosotros/infraestructura",
    icon: "mapPin" as const,
  },
  {
    title: "Historia",
    description: "Cómo nació Horizonte Maker y por qué el Distrito Maker es su columna vertebral.",
    href: "/nosotros/historia",
    icon: "compass" as const,
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Hero
        eyebrow="Nosotros · Identidad"
        title="Un proyecto educativo con raíces en Lurín"
        description="Educación integral, innovadora y práctica, pensada para la comunidad que la rodea."
        image={IMAGES.nosotros}
      />

      <Section>
        <SectionHeading eyebrow="Identidad" title="Misión y visión" />
        <ScrollReveal>
          <FeatureTabs items={STORY_TABS} ariaLabel="Misión y visión de Horizonte Maker" />
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

      <Section surface>
        <SectionHeading title="Conoce más de nosotros" />
        <div className="grid gap-4 sm:grid-cols-2">
          {MORE_ABOUT_US.map((item, i) => {
            const Icon = CONTENT_ICONS[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 70}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-text">{item.title}</p>
                    <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
                  </div>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-text-secondary transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
