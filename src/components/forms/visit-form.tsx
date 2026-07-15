"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { submitVisitRequest } from "@/lib/actions";
import { VisitValues, visitSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ConsentField, FormField, HoneypotField, fieldInputClass } from "./form-field";

export function VisitForm() {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<VisitValues>({ resolver: zodResolver(visitSchema) });

  async function onSubmit(values: VisitValues) {
    const result = await submitVisitRequest(values, pathname);
    if (result.ok) reset();
  }

  if (isSubmitSuccessful) {
    return (
      <Alert tone="success">
        Recibimos tu solicitud de visita. Te confirmaremos la fecha por el medio que nos
        indiques.
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <HoneypotField register={(name) => register(name)} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="v-guardianName" label="Nombre del apoderado" error={errors.guardianName?.message}>
          <input id="v-guardianName" className={fieldInputClass} {...register("guardianName")} />
        </FormField>
        <FormField id="v-studentName" label="Nombre del estudiante" error={errors.studentName?.message}>
          <input id="v-studentName" className={fieldInputClass} {...register("studentName")} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="v-studentAge" label="Edad del estudiante" error={errors.studentAge?.message}>
          <input id="v-studentAge" className={fieldInputClass} {...register("studentAge")} />
        </FormField>
        <FormField id="v-level" label="Nivel" error={errors.level?.message}>
          <select id="v-level" className={fieldInputClass} defaultValue="" {...register("level")}>
            <option value="" disabled>
              Selecciona un nivel
            </option>
            <option value="inicial">Inicial</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
          </select>
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="v-phone" label="Teléfono" error={errors.phone?.message}>
          <input id="v-phone" type="tel" className={fieldInputClass} {...register("phone")} />
        </FormField>
        <FormField id="v-email" label="Correo" error={errors.email?.message}>
          <input id="v-email" type="email" className={fieldInputClass} {...register("email")} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="v-district" label="Distrito" error={errors.district?.message}>
          <input id="v-district" className={fieldInputClass} {...register("district")} />
        </FormField>
        <FormField id="v-entryYear" label="Año de ingreso" error={errors.entryYear?.message}>
          <input id="v-entryYear" className={fieldInputClass} {...register("entryYear")} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="preferredDate" label="Fecha preferida" error={errors.preferredDate?.message}>
          <input id="preferredDate" type="date" className={fieldInputClass} {...register("preferredDate")} />
        </FormField>
        <FormField id="attendees" label="Número de asistentes" error={errors.attendees?.message}>
          <input id="attendees" type="number" min={1} className={fieldInputClass} {...register("attendees")} />
        </FormField>
      </div>
      <FormField id="v-message" label="Mensaje" required={false} error={errors.message?.message}>
        <textarea id="v-message" rows={3} className={fieldInputClass} {...register("message")} />
      </FormField>
      <ConsentField id="v-consent" error={errors.consent?.message} register={register("consent")} />
      <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
        Agendar una visita
      </Button>
    </form>
  );
}
