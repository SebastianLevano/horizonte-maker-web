"use client";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "horizonte-maker-cookie-consent";

export function CookiePreferences() {
  return (
    <Button
      variant="secondary"
      onClick={() => {
        window.localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
      }}
    >
      Configurar cookies
    </Button>
  );
}
