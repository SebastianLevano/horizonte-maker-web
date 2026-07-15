"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ADMISSION_CTA, NAV_GROUPS } from "@/data/nav";
import { SITE } from "@/data/site";
import { IMAGES } from "@/data/images";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-12">
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
            const active = group.href && pathname.startsWith(group.href);
            return (
              <div key={group.label} className="group relative">
                <Link
                  href={group.href ?? "#"}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface ${
                    active ? "text-primary" : "text-text"
                  }`}
                >
                  {group.label}
                </Link>
                {group.children && (
                  <div className="invisible absolute left-0 top-full min-w-[220px] rounded-md border border-border bg-white p-2 opacity-0 shadow-none transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-sm px-3 py-2 text-sm text-text hover:bg-surface"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={ADMISSION_CTA.href} className="hidden sm:inline-flex">
            {ADMISSION_CTA.label}
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
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

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
