import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "text" | "inverse" | "inverse-outline";

// Variantes explícitas en vez de overrides vía className: dos utilidades de
// Tailwind con la misma especificidad (p. ej. bg-white sobreescrito por
// className vs. bg-primary del variant) compiten por orden de generación,
// no por orden de aparición en el string, y pueden cancelarse. Por la misma
// razón, el tamaño (padding/alto) vive en SIZE y no en cada variant: así
// "text" no necesita anular px-6 con px-0 (mismo riesgo de colisión).
const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-none hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] active:translate-y-0 disabled:bg-border-strong disabled:text-white/70 disabled:hover:translate-y-0 disabled:hover:shadow-none",
  secondary:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0",
  text: "bg-transparent text-primary underline-offset-4 hover:underline",
  // Botón primario sobre fondo oscuro (p. ej. CloseBlock en bg-primary).
  inverse:
    "bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] active:translate-y-0",
  // Botón secundario sobre fondo oscuro.
  "inverse-outline":
    "bg-transparent text-white border border-white hover:bg-white hover:text-primary hover:-translate-y-0.5 active:translate-y-0",
};

const SIZE = "px-6 min-h-11";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md text-[15px] font-medium font-body transition-all duration-150 disabled:cursor-not-allowed active:scale-[0.98]";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  loading?: boolean;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  href,
  loading = false,
  className = "",
  ...props
}: LinkButtonProps | NativeButtonProps) {
  const size = variant === "text" ? "" : SIZE;
  const classes = `${BASE} ${size} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} disabled={loading || buttonProps.disabled} {...buttonProps}>
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
        />
      )}
      {children}
    </button>
  );
}
