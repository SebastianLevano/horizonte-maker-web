import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/cards/feature-card";
import { EvidenceCard, EvidenceEmptyState } from "@/components/cards/evidence-card";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getLevel } from "@/data/levels";
import { IMAGES } from "@/data/images";
import { evidencesForLevel } from "@/data/evidence";

export function LevelPageTemplate({ slug }: { slug: string }) {
  const level = getLevel(slug);
  if (!level) notFound();
  const evidences = evidencesForLevel(level.slug);

  return (
    <>
      <Hero
        eyebrow={`Nivel ${level.name}`}
        title={level.centralMessage}
        description={`${level.ages} · ${level.sectionSize}`}
        primaryCta={{ label: "Agendar una visita", href: "/admision" }}
        secondaryCta={{ label: "Consultar vacantes", href: "/admision" }}
        image={IMAGES.levelHero[level.slug]}
      />

      <Section>
        <SectionHeading title="Organización del nivel" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {level.features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 50}>
              <FeatureCard title={f.title} description={f.description} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="Distrito Maker"
          title="Cómo se vive el Distrito Maker en este nivel"
        />
        <p className="max-w-2xl text-text-secondary">
          El Distrito Maker atraviesa los tres niveles del colegio, siempre con protocolos de
          seguridad y supervisión adecuados a la edad.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Evidencias" title={`Lo que producen los estudiantes de ${level.name}`} />
        <p className="mb-4 max-w-2xl text-sm text-text-secondary">
          Tipos de evidencia esperados: {level.evidenceTypes.join(" · ")}.
        </p>
        {evidences.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {evidences.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 60}>
                <EvidenceCard evidence={e} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <EvidenceEmptyState />
        )}
      </Section>

      <CloseBlock
        title={`¿Este es el nivel de tu hijo o hija?`}
        primaryCta={{ label: "Consultar vacantes", href: "/admision" }}
        secondaryCta={{ label: "Agendar una visita", href: "/admision" }}
      />
    </>
  );
}
