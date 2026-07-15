# Backlog — información pendiente

Todo lo que falta definir para completar el proyecto, con su responsable y **qué páginas bloquea**. Ese cruce es lo que hace accionable el reparto de fases de [sitemap.md](sitemap.md).

Consolidado desde las secciones 9, 11, 13 y 15 del brief, más los vacíos detectados al estructurar [pages.md](pages.md).

**Estado general:** ningún ítem entregado por el colegio. La paleta y la tipografía se resolvieron por decisión de proyecto en la fase de diseño (ver ítem 2).

---

## Vista previa de producción — qué es real y qué es contenido de relleno

A pedido explícito, el sitio se llenó por completo con datos de formato real (precios, fechas, requisitos, contacto, textos legales, evidencias fotográficas) para poder verlo como si estuviera en producción, en vez de mostrar avisos de "pendiente" en cada sección. **Nada de esto está confirmado por el colegio.** Antes de publicar, todo lo listado abajo debe reemplazarse por datos reales.

**Regla que sí se mantuvo incluso en este modo:** nunca se inventaron nombres propios de personas reales (testimonios, autoridades) ni convenios de alianza firmados — son las dos prohibiciones explícitas del brief §13 que ninguna instrucción posterior debía relajar. Se resolvió con atribución por rol ("Madre de familia, Primaria") y con "alianzas proyectadas" descritas por tipo de organización, nunca por nombre.

| Dato de vista previa | Dónde vive en el código | Reemplazar por |
|---|---|---|
| Razón social, RUC | `src/data/site.ts` → `SITE.legalName`, `SITE.ruc` | Datos legales reales (ítem 5) |
| Dirección exacta | `src/data/site.ts` → `SITE.location.address` | Dirección confirmada (ítem 6) — el mapa ya geocodifica lo que se ponga ahí |
| WhatsApp, teléfono, correo, horario | `src/data/site.ts` → `SITE.contact` | Datos oficiales (ítem 7) |
| Redes sociales | `src/data/site.ts` → `SITE.social` | Cuentas reales, si existen |
| Historia del proyecto | `src/data/site.ts` → `HISTORY` | Texto entregado por el colegio (ítem 10) |
| Matrícula, pensión, becas, política de reserva | `src/data/site.ts` → `ADMISSION_PRICING`, `ADMISSION_BENEFITS`, `RESERVATION_POLICY` | Montos aprobados por administración |
| Requisitos, fechas de campaña, año de apertura | `src/data/site.ts` → `ADMISSION_REQUIREMENTS`, `ADMISSION_DATES` | Datos confirmados de admisión |
| Ejemplos de aula por pilar pedagógico | `src/data/model.ts` → `classroomExample` | Validación de coordinación académica (ítem 29) |
| Descripción de "Comunidad Maker" | `src/data/levels.ts` (Primaria) | Contenido oficial del nivel |
| Respuestas de FAQ con cifras | `src/data/faq.ts` | Mismas cifras que en `site.ts` |
| Perfil docente, desarrollo profesional, vacantes | `src/app/trabaja-con-nosotros/page.tsx` | Contenido de RR.HH. real |
| Proyectos, noticias, calendario, ferias | `src/app/vida-escolar/page.tsx` | Contenido real del colegio |
| Canales de comunicación, escuela para padres | `src/app/familias/page.tsx` | Programa real, si existe |
| Autoridades (solo roles, sin nombres) | `src/app/nosotros/page.tsx` → `AUTHORITIES` | Nombres, cuando el colegio confirme su publicación (ítem sigue protegido) |
| Tipos de alianza proyectada | `src/app/alianzas/page.tsx` → `PROSPECTIVE_ALLY_TYPES` | Organizaciones reales, solo cuando exista convenio firmado |
| Evidencias (8 proyectos ilustrativos) | `src/data/evidence.ts` | Proyectos reales documentados y autorizados (ítem 9) |
| Testimonios (3, atribuidos por rol) | `src/data/testimonials.ts` | Testimonios reales y autorizados |

---

## Prioridad 0 — bloquea todo el diseño

| # | Ítem | Responsable | Bloquea |
|---|---|---|---|
| 1 | ~~**Logo definitivo**~~ → **Resuelto por decisión de proyecto.** Tomado del sitio Wix preliminar del propio colegio (marciarubidiazmele.wixsite.com/colegio-horizonte-ma): isotipo de engranaje + wordmark "Colegio Horizonte Maker", en `public/images/logo-horizonte-maker.png`. Favicon derivado del isotipo en `src/app/icon.png` / `apple-icon.png` | Promotores / Administración | Ya no bloquea. Ver nota |
| 2 | ~~**Manual de identidad visual:** paleta y tipografías~~ → **Resuelto por decisión de proyecto.** Queda pendiente **reconciliar** con el manual de marca oficial cuando exista | Promotores / Administración | Ya no bloquea el diseño. Ver nota |
| 3 | **Responsable interno** que aprobará textos, diseño y cambios | Promotores | Toda validación del proyecto |

**Nota sobre el ítem 1 — color del logo sin reconciliar.** El logo usa un teal/azul oscuro (`#032a35` aprox.) distinto del verde de marca adoptado en el sitio (`#1B4332`). No se cambió la paleta del sitio para igualar el logo — habría sido una decisión de diseño no pedida. Ambos conviven por ahora (logo con su color propio en navbar/footer, resto del sitio en verde); se resuelve cuando exista manual de marca oficial (ítem 2).

**Nota sobre el ítem 2 — deuda asumida.** La fase de diseño adoptó una paleta (verde `#1B4332`, blanco dominante) y una tipografía (Bricolage Grotesque + IBM Plex Sans + IBM Plex Mono) por decisión del cliente, sin manual de marca. Esto **desbloqueó el diseño pero creó una deuda**: si más adelante aparece un manual de identidad con otra paleta u otras tipografías, **manda el manual** y hay retrabajo.

**Nota sobre el ítem 3:** es el bloqueo más barato de resolver y el que más retrasa todo lo demás. Sin un aprobador definido, cada entregable queda en revisión indefinida.

## Prioridad 1 — bloquea la publicación de la Fase 1

Se puede diseñar y construir sin esto, pero no publicar.

| # | Ítem | Responsable | Bloquea |
|---|---|---|---|
| 4 | **Dominio web oficial** y responsable legal de su registro | Promotores / Administración | Publicación · URLs canónicas · Open Graph · Search Console |
| 5 | **Razón social, RUC y denominación oficial** | Administración | Footer · Políticas · marcado `School` |
| 6 | **Dirección exacta y enlace oficial del mapa** | Administración | Contacto · Inicio · marcado `LocalBusiness` |
| 7 | **Teléfonos, WhatsApp oficial, correos y horarios de atención** | Promotores / Admisión / Administración | Contacto · Footer · botón de WhatsApp (todas las páginas) · todos los formularios |
| 8 | **Textos legales:** privacidad, cookies, tratamiento de datos, uso de imágenes y términos | Administración | Políticas · **los cinco formularios** · banner de cookies |
| 9 | **Fotografías propias con autorización** y registro de vigencia — ver nota, parcialmente cubierto con imágenes ilustrativas | Colegio | `TarjetaEvidencia` en Inicio · los tres niveles · Distrito Maker · Vida escolar |
| 10 | **Historia del proyecto** | Promotores | Nosotros |

**Nota sobre el ítem 8:** es el bloqueo de mayor alcance del sitio. Ningún formulario puede publicarse sin la página de Políticas, y sin formularios no hay conversión. Crítico por el tratamiento de datos de menores y postulantes.

**Nota sobre el ítem 9 — parcialmente cubierto, no resuelto.** El sitio ya no muestra placeholders grises: se incorporaron 12 imágenes (fotografía de campus, taller, laboratorio, aula, docente) tomadas del sitio Wix preliminar del propio colegio. Estas imágenes están etiquetadas en origen como `ai-generated-IMAGE.jpg` — son **ilustraciones generadas por IA**, no fotografías de estudiantes reales, y por eso se usan solo en hero y tarjetas atmosféricas (`src/data/images.ts`). **Nunca se usaron en `TarjetaEvidencia`**: esa pieza exige contexto, grado y aprendizaje de un proyecto real y verificable, algo que una imagen generada no puede sostener honestamente — sigue mostrando `EvidenceEmptyState`. El ítem 9 se mantiene abierto para cuando exista banco fotográfico real con autorización, momento en el que estas imágenes ilustrativas deben reemplazarse.

## Prioridad 2 — bloquea la Fase 2

| # | Ítem | Responsable | Bloquea |
|---|---|---|---|
| 11 | **Costos:** matrícula, pensión definitiva y número de cuotas | Promotores / Admisión / Administración | Admisión |
| 12 | **Edad de corte y requisitos por nivel** | Promotores / Admisión / Administración | Admisión · los tres niveles |
| 13 | **Documentos obligatorios y criterios de admisión** | Promotores / Admisión / Administración | Admisión |
| 14 | **Fechas de campaña, vacantes por grado y año de apertura** | Promotores / Admisión / Administración | Admisión · los tres niveles · Nosotros |
| 15 | **Descuentos, beneficios, becas o convenios** | Promotores / Admisión / Administración | Admisión |
| 16 | **Política de devolución o reserva de vacante** | Promotores / Admisión / Administración | Admisión |
| 17 | **Lista real de alianzas firmadas**, separando convenios vigentes de proyectados, con autorización de uso de logo | Promotores | Alianzas |
| 18 | **Vacantes docentes reales** y perfil docente detallado | Promotores / Administración | Trabaja con nosotros |
| 19 | **Proceso de selección docente** definido | Promotores / Administración | Trabaja con nosotros |
| 20 | **Videos:** institucional, recorridos de laboratorios, proyectos y testimonios autorizados | Colegio | Inicio · Distrito Maker · Vida escolar |
| 21 | **Testimonios reales** con autorización firmada | Colegio | Inicio · Nosotros |
| 22 | **Proyectos documentados** con contexto, grado y aprendizaje | Colegio | Vida escolar · Distrito Maker · los tres niveles |
| 23 | **Calendario escolar y de eventos** | Administración | Vida escolar |
| 24 | **Nombres y perfiles de autoridades** que sí se publicarán | Promotores | Nosotros |
| 25 | **Redes sociales oficiales** | Promotores | Footer · Contacto · marcado `sameAs` |

## Prioridad 3 — vacíos detectados al estructurar el sitio

No están en el brief como pendientes, pero al planificar las páginas se detectó que faltan.

| # | Ítem | Responsable | Bloquea | Por qué |
|---|---|---|---|---|
| 26 | **Qué es la Comunidad Maker** | Promotores | Primaria | El brief la nombra sin describirla |
| 27 | **Inventario confirmado de equipos y laboratorios** | Administración | Distrito Maker | El brief prohíbe prometer equipos sin confirmar. Sin inventario solo se describen capacidades |
| 28 | **Horarios generales por nivel** | Administración | Los tres niveles | El brief los pide como material; deben ser generales, nunca horarios detallados de aula |
| 29 | **Ejemplos reales de aula por cada pilar pedagógico** | Coordinación académica | Modelo educativo | Sin ejemplos, la página cae en la jerga que el brief prohíbe |
| 30 | **Programa de escuela para padres y canales de comunicación** | Promotores | Familias | El brief nombra la sección sin contenido |
| 31 | **Protocolo de seguridad publicable** | Administración | Distrito Maker · Inicial | La sección de seguridad responde la primera objeción de los padres ante "herramientas" |
| 32 | **Correo institucional de destino** y responsable interno por formulario | Administración | Los cinco formularios | Sin destino, un formulario enviado se pierde |
| 33 | **Metas cuantitativas de captación** | Promotores | Medición de resultados | El brief no fija objetivos numéricos. Sin meta no hay forma de evaluar el sitio |

## Prioridad 4 — operación

| # | Ítem | Responsable | Bloquea |
|---|---|---|---|
| 34 | **Plan de mantenimiento y presupuesto del sitio** | Promotores / Administración | Continuidad posterior al lanzamiento |
| 35 | **Cuenta de analítica y Search Console** | Administración | Medición · SEO |

## Prioridad 5 — surgidos en la fase de diseño

Decisiones que la fase de diseño dejó abiertas a propósito, por depender de material o criterio que aún no existe.

| # | Ítem | Responsable | Bloquea |
|---|---|---|---|
| 36 | ~~**Familia de iconografía**~~ → **Resuelto.** Set lineal propio (`src/components/icons.tsx`): cpu, pencil-ruler, chef-hat, hammer, spark. Trazo constante 1.6px, sin relleno | Diseño | Ya no bloquea |
| 37 | **Estados semánticos** (error, éxito, advertencia) derivados de la paleta cumpliendo 4.5:1 | Diseño | Formularios · `Alert` |
| 38 | ~~**Acentos por nivel y por ruta Maker**~~ → **Resuelto.** 7 acentos temáticos auditados WCAG (docs/design-system.md §5), deliberadamente ajenos al verde de marca tras feedback del cliente ("muy verde y negro") | Diseño | Ya no bloquea |
| 39 | **Cuentas y titularidad** de hosting, CMS, correo transaccional y antispam | Administración | Desarrollo · publicación |
| 40 | **Responsable técnico posterior al lanzamiento** | Promotores / Administración | Mantenimiento · seguridad |
| 41 | **Contenido real para el carrusel de evidencias/testimonios** — el carrusel de rutas Maker usa datos ya confirmados, pero cualquier carrusel futuro de evidencias necesita material autorizado antes de construirse | Colegio | Vida escolar (si se decide replicar el patrón) |

---

## Resumen: qué desbloquea cada página

| Página | Fase | Bloqueada por |
|---|---|---|
| Inicio | 1 | 1, 2, 6, 7, 9 · *(evidencias: 20, 21, 22)* |
| Nosotros | 1 | 1, 2, 10 · *(autoridades: 24)* |
| Modelo educativo | 1 | 1, 2, 29 |
| Niveles | 1 | 1, 2 |
| Inicial | 1 | 1, 2, 9, 12, 28, 31 |
| Primaria | 1 | 1, 2, 9, 12, 26, 28 |
| Secundaria | 1 | 1, 2, 9, 12, 28 |
| Distrito Maker | 1 | 1, 2, 9, 27, 31 |
| Contacto | 1 | 1, 2, 6, 7, 8, 25 |
| Políticas | 1 | 5, 8 |
| Vida escolar | 2 | 9, 20, 22, 23 |
| **Admisión** | 2 | 7, 8, 11, 12, 13, 14, 15, 16, 32 |
| Familias | 2 | 30 |
| Trabaja con nosotros | 2 | 18, 19, 32 |
| Alianzas | 2 | 17, 32 |

**Admisión es la página más bloqueada** (9 ítems) y a la vez el destino de todo el embudo. Es la ruta crítica del proyecto: el sitio puede publicarse sin ella, pero no convierte hasta que exista.

---

## Ruta crítica sugerida

Orden recomendado para desbloquear, por impacto:

1. **Responsable interno (3)** — sin él, nada avanza. Cuesta una decisión.
2. **Logo definitivo (1)** — es lo único de identidad que sigue bloqueando. Además, cuanto más tarde llegue, más cara sale la deuda del ítem 2: un logo que no armonice con la paleta adoptada obliga a revisarla entera.
3. **Fotografías (9) y video (20)** — **el plazo más largo de todo el proyecto**: requieren producción y recolección de autorizaciones. Deben arrancar ya, en paralelo con el diseño, aunque figuren en prioridad 1 y 2. Son el activo principal del sitio y no tienen sustituto: el brief prohíbe el stock.
4. **Datos de contacto y legales (5, 6, 7)** — abren Contacto, Footer y WhatsApp, presentes en todas las páginas.
5. **Textos legales (8)** — abren los cinco formularios y, con ellos, la conversión.
6. **Datos de admisión (11–16)** — abren la Fase 2 y el cierre del embudo.

**Recomendación adicional de la fase de diseño:** adelantar el ítem **30** (escuela para padres y canales de comunicación). Aunque su prioridad nominal es baja, la página Familias atiende el momento de mayor intención de compra del recorrido — la etapa final, cuando la familia ya comparó y solo quiere saber si estará acompañada.
