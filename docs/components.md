# Inventario de componentes

Componentes derivados de lo que las páginas de [pages.md](pages.md) realmente necesitan. No es un catálogo genérico: si algo no está usado por al menos una página, no está aquí.

Los criterios visuales de cada uno están en [design-system.md](design-system.md).

---

## Cómo leer este documento

| Campo | Qué significa |
|---|---|
| **Propósito** | El trabajo que hace. Uno solo por componente. |
| **Reutilización** | En qué páginas aparece. |
| **Importancia** | Qué pasa si está mal hecho. |
| **Prioridad** | Orden de construcción: **P0** el sitio no existe sin él · **P1** Fase 1 · **P2** Fase 2 o bloqueado por datos. |

**Regla del sistema:** todo componente pertenece a una categoría y resuelve una cosa. Un componente que hace dos trabajos se parte en dos.

---

## 1. Layout

### `Contenedor`
- **Propósito:** aplicar grid, márgenes y ancho máximo consistentes.
- **Reutilización:** todas.
- **Importancia:** es lo que hace que el sitio se sienta un sistema y no un conjunto de páginas. Un ancho inconsistente entre secciones es el error más visible de un diseño minimalista.
- **Prioridad:** P0.

### `Seccion`
- **Propósito:** bloque vertical con ritmo de espaciado uniforme y superficie opcional (`#FFFFFF` o `#F8F9FA`).
- **Reutilización:** todas.
- **Importancia:** el ritmo vertical constante es lo que hace predecible el scroll. Sin este componente, cada sección inventa su propio espaciado.
- **Prioridad:** P0.

---

## 2. Navigation

### `Navbar`
- **Propósito:** navegación principal con el CTA de Admisión destacado.
- **Reutilización:** todas.
- **Importancia:** **crítica.** Es la ruta corta a conversión para el usuario decidido, que no debería tener que leer ninguna página. No muestra enlaces a páginas que no existen.
- **Prioridad:** P0.

### `MenuMovil`
- **Propósito:** navegación colapsada bajo ~900px.
- **Reutilización:** todas.
- **Importancia:** **crítica.** La prioridad es móvil: para la mayoría de visitantes, este *es* el menú. Requiere foco atrapado y cierre con teclado.
- **Prioridad:** P0.

### `Footer`
- **Propósito:** contacto, ubicación, navegación secundaria, redes, enlace a Políticas y datos legales.
- **Reutilización:** todas.
- **Importancia:** alta. Es la red de seguridad de navegación y el único lugar del sitio con los datos legales, que deben coincidir con los documentos oficiales.
- **Prioridad:** P0.

### `Breadcrumb`
- **Propósito:** ubicar al usuario dentro de la jerarquía.
- **Reutilización:** subpáginas de nivel.
- **Importancia:** baja en móvil; útil en desktop y necesaria para el marcado `BreadcrumbList` de [seo.md](seo.md).
- **Prioridad:** P1.

### `IndiceLateral`
- **Propósito:** índice navegable de página larga.
- **Reutilización:** Políticas.
- **Importancia:** media. Es lo que evita que alguien con una pregunta puntual tenga que leer un documento legal entero.
- **Prioridad:** P1.

---

## 3. Hero

### `Hero`
- **Propósito:** encabezado principal: título, subtítulo, CTA e imagen o video.
- **Variantes:** **portada** (peso visual máximo, dos CTA) e **interior** (más contenido, un CTA).
- **Reutilización:** todas menos Contacto y Políticas.
- **Importancia:** **la más alta del sitio.** La prioridad es la primera impresión y ocurre aquí. Regla dura en portada: sin exceso de texto. Sin animación de entrada: retrasar el mensaje principal cambia conversión por espectáculo.
- **Prioridad:** P0.

---

## 4. Cards

Toda la familia comparte anatomía: media → título → descripción → acción. Cambia el contenido, no la estructura. Sin sombra.

### `TarjetaEvidencia`
- **Propósito:** presentar el trabajo de un estudiante como registro verificable.
- **Reutilización:** Inicio, los tres niveles, Distrito Maker, Vida escolar.
- **Importancia:** **es el componente de firma del sitio.** Materializa el concepto rector: la metadata en mono (contexto · grado · aprendizaje) hace que la evidencia se lea como documentación pedagógica y no como pie de foto publicitario. Los tres datos son obligatorios en cada instancia; sin ellos no se publica. Toda instancia requiere autorización vigente.
- **Prioridad:** P2 — bloqueado por fotografías y proyectos documentados. **El diseño se define en P1**: el resto del sistema depende de él.

### `TarjetaNivel`
- **Propósito:** un nivel educativo: nombre, edades, síntesis de una línea, imagen, enlace.
- **Reutilización:** Inicio, Niveles educativos. Tres instancias fijas.
- **Importancia:** alta. Es el punto de bifurcación del embudo: sin él, una familia no encuentra dónde pertenece.
- **Detalle visual:** borde superior y badge de edad con el acento del nivel; badge numerado (01/02/03) superpuesto en la esquina, deliberadamente fuera del borde; hover con lift + `--shadow-float`. Requiere que su grid padre tenga `overflow-visible` y `pt-3`.
- **Prioridad:** P0.

### `TarjetaRutaMaker`
- **Propósito:** una de las cuatro rutas: nombre, qué desarrolla, ejemplos, imagen.
- **Reutilización:** Inicio (dentro de `MakerRoutesCarousel`), Distrito Maker (grilla completa). Cuatro instancias fijas.
- **Importancia:** alta. Comunica el diferenciador central. **No debe leerse como tarjeta de taller extracurricular** — es la trampa de encuadre del proyecto.
- **Detalle visual:** chip de ícono y borde superior con el acento de la ruta (azul/ámbar/terracota/ocre); hover con lift + `--shadow-float`.
- **Prioridad:** P1.

### `TarjetaRazon`
- **Propósito:** argumento breve: ícono, título, una o dos líneas.
- **Reutilización:** Inicio (tres razones, comunidad y bienestar).
- **Importancia:** alta. Las tres razones son lo que retiene al usuario en los primeros segundos.
- **Prioridad:** P1.

### `TarjetaCaracteristica`
- **Propósito:** característica de un nivel, servicio o programa. Variante de `TarjetaRazon` con más texto.
- **Reutilización:** los tres niveles, Familias, Trabaja con nosotros, Alianzas.
- **Importancia:** media. Caballo de batalla del sitio por volumen de uso.
- **Prioridad:** P1.

### `TarjetaValor`
- **Propósito:** un valor institucional con la conducta observable que lo define.
- **Reutilización:** Nosotros. Tres instancias fijas.
- **Importancia:** media. La conducta observable no es opcional: sin ella el valor es una placa de bronce.
- **Prioridad:** P1.

### `TarjetaPilar`
- **Propósito:** un pilar pedagógico: nombre, qué es en lenguaje de familia, ejemplo concreto de aula.
- **Reutilización:** Modelo educativo.
- **Importancia:** alta. **El ejemplo de aula es el componente**, no un adorno: es lo que evita la jerga que el brief prohíbe.
- **Prioridad:** P1.

### `TarjetaNoticia`
- **Propósito:** noticia: imagen, fecha, título, extracto, enlace.
- **Reutilización:** Vida escolar.
- **Importancia:** baja. Contenido de retorno, no de captación.
- **Prioridad:** P2.

### `TarjetaVacante`
- **Propósito:** vacante docente: puesto, nivel, área, requisitos, CTA.
- **Reutilización:** Trabaja con nosotros.
- **Importancia:** baja. **Nunca incluye información salarial.**
- **Prioridad:** P2.

### `TarjetaAliado`
- **Propósito:** organización aliada: nombre, tipo de colaboración, descripción.
- **Reutilización:** Alianzas.
- **Importancia:** **alta por riesgo, no por uso.** Necesita dos estados visualmente inequívocos — convenio vigente / alianza proyectada — porque el patrón por defecto (grilla de logos) hace exactamente lo que el brief prohíbe. El logo solo se usa con autorización.
- **Prioridad:** P2.

---

## 5. Content blocks

### `MakerRoutesCarousel`
- **Propósito:** versión "teaser" de las cuatro rutas Maker en Inicio, con auto-avance y contenido rotativo.
- **Reutilización:** solo Inicio. `/distrito-maker` mantiene la grilla estática completa como referencia comparable — nunca coexisten dos formas incompatibles de ver lo mismo en la misma página.
- **Importancia:** alta como elemento de dinamismo, pero secundaria a la grilla: es invitación a explorar, no la única fuente de la información.
- **Salvaguardas de accesibilidad** (revierten la regla original "sin carruseles automáticos" — ver docs/design-system.md §9): pausa en hover/foco/pestaña oculta/`prefers-reduced-motion`, botón play/pausa explícito, flechas y dots navegables, navegación por teclado (← →), `role="region"` + `aria-roledescription="carrusel"` por diapositiva.
- **Prioridad:** P1 — usa datos ya confirmados del brief, no bloqueado por contenido pendiente.

### `SecuenciaProceso`
- **Propósito:** pasos ordenados y visuales.
- **Reutilización:** Inicio, Modelo educativo, Secundaria, Distrito Maker, Admisión, Trabaja con nosotros.
- **Importancia:** alta. Tres usos con una misma lógica: secuencia de aprendizaje (investigar → diseñar → construir → probar → mejorar → comunicar), proceso de admisión y proceso de selección docente. **La numeración aquí sí está justificada** — es una secuencia real donde el orden porta información.
- **Prioridad:** P1.

### `BloqueTexto`
- **Propósito:** texto extenso con jerarquía, ancho de lectura limitado (~720px).
- **Reutilización:** Nosotros, Modelo educativo.
- **Importancia:** media.
- **Prioridad:** P1.

### `BloqueTextoLegal`
- **Propósito:** contenido legal: numeración, densidad mayor, legibilidad sobre impacto.
- **Reutilización:** Políticas.
- **Importancia:** media, pero **bloquea todos los formularios**: sin Políticas publicada no hay conversión.
- **Prioridad:** P1.

### `TablaComparativa`
- **Propósito:** comparar los tres niveles. En móvil colapsa a tarjetas apiladas.
- **Reutilización:** Niveles educativos.
- **Importancia:** media.
- **Prioridad:** P1.

### `TablaRequisitos`
- **Propósito:** requisitos y documentos por nivel.
- **Reutilización:** Admisión.
- **Importancia:** media.
- **Prioridad:** P2.

### `BloqueContacto`
- **Propósito:** canales agrupados: WhatsApp, teléfono, correo, horario.
- **Reutilización:** Inicio, Contacto, Footer.
- **Importancia:** alta. **El horario va pegado a los canales:** sin él, el silencio nocturno se lee como desinterés.
- **Prioridad:** P0.

### `Mapa`
- **Propósito:** ubicación con referencias de acceso y enlace a indicaciones.
- **Reutilización:** Inicio, Contacto.
- **Importancia:** alta. Elemento de confianza: una dirección verificable prueba que el colegio existe. Carga diferida — no debe penalizar el rendimiento.
- **Prioridad:** P1.

### `Calendario`
- **Propósito:** eventos y ferias con fecha, lugar, descripción.
- **Reutilización:** Vida escolar.
- **Importancia:** baja.
- **Prioridad:** P2.

### `FiltroCategorias`
- **Propósito:** filtrar proyectos por nivel y ruta Maker.
- **Reutilización:** Vida escolar.
- **Importancia:** media. **No es un adorno:** es lo que permite que una misma página sirva a tres audiencias. Un padre de Inicial que ve prototipos de 5.° concluye que el colegio no es para su hijo.
- **Prioridad:** P2.

---

## 6. Media

### `Galeria`
- **Propósito:** conjunto de imágenes o videos con vista ampliada.
- **Reutilización:** Inicio, los tres niveles, Distrito Maker, Vida escolar.
- **Importancia:** alta. Requiere teclado y texto alternativo en cada pieza.
- **Prioridad:** P2 — bloqueado por fotografías.

### `Video`
- **Propósito:** reproductor con carga optimizada, horizontal y vertical.
- **Reutilización:** Inicio, Distrito Maker, Vida escolar.
- **Importancia:** media. **Nunca autoplay con sonido.** Póster siempre: el video es el mayor riesgo de rendimiento del sitio.
- **Prioridad:** P2.

### `Testimonio`
- **Propósito:** cita de familia, estudiante o docente con su vínculo con el colegio.
- **Reutilización:** Inicio, Nosotros.
- **Importancia:** alta cuando exista. **Solo testimonios reales, autorizados y verificables.** No se construye hasta tener material autorizado — un placeholder que sobrevive al lanzamiento es una mentira publicada.
- **Prioridad:** P2.

---

## 7. Call to action

### `BotonCTA`
- **Propósito:** la acción del sitio. Variantes: primario, secundario, texto.
- **Reutilización:** todas.
- **Importancia:** **crítica.** Es el componente del que depende cada conversión. Etiquetas canónicas en [content-guide.md](content-guide.md). Un primario por sección. Estado de carga incluido.
- **Prioridad:** P0.

### `BotonWhatsApp`
- **Propósito:** atajo permanente al canal más inmediato.
- **Reutilización:** todas, flotante.
- **Importancia:** **crítica.** El brief lo mide como métrica propia. Es el CTA primario de Contacto y la salida rápida del embudo desde cualquier punto. No debe tapar contenido en móvil.
- **Prioridad:** P0.

### `BloqueCierre`
- **Propósito:** bloque de conversión al final de cada página.
- **Reutilización:** todas.
- **Importancia:** alta. Materializa la regla "ninguna página es un callejón sin salida". Contextual: el CTA corresponde a la página, no es genérico.
- **Prioridad:** P1.

---

## 8. Forms

Cinco formularios sobre una base común. Campos y destinos en [pages.md](pages.md).

### `FormularioBase`
- **Propósito:** comportamiento compartido: validación con mensajes claros, antispam, confirmación automática al usuario, notificación al responsable interno, registro de fecha/campaña/origen, consentimiento con enlace a Políticas, etiquetas asociadas y navegación por teclado.
- **Reutilización:** las cinco instancias.
- **Importancia:** **crítica.** Cada punto de fricción cuesta una familia. Es donde el sitio cumple o incumple su objetivo de negocio.
- **Prioridad:** P1.

| Instancia | Página | Prioridad |
|---|---|---|
| `FormularioSolicitudInfo` | Inicio, Admisión, Contacto | P1 |
| `FormularioAgendaVisita` | Admisión | P2 |
| `FormularioPostulacion` (carga de CV) | Trabaja con nosotros | P2 |
| `FormularioAlianza` | Alianzas | P2 |
| `FormularioNewsletter` | Vida escolar, Footer | P2 |

**Bloqueo:** ninguna instancia se publica antes que la página de Políticas.

---

## 9. Feedback e interacción

### `AcordeonFAQ`
- **Propósito:** preguntas frecuentes plegables.
- **Reutilización:** Admisión, Familias.
- **Importancia:** alta. **Es CRO puro:** el último lugar donde se desactiva la objeción que impide llenar el formulario. Accesible por teclado y con contenido indexable — sostiene el marcado `FAQPage`.
- **Prioridad:** P2.

### `Alert`
- **Propósito:** mensajes de formulario y estados de sistema. Éxito, error, informativo.
- **Reutilización:** los cinco formularios.
- **Importancia:** alta. Ícono + texto + color, **nunca solo color**. El error dice qué pasó y cómo arreglarlo.
- **Prioridad:** P1.

### `Badge`
- **Propósito:** etiqueta corta en mono: nivel, ruta, estado de vacante, estado de alianza.
- **Reutilización:** tarjetas de evidencia, noticia, vacante, aliado.
- **Importancia:** media. Un badge clasifica; si no clasifica, sobra. **Nunca `#74C69D` como texto.**
- **Prioridad:** P1.

### `BannerCookies`
- **Propósito:** aviso y configuración de cookies con enlace a Políticas.
- **Reutilización:** todas.
- **Importancia:** **requisito legal**, crítico por el tratamiento de datos de menores y postulantes. Discreto, inferior, sin bloquear contenido, con opciones reales. Condiciona la carga de analítica.
- **Prioridad:** P1.

---

## Orden de construcción

| Prioridad | Componentes | Criterio |
|---|---|---|
| **P0** | `Contenedor`, `Seccion`, `Navbar`, `MenuMovil`, `Footer`, `Hero`, `BotonCTA`, `BotonWhatsApp`, `TarjetaNivel`, `BloqueContacto` | Sin ellos no existe ninguna página |
| **P1** | Resto de tarjetas, `MakerRoutesCarousel`, `SecuenciaProceso`, bloques de texto, tablas, `Mapa`, `FormularioBase` + `FormularioSolicitudInfo`, `Alert`, `Badge`, `BannerCookies`, `BloqueCierre`, `Breadcrumb`, `IndiceLateral` | Completan la Fase 1 |
| **P2** | `TarjetaEvidencia`, `Galeria`, `Video`, `Testimonio`, `TarjetaNoticia`, `TarjetaVacante`, `TarjetaAliado`, `Calendario`, `FiltroCategorias`, `AcordeonFAQ`, `TablaRequisitos`, formularios restantes | Bloqueados por datos o contenido pendiente |

**Excepción deliberada:** `TarjetaEvidencia` se construye en P2 por falta de material, pero **su diseño se resuelve en P1**. Es el componente de firma: el resto del sistema visual se calibra contra él, no al revés.

---

## Notas de implementación

- **Prioridad móvil** en todos los componentes.
- **Accesibilidad como requisito, no como mejora:** contraste, texto alternativo, teclado, etiquetas. Criterios en [design-system.md](design-system.md) §11.
- **Familia de tarjetas coherente.** Divergencias visuales entre tarjetas rompen la lectura del sitio.
- **Nada depende de hover.** Toda información accesible con cursor debe serlo con toque.
