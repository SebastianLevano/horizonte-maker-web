import { Pillar } from "@/data/model";
import { PendingNotice } from "@/components/ui/pending-notice";

export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <div className="rounded-md border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
      <h3 className="font-display text-lg font-semibold text-text">{pillar.name}</h3>
      <p className="mt-2 text-sm text-text-secondary">{pillar.description}</p>
      <div className="mt-4">
        {pillar.classroomExample ? (
          <p className="text-sm text-text">{pillar.classroomExample}</p>
        ) : (
          <PendingNotice>
            Ejemplo concreto de aula a validar con coordinación académica.
          </PendingNotice>
        )}
      </div>
    </div>
  );
}
