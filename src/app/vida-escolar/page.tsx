import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { EvidenceGallery } from "@/components/evidence-gallery";
import { FeatureCard } from "@/components/cards/feature-card";
import { CloseBlock } from "@/components/close-block";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTENT_ICONS } from "@/components/icons";
import { RouteAccent } from "@/data/maker-routes";
import { IMAGES } from "@/data/images";
import { EVIDENCES } from "@/data/evidence";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/vida-escolar");

const ACCENTS: RouteAccent[] = ["robotica", "diseno", "gastronomia", "construccion"];

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
        <SectionHeading title="Proyectos destacados" description="Filtra por nivel para ver solo lo que te interesa." />
        <ScrollReveal>
          <EvidenceGallery evidences={EVIDENCES} />
        </ScrollReveal>
      </Section>

      <Section surface>
        <SectionHeading title="Proyectos de impacto local" />
        <div className="grid gap-4 sm:grid-cols-3">
          {LOCAL_IMPACT.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} accent={ACCENTS[i % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Ferias y exposiciones" />
        <div className="grid gap-4 sm:grid-cols-2">
          {FAIRS.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <FeatureCard title={f.title} description={f.description} icon={f.icon} accent={ACCENTS[(i + 2) % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading title="Noticias" />
        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <ScrollReveal>
            <div className="group rounded-lg border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-sm bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-primary">
                Última noticia
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.04em] text-secondary">{NEWS[0].date}</p>
              <h3 className="mt-1.5 font-display text-2xl font-semibold text-text">{NEWS[0].title}</h3>
              <p className="mt-3 max-w-md text-text-secondary">{NEWS[0].excerpt}</p>
            </div>
          </ScrollReveal>
          <div className="flex flex-col gap-4">
            {NEWS.slice(1).map((n, i) => (
              <ScrollReveal key={n.title} delay={(i + 1) * 60}>
                <div className="rounded-md border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">{n.date}</p>
                  <p className="mt-1.5 font-semibold text-text">{n.title}</p>
                  <p className="mt-2 text-sm text-text-secondary">{n.excerpt}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Calendario de eventos" />
        <ol className="relative border-l-2 border-border pl-8">
          {CALENDAR.map((c, i) => {
            const Icon = CONTENT_ICONS.calendar;
            return (
              <ScrollReveal key={c.event} delay={i * 70}>
                <li className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary bg-white text-secondary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.06em] text-secondary">{c.date}</p>
                  <p className="mt-1 font-medium text-text">{c.event}</p>
                </li>
              </ScrollReveal>
            );
          })}
        </ol>
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
