import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/cards/feature-card";
import { AllianceForm } from "@/components/forms/alliance-form";
import { PendingNotice } from "@/components/ui/pending-notice";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteImageBlock } from "@/components/ui/site-image";
import { CONTENT_ICONS } from "@/components/icons";
import { RouteAccent, ROUTE_ACCENT_CLASSES } from "@/data/maker-routes";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/alianzas");

const ACCENTS: RouteAccent[] = ["robotica", "diseno", "gastronomia", "construccion"];

const WHY_ALLY = [
  { title: "Proyectos reales", description: "Los estudiantes trabajan sobre problemas del sector productivo.", icon: "target" as const },
  { title: "Laboratorios activos", description: "Cuatro rutas Maker en funcionamiento, listas para colaborar.", icon: "flask" as const },
  { title: "Comunidad de Lurín", description: "Impacto directo en el entorno donde opera el colegio.", icon: "mapPin" as const },
];

const MODALITIES = [
  { title: "Convenio", description: "Colaboración formal y sostenida en el tiempo.", icon: "handshake" as const, commitment: 3 },
  { title: "Mentoría", description: "Acompañamiento puntual a un proyecto o ruta Maker.", icon: "compass" as const, commitment: 2 },
  { title: "Desafío", description: "Un problema real propuesto por la organización a los estudiantes.", icon: "target" as const, commitment: 1 },
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
              <FeatureCard title={f.title} description={f.description} icon={f.icon} accent={ACCENTS[i % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={200}>
          <div className="relative mt-8 overflow-hidden rounded-lg border border-border">
            <SiteImageBlock image={IMAGES.distritoMaker} aspect="aspect-[21/9]" className="rounded-none border-0" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <p className="absolute bottom-5 left-6 max-w-md font-display text-lg font-semibold text-white sm:text-xl">
              Laboratorios del Distrito Maker, listos para colaborar
            </p>
          </div>
        </ScrollReveal>
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
              <FeatureCard title={f.title} description={f.description} icon={f.icon} accent={ACCENTS[(i + 1) % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Modalidades de colaboración" description="Nivel de compromiso, de la más puntual a la más sostenida." />
        <div className="grid gap-4 sm:grid-cols-3">
          {MODALITIES.map((m, i) => {
            const Icon = CONTENT_ICONS[m.icon];
            const accent = ROUTE_ACCENT_CLASSES[ACCENTS[i % ACCENTS.length]];
            return (
              <ScrollReveal key={m.title} delay={i * 60}>
                <div className="rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                    <Icon />
                  </span>
                  <h3 className="mt-3 font-semibold text-text">{m.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{m.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-text-secondary">Compromiso</span>
                    <span className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1.5 w-4 rounded-full ${dot <= m.commitment ? accent.solid : "bg-border"}`}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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
