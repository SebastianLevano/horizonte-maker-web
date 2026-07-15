import { ReactNode } from "react";

const inputClass =
  "block w-full rounded-sm border border-border-strong bg-white px-3 py-2.5 text-[15px] text-text placeholder:text-text-secondary/70 focus-visible:outline-none";

export function FormField({
  id,
  label,
  error,
  required = true,
  children,
  hint,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-text">
        {label}
        {!required && <span className="ml-1 font-normal text-text-secondary">(opcional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-text-secondary">{hint}</p>}
      {error && (
        <p className="mt-1.5 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const fieldInputClass = inputClass;

export function HoneypotField({ register }: { register: (name: "empresa_web") => object }) {
  return (
    <div className="hidden" aria-hidden="true">
      <label htmlFor="empresa_web">No completar este campo</label>
      <input id="empresa_web" type="text" tabIndex={-1} autoComplete="off" {...register("empresa_web")} />
    </div>
  );
}

export function ConsentField({
  id,
  error,
  register,
}: {
  id: string;
  error?: string;
  register: object;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-2.5 text-sm text-text">
        <input
          id={id}
          type="checkbox"
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-sm border-border-strong text-primary focus-visible:outline-none"
          {...register}
        />
        <span>
          Autorizo el tratamiento de mis datos personales según la{" "}
          <a href="/politicas" className="text-primary underline underline-offset-2">
            política de privacidad
          </a>
          .
        </span>
      </label>
      {error && (
        <p className="mt-1.5 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
