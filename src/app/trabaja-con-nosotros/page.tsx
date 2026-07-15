import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/cards/feature-card";
import { ProcessSequence } from "@/components/process-sequence";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteImageBlock } from "@/components/ui/site-image";
import { CONTENT_ICONS } from "@/components/icons";
import { RouteAccent, ROUTE_ACCENT_CLASSES } from "@/data/maker-routes";
import { IMAGES } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/trabaja-con-nosotros");

const ACCENTS: RouteAccent[] = ["robotica", "diseno", "gastronomia", "construccion"];

const TEACHER_PROFILE = [
  { title: "Formación", description: "Licenciatura en Educación o carrera afín, con especialización o interés genuino en ABP y STEAM.", icon: "book" as const },
  { title: "Experiencia práctica", description: "Cómodo diseñando proyectos, no solo exponiendo contenido.", icon: "target" as const },
  { title: "Trabajo en equipo", description: "Dispuesto a planificar de forma interdisciplinaria con otros docentes.", icon: "users" as const },
  { title: "Herramientas digitales", description: "Manejo básico de plataformas educativas y disposición a aprender herramientas del Distrito Maker.", icon: "laptop" as const },
];

const DEVELOPMENT = [
  { title: "Inducción de dos semanas", description: "Antes de empezar el año, con el modelo educativo y los protocolos de seguridad del Distrito Maker.", icon: "compass" as const, frequency: "Antes de empezar" },
  { title: "Capacitación mensual", description: "Talleres internos sobre ABP, evaluación formativa y uso de los laboratorios.", icon: "book" as const, frequency: "Mensual" },
  { title: "Comunidad de práctica", description: "Espacio quincenal entre docentes para compartir proyectos y resolver dudas juntos.", icon: "users" as const, frequency: "Quincenal" },
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
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal>
            <FeatureCard
              title="Cómo se trabaja aquí"
              description="El aula se organiza alrededor de proyectos, no solo de clases expositivas. La colaboración entre docentes es parte del día a día."
              icon="target"
            />
          </ScrollReveal>
          <ScrollReveal delay={70}>
            <SiteImageBlock image={IMAGES.trabajaConNosotrosEquipo} aspect="aspect-[4/3]" />
          </ScrollReveal>
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Perfil docente esperado" />
        <div className="grid gap-4 sm:grid-cols-2">
          {TEACHER_PROFILE.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} accent={ACCENTS[i % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Desarrollo profesional" />
        <div className="grid gap-4 sm:grid-cols-3">
          {DEVELOPMENT.map((f, i) => {
            const accent = ROUTE_ACCENT_CLASSES[ACCENTS[i % ACCENTS.length]];
            const Icon = CONTENT_ICONS[f.icon];
            return (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <div className="flex items-start justify-between gap-2">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                      <Icon />
                    </span>
                    <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.04em] ${accent.bg} ${accent.text}`}>
                      {f.frequency}
                    </span>
                  </div>
                  <h3 className="mt-3 font-semibold text-text">{f.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{f.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
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
        <SectionHeading title="Vacantes abiertas" description="Toca una vacante para ir directo al formulario." />
        <div className="grid gap-4 sm:grid-cols-3">
          {VACANCIES.map((v, i) => {
            const Icon = CONTENT_ICONS.briefcase;
            const accent = ROUTE_ACCENT_CLASSES[ACCENTS[i % ACCENTS.length]];
            return (
              <a
                key={v.role}
                href="#envia-tu-cv"
                className={`group rounded-md border border-border border-t-2 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] ${accent.borderTop}`}
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                  <Icon />
                </span>
                <p className={`mt-3 font-mono text-[11px] uppercase tracking-[0.06em] ${accent.text}`}>{v.level}</p>
                <p className="mt-1 font-semibold text-text">{v.role}</p>
                <span className="mt-3 flex items-center gap-1.5 text-sm font-medium text-text-secondary">
                  Postular
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </Section>

      <Section surface id="envia-tu-cv">
        <SectionHeading title="Envía tu CV" />
        <div className="max-w-2xl">
          <JobApplicationForm />
        </div>
      </Section>
    </>
  );
}
