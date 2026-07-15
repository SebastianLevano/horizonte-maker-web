// Familia de íconos lineal única (docs/design-system.md §6): trazo
// constante, sin relleno, siempre acompañados de texto.

type IconProps = { className?: string };

const base = "h-5 w-5";

export function CpuIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="1.5" strokeLinejoin="round" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" strokeLinejoin="round" />
      <path strokeLinecap="round" d="M9 3v2.5M15 3v2.5M9 18.5V21M15 18.5V21M3 9h2.5M3 15h2.5M18.5 9H21M18.5 15H21" />
    </svg>
  );
}

export function PencilRulerIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7l5 5" />
    </svg>
  );
}

export function ChefHatIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12.5a4 4 0 01.7-7.9 4.5 4.5 0 018.6 0A4 4 0 0117 12.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12.5h10V19a1 1 0 01-1 1H8a1 1 0 01-1-1v-6.5z" />
      <path strokeLinecap="round" d="M9.5 15v2M14.5 15v2" />
    </svg>
  );
}

export function HammerIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      {/* cabeza rectangular del martillo, distinta del trazo único del lápiz */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3.5h5.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5H13z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3.5v4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 8.5L4.7 15.3a1.7 1.7 0 002.4 2.4L14 10.8" />
    </svg>
  );
}

export function SparkIcon({ className = base }: IconProps) {
  // Estrella de 4 puntas sólida — antes era una ráfaga de 8 líneas que a
  // tamaño pequeño se leía como spinner de carga, no como destello.
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
    </svg>
  );
}

export const ROUTE_ICONS = {
  cpu: CpuIcon,
  "pencil-ruler": PencilRulerIcon,
  "chef-hat": ChefHatIcon,
  hammer: HammerIcon,
} as const;

// --- Set genérico para tarjetas de contenido (FeatureCard) --------------
// Un ícono por concepto recurrente, pensado para reusarse en varias
// páginas en vez de crear uno nuevo por cada tarjeta.

export function BookIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 016.5 3H12v18H6.5A2.5 2.5 0 014 18.5v-13z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 5.5A2.5 2.5 0 0017.5 3H12v18h5.5a2.5 2.5 0 002.5-2.5v-13z" />
    </svg>
  );
}

export function TargetIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UsersIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 20a5.5 5.5 0 0111 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8.5a3 3 0 010 5.8M20.5 20a5 5 0 00-4.5-5.4" />
    </svg>
  );
}

export function ShieldIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function HeartIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7.5-4.6-9.7-9.1C.8 7.6 2.3 4 5.8 3.4c2-.3 3.8.6 4.8 2.2a5.1 5.1 0 014.8-2.2c3.5.6 5 4.2 3.5 7.5C19.5 15.4 12 20 12 20z" />
    </svg>
  );
}

export function ChatIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9a1.5 1.5 0 01-1.5 1.5H10l-4.5 4v-4H5.5A1.5 1.5 0 014 14.5v-9z" />
    </svg>
  );
}

export function CalendarIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" strokeLinejoin="round" />
      <path strokeLinecap="round" d="M8 3v4M16 3v4M3.5 9.5h17" />
    </svg>
  );
}

export function BriefcaseIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5" />
      <path strokeLinecap="round" d="M3 12.5h18" />
    </svg>
  );
}

export function HandshakeIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 11l4-3 4.5 3.5a1.6 1.6 0 01-2 2.5L7 12.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 11l-4-3-5 4a1.6 1.6 0 002 2.5l1-.8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14l2 1.8a1.6 1.6 0 002.2-2.3" />
    </svg>
  );
}

export function CompassIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.8 9.2l-1.6 4.4-4.4 1.6 1.6-4.4z" />
    </svg>
  );
}

export function FlaskIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3h5M10 3v6.5L4.8 18a1.8 1.8 0 001.6 2.7h11.2a1.8 1.8 0 001.6-2.7L14 9.5V3" />
      <path strokeLinecap="round" d="M7.5 15h9" />
    </svg>
  );
}

export function MegaphoneIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5v3a1.5 1.5 0 001.5 1.5H6l1 4.5h2l-.8-4.5 8.8 3V4l-8.8 3H4.5A1.5 1.5 0 003 8.5v2z" />
    </svg>
  );
}

export function MapPinIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 6-7.5 10.5-7.5 10.5S4.5 16.5 4.5 10.5a7.5 7.5 0 1115 0z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function LaptopIcon({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="10.5" rx="1.2" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 19.5h19L20 15.5H4l-1.5 4z" />
    </svg>
  );
}

export const CONTENT_ICONS = {
  book: BookIcon,
  target: TargetIcon,
  pencilRuler: PencilRulerIcon,
  users: UsersIcon,
  shield: ShieldIcon,
  heart: HeartIcon,
  chat: ChatIcon,
  calendar: CalendarIcon,
  briefcase: BriefcaseIcon,
  handshake: HandshakeIcon,
  compass: CompassIcon,
  flask: FlaskIcon,
  megaphone: MegaphoneIcon,
  mapPin: MapPinIcon,
  laptop: LaptopIcon,
  spark: SparkIcon,
  hammer: HammerIcon,
  chefHat: ChefHatIcon,
} as const;

export type ContentIconName = keyof typeof CONTENT_ICONS;
