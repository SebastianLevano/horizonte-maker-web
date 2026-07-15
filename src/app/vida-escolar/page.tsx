import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { EvidenceCard } from "@/components/cards/evidence-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { CloseBlock } from "@/components/close-block";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTENT_ICONS } from "@/components/icons";
import { IMAGES } from "@/data/images";
import { EVIDENCES } from "@/data/evidence";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/vida-escolar");

const LOCAL_IMPACT = [
  { title: "Huerto comunitario", description: "Estudiantes de Primaria diseñan y mantienen un huerto en convenio con vecinos del entorno del colegio.", icon: "mapPin" as const },
  { title: "Campaña de reciclaje", description: "Ruta de Gastronomía y Emprendimiento organiza el acopio y venta de materiales reciclables con la comunidad de Lurín.", icon: "users" as const },
  { title: "Reparaciones comunitarias", description: "La ruta de Construcción y Prototipado repara mobiliario para espacios públicos del distrito.", icon: "hammer" as const },
];

const FAIRS = [
  { title: "Feria Maker anual", description: "Exposición abierta a familias con los mejores proyectos de las cuatro rutas del año.", icon: "megaphone" as const },
  { title: "Expociencia", description: "Presentación de proyectos de investigación de Secundaria ante un jurado externo.", icon: "flask" as const },
];

const NEWS = [
  { date: "10 de julio de 2026", title: "Avanza la construcción del Distrito Maker", excerpt: "Las cuatro rutas de aprendizaje práctico ya tienen su espacio definido en el campus, según el plano institucional." },
  { date: "22 de junio de 2026", title: "Convocatoria docente 2027", excerpt: "Se abrieron las primeras vacantes para el equipo docente que acompañará la apertura del colegio." },
  { date: "5 de junio de 2026", title: "Horizonte Maker presenta su modelo educativo", excerpt: "El colegio compartió con la comunidad de Lurín los detalles de su propuesta pedagógica y el Distrito Maker." },
];

const CALENDAR = [
  { date: "Marzo 2027", event: "Apertura del año escolar" },
  { date: "Mayo 2027", event: "Semana Maker de bienvenida" },
  { date: "Octubre 2027", event: "Feria Maker anual" },
  { date: "Diciembre 2027", event: "Presentación de proyectos de fin de año" },
];

export default function VidaEscolarPage() {
  return (
    <>
      <Hero
        eyebrow="Vida escolar y proyectos"
        title="Horizonte Maker crea soluciones con y para Lurín"
        description="Proyectos, ferias, portafolios y noticias: la prueba de lo que se enseña en el colegio."
        image={IMAGES.vidaEscolar}
      />

      <Section>
        <SectionHeading title="Proyectos destacados" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVIDENCES.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 60}>
              <EvidenceCard evidence={e} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Proyectos de impacto local" />
        <div className="grid gap-4 sm:grid-cols-3">
          {LOCAL_IMPACT.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Ferias y exposiciones" />
        <div className="grid gap-4 sm:grid-cols-2">
          {FAIRS.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Noticias" />
        <div className="grid gap-5 sm:grid-cols-3">
          {NEWS.map((n, i) => {
            const Icon = CONTENT_ICONS.megaphone;
            return (
              <ScrollReveal key={n.title} delay={i * 60}>
                <div className="rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                    <Icon />
                  </span>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">{n.date}</p>
                  <p className="mt-1 font-semibold text-text">{n.title}</p>
                  <p className="mt-2 text-sm text-text-secondary">{n.excerpt}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Calendario de eventos" />
        <div className="divide-y divide-border rounded-md border border-border bg-white">
          {CALENDAR.map((c) => {
            const Icon = CONTENT_ICONS.calendar;
            return (
              <div key={c.event} className="flex items-center gap-4 px-5 py-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon />
                </span>
                <span className="flex-1 font-medium text-text">{c.event}</span>
                <span className="font-mono text-xs uppercase tracking-[0.04em] text-secondary">{c.date}</span>
              </div>
            );
          })}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="No te pierdas nuestros próximos eventos" />
        <div className="max-w-md">
          <NewsletterForm />
        </div>
      </Section>

      <CloseBlock
        title="¿Quieres ver esto en persona?"
        primaryCta={{ label: "Agendar una visita", href: "/admision" }}
      />
    </>
  );
}
