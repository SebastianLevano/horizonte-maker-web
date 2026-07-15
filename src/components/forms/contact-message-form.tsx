"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { submitContactMessage } from "@/lib/actions";
import { ContactMessageValues, contactMessageSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ConsentField, FormField, HoneypotField, fieldInputClass } from "./form-field";

export function ContactMessageForm() {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactMessageValues>({ resolver: zodResolver(contactMessageSchema) });

  async function onSubmit(values: ContactMessageValues) {
    const result = await submitContactMessage(values, pathname);
    if (result.ok) reset();
  }

  if (isSubmitSuccessful) {
    return <Alert tone="success">Recibimos tu mensaje. Te responderemos a la brevedad.</Alert>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <HoneypotField register={(name) => register(name)} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="c-name" label="Nombre" error={errors.name?.message}>
          <input id="c-name" className={fieldInputClass} {...register("name")} />
        </FormField>
        <FormField id="c-email" label="Correo" error={errors.email?.message}>
          <input id="c-email" type="email" className={fieldInputClass} {...register("email")} />
        </FormField>
      </div>
      <FormField id="c-phone" label="Teléfono" error={errors.phone?.message}>
        <input id="c-phone" type="tel" className={fieldInputClass} {...register("phone")} />
      </FormField>
      <FormField id="c-message" label="Mensaje" error={errors.message?.message}>
        <textarea id="c-message" rows={4} className={fieldInputClass} {...register("message")} />
      </FormField>
      <ConsentField id="c-consent" error={errors.consent?.message} register={register("consent")} />
      <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
        Enviar mensaje
      </Button>
    </form>
  );
}
