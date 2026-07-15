import Image from "next/image";
import { SiteImage } from "@/data/images";

/**
 * Fotografía real (docs/backlog.md: banco fotográfico resuelto con
 * ilustraciones IA del sitio preliminar del colegio). Reemplaza a
 * `ImagePlaceholder` donde ya existe una imagen asignada.
 */
export function SiteImageBlock({
  image,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 600px, 100vw",
}: {
  image: SiteImage;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden rounded-md border border-border bg-surface ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition: image.focus }}
      />
    </div>
  );
}
