import { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  children,
  surface = false,
  tint,
  className = "",
  containerClassName = "",
  noBorder = false,
  id,
}: {
  children: ReactNode;
  surface?: boolean;
  /** Fondo con tinte de acento (uso puntual, no en cada sección). */
  tint?: "primary" | "accent";
  className?: string;
  containerClassName?: string;
  /** Para secciones que ya llevan su propio borde (p. ej. CloseBlock). */
  noBorder?: boolean;
  id?: string;
}) {
  const bg = tint === "primary" ? "bg-primary/[0.04]" : tint === "accent" ? "bg-accent/10" : surface ? "bg-surface" : "";

  return (
    <section
      id={id}
      className={`py-10 sm:py-14 lg:py-18 ${bg} ${noBorder ? "" : "border-t border-border"} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-6 sm:mb-10`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[28px] sm:text-4xl font-semibold text-text">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-text-secondary text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
