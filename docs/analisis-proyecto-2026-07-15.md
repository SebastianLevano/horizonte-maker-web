# Análisis exhaustivo del proyecto — I.E.P. Colegio Horizonte Maker (sitio web)

## 1. Fecha y hora del análisis

15 de julio de 2026. Análisis realizado sobre el estado del repositorio en `/Users/sebasprincipal/LandingHorizontMaker` (sin control de versiones Git inicializado — `git status` confirma "not a git repository").

---

## 2. Objetivo del proyecto

Sitio institucional (marketing + captación de leads) para el **I.E.P. Colegio Horizonte Maker**, colegio en Lurín, Lima, Perú. Cubre Inicial, Primaria y Secundaria, con un eje pedagógico diferenciador llamado "Distrito Maker" (cuatro rutas de aprendizaje práctico: robótica, diseño/fabricación, gastronomía/emprendimiento, construcción/prototipado).

El sitio tiene una función doble:
- **Informativa/institucional**: comunicar misión, modelo educativo, niveles, vida escolar.
- **Transaccional**: captar leads de admisión mediante 5 formularios (solicitud de información, agenda de visita, postulación docente, propuesta de alianza, contacto/newsletter).

El desarrollo parte de un `brief.md` extenso (20 KB) que impone restricciones fuertes de honestidad de contenido: **prohíbe fotografía de stock, datos inventados y jerga sin sustento**, prefiriendo mostrar "pendiente de confirmación" antes que rellenar con contenido falso.

---

## 3. Estado actual del proyecto

**Fase 1 (implementación técnica) prácticamente completa. Fase de contenido de negocio no iniciada por parte del colegio.**

El proyecto está en un punto inusual: técnicamente es un sitio Next.js completo, con las 15 rutas construidas, formularios funcionales (validación + persistencia en log), SEO técnico, build y lint limpios (`tsc --noEmit` y `eslint .` no arrojan errores). Pero **no puede publicarse** porque casi ningún dato de negocio real existe todavía: no hay logo, dirección, teléfono, WhatsApp real, fotografías, costos de admisión, ni credenciales de ningún servicio externo (correo, CMS, antispam, dominio).

Es decir: el "software" está listo antes que el "contenido/negocio", lo inverso de lo habitual. El propio `docs/backlog.md` lo documenta con extremo detalle (40 ítems clasificados en 6 prioridades) y es la fuente autoritativa de lo pendiente de negocio — este análisis no la duplica, la referencia.

---

## 4. Fases completadas

1. **Documentación de arquitectura de información** (`docs/`, 8 archivos): `README.md`, `sitemap.md`, `pages.md`, `components.md`, `design-system.md`, `content-guide.md`, `seo.md`, `backlog.md`. Derivados de `brief.md`.

2. **Dirección de diseño y UX**:
   - Paleta verde `#1B4332` (primary) con escala de soporte (`secondary #40916c`, `accent #74c69d`), fondo blanco dominante (decisión explícita del brief: sin modo oscuro).
   - Tipografía: Bricolage Grotesque (display) + IBM Plex Sans (body) + IBM Plex Mono (etiquetas/mono, uso decorativo en mayúsculas trackeadas).
   - Tokens centralizados en `src/app/globals.css` vía `@theme inline` de Tailwind v4 — un solo punto de verdad para color/tipografía/radios.
   - Foco visible de doble contorno (blanco + verde) definido globalmente, funciona sobre fondo claro y oscuro.
   - `prefers-reduced-motion` respetado tanto en transiciones genéricas como en la utilidad `.reveal` del scroll-reveal.

3. **Implementación técnica completa**:
   - **Stack real**: Next.js 16.2.10 (App Router, Turbopack), React 19.2.4, TypeScript 5, Tailwind v4, React Hook Form 7 + Zod 4 + `@hookform/resolvers`.
   - **15 rutas** construidas: `/`, `/nosotros`, `/modelo-educativo`, `/niveles` (+ `/inicial`, `/primaria`, `/secundaria`), `/distrito-maker`, `/vida-escolar`, `/admision`, `/familias`, `/trabaja-con-nosotros`, `/alianzas`, `/contacto`, `/politicas`. Todas exportan `metadata` (propio o vía `buildMetadata()` de `src/lib/seo.ts`).
   - **5 formularios** (`src/components/forms/`) con validación Zod compartida (`src/lib/schemas.ts`) y Server Actions (`src/lib/actions.ts`, directiva `"use server"`), estado de envío/éxito manejado con `react-hook-form` (`isSubmitting`, `isSubmitSuccessful`).
   - **Antispam funcional sin credenciales**: honeypot (`empresa_web`, campo oculto con `tabIndex={-1}` y `aria-hidden`) filtrado tanto en el schema (`z.string().max(0)`) como en la Server Action.
   - **SEO técnico**: `sitemap.ts` (genera todas las rutas de `PAGE_META`), `robots.ts`, JSON-LD de `FAQPage` y `BreadcrumbList` (`src/components/json-ld.tsx`) — deliberadamente **sin** `School`/`LocalBusiness` hasta tener datos reales, decisión documentada inline como "un marcado con datos provisionales es peor que no tener marcado".
   - **Sistema de "honestidad de contenido"**: tres componentes reutilizables (`ImagePlaceholder`, `EvidenceEmptyState`, `PendingNotice`) que hacen visible lo no confirmado en vez de inventarlo. Se usan de forma consistente en Hero, tarjetas de evidencia, bloque de contacto y footer.
   - Build (`tsc --noEmit`) y lint (`eslint .`) verificados limpios en este análisis, sin errores ni warnings.
   - Servidor local verificado en `http://localhost:4500` (puerto 3000 ocupado por Docker Desktop en esta máquina, según memoria del proyecto).

4. **Bug real detectado y corregido durante QA visual** (documentado en memoria del proyecto): `Button variant="primary"` sobreescrito con `className="bg-white text-primary"` producía texto blanco sobre fondo blanco por colisión de especificidad Tailwind. Se resolvió con variantes explícitas `inverse` / `inverse-outline` en `src/components/ui/button.tsx` en vez de overrides ad-hoc — buena práctica ya aplicada, ver comentario inline en el propio archivo explicando el porqué.

---

## 5. Fases pendientes

### Pendientes de negocio (bloquean producción — ver `docs/backlog.md`, autoritativo)
No se duplica el detalle de los 40 ítems del backlog, pero los de mayor impacto:
- Logo definitivo, responsable interno de aprobación, dominio oficial.
- Dirección exacta, teléfonos/WhatsApp/correo reales, horarios.
- Textos legales (privacidad, cookies, tratamiento de datos) — bloquean los 5 formularios.
- Fotografías y videos propios autorizados (el brief prohíbe stock).
- Datos de Admisión: costos, vacantes, fechas, requisitos — bloquean toda la Fase 2.

### Pendientes técnicos (implementación, no negocio)
- **Integración de CMS** (Sanity recomendado en `docs/README.md`, no integrado). El contenido vive en `src/data/*.ts` tipado en TypeScript — funcional pero requiere despliegue de código para cualquier cambio de contenido.
- **Envío real de formularios**: `src/lib/actions.ts` solo hace `console.log`; falta integrar un proveedor transaccional (Resend u otro) para notificar al colegio y confirmar al usuario.
- **Antispam de producción**: honeypot funciona pero es la capa mínima; Turnstile sigue pendiente de credenciales.
- **Analítica**: `CookieBanner` guarda el consentimiento en `localStorage` pero **no existe ningún código de analítica en el proyecto** (no hay `gtag`, GA4, ni Vercel Analytics instalados) — el gate de consentimiento está listo pero no tiene nada que gatear todavía.
- **Páginas de error personalizadas**: no existen `not-found.tsx` ni `error.tsx` en `src/app/` — un 404 o error de runtime cae en la página por defecto de Next, sin la identidad visual ni navegación del sitio.
- **Suite de pruebas**: no existe absolutamente ninguna (ver sección 8).
- **Optimización de imágenes reales**: cuando lleguen las fotografías autorizadas, no hay uso de `next/image` en ningún componente todavía (razonable ahora, porque solo hay placeholders SVG, pero es trabajo pendiente explícito para cuando llegue el contenido real).

---

## 6. Bugs encontrados

1. **Inconsistencia de datos entre componentes de contacto (riesgo funcional real).** `WhatsAppButton` (`src/components/layout/whatsapp-button.tsx`) usa un número placeholder `51900000000` que es **funcionalmente activo**: genera un enlace real `wa.me/51900000000` visible y clicable en todas las páginas. Mientras tanto, `ContactBlock` y `Footer` muestran explícitamente "pendiente de confirmación" para el mismo dato. Si el sitio se publicara sin reemplazar la constante, el botón flotante (el CTA de contacto más visible del sitio) enviaría a los usuarios a un número inexistente o incorrecto, mientras el resto de la UI dice correctamente que el dato no está confirmado. Está comentado inline como pendiente, pero es un punto de falla silencioso: no hay ningún chequeo (build-time o runtime) que impida desplegar con el placeholder puesto.
   - **Recomendación:** un chequeo simple en build (o al menos un lint/test) que falle si `WHATSAPP_NUMBER === "51900000000"` en un build de producción, para que el olvido de reemplazarlo no pase silenciosamente a producción.

2. **Ausencia de páginas de error/404 propias.** No hay `not-found.tsx` ni `error.tsx`. Cualquier URL inválida o error de render cae en la página por defecto de Next.js, rompiendo la identidad visual y la navegación (sin Navbar/Footer, sin CTA de vuelta al sitio).

3. **Menú móvil sin gestión de foco (accesibilidad, no bloqueante).** `MobileMenu` (`src/components/layout/mobile-menu.tsx`) cierra con `Escape` y bloquea el scroll del body, pero al abrirse no mueve el foco al panel ni lo atrapa (no hay focus trap): un usuario de teclado que activa el botón de menú permanece con el foco en el botón hamburguesa en vez de entrar a la navegación, y con Tab puede salir del menú hacia el contenido de fondo mientras el panel sigue "abierto" visualmente.

4. **Menú de escritorio dependiente solo de hover/focus-within.** Los submenús de Navbar (`src/components/layout/navbar.tsx`) se muestran vía `group-hover` y `group-focus-within`, sin toggle por click ni soporte explícito para touch en breakpoints "desktop" que en la práctica pueden ser tablets táctiles — un usuario táctil en ese rango de viewport podría no poder abrir los submenús con hover inexistente.

No se encontraron bugs de lógica en Zod/Server Actions, ni en el manejo de estado de los formularios, ni errores de TypeScript/ESLint.

---

## 7. Secciones por mejorar (deuda técnica)

- **Contenido en TypeScript en vez de CMS** (`src/data/*.ts`): decisión correcta para el estado actual del proyecto (documentada como tal), pero es deuda explícita: cualquier cambio de copy institucional requiere un deploy de código. Aceptable mientras no haya CMS contratado; revisar cuando exista.
- **`console.log` como "backend" de formularios** (`src/lib/actions.ts`): funcional para desarrollo/QA, pero es un placeholder de infraestructura real (correo transaccional + registro de leads) que debe reemplazarse antes de cualquier campaña de captación real — de lo contrario, cada lead se pierde.
- **Falta de un mecanismo de "flags de producción"**: no hay ninguna verificación (ni de build ni de tests) que impida que constantes marcadas explícitamente como placeholder (`WHATSAPP_NUMBER`, `SITE.url`, `addressConfirmed: false`, etc.) lleguen a producción sin reemplazar. Todo el sistema de honestidad de contenido depende de disciplina humana, no de un chequeo automático.
- **`SITE` en `src/data/site.ts`** mezcla datos confirmados y flags booleanos de confirmación (`addressConfirmed`, `whatsappConfirmed`, etc.) pero **ningún componente lee esos flags** para decidir qué renderizar — el patrón "pendiente de confirmación" se repite como string literal en `ContactBlock`, `Footer` y otros lugares en vez de derivarse de esos flags. Esto es la abstracción más cercana a "casi construida pero no conectada": o se conecta (un solo punto de verdad) o se elimina el flag no usado.
- **Doble fuente de verdad para franjas geográficas/contacto**: la referencia de ubicación vive en `SITE.location`, pero el mapa es un placeholder estático (`MapPlaceholder`) sin relación con esos datos — cuando llegue la dirección real, hay que verificar que ambos se actualicen juntos.

En términos de arquitectura general, el código está notablemente limpio para el volumen (≈2600 líneas en el archivo más grande del árbol, sin archivo que exceda 130 líneas): no hay señales de sobre-ingeniería, no hay abstracciones prematuras, los componentes de UI (`Button`, `Alert`, `FormField`) son pequeños y reutilizados consistentemente. No se identificó deuda de "código difícil de mantener" más allá de los puntos anteriores.

---

## 8. Testeos por hacer (cobertura faltante)

**No existe ningún archivo de test en el proyecto** (`*.test.*` / `*.spec.*`: cero resultados) y `package.json` no tiene ni un script `test` ni ninguna dependencia de testing (no hay Vitest, Jest ni Playwright instalados). Cobertura actual: **0%**.

Lo que más se beneficiaría de un test, en orden de riesgo:
1. **`src/lib/schemas.ts` y `src/lib/actions.ts`**: es la lógica de negocio más crítica del sitio (captación de leads). Un test unitario por schema (casos válidos, inválidos, honeypot relleno → rechazo silencioso) sería barato y de alto valor — es lógica pura, sin necesidad de levantar el servidor.
2. **Componentes con lógica de estado no trivial**: `CookieBanner` (persistencia en `localStorage`, primera visita vs. visitas repetidas), `MobileMenu`/`Navbar` (apertura/cierre, `Escape`), `ScrollReveal` (uso de `IntersectionObserver`).
3. **`src/lib/seo.ts`**: `buildMetadata()` y consistencia entre `PAGE_META` y las rutas reales de `src/app` — un test simple podría asegurar que cada ruta en el árbol de `app/` tiene una entrada en `PAGE_META` (y viceversa), evitando páginas sin metadata o entradas huérfanas.
4. **Pruebas E2E de los 5 flujos de formulario** (Playwright, ya disponible como MCP en este entorno): llenar, enviar, ver estado de éxito, validar honeypot.
5. **Auditoría de accesibilidad automatizada** (axe-core o Lighthouse CI) dado que el proyecto declara explícitamente cumplimiento WCAG en la paleta — no hay forma automatizada de verificar que se mantiene con cambios futuros.

No hay tests de ningún tipo, ni siquiera smoke tests de build en CI (no se detectó configuración de CI/CD en el repo).

---

## 9. Propuestas de mejora

1. **Inicializar Git ahora**, antes de que el proyecto crezca más — actualmente no hay control de versiones, lo que significa cero historial, cero forma de revertir cambios y cero posibilidad de abrir PRs o usar `ultrareview`. Es la mejora de menor esfuerzo con mayor beneficio inmediato.
2. **Agregar un test runner mínimo** (Vitest es la opción más liviana para un proyecto Next.js/TS sin infraestructura previa) y cubrir al menos los schemas de Zod y las Server Actions — es la lógica con más riesgo de negocio y la más barata de testear al ser funciones puras.
3. **Cerrar el círculo del `CookieBanner`**: cuando se integre analítica, hacer que la decisión de consentimiento controle explícitamente la carga del script (hoy el consentimiento se guarda pero no gatea nada porque no hay analítica instalada).
4. **Agregar `not-found.tsx` y `error.tsx`** reutilizando Navbar/Footer — esfuerzo mínimo, cierre de una laguna de experiencia visible para cualquier visitante que llegue a una URL rota.
5. **Un chequeo de "placeholders vivos" antes de publicar**: un script simple (o un test) que falle si detecta las constantes conocidas de placeholder (`WHATSAPP_NUMBER`, dominios `.pe` de ejemplo, `addressConfirmed: false`, etc.) en un build marcado como producción. Convierte una revisión manual en un gate automático.
6. **Focus trap en `MobileMenu`**: mover el foco al primer enlace al abrir y devolverlo al botón hamburguesa al cerrar — mejora de accesibilidad de bajo costo dado que el componente ya maneja `Escape` y bloqueo de scroll.
7. **Conectar los flags de `SITE.contact`/`SITE.location`** a los componentes que hoy repiten el string "pendiente de confirmación", para tener un solo punto de verdad cuando lleguen los datos reales — reduce el riesgo de actualizar un lugar y olvidar otro.

---

## 10. Sugerencia de siguientes pasos (priorización)

**El cuello de botella del proyecto ya no es técnico, es de negocio.** El propio `docs/backlog.md` ya define una ruta crítica autoritativa (responsable interno → logo → fotografías/video → datos de contacto → textos legales → datos de admisión) — seguirla es la prioridad de negocio.

Del lado técnico, mientras se espera el contenido de negocio, el orden de mayor impacto por menor esfuerzo es:
1. **Git init** — base para todo lo demás (control de cambios, PRs, `ultrareview`).
2. **`not-found.tsx` / `error.tsx`** — cierre de laguna visible, esfuerzo de minutos.
3. **Tests de `schemas.ts`/`actions.ts`** — la lógica de mayor riesgo de negocio (leads perdidos o mal validados) sigue sin ninguna cobertura.
4. **Resolver la inconsistencia del número de WhatsApp** — o bien ocultar el botón hasta tener el número real, o agregar el chequeo de placeholder de la propuesta 5, para que no sea posible publicar por accidente con el número falso.
5. Dejar preparada (sin ejecutar) la integración de correo transaccional (Resend) y CMS (Sanity), para que en cuanto lleguen las credenciales el trabajo sea de configuración y no de desarrollo desde cero.

Ninguno de estos pasos requiere esperar al colegio — todos son mejoras internas del propio código que reducen el riesgo de un despliegue accidentalmente incompleto.
