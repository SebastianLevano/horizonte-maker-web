import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { FaqAccordion } from "@/components/faq-accordion";
import { ADMISSION_FAQ } from "@/data/faq";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { FaqJsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildMetadata("/admision/preguntas-frecuentes");

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <FaqJsonLd items={ADMISSION_FAQ} />
      <Hero
        eyebrow="Admisión · Preguntas frecuentes"
        title="Resolvemos tus dudas sobre el proceso"
        description="Costos, vacantes, requisitos y visitas: las preguntas que más nos hacen las familias."
        image={IMAGES.admisionFaq}
      />

      <Section>
        <SectionHeading title="Preguntas frecuentes" />
        <div className="max-w-2xl">
          <FaqAccordion items={ADMISSION_FAQ} />
        </div>
      </Section>

      <CloseBlock
        title="¿No encontraste tu respuesta?"
        description="Escríbenos y te contactamos en menos de 48 horas hábiles."
        primaryCta={{ label: "Contactar a admisión", href: "/contacto" }}
        secondaryCta={{ label: "Volver al proceso", href: "/admision" }}
      />
    </>
  );
}
