// Estructura de menú según docs/sitemap.md §2.

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Nosotros",
    href: "/nosotros",
    children: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Modelo educativo", href: "/modelo-educativo" },
    ],
  },
  {
    label: "Niveles",
    href: "/niveles",
    children: [
      { label: "Inicial", href: "/niveles/inicial" },
      { label: "Primaria", href: "/niveles/primaria" },
      { label: "Secundaria", href: "/niveles/secundaria" },
    ],
  },
  {
    label: "Distrito Maker",
    href: "/distrito-maker",
  },
  {
    label: "Vida escolar",
    href: "/vida-escolar",
    children: [
      { label: "Vida escolar y proyectos", href: "/vida-escolar" },
      { label: "Alianzas", href: "/alianzas" },
    ],
  },
  {
    label: "Familias",
    href: "/familias",
    children: [
      { label: "Familias", href: "/familias" },
      { label: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
    ],
  },
];

export const ADMISSION_CTA: NavLink = { label: "Admisión", href: "/admision" };

export const FOOTER_LINKS: NavLink[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Modelo educativo", href: "/modelo-educativo" },
  { label: "Niveles educativos", href: "/niveles" },
  { label: "Distrito Maker", href: "/distrito-maker" },
  { label: "Vida escolar y proyectos", href: "/vida-escolar" },
  { label: "Admisión", href: "/admision" },
  { label: "Familias", href: "/familias" },
  { label: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
  { label: "Alianzas", href: "/alianzas" },
  { label: "Contacto", href: "/contacto" },
  { label: "Políticas", href: "/politicas" },
];
