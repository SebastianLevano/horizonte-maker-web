import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { LevelCard } from "@/components/cards/level-card";
import { MakerRoutesCarousel } from "@/components/carousel/maker-routes-carousel";
import { EvidenceCard } from "@/components/cards/evidence-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { ProcessSequence } from "@/components/process-sequence";
import { LearningCycle } from "@/components/learning-cycle";
import { FeatureTabs } from "@/components/feature-tabs";
import { ContactBlock } from "@/components/contact-block";
import { MapEmbed } from "@/components/map-embed";
import { InfoRequestForm } from "@/components/forms/info-request-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { LEVELS } from "@/data/levels";
import { LEARNING_SEQUENCE, ADMISSION_PROCESS } from "@/data/site";
import { IMAGES } from "@/data/images";
import { EVIDENCES } from "@/data/evidence";
import { TESTIMONIALS } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/");

const REASONS = [
  {
    title: "Aprendizaje académico riguroso",
    description: "Cobertura completa del Currículo Nacional, sin atajos.",
    icon: "book" as const,
  },
  {
    title: "Proyectos que responden a problemas reales",
    description: "Lo que se aprende se aplica, no solo se estudia.",
    icon: "target" as const,
  },
  {
    title: "Acompañamiento para desarrollar autonomía",
    description: "Integridad y colaboración como parte del día a día, no como discurso.",
    icon: "users" as const,
  },
];

const WELLBEING = [
  { title: "Tutoría por nivel", description: "Seguimiento cercano del progreso de cada estudiante.", icon: "users" as const },
  { title: "Psicología por nivel", description: "Acompañamiento emocional y orientación vocacional.", icon: "heart" as const },
  { title: "Seguridad en talleres", description: "Protocolos y supervisión en toda experiencia Maker.", icon: "shield" as const },
];

export default function HomePage() {
  return (
    <>
      <Hero
        variant="portada"
        title="Aprender haciendo. Crear para transformar."
        description="Una educación integral, práctica e innovadora para estudiantes que hacen, resuelven y construyen."
        primaryCta={{ label: "Agendar una visita", href: "/admision" }}
        secondaryCta={{ label: "Conocer el Distrito Maker", href: "/distrito-maker" }}
        image={IMAGES.heroHome}
      />

      <Section>
        <SectionHeading title="Tres razones para elegir Horizonte Maker" />
        <ScrollReveal>
          <FeatureTabs items={REASONS} ariaLabel="Tres razones para elegir Horizonte Maker" />
        </ScrollReveal>
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="Niveles educativos"
          title="Una propuesta coherente de los 3 a los 16 años"
        />
        <div className="grid gap-x-5 gap-y-8 pt-3 sm:grid-cols-3">
          {LEVELS.map((level, i) => (
            <ScrollReveal key={level.slug} delay={i * 80}>
              <LevelCard level={level} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Distrito Maker"
          title="El eje transversal del colegio, no un taller aparte"
          description="Cuatro rutas de aprendizaje práctico que atraviesan Inicial, Primaria y Secundaria. Se rotan solas — o navega a tu ritmo."
        />
        <MakerRoutesCarousel />
        <div className="mt-8">
          <Button href="/distrito-maker" variant="secondary">
            Conocer el Distrito Maker
          </Button>
        </div>
      </Section>

      <Section surface>
        <SectionHeading
          title="Así aprenden nuestros estudiantes"
          description="Un ciclo, no una lista: cada proyecto vuelve a Investigar con lo aprendido en Comunicar."
        />
        <ScrollReveal>
          <LearningCycle steps={LEARNING_SEQUENCE} />
        </ScrollReveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Evidencias"
          title="El trabajo de nuestros estudiantes, documentado"
          description="Contexto, grado y aprendizaje: cada evidencia se presenta como registro verificable."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {EVIDENCES.slice(0, 3).map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 70}>
              <EvidenceCard evidence={e} />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/vida-escolar" variant="secondary">
            Ver más evidencias
          </Button>
        </div>
      </Section>

      <Section tint="accent">
        <SectionHeading eyebrow="Voces de nuestra comunidad" title="Lo que dicen las familias" />
        <div className="grid gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.role} delay={i * 70}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Comunidad y bienestar" />
        <ScrollReveal>
          <FeatureTabs items={WELLBEING} ariaLabel="Comunidad y bienestar" />
        </ScrollReveal>
      </Section>

      <Section id="admision" tint="primary">
        <SectionHeading
          eyebrow="Admisión"
          title="Empieza el proceso hoy"
          description="Seis pasos, de la primera conversación a la matrícula."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <ProcessSequence steps={ADMISSION_PROCESS.map((p) => ({ step: p.step, description: p.description }))} />
          <div className="rounded-lg border border-border bg-white p-6 shadow-[var(--shadow-float)] sm:p-8">
            <h3 className="font-display text-xl font-semibold text-text">Solicita información</h3>
            <p className="mt-1.5 text-sm text-text-secondary">
              Te contactamos en menos de 48 horas hábiles.
            </p>
            <div className="mt-6">
              <InfoRequestForm />
            </div>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Ubicación y contacto" />
        <div className="grid gap-6 lg:grid-cols-2">
          <MapEmbed />
          <ContactBlock />
        </div>
      </Section>
    </>
  );
}
