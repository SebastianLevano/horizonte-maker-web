import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { LearningCycle } from "@/components/learning-cycle";
import { FeatureTabs } from "@/components/feature-tabs";
import { FeatureCard } from "@/components/cards/feature-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PendingNotice } from "@/components/ui/pending-notice";
import { ContentIconName } from "@/components/icons";
import {
  COLLABORATIVE_LEARNING,
  ERROR_CULTURE,
  EVALUATION,
  PILLARS,
} from "@/data/model";
import { LEARNING_SEQUENCE } from "@/data/site";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/modelo-educativo");

const PILLAR_ICONS: ContentIconName[] = ["users", "target", "flask", "compass"];

const PILLAR_TABS = PILLARS.map((p, i) => ({
  title: p.name,
  description: p.description,
  icon: PILLAR_ICONS[i % PILLAR_ICONS.length],
  extra: p.classroomExample ? (
    <p className="rounded-md bg-surface p-4 text-sm text-text">{p.classroomExample}</p>
  ) : (
    <PendingNotice>Ejemplo concreto de aula a validar con coordinación académica.</PendingNotice>
  ),
}));

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
        <ScrollReveal>
          <div className="max-w-2xl">
            <FeatureCard
              title="Articulado con el Currículo Nacional"
              description="Cada proyecto Maker convive con la cobertura completa de las áreas del CNEB. Uno no reemplaza al otro: lo académico se aplica, no se posterga."
              icon="book"
            />
          </div>
        </ScrollReveal>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Los pilares del modelo" title="Cómo se traduce esto al aula" />
        <ScrollReveal>
          <FeatureTabs items={PILLAR_TABS} ariaLabel="Los pilares del modelo educativo" />
        </ScrollReveal>
      </Section>

      <Section>
        <SectionHeading title="Cómo se sostiene el modelo" />
        <div className="grid gap-5 sm:grid-cols-3">
          <ScrollReveal delay={0}>
            <FeatureCard title={EVALUATION.title} description={EVALUATION.description} icon="target" accent="robotica" />
          </ScrollReveal>
          <ScrollReveal delay={70}>
            <FeatureCard title={COLLABORATIVE_LEARNING.title} description={COLLABORATIVE_LEARNING.description} icon="users" accent="diseno" />
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <FeatureCard title={ERROR_CULTURE.title} description={ERROR_CULTURE.description} icon="compass" accent="gastronomia" />
          </ScrollReveal>
        </div>
      </Section>

      <Section surface>
        <SectionHeading
          title="La secuencia de aprendizaje"
          description="Un ciclo, no una lista: cada proyecto vuelve a Investigar con lo aprendido en Comunicar."
        />
        <ScrollReveal>
          <LearningCycle steps={LEARNING_SEQUENCE} />
        </ScrollReveal>
      </Section>

      <CloseBlock
        title="Ve cómo aprenden nuestros estudiantes"
        primaryCta={{ label: "Ver vida escolar", href: "/vida-escolar" }}
        secondaryCta={{ label: "Conocer el Distrito Maker", href: "/distrito-maker" }}
      />
    </>
  );
}
