import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProcessSequence } from "@/components/process-sequence";
import { FaqAccordion } from "@/components/faq-accordion";
import { LevelCard } from "@/components/cards/level-card";
import { InfoRequestForm } from "@/components/forms/info-request-form";
import { VisitForm } from "@/components/forms/visit-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  ADMISSION_PROCESS,
  ADMISSION_CLOSING,
  ADMISSION_PRICING,
  ADMISSION_REQUIREMENTS,
  ADMISSION_DATES,
  ADMISSION_BENEFITS,
  RESERVATION_POLICY,
} from "@/data/site";
import { LEVELS } from "@/data/levels";
import { ADMISSION_FAQ } from "@/data/faq";
import { IMAGES } from "@/data/images";
import { CONTENT_ICONS } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { FaqJsonLd } from "@/components/json-ld";

const PENSION_INSTALLMENTS = 10;

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
        <SectionHeading title="Inversión" />
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
          <div className="rounded-md border border-border bg-white p-5">
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">Matrícula</p>
            <p className="mt-1 text-2xl font-semibold text-text">{ADMISSION_PRICING.matricula}</p>
          </div>
          <div className="rounded-md border border-border bg-white p-5">
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">Pensión</p>
            <p className="mt-1 text-2xl font-semibold text-text">{ADMISSION_PRICING.pension}</p>
            <div className="mt-3 flex gap-1" aria-hidden="true">
              {Array.from({ length: PENSION_INSTALLMENTS }).map((_, i) => (
                <span key={i} className="h-1.5 flex-1 rounded-full bg-secondary/30" />
              ))}
            </div>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.04em] text-text-secondary">
              10 cuotas · marzo a diciembre
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-text-secondary">{ADMISSION_PRICING.note}</p>
        <div className="mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">Beneficios</p>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
            {ADMISSION_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2 rounded-md border border-border bg-white p-3 text-sm text-text-secondary">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 max-w-2xl text-xs text-text-secondary">{RESERVATION_POLICY}</p>
      </Section>

      <Section tint="primary">
        <SectionHeading title="Fechas de campaña" />
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
          {[
            { label: "Campaña de admisión", text: ADMISSION_DATES.campaign },
            { label: "Apertura del campus", text: ADMISSION_DATES.openingYear },
          ].map((d) => {
            const Icon = CONTENT_ICONS.calendar;
            return (
              <ScrollReveal key={d.label}>
                <div className="rounded-md border border-border bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">{d.label}</p>
                  <p className="mt-1 text-text">{d.text.split(": ").slice(1).join(": ")}</p>
                </div>
              </ScrollReveal>
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
