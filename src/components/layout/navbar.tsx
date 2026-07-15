"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_GROUPS } from "@/data/nav";
import { SITE } from "@/data/site";
import { IMAGES } from "@/data/images";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Franja de acento: la única nota de color permanente del navbar —
          deliberadamente delgada para no competir con el blanco dominante
          de la marca (brief §11), pero suficiente para que deje de sentirse
          monocromo. */}
      <div className="h-[3px] w-full bg-gradient-to-r from-primary via-secondary to-accent" aria-hidden="true" />
      <div
        className={`border-b bg-white/90 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "border-border shadow-[var(--shadow-float)]" : "border-primary/10"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src={IMAGES.logo}
              alt={SITE.name}
              width={276}
              height={100}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
            {NAV_GROUPS.map((group) => {
              const active =
                (group.href && pathname.startsWith(group.href)) ||
                group.children?.some((c) => pathname.startsWith(c.href.split("#")[0]));
              const isOpen = openGroup === group.label;
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => group.children && setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup((current) => (current === group.label ? null : current))}
                >
                  <Link
                    href={group.href ?? "#"}
                    className={`relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface ${
                      active ? "text-primary" : "text-text"
                    }`}
                  >
                    {group.label}
                    {group.children && (
                      <svg
                        className={`h-3.5 w-3.5 text-text-secondary transition-transform duration-200 ${isOpen ? "-rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-px h-0.5 origin-left rounded-full bg-secondary transition-transform duration-200 ${
                        active || isOpen ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                  {group.children && (
                    <div
                      className={`absolute left-0 top-full min-w-[220px] pt-1.5 transition-all duration-150 ${
                        isOpen ? "visible opacity-100" : "invisible opacity-0"
                      }`}
                    >
                      <div
                        className={`translate-y-1 rounded-lg border border-border bg-white p-2 shadow-[var(--shadow-float)] transition-transform duration-150 ${
                          isOpen ? "translate-y-0" : ""
                        }`}
                      >
                        {group.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenGroup(null)}
                            className="block rounded-sm px-3 py-2 text-sm text-text hover:bg-surface hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-white transition-colors hover:border-primary/30 hover:bg-surface"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className="h-6 w-6 text-text"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
