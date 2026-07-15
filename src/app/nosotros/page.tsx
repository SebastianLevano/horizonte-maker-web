import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteImageBlock } from "@/components/ui/site-image";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { VALUES, STUDENT_PROFILE_TRAITS } from "@/data/values";
import { MISSION, VISION, HISTORY } from "@/data/site";
import { IMAGES } from "@/data/images";
import { TESTIMONIALS } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/nosotros");

const CAMPUS_ZONES = [
  "Nivel Inicial",
  "Nivel Primaria",
  "Nivel Secundaria",
  "Distrito Maker",
  "Comedor / Cafetín",
  "Auditorio",
  "Cancha multiuso",
  "Zona administrativa",
];

// Roles institucionales, sin nombres propios inventados: el brief exige
// confirmar qué autoridades sí se publican antes de nombrarlas (§15).
const AUTHORITIES: { role: string; description: string; icon: ContentIconName }[] = [
  { role: "Dirección General", description: "Conduce el proyecto educativo y su vínculo con la comunidad de Lurín.", icon: "compass" },
  { role: "Coordinación Pedagógica", description: "Responsable del modelo educativo y su aplicación en los tres niveles.", icon: "book" },
  { role: "Coordinación del Distrito Maker", description: "A cargo de las cuatro rutas, sus laboratorios y protocolos de seguridad.", icon: "target" },
  { role: "Psicología escolar", description: "Acompañamiento emocional y orientación vocacional por nivel.", icon: "heart" },
];

const VALUE_ICONS: Record<string, ContentIconName> = {
  Emprendimiento: "target",
  Integridad: "shield",
  Colaboración: "users",
};

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
        <SectionHeading title="Historia del proyecto" />
        <p className="max-w-2xl text-text-secondary">{HISTORY}</p>
      </Section>

      <Section surface>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text">Misión</h2>
            <p className="mt-3 text-text-secondary">{MISSION}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-text">Visión</h2>
            <p className="mt-3 text-text-secondary">{VISION}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Nuestros valores" />
        <div className="grid gap-5 sm:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = CONTENT_ICONS[VALUE_ICONS[v.name] ?? "spark"];
            return (
              <ScrollReveal key={v.name} delay={i * 70}>
                <div className="rounded-md border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-primary">{v.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{v.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <TestimonialCard testimonial={TESTIMONIALS[1]} />
      </Section>

      <Section surface>
        <SectionHeading title="Perfil del estudiante" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SiteImageBlock image={IMAGES.nosotrosPerfilEstudiante} aspect="aspect-[4/3]" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {STUDENT_PROFILE_TRAITS.map((trait) => (
              <li key={trait} className="flex items-start gap-2.5 text-text-secondary">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Infraestructura"
          title="Nuestras instalaciones"
          description="Un campus diseñado para que cada nivel y cada ruta del Distrito Maker tengan su propio espacio."
        />
        <SiteImageBlock
          image={IMAGES.nosotrosInstalaciones}
          aspect="aspect-[21/9]"
          className="mb-8"
          sizes="100vw"
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <SiteImageBlock image={IMAGES.plano} aspect="aspect-[940/788]" sizes="(min-width: 1024px) 700px, 100vw" />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">
              Zonas del campus
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-text-secondary">
              {CAMPUS_ZONES.map((zone) => (
                <li key={zone} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {zone}
                </li>
              ))}
            </ul>
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
                <div className="rounded-md border border-border bg-white p-5">
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
