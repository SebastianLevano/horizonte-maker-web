import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { LevelCard } from "@/components/cards/level-card";
import { FlipCard } from "@/components/cards/flip-card";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LEVELS } from "@/data/levels";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/niveles");

const COMMON_TRAITS = [
  {
    title: "Currículo Nacional",
    description: "Cobertura completa en los tres niveles.",
    detail: "Las áreas del CNEB se cubren completas en Inicial, Primaria y Secundaria: lo Maker se suma a la malla curricular, no reemplaza ninguna competencia oficial.",
    icon: "book" as const,
  },
  {
    title: "Distrito Maker",
    description: "Presente de forma transversal, adaptado a cada edad.",
    detail: "Robótica, Diseño, Gastronomía y Construcción están presentes desde Inicial, siempre con protocolos de seguridad y supervisión adecuados a cada etapa.",
    icon: "compass" as const,
  },
  {
    title: "Tutoría y acompañamiento",
    description: "Seguimiento cercano en todo el recorrido escolar.",
    detail: "Cada nivel cuenta con tutoría propia y, desde psicología escolar, acompañamiento emocional y orientación vocacional según la etapa del estudiante.",
    icon: "users" as const,
  },
];

export default function NivelesPage() {
  return (
    <>
      <Hero
        eyebrow="Niveles educativos"
        title="De los 3 a los 16 años"
        description="Inicial, Primaria y Secundaria, con un mismo modelo educativo detrás."
        image={IMAGES.nivelesIndex}
      />

      <Section>
        <SectionHeading title="Lo común a todos los niveles" description="Toca cada tarjeta para ver más." />
        <div className="grid gap-4 sm:grid-cols-3">
          {COMMON_TRAITS.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 60}>
              <FlipCard title={t.title} description={t.description} detail={t.detail} icon={t.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="grid gap-x-5 gap-y-8 pt-3 sm:grid-cols-3">
          {LEVELS.map((level, i) => (
            <ScrollReveal key={level.slug} delay={i * 80}>
              <LevelCard level={level} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CloseBlock
        title="Encuentra el nivel de tu hijo o hija"
        primaryCta={{ label: "Agendar una visita", href: "/admision" }}
      />
    </>
  );
}
