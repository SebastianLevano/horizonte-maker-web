import { ReactNode } from "react";
import { ClockIcon } from "@/components/icons";

/**
 * Señala contenido que el brief marca como no confirmado (docs/backlog.md).
 * No se rellena con datos inventados: se declara el vacío.
 */
export function PendingNotice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-dashed border-border-strong bg-surface px-5 py-6 text-center">
      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary">
        <ClockIcon />
      </span>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">
        Pendiente de definición
      </p>
      <p className="mx-auto mt-1.5 max-w-md text-sm text-text-secondary">{children}</p>
    </div>
  );
}
