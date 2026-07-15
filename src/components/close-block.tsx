import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

/**
 * Bloque de conversión al final de cada página. Materializa la regla
 * "ninguna página es un callejón sin salida" (docs/pages.md).
 */
export function CloseBlock({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <Section>
      <div className="rounded-md bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-white/85">{description}</p>
        )}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href={primaryCta.href} variant="inverse">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="inverse-outline">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
