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
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/admision/fechas-y-costos");

const PENSION_INSTALLMENTS = 10;

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

      <CloseBlock
        title="¿Tienes más dudas sobre el proceso?"
        primaryCta={{ label: "Ver preguntas frecuentes", href: "/admision/preguntas-frecuentes" }}
        secondaryCta={{ label: "Volver al proceso", href: "/admision" }}
      />
    </>
  );
}
