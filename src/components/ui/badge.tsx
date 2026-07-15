import { ReactNode } from "react";

export function Badge({
  children,
  tone = "surface",
}: {
  children: ReactNode;
  tone?: "surface" | "accent";
}) {
  const bg = tone === "accent" ? "bg-accent" : "bg-surface border border-border";
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-primary ${bg}`}
    >
      {children}
    </span>
  );
}
