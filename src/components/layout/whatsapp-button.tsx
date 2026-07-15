// Número de WhatsApp oficial: pendiente de confirmación (docs/backlog.md #7).
// Placeholder técnico para que el componente sea funcional en desarrollo;
// reemplazar por el número real antes de publicar.
const WHATSAPP_NUMBER = "51900000000";
const WHATSAPP_MESSAGE = "Hola, quisiera obtener información sobre Horizonte Maker.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_16px_rgba(27,67,50,0.35)] transition-all duration-200 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-[var(--shadow-float-lg)] active:translate-y-0 sm:bottom-6 sm:right-6"
    >
      {/* Anillo de pulso: señala que el canal está disponible ahora mismo. */}
      <span
        aria-hidden="true"
        className="pulse-ring absolute inset-0 rounded-full bg-primary"
      />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.29-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.92C21.95 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.75-2.12 1.02-2.41c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.08.13.08.7-.16 1.38z" />
      </svg>
    </a>
  );
}
