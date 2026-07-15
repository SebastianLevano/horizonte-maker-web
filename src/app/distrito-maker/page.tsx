import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { MakerRouteCard } from "@/components/cards/maker-route-card";
import { EvidenceCard } from "@/components/cards/evidence-card";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteImageBlock } from "@/components/ui/site-image";
import { ProcessSequence } from "@/components/process-sequence";
import { MAKER_ROUTES } from "@/data/maker-routes";
import { LEVEL_ACCENT_CLASSES } from "@/data/levels";
import { CONTENT_ICONS } from "@/components/icons";
import { MAKER_DISTRICT_INTRO } from "@/data/site";
import { IMAGES } from "@/data/images";
import { evidencesForLevel } from "@/data/evidence";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/distrito-maker");

const LEVEL_SNAPSHOTS = [
  {
    slug: "inicial" as const,
    name: "Inicial",
    description: "Experiencias Maker seguras, adecuadas a la edad y siempre supervisadas.",
    icon: "shield" as const,
  },
  {
    slug: "primaria" as const,
    name: "Primaria",
    description: "Dos experiencias Maker por semana, dentro del horario regular.",
    icon: "calendar" as const,
  },
  {
    slug: "secundaria" as const,
    name: "Secundaria",
    description: "Exploración de las cuatro rutas en 1.°–3.°, especialización desde 4.°.",
    icon: "compass" as const,
  },
];

export default function DistritoMakerPage() {
  return (
    <>
      <Hero
        eyebrow="Distrito Maker"
        title="El corazón del colegio, no un taller aparte"
        description={MAKER_DISTRICT_INTRO}
        image={IMAGES.distritoMaker}
      />

      <Section>
        <SectionHeading
          title="Cómo se vive en cada nivel"
          description="La misma lógica, adaptada a cada edad: en Inicial es exploración segura; en Primaria, dos experiencias semanales; en Secundaria, rotación y luego especialización."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {LEVEL_SNAPSHOTS.map((level, i) => {
            const accent = LEVEL_ACCENT_CLASSES[level.slug];
            const Icon = CONTENT_ICONS[level.icon];
            return (
              <ScrollReveal key={level.slug} delay={i * 70}>
                <div className={`rounded-md border border-border border-t-2 bg-white p-5 ${accent.borderTop}`}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                    <Icon />
                  </span>
                  <p className={`mt-3 font-semibold ${accent.text}`}>{level.name}</p>
                  <p className="mt-2 text-sm text-text-secondary">{level.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Las cuatro rutas" title="Un laboratorio para cada forma de crear" />
        <div className="grid gap-5 sm:grid-cols-2">
          {MAKER_ROUTES.map((route, i) => (
            <ScrollReveal key={route.slug} delay={i * 70}>
              <MakerRouteCard route={route} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Exploración y especialización"
          description="La decisión se conversa con el estudiante y la familia: nunca es una imposición ni una selección excluyente."
        />
        <ProcessSequence
          steps={[
            {
              step: "Exploración · 1.° a 3.°",
              description: "Los estudiantes rotan por las cuatro rutas del Distrito Maker.",
            },
            {
              step: "Orientación",
              description: "Progreso, portafolio, desempeño y autoevaluación, más una entrevista con la psicóloga.",
            },
            {
              step: "Especialización · 4.° y 5.°",
              description: "El estudiante profundiza en la ruta elegida junto a su familia.",
            },
          ]}
        />
      </Section>

      <Section surface>
        <SectionHeading title="Seguridad y supervisión" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SiteImageBlock image={IMAGES.distritoMakerSeguridad} aspect="aspect-[4/3]" />
          <p className="max-w-2xl text-text-secondary">
            Toda experiencia Maker ocurre con acompañamiento docente y protocolos de seguridad
            visibles. Ningún estudiante utiliza herramientas sin el equipo de protección
            correspondiente.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Qué producen los estudiantes" title="Evidencias por ruta" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {evidencesForLevel("secundaria").map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 60}>
              <EvidenceCard evidence={e} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CloseBlock
        title="Visita nuestros laboratorios"
        primaryCta={{ label: "Agendar una visita", href: "/admision" }}
        secondaryCta={{ label: "Ver proyectos", href: "/vida-escolar" }}
      />
    </>
  );
}
