"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { submitInfoRequest } from "@/lib/actions";
import { InfoRequestValues, infoRequestSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ConsentField, FormField, HoneypotField, fieldInputClass } from "./form-field";

export function InfoRequestForm() {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<InfoRequestValues>({ resolver: zodResolver(infoRequestSchema) });

  async function onSubmit(values: InfoRequestValues) {
    const result = await submitInfoRequest(values, pathname);
    if (result.ok) reset();
  }

  if (isSubmitSuccessful) {
    return (
      <Alert tone="success">
        Recibimos tu solicitud. Te escribiremos pronto para coordinar los siguientes pasos.
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <HoneypotField register={(name) => register(name)} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="guardianName" label="Nombre del apoderado" error={errors.guardianName?.message}>
          <input id="guardianName" className={fieldInputClass} {...register("guardianName")} />
        </FormField>
        <FormField id="studentName" label="Nombre del estudiante" error={errors.studentName?.message}>
          <input id="studentName" className={fieldInputClass} {...register("studentName")} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="studentAge" label="Edad del estudiante" error={errors.studentAge?.message}>
          <input id="studentAge" className={fieldInputClass} {...register("studentAge")} />
        </FormField>
        <FormField id="level" label="Nivel" error={errors.level?.message}>
          <select id="level" className={fieldInputClass} defaultValue="" {...register("level")}>
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
        <FormField id="phone" label="Teléfono" error={errors.phone?.message}>
          <input id="phone" type="tel" className={fieldInputClass} {...register("phone")} />
        </FormField>
        <FormField id="email" label="Correo" error={errors.email?.message}>
          <input id="email" type="email" className={fieldInputClass} {...register("email")} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="district" label="Distrito" error={errors.district?.message}>
          <input id="district" className={fieldInputClass} {...register("district")} />
        </FormField>
        <FormField id="entryYear" label="Año de ingreso" error={errors.entryYear?.message}>
          <input id="entryYear" className={fieldInputClass} {...register("entryYear")} />
        </FormField>
      </div>
      <FormField id="message" label="Mensaje" required={false} error={errors.message?.message}>
        <textarea id="message" rows={3} className={fieldInputClass} {...register("message")} />
      </FormField>
      <ConsentField id="consent" error={errors.consent?.message} register={register("consent")} />
      <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
        Solicitar información
      </Button>
    </form>
  );
}
