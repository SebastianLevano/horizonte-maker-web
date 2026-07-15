import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProcessSequence } from "@/components/process-sequence";
import { LevelCard } from "@/components/cards/level-card";
import { InfoRequestForm } from "@/components/forms/info-request-form";
import { VisitForm } from "@/components/forms/visit-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTENT_ICONS } from "@/components/icons";
import {
  ADMISSION_PROCESS,
  ADMISSION_CLOSING,
  ADMISSION_REQUIREMENTS,
  ADMISSION_DATES,
} from "@/data/site";
import { LEVELS } from "@/data/levels";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/admision");

const MORE_ABOUT_ADMISSION = [
  {
    title: "Fechas y costos",
    description: "Matrícula, pensión, beneficios y fechas de la campaña de admisión.",
    href: "/admision/fechas-y-costos",
    icon: "calendar" as const,
  },
  {
    title: "Preguntas frecuentes",
    description: "Respuestas a las dudas más comunes sobre el proceso.",
    href: "/admision/preguntas-frecuentes",
    icon: "chat" as const,
  },
];

export default function AdmisionPage() {
  return (
    <>
      <Hero
        eyebrow="Admisión · Proceso"
        title="Conoce una escuela donde el conocimiento se convierte en acción"
        description={ADMISSION_CLOSING}
        primaryCta={{ label: "Solicitar información", href: "#solicitar-informacion" }}
        secondaryCta={{ label: "Agendar una visita", href: "#agendar-visita" }}
        image={IMAGES.admision}
      />

      <Section>
        <SectionHeading title="El proceso, paso a paso" />
        <ProcessSequence steps={ADMISSION_PROCESS.map((p) => ({ step: p.step, description: p.description }))} />
      </Section>

      <Section surface>
        <SectionHeading title="Requisitos por nivel" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">
                Documentos para postular
              </p>
              <ul className="mt-3 space-y-2.5">
                {ADMISSION_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={70}>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">
                Edad de corte por nivel (al 31 de marzo)
              </p>
              <div className="mt-3 space-y-2">
                {LEVELS.map((level) => (
                  <div key={level.slug} className="flex items-center justify-between rounded-md border border-border bg-white px-4 py-3">
                    <span className="text-sm font-medium text-text">{level.name}</span>
                    <span className="text-sm text-text-secondary">{level.ages}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Vacantes disponibles" description="Toca un nivel para conocerlo mejor." />
        <div className="grid gap-4 sm:grid-cols-3">
          {LEVELS.map((level, i) => (
            <ScrollReveal key={level.slug} delay={i * 70}>
              <LevelCard level={level} />
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-secondary">{ADMISSION_DATES.vacanciesNote}</p>
      </Section>

      <Section surface>
        <SectionHeading title="Más sobre el proceso de admisión" />
        <div className="grid gap-4 sm:grid-cols-2">
          {MORE_ABOUT_ADMISSION.map((item, i) => {
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

      <Section id="solicitar-informacion">
        <SectionHeading title="Solicita información" />
        <div className="max-w-2xl">
          <InfoRequestForm />
        </div>
      </Section>

      <Section surface id="agendar-visita">
        <SectionHeading title="Agenda una visita" />
        <div className="max-w-2xl">
          <VisitForm />
        </div>
      </Section>
    </>
  );
}
