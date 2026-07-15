import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/cards/feature-card";
import { AllianceForm } from "@/components/forms/alliance-form";
import { PendingNotice } from "@/components/ui/pending-notice";
import { ScrollReveal } from "@/components/scroll-reveal";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/alianzas");

const WHY_ALLY = [
  { title: "Proyectos reales", description: "Los estudiantes trabajan sobre problemas del sector productivo.", icon: "target" as const },
  { title: "Laboratorios activos", description: "Cuatro rutas Maker en funcionamiento, listas para colaborar.", icon: "flask" as const },
  { title: "Comunidad de Lurín", description: "Impacto directo en el entorno donde opera el colegio.", icon: "mapPin" as const },
];

const MODALITIES = [
  { title: "Convenio", description: "Colaboración formal y sostenida en el tiempo.", icon: "handshake" as const },
  { title: "Mentoría", description: "Acompañamiento puntual a un proyecto o ruta Maker.", icon: "compass" as const },
  { title: "Desafío", description: "Un problema real propuesto por la organización a los estudiantes.", icon: "target" as const },
];

// El brief prohíbe afirmar convenios sin firma (§13). Estas son categorías
// de organización, no nombres de instituciones específicas — se busca
// colaborar con este tipo de aliados, no se afirma un convenio existente.
const PROSPECTIVE_ALLY_TYPES = [
  { title: "Institutos técnicos de Lima Sur", description: "Para mentoría en las rutas de Robótica y Diseño y Fabricación.", icon: "flask" as const },
  { title: "Empresas del sector tecnológico", description: "Para proponer desafíos reales a estudiantes de Secundaria.", icon: "briefcase" as const },
  { title: "Municipalidad de Lurín", description: "Para proyectos de impacto local con la ruta de Construcción y Prototipado.", icon: "mapPin" as const },
];

export default function AlianzasPage() {
  return (
    <>
      <Hero
        eyebrow="Alianzas"
        title="Conectamos aprendizaje, comunidad y sector productivo"
        description="Universidades, institutos, empresas y municipalidad: distintas formas de colaborar con el Distrito Maker."
        image={IMAGES.alianzas}
      />

      <Section>
        <SectionHeading title="Por qué aliarse con Horizonte Maker" />
        <div className="grid gap-4 sm:grid-cols-3">
          {WHY_ALLY.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Convenios vigentes" />
        <PendingNotice>
          Sin convenios firmados publicados aún. Esta sección no se rellena con alianzas
          proyectadas: los dos bloques siempre están separados y rotulados
          (docs/content-guide.md).
        </PendingNotice>
      </Section>

      <Section>
        <SectionHeading
          title="Alianzas proyectadas"
          description="Tipos de organizaciones con las que buscamos colaborar. Ninguna implica un convenio firmado."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {PROSPECTIVE_ALLY_TYPES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Modalidades de colaboración" />
        <div className="grid gap-4 sm:grid-cols-3">
          {MODALITIES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Proponer una alianza" />
        <div className="max-w-2xl">
          <AllianceForm />
        </div>
      </Section>
    </>
  );
}
