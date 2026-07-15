import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/cards/feature-card";
import { ProcessSequence } from "@/components/process-sequence";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTENT_ICONS } from "@/components/icons";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/trabaja-con-nosotros");

const TEACHER_PROFILE = [
  { title: "Formación", description: "Licenciatura en Educación o carrera afín, con especialización o interés genuino en ABP y STEAM.", icon: "book" as const },
  { title: "Experiencia práctica", description: "Cómodo diseñando proyectos, no solo exponiendo contenido.", icon: "target" as const },
  { title: "Trabajo en equipo", description: "Dispuesto a planificar de forma interdisciplinaria con otros docentes.", icon: "users" as const },
  { title: "Herramientas digitales", description: "Manejo básico de plataformas educativas y disposición a aprender herramientas del Distrito Maker.", icon: "laptop" as const },
];

const DEVELOPMENT = [
  { title: "Inducción de dos semanas", description: "Antes de empezar el año, con el modelo educativo y los protocolos de seguridad del Distrito Maker.", icon: "compass" as const },
  { title: "Capacitación mensual", description: "Talleres internos sobre ABP, evaluación formativa y uso de los laboratorios.", icon: "book" as const },
  { title: "Comunidad de práctica", description: "Espacio quincenal entre docentes para compartir proyectos y resolver dudas juntos.", icon: "users" as const },
];

const VACANCIES = [
  { role: "Docente de Primaria — Comunicación", level: "Primaria" },
  { role: "Especialista en Robótica — Distrito Maker", level: "Secundaria" },
  { role: "Psicólogo/a escolar", level: "Todos los niveles" },
];

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <Hero
        eyebrow="Trabaja con nosotros"
        title="Buscamos diseñadores de experiencias de aprendizaje"
        description="Un modelo educativo distinto necesita un equipo docente alineado con él."
        image={IMAGES.trabajaConNosotros}
      />

      <Section>
        <div className="max-w-2xl">
          <FeatureCard
            title="Cómo se trabaja aquí"
            description="El aula se organiza alrededor de proyectos, no solo de clases expositivas. La colaboración entre docentes es parte del día a día."
            icon="target"
          />
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Perfil docente esperado" />
        <div className="grid gap-4 sm:grid-cols-2">
          {TEACHER_PROFILE.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Desarrollo profesional" />
        <div className="grid gap-4 sm:grid-cols-3">
          {DEVELOPMENT.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Proceso de selección" />
        <ProcessSequence
          steps={[
            { step: "Postulación", description: "Envías tu CV y datos de contacto." },
            { step: "Revisión de perfil", description: "Evaluamos afinidad con el modelo educativo." },
            { step: "Microclase", description: "Presentas una actividad breve ante el equipo académico." },
            { step: "Entrevista final", description: "Conversamos sobre tu experiencia y expectativas." },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading title="Vacantes abiertas" />
        <div className="grid gap-4 sm:grid-cols-3">
          {VACANCIES.map((v) => {
            const Icon = CONTENT_ICONS.briefcase;
            return (
              <div key={v.role} className="rounded-md border border-border bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                  <Icon />
                </span>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">{v.level}</p>
                <p className="mt-1 font-semibold text-text">{v.role}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Envía tu CV" />
        <div className="max-w-2xl">
          <JobApplicationForm />
        </div>
      </Section>
    </>
  );
}
