import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/data/nav";
import { SITE } from "@/data/site";
import { IMAGES } from "@/data/images";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Image
              src={IMAGES.logo}
              alt={SITE.name}
              width={276}
              height={100}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-text-secondary">{SITE.tagline}</p>
            <p className="mt-4 text-sm text-text-secondary">
              {SITE.location.district}
              <br />
              {SITE.location.reference}
            </p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">
              Navegación
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-secondary">
              Contacto
            </p>
            <p className="text-sm text-text-secondary">
              {SITE.contact.phone}
              <br />
              {SITE.contact.email}
              <br />
              {SITE.contact.hours}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-primary"
              >
                Instagram
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-primary"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} · RUC {SITE.ruc}
          </p>
          <Link href="/politicas" className="text-text-secondary hover:text-primary">
            Políticas de privacidad y cookies
          </Link>
        </div>
      </Container>
    </footer>
  );
}
