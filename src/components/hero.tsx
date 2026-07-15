import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SiteImageBlock } from "@/components/ui/site-image";
import { SiteImage } from "@/data/images";

type CtaLink = { label: string; href: string };

export function Hero({
  variant = "interior",
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageLabel,
  children,
}: {
  variant?: "portada" | "interior";
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  /** Fotografía real. Si no se pasa, se muestra el placeholder de "pendiente". */
  image?: SiteImage;
  imageLabel?: string;
  children?: ReactNode;
}) {
  const isPortada = variant === "portada";
  const aspect = isPortada ? "aspect-[5/4]" : "aspect-[16/10]";

  return (
    <section className={isPortada ? "border-b border-border" : "border-b border-border bg-surface"}>
      <Container
        className={`grid items-center gap-10 py-14 sm:py-20 ${
          isPortada ? "lg:grid-cols-[1fr_1.15fr] lg:py-24" : "lg:grid-cols-[1.1fr_0.9fr] lg:py-16"
        }`}
      >
        <div className="hero-text-enter">
          {eyebrow && (
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-secondary">
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-semibold text-text ${
              isPortada ? "text-4xl sm:text-6xl lg:text-[72px] lg:leading-[1.05]" : "text-3xl sm:text-5xl"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`mt-5 text-text-secondary text-pretty ${
                isPortada ? "text-lg sm:text-xl max-w-xl" : "text-base sm:text-lg max-w-xl"
              }`}
            >
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
          {children}
        </div>
        <div className="relative hero-image-enter">
          {image ? (
            <SiteImageBlock image={image} aspect={aspect} priority={isPortada} />
          ) : (
            <ImagePlaceholder
              label={imageLabel ?? "Fotografía pendiente de autorización"}
              aspect={aspect}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
