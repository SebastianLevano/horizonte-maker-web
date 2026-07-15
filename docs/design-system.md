# Dirección de diseño

Define **la dirección visual y los criterios** que seguirá todo el proyecto. No es el design system completo ni contiene pantallas: los wireframes y el diseño de interfaz corresponden a la etapa siguiente.

Todo lo aquí definido se subordina a las reglas duras del brief §13 (menores, seguridad, alianzas, promesas). Ninguna decisión estética las sobrescribe.

---

## 1. Concepto rector: evidencia documentada

El sitio se organiza alrededor de una idea que el brief ya contiene pero no explota: **cada trabajo de un estudiante es un registro verificable, no una foto bonita.**

Dos hechos del brief convergen aquí:
- Toda evidencia debe declarar **contexto, edad o grado y aprendizaje desarrollado**. Es una regla, no una sugerencia.
- **Reggio Emilia** — uno de los pilares del modelo — tiene la **documentación pedagógica** como práctica central.

De ahí sale el elemento de firma del sitio: **la ficha de evidencia**, donde la metadata se compone en tipografía monoespaciada y se lee como dato, no como pie de foto publicitario.

```
┌──────────────────────────────────┐
│   [ fotografía del proyecto ]    │
├──────────────────────────────────┤
│   Puente de balsa que resiste    │  ← Bricolage Grotesque
│   8 kilos                        │
│                                  │
│   4.° PRIMARIA · CONSTRUCCIÓN    │  ← IBM Plex Mono
│   APRENDIZAJE · medición,        │     se lee como registro
│   prueba de resistencia,         │
│   iteración                      │
└──────────────────────────────────┘
```

**Por qué esta decisión y no otra:** es la única elección estética que ningún otro colegio podría copiar sin copiar también su pedagogía. Un colegio tradicional pondría un pie de foto; uno que documenta el aprendizaje publica un registro. Además resuelve, de paso, la regla del brief que más fácil se incumple: sin la ficha, la evidencia degenera en decoración.

**Dónde se gasta el carácter:** aquí y solo aquí. Todo lo demás se mantiene callado y disciplinado. Un sistema minimalista no se sostiene por acumulación de detalles, sino por la precisión de unos pocos.

---

## 2. Personalidad visual

### Debe transmitir

| Atributo | Qué implica en el diseño |
|---|---|
| **Innovación accesible** | Moderno pero comprensible. Nada que intimide a una madre que entra desde el celular. |
| **Cercanía y confianza** | Presencia humana real: personas antes que objetos. |
| **Creatividad con rigor** | Composición ordenada con acentos vivos. Ni caos ni rigidez. |
| **Acción, construcción y solución** | Estudiantes haciendo, no posando. Verbos antes que sustantivos. |
| **Seguridad y acompañamiento** | Espacios luminosos, adultos presentes, protocolos visibles. |
| **Orgullo por Lurín** | El contexto local aparece; no es un colegio genérico de stock. |

### Debe evitar

| Antipatrón | Por qué |
|---|---|
| Imagen excesivamente industrial o fría | "Maker" no significa fábrica. Es una escuela con niños desde los 3 años. |
| Estética infantil | El sitio le habla a los padres, que son quienes deciden. Nada de colores primarios, formas redondeadas ni tipografía "divertida". |
| Estética de colegio tradicional | Ni escudos, ni serifas institucionales, ni fotografías de formación en el patio. |
| Fotografías genéricas sin relación con el modelo | Contradicen la promesa de evidencia real. Peor que no tener fotos. |
| Exceso de texto en portada | Regla explícita del brief. |
| Lenguaje técnico incomprensible | Aplica también a íconos y etiquetas. |
| Presentar Maker como un taller aislado | Error de encuadre más grave del proyecto. Si el Distrito Maker parece una sección aparte, el diseño falló. |
| Promesas de éxito económico garantizado | Restringe titulares, imágenes y cifras. |

### La línea entre "no tradicional" y "no infantil"

Es la tensión central del proyecto y se resuelve con una regla: **el diseño es serio; el contenido es alegre.** La estructura, la tipografía y el color se comportan como los de un producto digital profesional. La energía la aportan las fotografías de los chicos trabajando y el trabajo mismo. El sistema es el marco callado; la infancia está dentro del marco, no en él.

---

## 3. Estilo gráfico

Referencia de principios — no de apariencia — a productos como Apple, Vercel, Linear, Notion y Stripe. Lo que se toma de ellos:

- **El blanco domina.** El espacio no es lo que sobra entre elementos: es el elemento que crea jerarquía.
- **Tipografía protagonista.** La estructura se lee por tipografía y espacio, no por cajas, líneas ni sombras.
- **Componentes consistentes.** Una sola manera de resolver cada cosa. La repetición es lo que hace que un sistema se sienta premium.
- **Diseño atemporal.** Sin efectos de temporada. El sitio debe verse bien en cinco años.
- **Precisión sobre decoración.** En un diseño minimalista no hay dónde esconder un error de espaciado.

Lo que **no** se toma: su apariencia. Ninguna de esas interfaces es un colegio en Lurín. Se copian los principios, nunca los layouts.

**Reglas propias del proyecto:**

- **El trabajo es el héroe.** El sitio muestra lo que hacen los estudiantes; la interfaz se aparta.
- **Base sobria, acentos escasos.** El verde intenso marca acción y no compite consigo mismo.
- **Distinción de niveles sin fragmentación.** Inicial, Primaria y Secundaria comparten el sistema; se distinguen por un acento, no por una identidad propia. Un colegio, tres niveles — no tres marcas.

---

## 4. Tipografía

| Rol | Familia | Uso |
|---|---|---|
| **Display** | **Bricolage Grotesque** (variable) | H1 y H2 únicamente. Titulares de evidencia. |
| **Texto** | **IBM Plex Sans** (variable) | H3 en adelante, cuerpo, interfaz, formularios, navegación. |
| **Documentación** | **IBM Plex Mono** | Metadata de evidencias, etiquetas de dato, eyebrows. |

### Por qué estas y no las obvias

La respuesta fácil ante "minimalista, como Vercel y Linear" es una grotesca neutra (Inter, Geist) en todo el sitio. Funciona y no se equivoca en nada — pero es intercambiable: el mismo sistema serviría para una fintech o un dashboard. Nada en él dice "aquí los chicos construyen cosas". El brief fijó **principios**, no tipografías; ese eje quedó libre y no se gasta en el default.

- **Bricolage Grotesque** — *bricolage* significa construir con lo que se tiene a mano. Es la identidad Maker hecha tipografía. Contemporánea, con carácter deliberadamente ensamblado, sin caer en lo infantil. Variable (peso, ancho, tamaño óptico), buen soporte de Latin Extended.
- **IBM Plex Sans** — humanista-técnica: comunica *tecnología* sin la frialdad industrial que el brief prohíbe. Excelente soporte de español, incluidas tildes y ñ. Legibilidad alta en pantallas pequeñas, que es donde ocurre la mayoría de las visitas.
- **IBM Plex Mono** — el mono no es decoración: es lo que hace que la evidencia se lea como registro verificable. Es el concepto rector hecho tipografía.

### Escala

| Nivel | Familia | Tamaño (móvil → desktop) | Notas |
|---|---|---|---|
| H1 | Bricolage 600 | 36 → 72px | Tracking −2%. Uno por página. |
| H2 | Bricolage 600 | 28 → 40px | Tracking −1%. |
| H3 | Plex Sans 600 | 20 → 24px | |
| Body | Plex Sans 400 | 16 → 18px | Interlineado 1.6. |
| Body pequeño | Plex Sans 400 | 14 → 15px | Interlineado 1.5. |
| Meta | Plex Mono 400 | 12 → 13px | Mayúsculas, tracking +4%. |

### Restricciones

- **Bricolage nunca en texto corrido.** Su carácter cansa en párrafos; su trabajo es el titular.
- **Mono nunca en párrafos.** Solo metadata, etiquetas y dato.
- **Máximo dos pesos por familia** en producción. Cada peso extra es carga.
- **Ancho de línea limitado** (~65–75 caracteres) en Nosotros, Modelo educativo y Políticas.
- **Nunca menos de 16px** en cuerpo de texto móvil.

---

## 5. Color

Se adopta la dirección verde de la marca. **El verde es la identidad; el blanco domina la interfaz; los grises crean jerarquía.**

> **Revisión en vivo.** Tras construir el sitio con la paleta original, el cliente lo vio "muy verde y negro" y pidió variedad de color sin perder el minimalismo. La respuesta no fue diluir el verde de marca, sino **añadir acentos temáticos** — uno por ruta Maker y uno por nivel — usados solo en chips de ícono, borde superior de tarjeta y badges. El blanco sigue dominando; el verde sigue siendo el único color de CTA; lo que cambió es que el contenido (rutas, niveles) ya no se presenta todo en el mismo tono. Ver §7 Tarjetas y §9 Animación para dónde se aplican.

### Tokens base

| Token | Valor | Contraste s/ blanco | Uso permitido |
|---|---|---|---|
| **Primary** | `#1B4332` | **11.1:1** | CTA primario, titulares, texto. Sin restricción. |
| **Primary Hover** | `#2D6A4F` | **6.4:1** | Estado hover del CTA. |
| **Secondary** | `#40916C` | **3.8:1** | Solo texto ≥24px, íconos y elementos gráficos. **Nunca cuerpo de texto.** |
| **Accent** | `#74C69D` | **2.0:1** | Solo fondos y decoración. **Nunca texto, nunca un borde con significado.** |
| **Background** | `#FFFFFF` | — | Superficie dominante. |
| **Surface** | `#F8F9FA` | — | Secciones alternas, tarjetas. |
| **Border decorativo** | `#E9ECEF` | 1.2:1 | Divisores sin significado funcional. |
| **Border funcional** | `#868E96` | **3.3:1** | Bordes de input y todo límite que deba percibirse. |
| **Text Primary** | `#212529` | **15.4:1** | Todo texto. |
| **Text Secondary** | `#5C636A` | **6.1:1** | Texto de apoyo, metadata. |

### Acentos temáticos — rutas Maker y niveles

Resuelven [backlog.md](backlog.md) #38. Auditados WCAG igual que la paleta base; los siete pasan **≥4.5:1 sobre blanco** como texto normal. Cada uno se usa como chip de ícono (fondo claro + texto del color), borde superior de 2px en la tarjeta y badge — **nunca como fondo de sección completa.**

| Acento | Valor | Contraste s/ blanco | Uso |
|---|---|---|---|
| Robótica e Innovación | `#2563EB` | 5.17:1 | Chip de ícono, borde superior, "Ejemplos" |
| Diseño y Fabricación | `#B45309` | 5.02:1 | ídem |
| Gastronomía y Emprendimiento | `#C2410C` | 5.18:1 | ídem |
| Construcción y Prototipado | `#92660D` | 5.09:1 | ídem |
| Nivel Inicial | `#C0392B` | 5.44:1 | Badge de edad, borde superior, número flotante |
| Nivel Primaria | `#0F766E` | 5.47:1 | ídem |
| Nivel Secundaria | `#4338CA` | 7.90:1 | ídem |

Cada acento lleva también una versión "tint" (fondo muy claro, ~5% de saturación) para el chip de ícono — el texto/ícono usa el tono saturado, nunca el tint como texto.

### Auditoría de accesibilidad — hallazgos

La paleta de partida se auditó contra WCAG. Tres correcciones fueron necesarias:

1. **`#6C757D` → `#5C636A`.** El original da 4.7:1 sobre blanco (pasa) pero **4.45:1 sobre `#F8F9FA`** (falla AA por poco). Como el texto secundario vive en tarjetas y secciones grises, fallaba justo donde más se usa. El nuevo valor da 6.1:1 sobre blanco y 5.8:1 sobre superficie: pasa en ambos.
2. **Token de borde funcional nuevo.** `#E9ECEF` da 1.2:1 — invisible como límite. Los bordes de input necesitan 3:1 mínimo. `#868E96` (3.3:1) cubre ese rol; `#E9ECEF` queda solo para divisores decorativos.
3. **`#40916C` no puede llevar texto blanco.** Un botón con ese fondo da 3.8:1 y falla AA para texto normal. **El CTA primario usa `#1B4332`** (11.1:1 contra blanco), cuyo hover `#2D6A4F` mantiene 6.4:1 — la accesibilidad no se rompe al pasar el cursor.

### Reglas de uso

- **Un solo color de acción.** `#1B4332` se reserva para el CTA. Si el mismo verde aparece en decoración, el CTA deja de destacar.
- **`#74C69D` es el token más peligroso de la paleta.** Su nombre ("Accent") invita a usarlo en enlaces e íconos, donde falla. Es exclusivamente un color de fondo.
- **Los acentos temáticos son ajenos al verde a propósito** (azul, ámbar, terracota, ocre, coral, teal, índigo) — es la corrección al "todo muy verde" (ver nota de revisión arriba). Se mantienen fuera de la navegación, los CTA y el footer: esas zonas siguen siendo 100% verde/gris para que la identidad de marca no se diluya.
- **El error nunca se comunica solo por color.** Siempre acompañado de texto e ícono.
- **Estados semánticos** (error, éxito, advertencia): **Pendiente de definición**, a derivar en la etapa de diseño cumpliendo 4.5:1.

### Foco

Anillo de **dos tonos**: trazo oscuro con halo blanco exterior. Un anillo de un solo color no puede ser visible a la vez sobre fondo blanco y sobre un botón verde oscuro. El foco visible nunca se elimina.

---

## 6. Sistema visual

### Grid

| Contexto | Columnas | Márgenes | Ancho de contenido |
|---|---|---|---|
| Móvil | 4 | 20–24px | Fluido |
| Tablet | 8 | 32–40px | Fluido |
| Desktop | 12 | 48–64px | Máx. ~1200px |

Texto de lectura larga se limita a ~720px aunque el contenedor sea más ancho.

### Espaciado

Escala de base **8** (4 disponible para ajustes ópticos): `4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.

- **Ritmo vertical constante** entre secciones: el scroll debe ser predecible.
- **Aire generoso en portada.** Es el antídoto contra el "exceso de texto" que el brief prohíbe.
- **El espacio separa, no las líneas.** Un divisor solo aparece cuando el espacio no basta.
- Espaciados fuera de la escala son el síntoma más visible de un diseño sin sistema.

### Radios

`0` (media a sangre) · `4px` (inputs, badges) · `8px` (botones, tarjetas) · `9999px` (solo el botón de WhatsApp).

Un radio moderado y constante. Radios grandes leen como infantil; radio cero lee como industrial. El proyecto necesita esquivar ambos.

### Sombras

**Reservadas a lo que se despega del layout a propósito.** La jerarquía de reposo la siguen creando el espacio y la tipografía, no la elevación — pero el cliente pidió explícitamente "tarjetas flotantes que sobresalgan" y "elementos superpuestos para dar profundidad", así que la sombra pasó de ser casi inexistente a ser la herramienta de esos momentos puntuales.

- **Nivel 0 — reposo.** Sin sombra. Tarjetas estáticas siguen delimitadas por superficie o borde, igual que antes.
- **Nivel 1 (`--shadow-float`)** — hover de tarjetas interactivas (nivel, ruta Maker, valor, pilar): `0 8px 24px -4px rgba(27,67,50,.14), 0 2px 6px -2px rgba(27,67,50,.08)`, siempre junto a un `translateY(-4px)`.
- **Nivel 2 (`--shadow-float-lg`)** — elementos que de verdad flotan sobre otro contenido: el badge superpuesto del hero, el badge numerado que sobresale de `TarjetaNivel`, el botón de WhatsApp, modales.

**Regla que se mantiene:** ninguna tarjeta lleva sombra en reposo. La sombra aparece solo en hover (una promesa de interactividad, no decoración fija) o en elementos deliberadamente superpuestos. Una sombra permanente en cada tarjeta de una grilla de evidencias seguiría siendo el ruido que el sistema original evitaba.

### Bordes

`1px` sólido. Decorativo `#E9ECEF`, funcional `#868E96`. Sin bordes dobles ni punteados.

### Iconografía

- **Familia lineal única**, trazo constante (~1.5–2px), sin relleno.
- **Función, no decoración.** El ícono apoya la comprensión; no rellena espacio.
- **Nunca solo.** Siempre acompañado de texto: un ícono aislado no es accesible ni claro.
- **Concreta antes que abstracta.** Coherente con "aprender haciendo".
- Necesarios: cuatro rutas Maker, tres niveles, seis pasos de la secuencia de aprendizaje, canales de contacto, valores y bienestar.
- Familia específica: **Pendiente de definición.** Debe elegirse una de trazo neutro que no compita con Bricolage.

---

## 7. Dirección de componentes

Dirección de estilo, no especificación. El inventario está en [components.md](components.md).

### Botones

| Nivel | Estilo | Uso |
|---|---|---|
| **Primario** | Fondo `#1B4332`, texto blanco, radio 8px | Conversión: Agendar visita, Solicitar información, Iniciar admisión |
| **Secundario** | Fondo transparente, borde `#1B4332`, texto `#1B4332` | Acción alternativa: Conocer el Distrito Maker, Ver proyectos |
| **Texto** | Solo texto `#1B4332`, subrayado en hover | Navegación menor |

- **Uno primario por sección.** Dos primarios compitiendo es cero primarios.
- Altura mínima 44px; área táctil ≥44×44px.
- Estados: reposo, hover, foco, activo, deshabilitado y **cargando** (los formularios lo necesitan).
- **WhatsApp** tiene tratamiento propio y persistente, distinto de los CTA de página.

### Formularios

Son el punto de conversión: cualquier fricción cuesta una familia.

- **Etiqueta visible siempre**, encima del campo, asociada a él. Nunca solo texto de sugerencia dentro del campo.
- **Una columna.** Se completa mejor en móvil y se lee mejor en escritorio.
- Campo: fondo blanco, borde `#868E96`, radio 4px, altura ≥44px.
- **Error claro y específico**, junto al campo, en lenguaje natural, con ícono. Nunca solo color.
- **Validación al salir del campo**, no mientras se escribe.
- **Confirmación explícita** tras el envío. El usuario nunca queda sin saber si funcionó.
- **Consentimiento** como casilla explícita, jamás premarcada, con enlace a Políticas.
- Obligatorios y opcionales claramente diferenciados. Teclado apropiado en móvil.

### Tarjetas

- **Anatomía única:** media → título → descripción → acción. Cambia el contenido, no la estructura.
- Sin sombra **en reposo**. Superficie `#F8F9FA` o borde `#E9ECEF`. En hover, `TarjetaNivel`, `TarjetaRutaMaker`, `TarjetaCaracteristica`, `TarjetaPilar` y `TarjetaValor` levantan (`translateY(-4px)`) y ganan `--shadow-float` — la sombra aparece con la interacción, nunca fija.
- Altura consistente por fila; proporción de imagen fija por tipo.
- Toda la tarjeta es zona de clic cuando enlaza.
- **Acento temático como borde superior.** `TarjetaNivel` y `TarjetaRutaMaker` llevan un borde superior de 2px con el color de su nivel o ruta (§5), más un chip de ícono con fondo tint del mismo acento. Es la respuesta a "no tan simple, no tan verde": cada tarjeta se identifica por color sin salirse del sistema.
- **`TarjetaNivel` lleva además un badge numerado superpuesto** (01/02/03) en la esquina superior izquierda, deliberadamente fuera del borde de la tarjeta — es el "elemento superpuesto" que pidió el cliente. Requiere que el contenedor de la grilla tenga `overflow-visible` y un padding-top que le dé aire.
- **`TarjetaEvidencia`** es la excepción con carácter: aloja el bloque mono de contexto, grado y aprendizaje. Los tres datos, con peso visual real — no como pie de foto opcional.
- **`TarjetaAliado`** necesita **dos estados inequívocos**: convenio vigente y alianza proyectada. La distinción es una obligación de honestidad institucional, no una sutileza.

### Tablas

Solo donde hay datos comparables: comparativa de niveles y requisitos de admisión.

- Sin bordes verticales. Separación por espacio y una línea horizontal `#E9ECEF`.
- Encabezado en Plex Sans 600; datos en mono cuando sean numéricos.
- **En móvil colapsan a tarjetas apiladas.** Una tabla con scroll horizontal en celular es una tabla que nadie lee.

### Banners

Un solo banner en el sitio: el de cookies. Discreto, inferior, sin bloquear contenido, con opciones reales de configuración. Nada de banners promocionales — no hay campaña que los justifique y añaden ruido.

### Badges

Etiquetas cortas en mono: nivel, ruta Maker, estado de vacante, estado de alianza.

- Fondo `#F8F9FA` o `#74C69D` (aquí sí: es fondo), texto `#1B4332`.
- **Nunca `#74C69D` como texto.**
- Sin badge decorativo. Un badge clasifica; si no clasifica, sobra.

### Alerts

Para mensajes de formulario y estados de sistema.

- Ícono + texto + color. **Nunca solo color.**
- Éxito, error e informativo. Tres, no más.
- El error dice qué pasó y cómo arreglarlo. Nunca se disculpa ni es vago.

---

## 8. Responsive — estrategia

**Mobile first.** Prioridad explícita del brief y realidad del público: una familia de Lurín busca colegio desde el celular.

| Breakpoint | Ancho | Estrategia |
|---|---|---|
| **Móvil** | < 640px | Diseño base. Una columna. Menú colapsado. CTA de WhatsApp visible. Hero con imagen recortada al contenido, no al encuadre. Tarjetas apiladas a ancho completo. Tablas → tarjetas. |
| **Tablet** | 640–1023px | Dos columnas en grillas de tarjetas. Menú aún colapsado hasta ~900px. Márgenes crecen antes que el contenido. |
| **Desktop** | ≥ 1024px | Grid de 12 columnas, contenido tope ~1200px. Menú desplegado. Tarjetas en 3 columnas (niveles, razones) o 2 (rutas Maker). El aire lateral crece; el texto no se estira. |

**Reglas transversales:**

- **El contenido no se reordena entre breakpoints.** Lo importante está arriba en todos.
- **El aire crece con la pantalla; la tipografía, poco.** Un H1 de 72px en desktop es 36px en móvil, pero el cuerpo pasa de 16 a 18px y nada más.
- **Nada depende de hover.** Toda información accesible con cursor debe serlo con toque.
- **El ancho de lectura se limita en desktop**, aunque sobre espacio.

---

## 9. Animación

**Elegante significa con propósito, no ausente.** El cliente pidió explícitamente una experiencia "dinámica y moderna" con microinteracciones, tarjetas flotantes, badges animados y contenido rotativo — y a la vez que no se sintiera recargada. La resolución no es "menos movimiento", es **movimiento que siempre comunica algo**: disponibilidad (pulso de WhatsApp), progreso (dots del carrusel y del badge del hero), interactividad (lift de tarjetas), o secuencia real (scroll reveal).

### Cuándo animar

| Momento | Animación | Duración |
|---|---|---|
| Entrada de sección al viewport | Fade in + desplazamiento de 8px hacia arriba | 250ms, ease-out |
| Aparición de tarjetas en grilla | El mismo fade, con desfase de ~50–80ms entre tarjetas | 250ms |
| Hover de botón y tarjeta | Lift (`translateY(-4px)`) + `--shadow-float` + cambio de color | 150–200ms |
| Click de botón | `scale(0.98)` — feedback táctil de que el click se registró | inmediato |
| Foco | Aparición del anillo | Inmediato |
| Apertura de menú y acordeón | Despliegue suave | 200ms |
| Estado de carga de formulario | Indicador en el botón | Mientras dure |
| Badge flotante del hero | Rotación de 3 datos confirmados cada 4s + flotación vertical de ±6px | 4000ms / 5000ms |
| Botón de WhatsApp | Anillo de pulso (señala disponibilidad) | 2400ms, en bucle |
| Carrusel de rutas Maker | Auto-avance + fundido de entrada por diapositiva | 5000ms / 350ms |

### Carruseles automáticos — postura revisada

La versión anterior de este documento decía "sin carruseles automáticos: roban el control y dañan la accesibilidad". El cliente pidió explícitamente uno. La regla no se elimina, **se reformula con las salvaguardas que la hacían necesaria**: un carrusel automático solo se usa si cumple las cinco condiciones siguientes, todas implementadas en `MakerRoutesCarousel`:

1. **Control explícito de pausa** (botón play/pausa visible) — WCAG 2.2.2.
2. **Pausa automática** en hover, foco, pestaña oculta (`visibilitychange`) y `prefers-reduced-motion`.
3. **Navegación manual** completa: flechas, dots con `aria-current`, teclado (flechas izquierda/derecha).
4. **Un único carrusel por sitio**, reservado a contenido donde rotar aporta (la versión "teaser" de las 4 rutas Maker en Inicio) — no se generaliza a evidencias, testimonios ni noticias todavía sin contenido real.
5. **`/distrito-maker` conserva la grilla estática completa** como referencia comparable: el carrusel invita a explorar, la página completa permite comparar. Nunca la única forma de ver las cuatro rutas es rotando.

### Cuándo no animar

- **Nunca en el hero al cargar.** Retrasar el mensaje principal para animarlo es cambiar conversión por espectáculo. El badge flotante del hero aparece con el resto del hero, no con delay.
- **Sin parallax.** Ruido visual y coste de rendimiento.
- **Sin contadores animados con cifras institucionales.** El brief pide no destacar la capacidad proyectada (960 estudiantes); el badge rotativo del hero usa solo hechos confirmados (niveles, rutas, currículo), nunca cifras de matrícula.
- **Sin animación en scroll continuo** ligada a la posición (parallax, scroll-jacking).
- **Una sola vez.** El scroll reveal no se repite al volver a subir.
- **Nada que retrase la lectura.** Si el usuario espera a que algo termine para leer, sobra.
- **Sin badges decorativos sin función.** Todo elemento animado señala algo real (disponibilidad, progreso, interactividad) — nunca decoración pura.

### Regla dura

`prefers-reduced-motion` se respeta en todo: scroll reveal, pulso de WhatsApp, flotación del badge, auto-avance del carrusel y transición entre diapositivas. No es una mejora opcional — hay usuarios para quienes el movimiento causa malestar físico. Verificado con `reducedMotion: "reduce"` en QA.

---

## 10. Fotografía

El activo más importante del sitio y su mayor riesgo. Vale más una foto real regular que una de stock perfecta: la foto de stock contradice la promesa de evidencia real que sostiene todo el sitio.

### Estilo fotográfico

Documental, no publicitario. Se registra lo que pasa; no se produce una escena. La referencia es la documentación pedagógica, no el catálogo escolar.

### Iluminación

- **Luz natural siempre que se pueda.** Es lo que hace que un taller se vea como escuela y no como fábrica.
- Sin flash directo ni luz dura que produzca sombras marcadas.
- Ambientes claros y abiertos: sostienen "seguridad y acompañamiento".
- Sin virados fríos. La calidez es lo que separa "innovación accesible" de "industrial".

### Composición

- **Manos, materiales, proceso.** El plano cerrado sobre unas manos trabajando dice más que el plano general del aula.
- Encuadres limpios, con espacio: la fotografía debe convivir con un diseño minimalista.
- Profundidad de campo que aísle al sujeto del desorden de fondo.
- Alturas variadas: a la altura del niño en Inicial, no siempre desde arriba.
- **Espacio para el texto** cuando la imagen vaya en hero.

### Tipos de escena

| Escena | Qué comunica |
|---|---|
| Estudiantes construyendo, midiendo, probando | Aprendizaje práctico |
| Grupos resolviendo juntos | Colaboración |
| Docente acompañando, no dictando | Acompañamiento |
| Prototipos y trabajos en proceso | Experimentación, cultura del error |
| Presentaciones y ferias | Comunicación, comunidad |
| Espacios reales del colegio | Confianza |
| Contexto de Lurín | Arraigo local |

### Expresiones

- **Concentración antes que sonrisa.** Un chico absorto en su trabajo comunica más que un chico posando feliz.
- Alegría auténtica cuando ocurre: celebrar un prototipo que funciona es una escena real.
- **Nadie mira a cámara.** La mirada a cámara convierte documentación en publicidad.
- Sin poses dirigidas, sin brazos cruzados, sin fila mirando al frente.

### Uso del color

- La paleta del sitio **no se impone a la fotografía.** Nada de duotonos ni filtros verdes: falsean la evidencia.
- Color natural, corregido con moderación, saturación controlada.
- El verde de marca convive con la foto; no la tiñe.
- Se prefieren escenas donde el color venga de los materiales y el trabajo real.

### Integración con el diseño

- **A sangre en hero**, contenida en tarjetas.
- Texto sobre imagen solo con una capa que garantice 4.5:1. Si no se puede asegurar, el texto va fuera de la imagen.
- Proporción fija por tipo de tarjeta; nunca deformar.
- La foto respira: no se pegan imágenes contra el texto.
- **Toda imagen necesita texto alternativo** descriptivo que no identifique a un menor.

### Reglas duras

- **Nada de stock genérico.**
- **Ningún menor usando herramientas sin equipo de protección.** Aplica especialmente a Construcción y Prototipado.
- **Nada que permita ubicar a un estudiante:** nombres completos, horarios de aula, rutas internas, datos médicos.
- **Nada sin autorización expresa** del apoderado, con registro de vigencia.
- **Sin logos** de organizaciones sin convenio firmado y autorización.

---

## 11. Accesibilidad

Objetivo: **WCAG 2.1 nivel AA**. No es una fase posterior — se diseña desde el primer día.

### Contraste

- Texto normal **≥4.5:1**. Texto grande (≥24px o ≥18.66px en negrita) **≥3:1**.
- Componentes de interfaz y bordes con significado **≥3:1**.
- Todas las combinaciones de la paleta están auditadas en §5. Ninguna recomendación baja del umbral.
- El color nunca es el único portador de información.

### Tamaños mínimos

- Cuerpo de texto: **16px** en móvil. Nunca menos.
- Área táctil: **≥44×44px**, con separación suficiente entre objetivos.
- El sitio debe funcionar con zoom al 200% sin pérdida de contenido.

### Foco y teclado

- **Foco visible en todo elemento interactivo.** Anillo de dos tonos (§5). Nunca se elimina.
- Orden de tabulación lógico, coincidente con el orden visual.
- Todo lo operable con ratón, operable con teclado: menú, acordeón, galería, formularios, modales.
- Enlace "saltar al contenido" al inicio.
- Foco atrapado dentro de modales y devuelto al cerrar.

### Formularios

- Etiqueta asociada a cada campo. Nunca solo sugerencia dentro del campo.
- Error identificado en texto, vinculado al campo y anunciado.
- Campos obligatorios indicados en texto, no solo con asterisco de color.
- Instrucciones antes del campo, no después.

### Lectores de pantalla

- HTML semántico: un H1 por página, jerarquía sin saltos, listas reales, botones que son botones.
- Texto alternativo en toda imagen con contenido; imágenes decorativas marcadas como tales.
- Idioma declarado como `es-PE`.
- Estados dinámicos (envío de formulario, error) anunciados.
- Enlaces con texto descriptivo: nunca "clic aquí".

### Movimiento

`prefers-reduced-motion` respetado en toda animación (§9).

---

## 12. Principios de diseño

Cuando haya que decidir, mandan estos principios, en este orden:

1. **Móvil primero.** Lo que no funciona en celular, no funciona.
2. **La evidencia manda.** Lo que muestra el trabajo de los estudiantes gana espacio sobre lo que lo describe.
3. **Claridad sobre ingenio.** Ante la duda, la opción que se entiende sin explicación.
4. **Accesible desde el inicio.** Contraste, foco, teclado y etiquetas no son una fase posterior.
5. **Todo camino lleva a la conversión.** Ninguna página es un callejón sin salida.
6. **Un colegio, no tres.** Los niveles se distinguen dentro de un mismo sistema.
7. **Maker es el eje, no un anexo.** Si el Distrito Maker parece una sección aparte, el diseño falló.
8. **Honestidad visual.** El diseño no insinúa lo que la institución no puede afirmar: ni alianzas sin firmar, ni equipos sin confirmar, ni resultados garantizados.
9. **Quitar antes que añadir.** En un sistema minimalista, cada elemento debe justificar su existencia. Ante la duda, se elimina.

---

## 13. Pendiente de definición

| Elemento | Responsable | Nota |
|---|---|---|
| Logo definitivo (vectorial, horizontal y vertical) | Promotores / Administración | Bloquea navbar, footer y Open Graph |
| Manual de identidad visual | Promotores / Administración | **La paleta y la tipografía aquí adoptadas deberán reconciliarse con él cuando exista.** Si el manual contradice esta dirección, manda el manual |
| Familia de iconografía | Diseño | De trazo neutro, que no compita con Bricolage |
| Estados semánticos (error, éxito, advertencia) | Diseño | Derivar cumpliendo 4.5:1 |
| Banco fotográfico propio con autorizaciones | Colegio | Plazo largo: requiere producción y autorizaciones |

**Resuelto en esta revisión:** acentos por nivel y por ruta Maker (§5) — ya no aparecen como pendientes; ver [backlog.md](backlog.md) #38.
