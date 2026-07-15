import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { ProcessSequence } from "@/components/process-sequence";
import { PillarCard } from "@/components/cards/pillar-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  COLLABORATIVE_LEARNING,
  ERROR_CULTURE,
  EVALUATION,
  PILLARS,
} from "@/data/model";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/modelo-educativo");

export default function ModeloEducativoPage() {
  return (
    <>
      <Hero
        eyebrow="Modelo educativo"
        title="Un modelo con fundamento, no una moda"
        description="Currículo Nacional, Aprendizaje Basado en Proyectos, STEAM y Reggio Emilia, articulados en una sola propuesta."
        image={IMAGES.modeloEducativo}
      />

      <Section>
        <div className="max-w-2xl">
          <FeatureCard
            title="Articulado con el Currículo Nacional"
            description="Cada proyecto Maker convive con la cobertura completa de las áreas del CNEB. Uno no reemplaza al otro: lo académico se aplica, no se posterga."
            icon="book"
          />
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Los pilares del modelo" title="Cómo se traduce esto al aula" />
        <div className="grid gap-5 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 70}>
              <PillarCard pillar={p} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Cómo se sostiene el modelo" />
        <div className="grid gap-5 sm:grid-cols-3">
          <ScrollReveal delay={0}>
            <FeatureCard title={EVALUATION.title} description={EVALUATION.description} icon="target" />
          </ScrollReveal>
          <ScrollReveal delay={70}>
            <FeatureCard title={COLLABORATIVE_LEARNING.title} description={COLLABORATIVE_LEARNING.description} icon="users" />
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <FeatureCard title={ERROR_CULTURE.title} description={ERROR_CULTURE.description} icon="compass" />
          </ScrollReveal>
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="La secuencia de aprendizaje" />
        <ProcessSequence steps={["Investigar", "Diseñar", "Construir", "Probar", "Mejorar", "Comunicar"]} />
      </Section>

      <CloseBlock
        title="Ve cómo aprenden nuestros estudiantes"
        primaryCta={{ label: "Ver vida escolar", href: "/vida-escolar" }}
        secondaryCta={{ label: "Conocer el Distrito Maker", href: "/distrito-maker" }}
      />
    </>
  );
}
