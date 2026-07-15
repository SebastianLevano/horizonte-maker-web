"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "horizonte-maker-cookie-consent";

type Consent = "accepted" | "rejected";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Lee el consentimiento guardado en el navegador (no existe en el
    // servidor): es sincronización con un sistema externo, no un efecto
    // derivado de estado de React.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  function decide(consent: Consent) {
    window.localStorage.setItem(STORAGE_KEY, consent);
    setVisible(false);
    // La carga de analítica (Vercel Analytics / GA4) debe leer este valor y
    // activarse únicamente cuando consent === "accepted" (docs/seo.md §7).
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white px-5 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] sm:px-8"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-secondary">
          Usamos cookies para mejorar tu experiencia y medir el uso del sitio. Puedes revisar
          nuestra{" "}
          <Link href="/politicas" className="text-primary underline underline-offset-2">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" onClick={() => decide("rejected")} className="text-sm">
            Rechazar
          </Button>
          <Button onClick={() => decide("accepted")} className="text-sm">
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
}
