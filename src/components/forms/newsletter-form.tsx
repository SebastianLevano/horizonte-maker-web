"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { submitNewsletter } from "@/lib/actions";
import { NewsletterValues, newsletterSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ConsentField, FormField, HoneypotField, fieldInputClass } from "./form-field";

export function NewsletterForm() {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterValues) {
    const result = await submitNewsletter(values, pathname);
    if (result.ok) reset();
  }

  if (isSubmitSuccessful) {
    return <Alert tone="success">Listo, te avisaremos de próximos eventos y noticias.</Alert>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <HoneypotField register={(name) => register(name)} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="n-name" label="Nombre" error={errors.name?.message}>
          <input id="n-name" className={fieldInputClass} {...register("name")} />
        </FormField>
        <FormField id="n-email" label="Correo" error={errors.email?.message}>
          <input id="n-email" type="email" className={fieldInputClass} {...register("email")} />
        </FormField>
      </div>
      <FormField id="interests" label="Intereses" required={false} error={errors.interests?.message}>
        <input id="interests" className={fieldInputClass} placeholder="Ferias, admisión, proyectos…" {...register("interests")} />
      </FormField>
      <ConsentField id="n-consent" error={errors.consent?.message} register={register("consent")} />
      <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
        Suscribirme
      </Button>
    </form>
  );
}
