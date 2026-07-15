"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ADMISSION_CTA, NAV_GROUPS } from "@/data/nav";
import { Button } from "@/components/ui/button";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="menu-movil"
      ref={panelRef}
      className="lg:hidden border-t border-border bg-white px-5 pb-6 pt-2"
    >
      <nav aria-label="Principal, móvil" className="flex flex-col">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="border-b border-border py-2">
            <Link
              href={group.href ?? "#"}
              onClick={onClose}
              className="block py-2 text-base font-medium text-text"
            >
              {group.label}
            </Link>
            {group.children && (
              <div className="ml-3 flex flex-col">
                {group.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="py-1.5 text-sm text-text-secondary"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/contacto" onClick={onClose} className="py-3 text-base font-medium text-text">
          Contacto
        </Link>
      </nav>
      <Button href={ADMISSION_CTA.href} className="mt-4 w-full" onClick={onClose}>
        {ADMISSION_CTA.label}
      </Button>
    </div>
  );
}
