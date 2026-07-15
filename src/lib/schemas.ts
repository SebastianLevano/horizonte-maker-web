import { z } from "zod";

// Campos mínimos por formulario, docs/pages.md "Formularios del sitio".
// El honeypot ("empresa_web") es la protección antispam funcional en
// desarrollo; Turnstile es el reemplazo recomendado en producción
// (docs/README.md §8).

const consent = z.literal(true, {
  message: "Debes aceptar el tratamiento de datos para continuar.",
});

const honeypot = z.string().max(0).optional();

export const infoRequestSchema = z.object({
  guardianName: z.string().min(2, "Ingresa el nombre del apoderado."),
  studentName: z.string().min(2, "Ingresa el nombre del estudiante."),
  studentAge: z.string().min(1, "Ingresa la edad del estudiante."),
  level: z.enum(["inicial", "primaria", "secundaria"], {
    message: "Selecciona un nivel.",
  }),
  phone: z.string().min(6, "Ingresa un teléfono de contacto."),
  email: z.string().email("Ingresa un correo válido."),
  district: z.string().min(2, "Ingresa el distrito de residencia."),
  entryYear: z.string().min(4, "Ingresa el año de ingreso."),
  message: z.string().optional(),
  consent,
  empresa_web: honeypot,
});
export type InfoRequestValues = z.infer<typeof infoRequestSchema>;

export const visitSchema = infoRequestSchema.extend({
  preferredDate: z.string().min(1, "Selecciona una fecha preferida."),
  attendees: z.string().min(1, "Indica el número de asistentes."),
});
export type VisitValues = z.infer<typeof visitSchema>;

export const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Ingresa tu nombre completo."),
  specialty: z.string().min(2, "Ingresa tu especialidad."),
  experience: z.string().min(1, "Cuéntanos brevemente tu experiencia."),
  phone: z.string().min(6, "Ingresa un teléfono de contacto."),
  email: z.string().email("Ingresa un correo válido."),
  portfolioUrl: z.string().url("Ingresa una URL válida.").optional().or(z.literal("")),
  consent,
  empresa_web: honeypot,
});
export type JobApplicationValues = z.infer<typeof jobApplicationSchema>;

export const allianceSchema = z.object({
  organization: z.string().min(2, "Ingresa el nombre de la organización."),
  contactName: z.string().min(2, "Ingresa el nombre del responsable."),
  collaborationType: z.string().min(2, "Indica el tipo de colaboración."),
  proposal: z.string().min(10, "Cuéntanos brevemente la propuesta."),
  email: z.string().email("Ingresa un correo válido."),
  phone: z.string().min(6, "Ingresa un teléfono de contacto."),
  consent,
  empresa_web: honeypot,
});
export type AllianceValues = z.infer<typeof allianceSchema>;

export const newsletterSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre."),
  email: z.string().email("Ingresa un correo válido."),
  interests: z.string().optional(),
  consent,
  empresa_web: honeypot,
});
export type NewsletterValues = z.infer<typeof newsletterSchema>;

export const contactMessageSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre."),
  email: z.string().email("Ingresa un correo válido."),
  phone: z.string().min(6, "Ingresa un teléfono de contacto."),
  message: z.string().min(10, "Cuéntanos brevemente tu consulta."),
  consent,
  empresa_web: honeypot,
});
export type ContactMessageValues = z.infer<typeof contactMessageSchema>;
