"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { submitAllianceProposal } from "@/lib/actions";
import { AllianceValues, allianceSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ConsentField, FormField, HoneypotField, fieldInputClass } from "./form-field";

export function AllianceForm() {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AllianceValues>({ resolver: zodResolver(allianceSchema) });

  async function onSubmit(values: AllianceValues) {
    const result = await submitAllianceProposal(values, pathname);
    if (result.ok) reset();
  }

  if (isSubmitSuccessful) {
    return (
      <Alert tone="success">
        Recibimos tu propuesta. El equipo de alianzas la revisará y te contactará.
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <HoneypotField register={(name) => register(name)} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="organization" label="Organización" error={errors.organization?.message}>
          <input id="organization" className={fieldInputClass} {...register("organization")} />
        </FormField>
        <FormField id="contactName" label="Responsable" error={errors.contactName?.message}>
          <input id="contactName" className={fieldInputClass} {...register("contactName")} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="email" label="Correo" error={errors.email?.message}>
          <input id="email" type="email" className={fieldInputClass} {...register("email")} />
        </FormField>
        <FormField id="phone" label="Teléfono" error={errors.phone?.message}>
          <input id="phone" type="tel" className={fieldInputClass} {...register("phone")} />
        </FormField>
      </div>
      <FormField id="collaborationType" label="Tipo de colaboración" error={errors.collaborationType?.message} hint="Convenio, mentoría, desafío, entre otros.">
        <input id="collaborationType" className={fieldInputClass} {...register("collaborationType")} />
      </FormField>
      <FormField id="proposal" label="Propuesta" error={errors.proposal?.message}>
        <textarea id="proposal" rows={4} className={fieldInputClass} {...register("proposal")} />
      </FormField>
      <ConsentField id="consent" error={errors.consent?.message} register={register("consent")} />
      <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
        Proponer una alianza
      </Button>
    </form>
  );
}
