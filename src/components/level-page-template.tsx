import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { HorizontalCardRail } from "@/components/horizontal-card-rail";
import { EvidenceCard, EvidenceEmptyState } from "@/components/cards/evidence-card";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTENT_ICONS, ROUTE_ICONS } from "@/components/icons";
import { getLevel, LEVEL_ACCENT_CLASSES } from "@/data/levels";
import { MAKER_ROUTES, ROUTE_ACCENT_CLASSES } from "@/data/maker-routes";
import { IMAGES } from "@/data/images";
import { evidencesForLevel } from "@/data/evidence";

export function LevelPageTemplate({ slug }: { slug: string }) {
  const level = getLevel(slug);
  if (!level) notFound();
  const evidences = evidencesForLevel(level.slug);
  const accent = LEVEL_ACCENT_CLASSES[level.slug];

  const QUICK_FACTS = [
    { label: "Edad", value: level.ages, icon: "calendar" as const },
    { label: "Sección", value: level.sectionSize, icon: "users" as const },
    { label: "Horario", value: level.schedule, icon: "clock" as const },
  ];

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

      <Section noBorder>
        <ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {QUICK_FACTS.map((fact) => {
              const Icon = CONTENT_ICONS[fact.icon];
              return (
                <div
                  key={fact.label}
                  className={`flex items-center gap-3 rounded-md border border-border border-t-2 bg-white p-4 ${accent.borderTop}`}
                >
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                    <Icon />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">{fact.label}</p>
                    <p className="text-sm font-medium text-text">{fact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <SectionHeading title="Organización del nivel" description="Desliza o usa las flechas para ver todo." />
        <ScrollReveal>
          <HorizontalCardRail
            items={level.features.map((f) => ({ title: f.title, description: f.description }))}
            ariaLabel={`Organización del nivel ${level.name}`}
          />
        </ScrollReveal>
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
        <ScrollReveal>
          <div className="mt-5 flex flex-wrap gap-3">
            {MAKER_ROUTES.map((r) => {
              const Icon = ROUTE_ICONS[r.icon];
              const accent = ROUTE_ACCENT_CLASSES[r.accent];
              return (
                <span
                  key={r.slug}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white py-1.5 pl-1.5 pr-3.5 text-sm text-text-secondary"
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  {r.name}
                </span>
              );
            })}
          </div>
        </ScrollReveal>
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
