import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTENT_ICONS } from "@/components/icons";
import {
  ADMISSION_PRICING,
  ADMISSION_DATES,
  ADMISSION_BENEFITS,
  RESERVATION_POLICY,
} from "@/data/site";
import { LEVELS, LEVEL_ACCENT_CLASSES } from "@/data/levels";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/admision/fechas-y-costos");

export default function FechasYCostosPage() {
  return (
    <>
      <Hero
        eyebrow="Admisión · Fechas y costos"
        title="Lo que necesitas saber sobre costos y fechas"
        description="Matrícula, pensión, beneficios y las fechas clave de la campaña de admisión."
        image={IMAGES.admisionFechasCostos}
      />

      <Section>
        <SectionHeading title="Inversión" />
        <div className="max-w-xs rounded-md border border-border bg-white p-5">
          <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">Matrícula</p>
          <p className="mt-1 text-2xl font-semibold text-text">{ADMISSION_PRICING.matricula}</p>
          <p className="mt-1 text-xs text-text-secondary">Pago único, al momento de la matrícula.</p>
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.06em] text-secondary">
          Pensión mensual por nivel
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {LEVELS.map((level) => {
            const accent = LEVEL_ACCENT_CLASSES[level.slug];
            return (
              <div key={level.slug} className={`rounded-md border border-border border-t-2 bg-white p-5 ${accent.borderTop}`}>
                <p className={`font-mono text-xs uppercase tracking-[0.06em] ${accent.text}`}>{level.name}</p>
                <p className="mt-1 text-2xl font-semibold text-text">{level.pension}</p>
                <p className="mt-1 text-xs text-text-secondary">al mes</p>
              </div>
            );
          })}
        </div>
        <p className="mt-3 max-w-2xl text-sm text-text-secondary">{ADMISSION_PRICING.installments}.</p>
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

      <CloseBlock
        title="¿Tienes más dudas sobre el proceso?"
        primaryCta={{ label: "Ver preguntas frecuentes", href: "/admision/preguntas-frecuentes" }}
        secondaryCta={{ label: "Volver al proceso", href: "/admision" }}
      />
    </>
  );
}
