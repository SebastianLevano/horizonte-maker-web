import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/cards/feature-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ExpandableInfoGrid } from "@/components/expandable-info-grid";
import { SiteImageBlock } from "@/components/ui/site-image";
import { RouteAccent } from "@/data/maker-routes";
import { FAMILIES_FAQ } from "@/data/faq";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { FaqJsonLd } from "@/components/json-ld";

const ACCENTS: RouteAccent[] = ["robotica", "diseno", "gastronomia", "construccion"];

const WELLBEING = [
  { title: "Tutoría", description: "Acompañamiento cercano por nivel.", icon: "users" as const },
  { title: "Psicología por nivel", description: "Orientación emocional y vocacional.", icon: "heart" as const },
  { title: "Convivencia", description: "Protocolo de convivencia escolar basado en el diálogo y la reparación, no solo en la sanción.", icon: "shield" as const },
];

const COMMUNICATION_CHANNELS = [
  {
    title: "Agenda digital",
    description: "Notas, tareas y avisos por sección, disponibles en cualquier momento.",
    example: "Lunes 7:00 a. m.: recordatorio de la reunión de tutoría de la semana.",
    icon: "laptop" as const,
  },
  {
    title: "Correo institucional",
    description: "Comunicación directa con tutoría y coordinación de cada nivel.",
    example: "Respuesta a consultas en menos de 48 horas hábiles.",
    icon: "chat" as const,
  },
  {
    title: "Reuniones bimestrales",
    description: "Encuentro presencial por nivel para revisar el progreso del estudiante.",
    example: "Marzo, mayo, agosto y octubre, por sección.",
    icon: "calendar" as const,
  },
];

export const metadata: Metadata = buildMetadata("/familias");

export default function FamiliasPage() {
  return (
    <>
      <FaqJsonLd items={FAMILIES_FAQ} />
      <Hero
        eyebrow="Familias"
        title="No estás solo en esto"
        description="Acompañamos también a las familias: comunicación, bienestar y convivencia."
        image={IMAGES.familias}
      />

      <Section>
        <SectionHeading title="Acompañamiento a las familias" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <SiteImageBlock image={IMAGES.familiasAcompanamiento} aspect="aspect-[4/3]" />
          </ScrollReveal>
          <ScrollReveal delay={70}>
            <FeatureCard
              title="Escuela para padres"
              description="Talleres bimestrales sobre acompañamiento socioemocional, límites y convivencia, y uso saludable de tecnología."
              icon="users"
            />
          </ScrollReveal>
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Cómo nos comunicamos" description="Toca cada tarjeta para ver un ejemplo." />
        <ScrollReveal>
          <ExpandableInfoGrid items={COMMUNICATION_CHANNELS} />
        </ScrollReveal>
      </Section>

      <Section>
        <SectionHeading title="Bienestar y convivencia" />
        <div className="grid gap-4 sm:grid-cols-3">
          {WELLBEING.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} accent={ACCENTS[i % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Preguntas frecuentes" />
        <div className="max-w-2xl">
          <FaqAccordion items={FAMILIES_FAQ} />
        </div>
      </Section>

      <CloseBlock
        title="¿Tienes dudas sobre el acompañamiento a las familias?"
        primaryCta={{ label: "Contactar a admisión", href: "/admision" }}
      />
    </>
  );
}
