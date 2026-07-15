import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section } from "@/components/ui/section";
import { CookiePreferences } from "@/components/cookie-preferences";
import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/politicas");

const SECTIONS = [
  { id: "privacidad", title: "Política de privacidad" },
  { id: "cookies", title: "Política de cookies" },
  { id: "datos-personales", title: "Tratamiento de datos personales" },
  { id: "uso-de-imagenes", title: "Uso de imágenes" },
  { id: "terminos", title: "Términos de uso" },
];

export default function PoliticasPage() {
  return (
    <>
      <Hero
        eyebrow="Políticas"
        title="Transparencia en el uso de tus datos"
        description="Cómo tratamos la información de familias, estudiantes y postulantes."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Índice de políticas" className="hidden lg:block">
            <ul className="sticky top-24 space-y-2 border-l border-border pl-4 text-sm">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-text-secondary hover:text-primary">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-2xl space-y-12">
            <section id="privacidad">
              <h2 className="font-display text-2xl font-semibold text-text">
                Política de privacidad
              </h2>
              <p className="mt-4 text-text-secondary">
                {SITE.legalName} (RUC {SITE.ruc}) opera este sitio web con la finalidad de
                informar sobre su propuesta educativa y facilitar el proceso de admisión.
                Esta política explica qué datos recogemos, para qué los usamos y qué derechos
                tienes sobre ellos, en cumplimiento de la Ley N.° 29733, Ley de Protección de
                Datos Personales del Perú, y su reglamento.
              </p>
              <p className="mt-4 text-text-secondary">
                Recogemos únicamente los datos que completas voluntariamente en los
                formularios del sitio: solicitud de información, agenda de visita,
                postulación docente, propuesta de alianza y suscripción a novedades. No
                vendemos ni cedemos tus datos a terceros con fines comerciales.
              </p>
            </section>

            <section id="cookies">
              <h2 className="font-display text-2xl font-semibold text-text">
                Política de cookies
              </h2>
              <p className="mt-4 text-text-secondary">
                Usamos cookies para medir el uso del sitio (visitas, páginas más vistas,
                clics a WhatsApp y formularios enviados). Puedes aceptarlas o rechazarlas;
                la analítica solo se activa si las aceptas.
              </p>
              <div className="mt-4">
                <CookiePreferences />
              </div>
            </section>

            <section id="datos-personales">
              <h2 className="font-display text-2xl font-semibold text-text">
                Tratamiento de datos personales
              </h2>
              <p className="mt-4 text-text-secondary">
                Los formularios del sitio solicitan datos de contacto y, en el caso de
                solicitudes de admisión, datos de estudiantes menores de edad. Estos datos
                se usan únicamente para dar seguimiento a tu solicitud y se conservan
                mientras dure el proceso correspondiente.
              </p>
              <p className="mt-4 text-text-secondary">
                El responsable del tratamiento de datos es {SITE.legalName}, con domicilio en{" "}
                {SITE.location.address}. Puedes ejercer tus derechos de acceso,
                rectificación, cancelación y oposición escribiendo a{" "}
                <a href={`mailto:${SITE.contact.email}`} className="text-primary underline underline-offset-2">
                  {SITE.contact.email}
                </a>
                .
              </p>
            </section>

            <section id="uso-de-imagenes">
              <h2 className="font-display text-2xl font-semibold text-text">
                Uso de imágenes
              </h2>
              <p className="mt-4 text-text-secondary">
                Toda fotografía o video de un estudiante publicado en este sitio cuenta con
                autorización expresa de su apoderado y un registro de vigencia. Ninguna
                imagen identifica a un menor por nombre completo, horario de aula o datos
                que permitan ubicarlo.
              </p>
            </section>

            <section id="terminos">
              <h2 className="font-display text-2xl font-semibold text-text">
                Términos de uso
              </h2>
              <p className="mt-4 text-text-secondary">
                El contenido de este sitio es informativo y no constituye una oferta
                vinculante de matrícula hasta la firma del contrato de servicio educativo
                correspondiente. Los montos, fechas y vacantes publicados están sujetos a
                confirmación durante el proceso de admisión. {SITE.legalName} se reserva el
                derecho de actualizar este sitio y sus políticas cuando sea necesario.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
