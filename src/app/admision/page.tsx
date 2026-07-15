import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProcessSequence } from "@/components/process-sequence";
import { FaqAccordion } from "@/components/faq-accordion";
import { InfoRequestForm } from "@/components/forms/info-request-form";
import { VisitForm } from "@/components/forms/visit-form";
import {
  ADMISSION_PROCESS,
  ADMISSION_CLOSING,
  ADMISSION_PRICING,
  ADMISSION_REQUIREMENTS,
  ADMISSION_DATES,
  ADMISSION_BENEFITS,
  RESERVATION_POLICY,
} from "@/data/site";
import { LEVELS, LEVEL_ACCENT_CLASSES } from "@/data/levels";
import { ADMISSION_FAQ } from "@/data/faq";
import { IMAGES } from "@/data/images";
import { CONTENT_ICONS } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { FaqJsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildMetadata("/admision");

export default function AdmisionPage() {
  return (
    <>
      <FaqJsonLd items={ADMISSION_FAQ} />
      <Hero
        eyebrow="Admisión"
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
        </div>
      </Section>

      <Section>
        <SectionHeading title="Vacantes disponibles" />
        <div className="grid gap-4 sm:grid-cols-3">
          {LEVELS.map((level) => {
            const accent = LEVEL_ACCENT_CLASSES[level.slug];
            const Icon = CONTENT_ICONS.users;
            return (
              <div key={level.slug} className={`rounded-md border border-border border-t-2 bg-white p-5 ${accent.borderTop}`}>
                <span className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                  <Icon />
                </span>
                <p className="mt-3 font-semibold text-text">{level.name}</p>
                <p className="mt-1 text-sm text-text-secondary">{level.sectionSize}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-text-secondary">{ADMISSION_DATES.vacanciesNote}</p>
      </Section>

      <Section surface>
        <SectionHeading title="Inversión" />
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
          <div className="rounded-md border border-border bg-white p-5">
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">Matrícula</p>
            <p className="mt-1 text-2xl font-semibold text-text">{ADMISSION_PRICING.matricula}</p>
          </div>
          <div className="rounded-md border border-border bg-white p-5">
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">Pensión</p>
            <p className="mt-1 text-2xl font-semibold text-text">{ADMISSION_PRICING.pension}</p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-text-secondary">{ADMISSION_PRICING.note}</p>
        <div className="mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">Beneficios</p>
          <ul className="mt-2 space-y-1.5">
            {ADMISSION_BENEFITS.map((b) => (
              <li key={b} className="text-sm text-text-secondary">• {b}</li>
            ))}
          </ul>
        </div>
        <p className="mt-6 max-w-2xl text-xs text-text-secondary">{RESERVATION_POLICY}</p>
      </Section>

      <Section>
        <SectionHeading title="Fechas de campaña" />
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
          {[ADMISSION_DATES.campaign, ADMISSION_DATES.openingYear].map((text) => {
            const Icon = CONTENT_ICONS.calendar;
            return (
              <div key={text} className="rounded-md border border-border bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon />
                </span>
                <p className="mt-3 text-sm text-text-secondary">{text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Preguntas frecuentes" />
        <div className="max-w-2xl">
          <FaqAccordion items={ADMISSION_FAQ} />
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
