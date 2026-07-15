"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { submitJobApplication } from "@/lib/actions";
import { JobApplicationValues, jobApplicationSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ConsentField, FormField, HoneypotField, fieldInputClass } from "./form-field";

export function JobApplicationForm() {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<JobApplicationValues>({ resolver: zodResolver(jobApplicationSchema) });

  async function onSubmit(values: JobApplicationValues) {
    const result = await submitJobApplication(values, pathname);
    if (result.ok) reset();
  }

  if (isSubmitSuccessful) {
    return (
      <Alert tone="success">
        Recibimos tu postulación. Si tu perfil calza con una vacante abierta, te
        contactaremos.
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <HoneypotField register={(name) => register(name)} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="fullName" label="Nombre completo" error={errors.fullName?.message}>
          <input id="fullName" className={fieldInputClass} {...register("fullName")} />
        </FormField>
        <FormField id="specialty" label="Especialidad" error={errors.specialty?.message}>
          <input id="specialty" className={fieldInputClass} {...register("specialty")} />
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
      <FormField id="experience" label="Experiencia" error={errors.experience?.message}>
        <textarea id="experience" rows={3} className={fieldInputClass} {...register("experience")} />
      </FormField>
      <FormField
        id="portfolioUrl"
        label="Enlace a portafolio"
        required={false}
        error={errors.portfolioUrl?.message}
        hint="Si tienes trabajos o proyectos para compartir."
      >
        <input id="portfolioUrl" type="url" className={fieldInputClass} {...register("portfolioUrl")} />
      </FormField>
      <FormField id="cv" label="Currículum (CV)" required={false} hint="Carga de archivo: pendiente de integración con almacenamiento.">
        <input id="cv" type="file" accept=".pdf,.doc,.docx" className={fieldInputClass} disabled />
      </FormField>
      <ConsentField id="consent" error={errors.consent?.message} register={register("consent")} />
      <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
        Enviar CV
      </Button>
    </form>
  );
}
