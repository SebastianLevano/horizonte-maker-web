"use server";

import {
  allianceSchema,
  contactMessageSchema,
  infoRequestSchema,
  jobApplicationSchema,
  newsletterSchema,
  visitSchema,
} from "./schemas";

/**
 * Punto único de envío. En producción esto debe:
 * 1) enviar correo al responsable interno (Resend o equivalente),
 * 2) enviar confirmación automática al usuario,
 * 3) registrar el lead (fecha, campaña, página de origen) en la hoja/CRM.
 * docs/pages.md "Formularios del sitio" — requisitos funcionales.
 * Sin credenciales de correo configuradas, se registra en el log del
 * servidor para que el flujo sea verificable en desarrollo.
 */
function record(form: string, data: Record<string, unknown>, sourcePage: string) {
  const clean = { ...data };
  delete clean.empresa_web;
  console.log(`[formulario:${form}]`, {
    ...clean,
    receivedAt: new Date().toISOString(),
    sourcePage,
  });
}

type ActionResult = { ok: true } | { ok: false; message: string };

const GENERIC_ERROR: ActionResult = {
  ok: false,
  message: "No pudimos enviar tu formulario. Intenta nuevamente en unos minutos.",
};

export async function submitInfoRequest(
  raw: unknown,
  sourcePage: string
): Promise<ActionResult> {
  const parsed = infoRequestSchema.safeParse(raw);
  if (!parsed.success) return GENERIC_ERROR;
  if (parsed.data.empresa_web) return GENERIC_ERROR;
  record("solicitud-informacion", parsed.data, sourcePage);
  return { ok: true };
}

export async function submitVisitRequest(
  raw: unknown,
  sourcePage: string
): Promise<ActionResult> {
  const parsed = visitSchema.safeParse(raw);
  if (!parsed.success) return GENERIC_ERROR;
  if (parsed.data.empresa_web) return GENERIC_ERROR;
  record("agenda-visita", parsed.data, sourcePage);
  return { ok: true };
}

export async function submitJobApplication(
  raw: unknown,
  sourcePage: string
): Promise<ActionResult> {
  const parsed = jobApplicationSchema.safeParse(raw);
  if (!parsed.success) return GENERIC_ERROR;
  if (parsed.data.empresa_web) return GENERIC_ERROR;
  record("trabaja-con-nosotros", parsed.data, sourcePage);
  return { ok: true };
}

export async function submitAllianceProposal(
  raw: unknown,
  sourcePage: string
): Promise<ActionResult> {
  const parsed = allianceSchema.safeParse(raw);
  if (!parsed.success) return GENERIC_ERROR;
  if (parsed.data.empresa_web) return GENERIC_ERROR;
  record("propuesta-alianza", parsed.data, sourcePage);
  return { ok: true };
}

export async function submitNewsletter(
  raw: unknown,
  sourcePage: string
): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(raw);
  if (!parsed.success) return GENERIC_ERROR;
  if (parsed.data.empresa_web) return GENERIC_ERROR;
  record("newsletter", parsed.data, sourcePage);
  return { ok: true };
}

export async function submitContactMessage(
  raw: unknown,
  sourcePage: string
): Promise<ActionResult> {
  const parsed = contactMessageSchema.safeParse(raw);
  if (!parsed.success) return GENERIC_ERROR;
  if (parsed.data.empresa_web) return GENERIC_ERROR;
  record("contacto", parsed.data, sourcePage);
  return { ok: true };
}
