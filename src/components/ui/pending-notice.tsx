import { ReactNode } from "react";

/**
 * Señala contenido que el brief marca como no confirmado (docs/backlog.md).
 * No se rellena con datos inventados: se declara el vacío.
 */
export function PendingNotice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-dashed border-border-strong bg-surface px-4 py-3 text-sm text-text-secondary">
      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">
        Pendiente de definición
      </span>
      <p className="mt-1">{children}</p>
    </div>
  );
}
