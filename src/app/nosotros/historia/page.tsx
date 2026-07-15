import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { CloseBlock } from "@/components/close-block";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTENT_ICONS, ContentIconName } from "@/components/icons";
import { HISTORY, ADMISSION_DATES } from "@/data/site";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/nosotros/historia");

const MILESTONES: { title: string; description: string; icon: ContentIconName }[] = [
  {
    title: "Una pregunta simple",
    description: "¿Qué pasaría si un colegio tomara tan en serio el \"aprender haciendo\" como el currículo académico?",
    icon: "compass",
  },
  {
    title: "El Distrito Maker como columna vertebral",
    description: "En vez de sumar un taller aparte, las cuatro rutas de aprendizaje práctico se diseñaron desde cero para atravesar Inicial, Primaria y Secundaria.",
    icon: "hammer",
  },
  {
    title: "Apertura del campus",
    description: ADMISSION_DATES.openingYear.replace("Apertura del campus: ", ""),
    icon: "calendar",
  },
];

export default function HistoriaPage() {
  return (
    <>
      <Hero
        eyebrow="Nosotros · Historia"
        title="De una pregunta simple a un proyecto educativo"
        description="Cómo nació Horizonte Maker y por qué el Distrito Maker es su columna vertebral, no un taller aparte."
        image={IMAGES.nosotrosHistoria}
      />

      <Section>
        <ScrollReveal>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary">{HISTORY}</p>
        </ScrollReveal>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="En el camino" title="De la idea a la apertura" />
        <ol className="relative border-l-2 border-border pl-8">
          {MILESTONES.map((m, i) => {
            const Icon = CONTENT_ICONS[m.icon];
            return (
              <ScrollReveal key={m.title} delay={i * 80}>
                <li className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary bg-white text-secondary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="font-semibold text-text">{m.title}</p>
                  <p className="mt-1 max-w-xl text-sm text-text-secondary">{m.description}</p>
                </li>
              </ScrollReveal>
            );
          })}
        </ol>
      </Section>

      <CloseBlock
        title="Conoce el resto de nuestra identidad"
        primaryCta={{ label: "Ver misión, visión y valores", href: "/nosotros" }}
        secondaryCta={{ label: "Ver la infraestructura", href: "/nosotros/infraestructura" }}
      />
    </>
  );
}
