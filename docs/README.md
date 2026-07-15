# Web I.E.P. Colegio Horizonte Maker — Documentación de proyecto

> _"Aprender haciendo, crear para transformar"_

Esta carpeta es la guía oficial del proyecto web. Toda decisión aquí documentada proviene del brief institucional (`../brief.md`). Lo que el brief no define aparece marcado como **Pendiente de definición** y está consolidado en [backlog.md](backlog.md).

---

## 1. Objetivo del sitio

Ser el canal principal de presentación, confianza y captación de familias del colegio.

El sitio debe lograr cuatro cosas, en este orden:

1. **Explicar** con claridad qué hace distinto a Horizonte Maker.
2. **Demostrarlo** con evidencias reales de aprendizaje: proyectos, prototipos, ferias, portafolios.
3. **Generar confianza** en las familias de Lurín.
4. **Convertir** la visita en una acción concreta: solicitar información, agendar una visita, iniciar admisión o escribir por WhatsApp.

**Fuera de alcance por política institucional:** el sitio no publica información interna — bandas salariales, planilla, presupuesto, organigrama con datos personales, costos no aprobados ni documentos de gestión reservados.

## 2. Propuesta de valor

En Horizonte Maker los estudiantes aprenden investigando, creando y resolviendo desafíos reales. El colegio integra formación académica rigurosa con proyectos, tecnología, arte, emprendimiento y habilidades para la vida, desde Inicial hasta Secundaria.

Lo que sostiene esa propuesta y debe quedar claro en el sitio:

| Elemento | En qué consiste |
|---|---|
| **Distrito Maker** | Eje transversal del colegio (no un taller extracurricular) con cuatro rutas: Robótica e Innovación, Diseño y Fabricación, Gastronomía y Emprendimiento, Construcción y Prototipado. Es el diferenciador central. |
| **Modelo pedagógico** | Articulación del Currículo Nacional con ABP, STEAM, Reggio Emilia y cultura Maker. |
| **Acompañamiento cercano** | 15 estudiantes por sección en Inicial; 25 en Primaria y Secundaria. |
| **Cobertura completa** | Inicial (3, 4 y 5 años), Primaria (1.° a 6.°) y Secundaria (1.° a 5.°). |
| **Arraigo local** | Colegio de Lurín que crea soluciones con y para su comunidad. |
| **Valores** | Emprendimiento, integridad y colaboración. |

## 3. Público objetivo

Cinco públicos, priorizados. El diseño y el contenido se optimizan para **Familias**; los demás no deben competir por el espacio principal.

| Prioridad | Público | Qué necesita | Acción esperada |
|---|---|---|---|
| **1** | **Familias** | Propuesta, seguridad, costos referenciales, admisión, horarios, acompañamiento y evidencias | Solicitar información o agendar visita |
| **2** | **Estudiantes** | Laboratorios, proyectos, vida escolar, especializaciones y actividades | Explorar el colegio y motivar la visita familiar |
| 3 | Docentes postulantes | Modelo, cultura de trabajo, perfil esperado, desarrollo profesional y vacantes | Postular o enviar CV |
| 4 | Aliados | Objetivos institucionales, proyectos, laboratorios y formas de colaboración | Proponer convenio, mentoría o desafío |
| 5 | Comunidad | Noticias, eventos, ferias y proyectos de impacto local | Participar o contactar |

## 4. Mensaje principal

**Posicionamiento:** Jóvenes que hacen, resuelven y construyen.

**Portada:** "Aprender haciendo. Crear para transformar" — una educación integral, práctica e innovadora para estudiantes que hacen, resuelven y construyen.

**Por público:**

- Familias → una educación útil, rigurosa y práctica para la vida.
- Estudiantes → aquí tus ideas se convierten en soluciones.
- Docentes → buscamos diseñadores de experiencias de aprendizaje.
- Aliados y comunidad → la escuela conecta aprendizaje, comunidad y sector productivo.

## 5. Objetivos de negocio

El sitio existe para mover familias por este embudo:

```
Descubrimiento → Interés → Contacto → Visita → Admisión → Matrícula
   (Inicio)     (Niveles /   (Formulario  (Agenda    (Proceso)   (Cierre
              Distrito Maker) o WhatsApp)  de visita)            presencial)
```

**Qué se mide** (definido en el brief §12): visitas, clics a WhatsApp, formularios enviados, páginas más vistas y rendimiento de campañas.

**Metas numéricas:** **Pendiente de definición.** El brief no fija objetivos cuantitativos de captación ni de matrícula.

## 6. Alcance del proyecto

15 rutas en total: 12 páginas + 3 subpáginas de nivel. Se dividen en dos fases según la disponibilidad de datos confirmados, para que el colegio pueda publicar sin esperar a tenerlo todo.

**Fase 1 — publicable con lo ya confirmado**
Inicio · Nosotros · Modelo educativo · Niveles educativos (+ Inicial, Primaria, Secundaria) · Distrito Maker · Contacto · Políticas

**Fase 2 — bloqueada por datos pendientes**
Admisión · Vida escolar y proyectos · Familias · Trabaja con nosotros · Alianzas

El detalle de qué bloquea cada página está en [sitemap.md](sitemap.md) y [backlog.md](backlog.md).

> **Nota sobre la Fase 1.** La paleta y la tipografía ya están definidas ([design-system.md](design-system.md)). Publicar la Fase 1 requiere todavía el logo definitivo, los datos de contacto oficiales, los textos legales y fotografías propias con autorización. La Fase 1 es la que puede *diseñarse y construirse* ya, no la que puede publicarse mañana.

## 7. Reglas duras del proyecto

Aplican a todas las fases y a todos los documentos. Vienen del brief §13 y no son negociables:

- **Menores:** nada de nombres completos, horarios detallados de aula, rutas internas, datos médicos ni información que permita ubicar a un estudiante. Fotos y videos requieren autorización expresa del apoderado con registro de vigencia.
- **Seguridad:** no mostrar herramientas peligrosas sin equipo de protección, supervisión y protocolos visibles.
- **Alianzas:** no afirmar convenios que no estén firmados. Sin convenio se presentan como "alianzas proyectadas" u "organizaciones con las que se busca colaborar".
- **Promesas:** no prometer empleabilidad, independencia económica ni ingreso universitario. Se comunican capacidades y oportunidades formativas.
- **Testimonios:** solo reales, autorizados y verificables. No se inventan familias ni estudiantes.
- **Datos legales:** la denominación y los datos legales deben coincidir con los documentos oficiales antes del lanzamiento.

## 8. Stack técnico

Cada pieza se justifica contra un requisito del brief, no por preferencia. Lo que no resuelve un requisito, no entra.

| Capa | Recomendación | Requisito que resuelve |
|---|---|---|
| **Framework** | Next.js (App Router) + TypeScript | El brief pide SEO con datos estructurados, carga rápida y contenido indexable. Eso exige renderizado en servidor: el contenido no puede depender de JavaScript para existir |
| **Estilos** | Tailwind CSS | Los tokens de [design-system.md](design-system.md) se vuelven restricciones reales. En un diseño minimalista, un espaciado inconsistente es el error más visible |
| **Imágenes y fuentes** | Utilidades nativas del framework | Formatos modernos, `srcset` y prevención de CLS sin construirlo a mano (§12 del brief: carga rápida, imágenes optimizadas) |
| **Animación** | CSS. Librería solo si algo la necesita | La animación definida es fade y desplazamiento de 8px. Eso es CSS. Una librería para esto es peso sin retorno |
| **Formularios** | Validación con esquema compartido cliente-servidor | §10: validación de campos y mensajes claros de error. El esquema en un solo lugar evita que ambos lados diverjan |
| **Antispam** | Turnstile | §10: protección antispam. Sin CAPTCHA visual, que es fricción en el punto de conversión |
| **Correo** | Servicio transaccional (Resend o equivalente) | §10: confirmación automática al usuario + notificación al responsable interno |
| **CMS** | Sanity, plan gratuito y alojado | §12: el colegio actualiza noticias, proyectos, vacantes y eventos **sin depender del desarrollador**. Alojado porque el colegio no tiene equipo técnico: una instancia autoalojada le traslada un mantenimiento que no puede asumir |
| **Hosting** | Vercel | §12: SSL, copias de seguridad, ambiente de prueba antes de publicar. Las vistas previas por rama son exactamente el flujo de aprobación que el brief describe |
| **Analítica** | Analítica de producto + GA4, ambos tras consentimiento | §12: visitas, clics a WhatsApp, formularios enviados, páginas más vistas y campañas |

### Notas de decisión

- **El CMS es requisito, no opción.** El brief lo pide de forma explícita. La pregunta no es *si*, sino *cuál*: se elige alojado y con plan gratuito porque el criterio dominante es que una secretaría pueda publicar una noticia sin llamar a nadie.
- **Solo el CMS se modela sobre contenido que cambia:** noticias, proyectos, eventos y vacantes. Las páginas institucionales (misión, modelo, niveles) cambian una vez al año — modelarlas en el CMS es complejidad sin beneficio.
- **La analítica carga después del consentimiento.** Requisito legal por el tratamiento de datos, y beneficio de rendimiento a la vez.
- **Nada de lo anterior está contratado.** Costos, cuentas y titularidad son ítems abiertos en [backlog.md](backlog.md).

**Pendiente de definición:** cuentas y titularidad de cada servicio · presupuesto de mantenimiento · responsable técnico posterior al lanzamiento.

## 9. Índice de la documentación

| Documento | Para qué sirve | Quién lo usa |
|---|---|---|
| [sitemap.md](sitemap.md) | Arquitectura del sitio, flujo de conversión y menú | UX, contenido, desarrollo |
| [pages.md](pages.md) | **Documento principal.** Estructura sección por sección de cada página | Todos |
| [components.md](components.md) | Inventario de componentes reutilizables | Diseño, desarrollo |
| [design-system.md](design-system.md) | Personalidad visual y principios de diseño | Diseño |
| [content-guide.md](content-guide.md) | Tono, estilo de escritura y lineamientos de contenido | Redacción, colegio |
| [seo.md](seo.md) | Encabezados, URLs, metadatos y palabras clave | Contenido, desarrollo |
| [backlog.md](backlog.md) | Todo lo que falta definir, con su responsable y qué bloquea | Colegio, gestión de proyecto |

## 10. Estado actual

Esta documentación cubre las **etapas 2 (Arquitectura) y 4 (dirección de diseño)** del plan de trabajo del brief. Hay dirección visual definida; no hay wireframes, diseño de interfaz ni desarrollo.

**Decisiones cerradas en la fase de diseño:**

- **Concepto rector:** evidencia documentada. Cada trabajo de estudiante se presenta como registro verificable, no como foto con pie. Detalle en [design-system.md](design-system.md) §1.
- **Paleta:** verde oscuro `#1B4332` como identidad, blanco dominante, grises para jerarquía. Auditada contra WCAG.
- **Tipografía:** Bricolage Grotesque (display) + IBM Plex Sans (texto) + IBM Plex Mono (documentación).
- **Stack:** definido arriba, sujeto a contratación.

**Siguiente paso:** validar el mapa del sitio y las prioridades del menú con el equipo del colegio, y desbloquear los ítems críticos de [backlog.md](backlog.md) — en particular el logo, que es lo único de identidad que sigue pendiente.

**Responsable interno que aprueba textos, diseño y cambios:** **Pendiente de definición.**
