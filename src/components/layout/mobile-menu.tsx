"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { NAV_GROUPS } from "@/data/nav";

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
              className="flex items-center gap-1.5 py-2 text-base font-medium text-text"
            >
              {group.label}
              {group.children && (
                <svg className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
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
      </nav>
    </div>
  );
}
