# Arquitectura del sitio

15 rutas: 12 páginas principales + 3 subpáginas de nivel. La estructura sirve al embudo de captación de familias; todo lo demás se subordina a eso.

---

## 1. Mapa general

```
Inicio
│
├── Nosotros
├── Modelo educativo
├── Niveles educativos
│   ├── Inicial
│   ├── Primaria
│   └── Secundaria
├── Distrito Maker
├── Vida escolar y proyectos
├── Admisión
├── Familias
├── Trabaja con nosotros
├── Alianzas
├── Contacto
└── Políticas
```

## 2. Estructura del menú principal

El menú se ordena por prioridad de conversión, no por importancia institucional. Cinco entradas visibles más un CTA destacado:

| Posición | Entrada | Contiene |
|---|---|---|
| 1 | Nosotros | Nosotros · Modelo educativo |
| 2 | Niveles | Inicial · Primaria · Secundaria |
| 3 | Distrito Maker | (enlace directo) |
| 4 | Vida escolar | Vida escolar y proyectos · Alianzas |
| 5 | Familias | Familias · Trabaja con nosotros |
| **CTA** | **Admisión** | Botón destacado, siempre visible |

**Contacto** vive en el footer y en el CTA persistente de WhatsApp, no en el menú principal — la prioridad de la barra es llevar a Admisión.
**Políticas** vive solo en el footer.

Mientras la Fase 2 no exista, el menú se reduce a las entradas disponibles. No se publican enlaces a páginas vacías ni "próximamente".

## 3. Flujo de conversión

```
                    ┌──────────┐
                    │  INICIO  │
                    └────┬─────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ¿Qué enseñan?   ¿Es para mi     ¿Puedo confiar?
                    hijo/a?
        │                │                │
        ▼                ▼                ▼
  Modelo educativo    Niveles      Vida escolar
  Distrito Maker    (Ini/Pri/Sec)   Nosotros
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                    ┌──────────┐
                    │ ADMISIÓN │
                    └────┬─────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
      Solicitar información   Agendar visita
              │                     │
              └──────────┬──────────┘
                         ▼
                  Contacto directo
                  (WhatsApp / correo)
```

Tres preguntas mueven a una familia: *qué enseñan*, *sirve para mi hijo/a* y *puedo confiar*. Cada rama del sitio responde una y desemboca en Admisión. **Toda página del sitio ofrece una salida a Admisión o a Contacto** — ninguna es un callejón sin salida.

**WhatsApp es un atajo permanente:** disponible desde cualquier página, en cualquier momento del recorrido.

## 4. Páginas

### Inicio — `/`
**Fase 1**

- **Objetivo:** comunicar la propuesta de valor en menos de 30 segundos y derivar a la rama que le interese a cada familia.
- **Usuario:** familias (primario), estudiantes (secundario).
- **Contenido principal:** propuesta de valor, tres razones para elegir el colegio, niveles, Distrito Maker, secuencia de aprendizaje, evidencias, comunidad y bienestar, resumen de admisión, ubicación.
- **CTA:** Agendar una visita · Conocer el Distrito Maker.
- **Relación:** puerta de entrada a todo el sitio. Enlaza a Niveles, Distrito Maker, Vida escolar, Admisión y Contacto.

### Nosotros — `/nosotros`
**Fase 1**

- **Objetivo:** generar confianza institucional. Responde "¿quiénes son ustedes?".
- **Usuario:** familias, aliados.
- **Contenido principal:** historia del proyecto, misión, visión, valores, perfil del estudiante que se busca formar, perfil de la escuela y su vínculo con Lurín.
- **CTA:** Conocer la propuesta educativa.
- **Relación:** deriva a Modelo educativo (el "cómo" del "qué" que plantea) y a Admisión.

### Modelo educativo — `/modelo-educativo`
**Fase 1**

- **Objetivo:** explicar cómo aprenden los estudiantes, con rigor pero sin jerga.
- **Usuario:** familias (las que investigan a fondo), docentes postulantes.
- **Contenido principal:** socio-constructivismo, ABP, STEAM, Reggio Emilia, evaluación formativa, aprendizaje colaborativo y cultura del error. Articulación con el Currículo Nacional.
- **CTA:** Ver cómo aprenden (→ Vida escolar) · Conocer el Distrito Maker.
- **Relación:** es el sustento pedagógico de Niveles y Distrito Maker. Ambos lo referencian.

### Niveles educativos — `/niveles`
**Fase 1**

- **Objetivo:** enrutar a la familia al nivel que le corresponde.
- **Usuario:** familias.
- **Contenido principal:** comparativa breve de los tres niveles (edades, tamaño de sección, énfasis pedagógico) y acceso a cada uno.
- **CTA:** Conocer el nivel.
- **Relación:** índice de las tres subpáginas. Página de tránsito — debe ser corta.

#### Inicial — `/niveles/inicial`
**Fase 1**

- **Objetivo:** mostrar que el juego, el movimiento y la exploración son aprendizaje serio, y transmitir seguridad a familias con niños pequeños.
- **Usuario:** familias con hijos de 3 a 5 años.
- **Contenido principal:** 3, 4 y 5 años; 15 niños por sección; tutora y auxiliar; atelier; psicomotricidad; inglés por inmersión; experiencias Maker seguras; lunch y almuerzo en aula; patios diferenciados.
- **CTA:** Consultar vacantes · Agendar visita.
- **Relación:** enlaza a Distrito Maker (versión segura para la edad), Familias y Admisión.

#### Primaria — `/niveles/primaria`
**Fase 1**

- **Objetivo:** demostrar que lo académico y lo práctico no compiten, se refuerzan.
- **Usuario:** familias con hijos de 6 a 11 años.
- **Contenido principal:** 1.° a 6.°; 25 estudiantes por sección; áreas del CNEB; ABP; dos experiencias Maker semanales; especialistas; tutoría; portafolio; Comunidad Maker.
- **CTA:** Consultar vacantes · Agendar visita.
- **Relación:** enlaza a Modelo educativo, Distrito Maker y Admisión.

#### Secundaria — `/niveles/secundaria`
**Fase 1**

- **Objetivo:** responder la preocupación real de las familias de secundaria — rigor académico y orientación al futuro.
- **Usuario:** familias con hijos de 12 a 16 años, estudiantes.
- **Contenido principal:** 1.° a 5.°; exploración de las cuatro rutas en 1.°–3.° y especialización desde 4.°; portafolio, rúbricas, autoevaluación; orientación psicológica; proyectos complejos.
- **CTA:** Consultar vacantes · Ver las rutas Maker.
- **Relación:** vínculo más fuerte con Distrito Maker — aquí la especialización se vuelve concreta.

### Distrito Maker — `/distrito-maker`
**Fase 1**

- **Objetivo:** explicar el diferenciador central del colegio. La página más importante después de Inicio.
- **Usuario:** familias, estudiantes, aliados.
- **Contenido principal:** qué es el Distrito Maker y por qué es transversal a los tres niveles (no un taller aparte); las cuatro rutas; exploración en 1.°–3.° y especialización en 4.°–5.°; seguridad y supervisión; productos y evidencias.
- **CTA:** Visitar los laboratorios · Ver proyectos.
- **Relación:** referenciada desde Inicio, los tres niveles, Modelo educativo y Alianzas. Deriva a Vida escolar y Admisión.

### Vida escolar y proyectos — `/vida-escolar`
**Fase 2** — bloqueada por fotografías, videos y autorizaciones.

- **Objetivo:** aportar la prueba. Sin evidencias, la propuesta es solo una promesa.
- **Usuario:** familias, estudiantes, comunidad.
- **Contenido principal:** galería, ferias, portafolios, noticias, calendario de eventos y proyectos de impacto local.
- **CTA:** Ver evidencias · Inscribirse a un evento.
- **Relación:** sostiene a Inicio y Distrito Maker con material real. Deriva a Admisión.

### Admisión — `/admision`
**Fase 2** — bloqueada por costos, vacantes, requisitos y fechas de campaña.

- **Objetivo:** convertir. Destino final del embudo.
- **Usuario:** familias con decisión avanzada.
- **Contenido principal:** proceso paso a paso, requisitos, entrevistas, vacantes, pensiones cuando estén confirmadas, preguntas frecuentes y formulario.
- **CTA:** Iniciar admisión · Solicitar información · Agendar visita.
- **Relación:** recibe tráfico de todo el sitio. Es el CTA destacado del menú.
- **Proceso confirmado:** contacto → visita o charla → entrevista informativa → evaluación o entrevista correspondiente → vacante → matrícula.

### Familias — `/familias`
**Fase 2** — bloqueada por contenidos de acompañamiento y bienestar.

- **Objetivo:** mostrar que el colegio acompaña también a los padres, no solo a los estudiantes.
- **Usuario:** familias en evaluación y familias ya matriculadas.
- **Contenido principal:** acompañamiento, escuela para padres, canales de comunicación, bienestar y convivencia.
- **CTA:** Contactar a admisión.
- **Relación:** refuerza la confianza generada en Nosotros. Deriva a Admisión y Contacto.

### Trabaja con nosotros — `/trabaja-con-nosotros`
**Fase 2** — bloqueada por vacantes reales.

- **Objetivo:** atraer docentes alineados con el modelo. No es una bolsa de empleo genérica.
- **Usuario:** docentes postulantes.
- **Contenido principal:** perfil docente esperado, proceso de selección, inducción, desarrollo profesional y vacantes abiertas.
- **CTA:** Enviar CV.
- **Relación:** enlaza a Modelo educativo (lo que un postulante necesita entender antes de postular).
- **Restricción:** no publica sueldos, bandas salariales ni planilla.

### Alianzas — `/alianzas`
**Fase 2** — bloqueada por la lista de convenios firmados.

- **Objetivo:** mostrar la conexión del colegio con el sector productivo y la comunidad, y abrir la puerta a nuevas colaboraciones.
- **Usuario:** aliados, familias (como señal de respaldo).
- **Contenido principal:** universidades, institutos, empresas y municipalidad; modalidades de colaboración; proyectos conjuntos.
- **CTA:** Proponer una alianza.
- **Relación:** enlaza a Distrito Maker (el punto de encuentro con el sector productivo).
- **Restricción crítica:** los convenios firmados y las alianzas proyectadas se muestran en bloques visualmente separados y rotulados. Sin convenio no se usa el logo ni el nombre de la organización.

### Contacto — `/contacto`
**Fase 1** — publicable en cuanto se confirmen los datos oficiales de contacto.

- **Objetivo:** eliminar toda fricción para comunicarse o llegar al colegio.
- **Usuario:** todos.
- **Contenido principal:** dirección, mapa, teléfono, correo, WhatsApp, horarios de atención y formulario.
- **CTA:** Enviar mensaje · Cómo llegar.
- **Relación:** enlazada desde el footer de todas las páginas.
- **Referencia de ubicación:** Lurín, Lima — zona entre Av. México, Av. Perú y Av. Independencia, conectada con la Panamericana Sur. Dirección exacta y enlace de mapa: **Pendiente de definición**.

### Políticas — `/politicas`
**Fase 1** — requisito legal, no opcional.

- **Objetivo:** cumplir con la normativa de tratamiento de datos, crítica por el manejo de datos de menores y postulantes.
- **Usuario:** todos; requisito legal.
- **Contenido principal:** privacidad, cookies, tratamiento de datos personales, uso de imágenes y términos.
- **CTA:** Aceptar o configurar cookies.
- **Relación:** enlazada desde el footer, el banner de cookies y toda casilla de consentimiento de formulario.
- **Dependencia:** ningún formulario puede publicarse antes que esta página.

## 5. Resumen de fases

| Fase | Páginas | Qué falta para publicar |
|---|---|---|
| **1** | Inicio, Nosotros, Modelo educativo, Niveles (+3), Distrito Maker, Contacto, Políticas | Identidad visual, datos de contacto oficiales, fotografías propias, textos de políticas |
| **2** | Admisión, Vida escolar, Familias, Trabaja con nosotros, Alianzas | Costos, vacantes, requisitos, fechas, evidencias autorizadas, convenios firmados |

Detalle completo de bloqueos en [backlog.md](backlog.md).

## 6. Reglas transversales de navegación

- **Prioridad móvil.** El menú se diseña primero para celular.
- **WhatsApp persistente** en todas las páginas.
- **Ninguna página sin salida.** Todas ofrecen al menos un camino a Admisión o Contacto.
- **Sin enlaces a páginas vacías.** Lo que no está listo no se anuncia.
- **Ruta a conversión corta:** desde cualquier página, Admisión está a un clic vía el CTA del menú.
