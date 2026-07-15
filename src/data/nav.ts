// Estructura de menú (reorganizada a pedido del usuario: Nosotros,
// Niveles, Distrito Maker, Comunidad, Admisión, Contacto — todos como
// enlaces de navegación normales, sin botón de acento).

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
      { label: "Identidad", href: "/nosotros" },
      { label: "Infraestructura", href: "/nosotros/infraestructura" },
      { label: "Historia", href: "/nosotros/historia" },
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
    label: "Comunidad",
    href: "/vida-escolar",
    children: [
      { label: "Vida escolar", href: "/vida-escolar" },
      { label: "Alianzas", href: "/alianzas" },
      { label: "Familias", href: "/familias" },
    ],
  },
  {
    label: "Admisión",
    href: "/admision",
    children: [
      { label: "Proceso", href: "/admision" },
      { label: "Fechas y costos", href: "/admision/fechas-y-costos" },
      { label: "Preguntas frecuentes", href: "/admision/preguntas-frecuentes" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

// El pie de página sigue listando todas las páginas del sitio, incluidas
// las que ya no están en el menú principal (Modelo educativo, Trabaja con
// nosotros) — siguen siendo accesibles, solo dejaron de ser navegación
// primaria.
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
