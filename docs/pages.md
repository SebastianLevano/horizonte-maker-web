# Estructura de páginas

Documento principal del proyecto. Define **qué va en cada página y en qué orden**, no el contenido final redactado. La redacción corresponde a la etapa 3 del plan de trabajo.

Los componentes citados están descritos en [components.md](components.md). El orden de las secciones es una decisión de UX: responde al orden en que una familia se hace las preguntas, no al organigrama del colegio.

---

## Concepto transversal: el Distrito Maker

Se define **una sola vez, aquí**. El resto de la documentación lo referencia y ninguna página lo redefine.

El Distrito Maker es el eje transversal del colegio y atraviesa los tres niveles. **No es una actividad extracurricular ni un taller aislado** — este error de encuadre es el riesgo de comunicación más grave del proyecto. Articula cuatro rutas de aprendizaje práctico:

| Ruta | Qué desarrolla | Precaución obligatoria |
|---|---|---|
| **Robótica e Innovación Tecnológica** | Pensamiento computacional, programación, automatización, solución tecnológica | No prometer equipos específicos hasta confirmar el inventario |
| **Diseño y Fabricación** | Creatividad, representación, modelado, fabricación de prototipos | Mostrar siempre uso seguro y supervisado |
| **Gastronomía y Emprendimiento** | Planificación, transformación de alimentos, costos, colaboración, valor para la comunidad | Incluir protocolos de higiene y alergias cuando corresponda |
| **Construcción y Prototipado** | Carpintería, estructuras, medición, seguridad, fabricación | Nunca imágenes de menores usando herramientas sin protección |

**Recorrido del estudiante:** de 1.° a 3.° de Secundaria rotan por las cuatro rutas. Desde 4.° profundizan en una, a partir de su progreso, portafolio, desempeño, autoevaluación y entrevista de orientación con la psicóloga. **La decisión se conversa con el estudiante y la familia.** Nunca se comunica como imposición ni como selección excluyente — cuidar esto en cada texto que toque el tema.

**Secuencia de aprendizaje** (aplica a todo el modelo, no solo al Distrito Maker):
`investigar → diseñar → construir → probar → mejorar → comunicar`

---

## Reglas que aplican a todas las páginas

- **Estructura fija:** Navbar → contenido → bloque de conversión → Footer. WhatsApp flotante siempre presente.
- **Cierre obligatorio:** toda página termina con un CTA hacia Admisión o Contacto.
- **Un H1 por página.**
- **Prioridad móvil** en el orden de las secciones: lo decisivo va arriba.
- **Evidencias:** cada foto o video de estudiantes necesita autorización vigente y debe declarar contexto, edad o grado y aprendizaje desarrollado. Sin esos tres datos, no se publica.
- **Sin stock genérico.** Fotografía sin relación con el modelo educativo es peor que no tener fotografía.

---

## Método de la capa UX

Cada página lleva un bloque **Capa UX** con seis campos. Qué significa cada uno y por qué está:

| Campo | Qué responde |
|---|---|
| **Recorrido** | En qué estado mental llega el usuario y en cuál debe salir. Determina todo lo demás. |
| **Prioridad de contenido** | Qué se lee primero si el usuario solo lee una cosa. Es la decisión que ordena las secciones. |
| **CTA primario** | Una sola acción por página. Si hay dos, no hay ninguna. |
| **CTA secundarios** | Salidas alternativas para quien no está listo para el primario. |
| **Elementos de confianza** | Qué neutraliza la objeción específica de esa página. Sin esto no hay conversión, por bueno que sea el CTA. |
| **Oportunidades de conversión** | Dónde exactamente puede saltar el usuario al embudo. |

### Tres principios que ordenan las secciones en todo el sitio

1. **La objeción antes que el argumento.** Cuando una sección responde un miedo (¿es válido académicamente? ¿es seguro con herramientas?), va **antes** de la sección que presume la ventaja. Un padre con una duda no escucha el argumento hasta que la duda se resuelve.
2. **La prueba después de la promesa, nunca antes.** Las evidencias solo significan algo cuando el usuario ya sabe qué se le prometió.
3. **La conversión se ofrece tres veces:** al inicio (para el decidido), a mitad (para el convencido) y al cierre (para el que leyó todo). Nunca más — un sitio que pide en cada scroll deja de ser creíble.

### Regla CRO transversal

**El usuario decidido no debe leer la página.** En toda página el CTA primario está accesible desde el primer scroll, vía el botón de Admisión del menú o el hero. La página es para quien duda, no para quien ya se decidió.

---

# FASE 1

## Inicio — `/`

- **Propósito:** puerta de entrada del sitio y de la campaña de captación.
- **Objetivo:** que una familia entienda la propuesta en menos de 30 segundos y encuentre su siguiente paso.
- **Mensaje principal:** Aprender haciendo. Crear para transformar.

### Estructura de secciones

**1. Encabezado principal (hero)**
- Título: "Aprender haciendo. Crear para transformar".
- Subtítulo: una educación integral, práctica e innovadora para estudiantes que hacen, resuelven y construyen.
- CTA primario: Agendar una visita. CTA secundario: Conocer el Distrito Maker.
- Imagen o video de estudiantes en acción — nunca un edificio vacío.
- **Sin exceso de texto.** Es la regla explícita del brief para la portada.
- Componentes: `Hero`, `BotonCTA`.

**2. Tres razones para elegir Horizonte Maker**
- Aprendizaje académico riguroso.
- Proyectos que responden a problemas reales.
- Acompañamiento para desarrollar autonomía, integridad y colaboración.
- Exactamente tres. No ampliar la lista — la fuerza está en la síntesis.
- Componentes: `TarjetaRazon`.

**3. Niveles educativos**
- Tres tarjetas: Inicial, Primaria, Secundaria. Cada una con síntesis de una línea y enlace al nivel.
- Componentes: `TarjetaNivel`.

**4. Distrito Maker**
- Presentación de las cuatro rutas y aclaración explícita de que es el eje transversal del colegio.
- Enlace a la página completa.
- Componentes: `TarjetaRutaMaker`, `BotonCTA`.

**5. Así aprenden nuestros estudiantes**
- Secuencia visual de los seis pasos: investigar → diseñar → construir → probar → mejorar → comunicar.
- Componentes: `SecuenciaProceso`.

**6. Evidencias**
- Fotografías y videos de prototipos, exposiciones, proyectos, portafolios y ferias.
- Selección corta y curada, con enlace a Vida escolar.
- Componentes: `TarjetaEvidencia`, `Galeria`.
- **Fase 2** — hasta tener material propio autorizado, esta sección no se publica. No sustituir con stock.

**7. Comunidad y bienestar**
- Tutoría, psicología por nivel, convivencia, acompañamiento a las familias y seguridad en talleres.
- Responde la pregunta silenciosa: "¿estará bien cuidado mi hijo?".
- Componentes: `TarjetaRazon` o bloque de íconos.

**8. Admisión**
- Resumen del proceso en pasos + formulario breve.
- Componentes: `SecuenciaProceso`, `FormularioSolicitudInfo`.

**9. Ubicación y contacto**
- Mapa, referencias de acceso, WhatsApp, correo y horario de atención.
- Componentes: `Mapa`, `BloqueContacto`.

### Capa UX

- **Recorrido:** llega desde búsqueda local ("colegio en Lurín"), de una recomendación o de una campaña. **No sabe nada del colegio y no tiene paciencia.** Debe salir sabiendo qué lo hace distinto y hacia dónde ir.
- **Prioridad de contenido:** (1) qué es este colegio y por qué es distinto · (2) sirve para la edad de mi hijo · (3) cómo lo compruebo · (4) cómo contacto.
- **CTA primario:** Agendar una visita.
- **CTA secundarios:** Conocer el Distrito Maker · WhatsApp · enlaces de nivel.
- **Elementos de confianza:** evidencias reales, comunidad y bienestar, ubicación verificable con mapa, tamaño de sección (15 en Inicial).
- **Oportunidades de conversión:** hero, cierre de Distrito Maker, sección de admisión con formulario, bloque de contacto, WhatsApp persistente.

**Justificación del orden.** Las tres razones van inmediatamente después del hero porque responden "¿por qué tú y no el colegio de la otra cuadra?" mientras el usuario aún decide si sigue leyendo. **Niveles va antes que Distrito Maker** aunque el Distrito sea el diferenciador: un padre que no encuentra la edad de su hijo abandona antes de que le importe la robótica — primero pertenencia, después seducción. La secuencia de aprendizaje precede a las evidencias porque explica *cómo* se produjo lo que se va a mostrar: sin ella, las fotos son decoración. Comunidad y bienestar va justo antes de admisión porque neutraliza la última objeción ("¿estará bien cuidado?") en el momento en que se pide la acción. Ubicación cierra: quien llegó hasta abajo ya quiere saber dónde queda.

### Información pendiente
Fotografías y videos propios · datos de contacto oficiales · dirección exacta y enlace de mapa · testimonios autorizados.

---

## Nosotros — `/nosotros`

- **Propósito:** dar respaldo humano e institucional a la propuesta.
- **Objetivo:** que la familia sienta que detrás del método hay un proyecto serio.
- **Mensaje principal:** un proyecto educativo con raíces en Lurín y vocación de futuro.

### Estructura de secciones

1. **Hero** — identidad institucional, sobrio.
2. **Historia del proyecto** — origen y motivación. Contenido: **Pendiente de definición**; el brief no la narra.
3. **Misión** — educación integral, innovadora y práctica que empodera mediante aprendizaje activo, integrando conocimiento académico, artes técnicas y habilidades para la vida.
4. **Visión** — ser referente en educación innovadora y práctica, formando jóvenes que no solo saben, sino que hacen, resuelven y construyen.
5. **Valores** — emprendimiento, integridad y colaboración. Cada uno explicado con una conducta observable, no con una definición de diccionario.
6. **Perfil del estudiante** — qué caracteriza a un egresado de Horizonte Maker.
7. **Perfil de la escuela** — infraestructura, tamaño de secciones, entorno y vínculo con la comunidad de Lurín.
8. **Autoridades** — **Fase 2**, pendiente de definir qué nombres y perfiles se publican.
9. **Cierre** — CTA a Modelo educativo.

### Componentes
`Hero`, `TarjetaValor`, `BloqueTexto`, `BotonCTA`.

### Capa UX

- **Recorrido:** llega con interés y una duda de fondo: *¿quiénes son ustedes y por qué debería confiarles a mi hijo?* Es la página del escéptico. Sale con la sensación de que hay un proyecto serio detrás, no un negocio improvisado.
- **Prioridad de contenido:** (1) qué proyecto es este y quién lo sostiene · (2) qué persigue · (3) qué tipo de persona forma.
- **CTA primario:** Conocer la propuesta educativa.
- **CTA secundarios:** Agendar visita · WhatsApp.
- **Elementos de confianza:** historia real, valores traducidos a conducta observable, perfil de escuela, arraigo en Lurín, autoridades con nombre y perfil (Fase 2).
- **Oportunidades de conversión:** cierre. **Esta página no presiona** — es de construcción de confianza; pedir conversión a mitad la contradice.

**Justificación del orden.** La historia va antes que misión y visión porque el relato genera confianza y la declaración institucional no: misión y visión leídas en frío suenan a placa de bronce. Los valores van después de misión y visión porque son su aterrizaje, y cada uno se explica con una conducta observable, no con una definición. El perfil del estudiante precede al de la escuela porque le importa más al lector: primero qué será mi hijo, después dónde estará. Autoridades cierra: importa a quien ya se interesó, y su ausencia no rompe la página.

### Restricciones
No publicar organigrama con datos personales, planilla ni presupuesto.

### Información pendiente
Historia del proyecto · nombres y perfiles de autoridades publicables · año de apertura.

---

## Modelo educativo — `/modelo-educativo`

- **Propósito:** explicar el "cómo" a la familia que ya se interesó.
- **Objetivo:** demostrar rigor sin caer en jerga incomprensible.
- **Mensaje principal:** un modelo con fundamento pedagógico, no una moda.

### Estructura de secciones

1. **Hero** — el modelo en una frase.
2. **Articulación con el Currículo Nacional** — va primero: responde la duda de validez oficial antes de hablar de innovación.
3. **Los pilares del modelo** — socio-constructivismo, ABP, STEAM y Reggio Emilia. Cada uno traducido a lenguaje de familia: qué significa en la práctica diaria del aula.
4. **Cómo se evalúa** — evaluación formativa, portafolio, rúbricas y autoevaluación.
5. **Aprendizaje colaborativo** — el trabajo con otros como contenido, no como formato.
6. **Cultura del error** — el error como parte del proceso. Diferenciador conceptual fuerte; merece su propia sección.
7. **La secuencia de aprendizaje** — los seis pasos aplicados.
8. **Cierre** — CTA a Vida escolar ("ver cómo aprenden") y a Distrito Maker.

### Componentes
`Hero`, `TarjetaPilar`, `SecuenciaProceso`, `BloqueTexto`, `BotonCTA`.

### Capa UX

- **Recorrido:** llega el padre que investiga a fondo — el más difícil y el más valioso, porque si se convence, se convence del todo. También el docente postulante. Sale entendiendo que hay fundamento y no moda.
- **Prioridad de contenido:** (1) ¿esto es válido oficialmente? · (2) ¿en qué consiste? · (3) ¿cómo se mide el aprendizaje?
- **CTA primario:** Ver cómo aprenden (→ Vida escolar).
- **CTA secundarios:** Conocer el Distrito Maker · Agendar visita.
- **Elementos de confianza:** articulación con el Currículo Nacional, ejemplos concretos de aula por cada pilar, evaluación explicada, cultura del error.
- **Oportunidades de conversión:** cierre. La conversión natural desde aquí es hacia la evidencia, no hacia el formulario: quien investiga quiere ver antes de pedir.

**Justificación del orden.** **El Currículo Nacional va primero, antes que cualquier pilar pedagógico.** Es contraintuitivo — lo innovador es lo atractivo — pero la primera pregunta silenciosa de un padre ante una propuesta distinta es "¿esto es un colegio de verdad o un experimento con mi hijo?". Hasta que esa duda no se cierra, ABP y STEAM suenan a riesgo, no a ventaja. La evaluación va antes que colaboración y cultura del error porque responde la segunda duda: "si aprenden con proyectos, ¿cómo sé que aprenden?". La cultura del error va al final por diseño: es el concepto más difícil de aceptar para un padre y solo funciona cuando ya hay confianza acumulada. Colocarla arriba haría que la página se leyera como una excusa para el bajo rendimiento.

### Nota de redacción
La regla "nada de lenguaje técnico incomprensible" se juega entera en esta página. Cada término pedagógico se acompaña de un ejemplo concreto de aula.

### Información pendiente
Ejemplos reales de aula por cada pilar.

---

## Niveles educativos — `/niveles`

- **Propósito:** enrutar. Página de tránsito, deliberadamente corta.
- **Objetivo:** que la familia llegue a su nivel en un clic.
- **Mensaje principal:** una propuesta coherente de los 3 a los 16 años.

### Estructura de secciones

1. **Hero** — breve.
2. **Comparativa de los tres niveles** — edades, tamaño de sección y énfasis pedagógico.
3. **Lo común a todos los niveles** — Currículo Nacional, Distrito Maker, tutoría y acompañamiento. Refuerza que el modelo es uno solo.
4. **Acceso a cada nivel** — tres tarjetas.

### Componentes
`Hero`, `TarjetaNivel`, `TablaComparativa`.

### Capa UX

- **Recorrido:** llega desde el menú sabiendo la edad de su hijo. **Es tránsito puro:** entra y sale en segundos.
- **Prioridad de contenido:** (1) cuál es mi nivel · (2) qué comparten todos.
- **CTA primario:** Conocer el nivel.
- **CTA secundarios:** Agendar visita.
- **Elementos de confianza:** tamaños de sección visibles en la comparativa.
- **Oportunidades de conversión:** ninguna propia. Su trabajo es enrutar, no convertir.

**Justificación del orden.** "Lo común a todos los niveles" va **entre** la comparativa y las tarjetas, no al final, porque es lo que evita que el sitio se lea como tres colegios distintos bajo un mismo techo. Una familia con hijos en dos niveles necesita saber que el modelo es uno solo antes de bifurcarse. La página debe ser corta: cada sección extra aquí es fricción entre el usuario y el nivel que busca.

---

## Inicial — `/niveles/inicial`

- **Propósito:** convencer a familias con hijos pequeños de que el juego es aprendizaje serio y el entorno es seguro.
- **Objetivo:** transmitir calidez y seguridad. Es el nivel donde la confianza pesa más que el método.
- **Mensaje principal:** aprender mediante juego, movimiento, exploración, proyectos y expresión.

### Estructura de secciones

1. **Hero** — niños explorando.
2. **Cómo aprenden en Inicial** — juego, movimiento, exploración, proyectos y expresión.
3. **Organización** — 3, 4 y 5 años; 15 niños por sección; tutora y auxiliar por aula. El dato de 15 es un argumento de venta: darle peso visual.
4. **Espacios y experiencias** — atelier, psicomotricidad, patios diferenciados.
5. **Inglés por inmersión.**
6. **Experiencias Maker seguras** — la versión del Distrito Maker adecuada a la edad, con supervisión y protocolos. Enlace a Distrito Maker.
7. **Alimentación y cuidado** — lunch y almuerzo en aula.
8. **Evidencias** — juego en sectores, movimiento, arte, documentación pedagógica y construcciones simples. **Fase 2**.
9. **Cierre** — CTA a vacantes y visita.

### Componentes
`Hero`, `TarjetaCaracteristica`, `TarjetaEvidencia`, `Galeria`, `BotonCTA`.

### Capa UX

- **Recorrido:** llega una madre o padre entregando a su hijo de 3 años por primera vez. **La emoción dominante no es el interés: es el miedo.** Sale sintiendo que su hijo estará cuidado y que el juego tiene intención.
- **Prioridad de contenido:** (1) mi hijo estará seguro y acompañado · (2) el juego es aprendizaje, no guardería · (3) qué más hay.
- **CTA primario:** Agendar una visita. **En este nivel la visita convierte más que cualquier texto:** el miedo se disuelve viendo el aula, no leyendo sobre ella.
- **CTA secundarios:** Consultar vacantes · WhatsApp.
- **Elementos de confianza:** 15 niños por sección, tutora **y** auxiliar por aula, patios diferenciados, alimentación en aula, experiencias Maker con supervisión explícita.
- **Oportunidades de conversión:** hero, tras el bloque de organización, cierre.

**Justificación del orden.** Organización va en segundo lugar, apenas después de "cómo aprenden", y **el 15 por sección se trata como dato protagonista, no como detalle**: es el argumento más potente del nivel y el que responde directamente al miedo. "Tutora y auxiliar" hace el mismo trabajo — son dos adultos por quince niños, y eso es lo que un padre necesita oír. Las experiencias Maker van tarde y siempre acompañadas de la palabra seguridad: en Inicial, "Maker" activa alarma antes que entusiasmo. Alimentación y cuidado cierra el bloque de contenido porque es la última preocupación logística de un padre de niño pequeño y quien llegó hasta ahí ya está convencido de lo pedagógico.

### Restricciones
Máximo cuidado con imágenes de menores. Nada de horarios detallados de aula ni información que permita ubicar a un niño.

### Información pendiente
Horario general del nivel · edad de corte · requisitos de ingreso · fotografías autorizadas.

---

## Primaria — `/niveles/primaria`

- **Propósito:** resolver la falsa oposición entre rigor académico y aprendizaje práctico.
- **Objetivo:** que la familia vea que el proyecto refuerza lo académico en lugar de restarle tiempo.
- **Mensaje principal:** conectar los aprendizajes académicos con proyectos y soluciones concretas.

### Estructura de secciones

1. **Hero.**
2. **Cómo aprenden en Primaria** — ABP aplicado a las áreas del CNEB.
3. **Organización** — 1.° a 6.°; 25 estudiantes por sección; docentes especialistas.
4. **Las áreas del Currículo Nacional** — cobertura completa. Va antes de lo Maker: primero se responde la duda académica.
5. **Dos experiencias Maker semanales** — frecuencia concreta. Enlace a Distrito Maker.
6. **Tutoría y portafolio** — seguimiento individual y registro del progreso.
7. **Comunidad Maker.** Contenido: **Pendiente de definición**; el brief la nombra sin describirla.
8. **Evidencias** — investigaciones, maquetas, prototipos, campañas, presentaciones y trabajo colaborativo. **Fase 2**.
9. **Cierre** — CTA a vacantes y visita.

### Componentes
`Hero`, `TarjetaCaracteristica`, `TarjetaEvidencia`, `Galeria`, `BotonCTA`.

### Capa UX

- **Recorrido:** llega un padre que probablemente compara con un colegio tradicional y sospecha que "proyectos" significa "menos matemáticas". Sale entendiendo que el proyecto **es** el vehículo de lo académico, no su competencia.
- **Prioridad de contenido:** (1) cubren todo lo académico · (2) además lo aplican · (3) cómo lo siguen individualmente.
- **CTA primario:** Agendar una visita.
- **CTA secundarios:** Consultar vacantes · WhatsApp.
- **Elementos de confianza:** cobertura completa del CNEB, 25 por sección, docentes especialistas, tutoría y portafolio, frecuencia concreta (dos experiencias Maker semanales).
- **Oportunidades de conversión:** hero, tras el bloque de áreas del CNEB, cierre.

**Justificación del orden.** **Las áreas del Currículo Nacional van antes que lo Maker.** Es la decisión de orden más importante de la página: si el bloque Maker aparece primero, el padre que sospecha confirma su sospecha y se va. Primero se demuestra que lo académico está completo; solo entonces el proyecto se lee como refuerzo y no como reemplazo. La frecuencia ("dos experiencias por semana") va inmediatamente después con la misma lógica: es un número acotado que prueba que el Maker convive con lo académico en vez de devorarlo. Tutoría y portafolio cierran porque responden "¿y cómo sé cómo va *mi* hijo?" — la pregunta del seguimiento individual, que en Primaria pesa más que en cualquier otro nivel.

### Información pendiente
Qué es la Comunidad Maker · horario general · vacantes por grado · fotografías autorizadas.

---

## Secundaria — `/niveles/secundaria`

- **Propósito:** responder la pregunta que domina en secundaria: "¿y después qué?".
- **Objetivo:** mostrar rigor y orientación vocacional sin prometer resultados que no se pueden garantizar.
- **Mensaje principal:** integrar rigor académico, orientación vocacional y formación técnica progresiva.

### Estructura de secciones

1. **Hero** — estudiantes con proyectos complejos.
2. **Cómo aprenden en Secundaria** — rigor académico y proyectos de mayor complejidad.
3. **Organización** — 1.° a 5.°; 25 estudiantes por sección.
4. **El recorrido en dos etapas** — exploración de las cuatro rutas en 1.°–3.°, especialización desde 4.°. Sección clave de la página.
5. **Cómo se decide la especialización** — progreso, portafolio, desempeño, autoevaluación y entrevista de orientación con la psicóloga. **Redactar con cuidado:** es una conversación con el estudiante y su familia, nunca una imposición ni una selección excluyente.
6. **Las cuatro rutas** — enlace a Distrito Maker.
7. **Evaluación y acompañamiento** — portafolio, rúbricas, autoevaluación y orientación psicológica.
8. **Evidencias** — prototipos funcionales, modelos de negocio, planos, soluciones tecnológicas y proyectos de impacto. **Fase 2**.
9. **Cierre** — CTA a vacantes y a las rutas.

### Componentes
`Hero`, `TarjetaCaracteristica`, `TarjetaRutaMaker`, `SecuenciaProceso`, `TarjetaEvidencia`, `BotonCTA`.

### Capa UX

- **Recorrido:** llegan dos usuarios a la vez, y es la única página del sitio donde eso pasa. El **padre** pregunta "¿y después qué?" con la universidad en la cabeza. El **estudiante** de 12 a 16 años, que aquí sí influye en la decisión familiar, pregunta "¿me va a gustar?". Salen: el padre viendo rigor y orientación; el estudiante, que sus ideas se vuelven cosas.
- **Prioridad de contenido:** (1) el rigor académico está · (2) hay un camino con criterio, no un capricho · (3) hay acompañamiento para elegirlo.
- **CTA primario:** Agendar una visita.
- **CTA secundarios:** Consultar vacantes · Ver las rutas Maker · WhatsApp.
- **Elementos de confianza:** rigor académico explícito, especialización basada en portafolio y entrevista con psicóloga, evaluación con rúbricas y autoevaluación, orientación psicológica.
- **Oportunidades de conversión:** hero, tras el bloque de especialización, cierre.

**Justificación del orden.** El recorrido en dos etapas (exploración 1.°–3.°, especialización desde 4.°) va en el centro de la página porque es lo que un padre de secundaria realmente compra: una estructura con progresión, no un taller suelto. **"Cómo se decide la especialización" va inmediatamente después y no se puede separar de él**: en cuanto un padre lee "especialización", su reflejo es "¿quién decide, y si mi hijo queda fuera de lo que quiere?". Dejar esa pregunta abierta aunque sea una sección más abajo genera la lectura de selección excluyente que el brief prohíbe expresamente. Evaluación y acompañamiento cierran porque el argumento acumulado — hay criterio, hay portafolio, hay psicóloga — solo se sostiene si se muestra el sistema que lo produce.

**Doble audiencia.** Se resuelve por medio, no por texto: la fotografía y las evidencias hablan al estudiante; la estructura y las secciones de evaluación hablan al padre. Ningún texto intenta hablarles a los dos a la vez — ese es el error que produce copy que no le sirve a nadie.

### Restricciones
No prometer empleabilidad, independencia económica ni ingreso universitario. Se comunican capacidades y oportunidades formativas.

### Información pendiente
Horario general · vacantes por grado · fotografías autorizadas.

---

## Distrito Maker — `/distrito-maker`

- **Propósito:** explicar el diferenciador central. La página más importante después de Inicio.
- **Objetivo:** que se entienda como el corazón del colegio, no como un extra.
- **Mensaje principal:** los estudiantes exploran, diseñan, construyen, prueban y mejoran soluciones reales, con acompañamiento docente y protocolos de seguridad.

### Estructura de secciones

1. **Hero** — estudiantes trabajando en un laboratorio.
2. **Qué es el Distrito Maker** — la aclaración va primero, antes que las rutas: eje transversal a los tres niveles, no un taller adicional.
3. **Cómo se vive en cada nivel** — Inicial (experiencias seguras), Primaria (dos por semana), Secundaria (exploración y especialización). Es lo que prueba la transversalidad. Enlaces a los tres niveles.
4. **Las cuatro rutas** — una tarjeta por ruta con qué desarrolla y ejemplos de trabajo:
   - Robótica e Innovación → robots, sensores, programación, proyectos de automatización.
   - Diseño y Fabricación → bocetos, planos, diseño 3D, corte y ensamblaje.
   - Gastronomía y Emprendimiento → productos, campañas, presupuestos y ferias.
   - Construcción y Prototipado → maquetas, mobiliario, pruebas de resistencia y soluciones comunitarias.
5. **Exploración y especialización** — el recorrido de 1.° a 5.° de Secundaria.
6. **Seguridad y supervisión** — protocolos, equipos de protección y acompañamiento docente. Sección obligatoria, no un pie de página: responde la primera objeción de cualquier padre ante la palabra "herramientas".
7. **Qué producen los estudiantes** — productos y evidencias por ruta. **Fase 2**.
8. **Cierre** — CTA a visitar los laboratorios y ver proyectos.

### Componentes
`Hero`, `TarjetaRutaMaker`, `SecuenciaProceso`, `TarjetaEvidencia`, `Galeria`, `BotonCTA`.

### Capa UX

- **Recorrido:** llega desde el hero o desde un nivel, con curiosidad y una alarma de fondo: *herramientas + mi hijo*. Sale entendiendo que el Distrito es el colegio entero, y que es seguro.
- **Prioridad de contenido:** (1) esto no es un taller aparte · (2) es seguro · (3) qué hacen en cada ruta · (4) qué producen.
- **CTA primario:** Visitar los laboratorios (→ Agendar visita).
- **CTA secundarios:** Ver proyectos · enlaces a los tres niveles · WhatsApp.
- **Elementos de confianza:** protocolos y supervisión, transversalidad demostrada nivel por nivel, productos reales con ficha de documentación.
- **Oportunidades de conversión:** hero, tras seguridad, cierre.

**Justificación del orden.** **La aclaración "esto no es un taller adicional" va primero, antes que las cuatro rutas.** Si las rutas abren la página, el usuario las lee como un catálogo de talleres extracurriculares y el error de encuadre más grave del proyecto queda consumado en los primeros diez segundos — imposible de revertir después. "Cómo se vive en cada nivel" va segundo porque es la **prueba** de la transversalidad: sin ese bloque, la aclaración es una afirmación sin respaldo, y el brief prohíbe afirmar sin sostener. Recién entonces llegan las rutas, ya encuadradas.

**Seguridad después de las rutas, no antes.** Es una decisión deliberada: puesta arriba, "seguridad" instala una alarma que el lector aún no tenía. Puesta justo después de que las rutas la despiertan — sierras, cocina, herramientas — la responde en el momento exacto en que aparece. Va antes de "qué producen" porque un padre no valora el prototipo mientras teme por las manos que lo hicieron.

### Restricciones
- No prometer equipos específicos hasta confirmar el inventario. Describir capacidades, no marcas ni modelos.
- Ninguna imagen de menores usando herramientas sin protección.
- Protocolos de higiene y alergias visibles en lo relativo a Gastronomía.

### Información pendiente
Inventario confirmado de equipos y laboratorios · fotografías de los espacios reales · proyectos documentados.

---

## Contacto — `/contacto`

- **Propósito:** eliminar fricción.
- **Objetivo:** que contactar o llegar al colegio no cueste ningún esfuerzo.
- **Mensaje principal:** estamos en Lurín, cerca y accesibles.

### Estructura de secciones

1. **Encabezado breve.**
2. **Canales de contacto** — teléfono, WhatsApp, correo y horario de atención.
3. **Cómo llegar** — mapa, dirección y referencias de acceso: zona entre Av. México, Av. Perú y Av. Independencia, conectada con la Panamericana Sur.
4. **Formulario de contacto.**
5. **Redes sociales** — **Fase 2**.

### Componentes
`BloqueContacto`, `Mapa`, `FormularioSolicitudInfo`, `BotonWhatsApp`.

### Capa UX

- **Recorrido:** llega con **intención alta** — ya decidió comunicarse o ir. Es la página con menor tolerancia a la fricción del sitio. Sale con el mensaje enviado o con la ruta abierta en su teléfono.
- **Prioridad de contenido:** (1) el canal más rápido · (2) cómo llegar · (3) formulario.
- **CTA primario:** Contactar por WhatsApp.
- **CTA secundarios:** Enviar mensaje · Cómo llegar.
- **Elementos de confianza:** dirección verificable en mapa, horarios de atención explícitos, referencias de acceso reales.
- **Oportunidades de conversión:** la página entera es conversión.

**Justificación del orden.** **Los canales van antes que el mapa y el formulario**, y WhatsApp encabeza. Quien entra a Contacto ya se decidió; ofrecerle primero un formulario de nueve campos es fricción pura. El orden va del canal más inmediato al más lento: WhatsApp → teléfono → correo → formulario. El formulario existe para quien prefiere no llamar y para dejar registro, no como camino principal. Los horarios de atención van pegados a los canales, no en el footer: un padre que escribe a las 10 de la noche y no recibe respuesta interpreta silencio como desinterés, salvo que sepa el horario.

### Información pendiente
Dirección exacta · enlace oficial de mapa · teléfonos · WhatsApp oficial · correos · horarios de atención · redes sociales.

---

## Políticas — `/politicas`

- **Propósito:** cumplimiento legal. Crítico por el tratamiento de datos de menores y postulantes.
- **Objetivo:** informar con claridad y permitir configurar el consentimiento.
- **Mensaje principal:** transparencia en el uso de datos.

### Estructura de secciones

1. **Política de privacidad.**
2. **Política de cookies** + configuración.
3. **Tratamiento de datos personales** — con mención expresa al caso de menores de edad.
4. **Uso de imágenes** — cómo se autorizan y cuánto dura la vigencia.
5. **Términos de uso.**

### Componentes
`BloqueTextoLegal`, `BannerCookies`, `IndiceLateral`.

### Capa UX

- **Recorrido:** llega desde una casilla de consentimiento o desde el banner de cookies, casi siempre **a mitad de otra tarea**. Debe encontrar su respuesta y volver.
- **Prioridad de contenido:** (1) qué hacen con mis datos · (2) qué pasa con las fotos de mi hijo · (3) el resto.
- **CTA primario:** Configurar cookies.
- **CTA secundarios:** Volver.
- **Elementos de confianza:** la página entera es un elemento de confianza. Un colegio que explica con claridad qué hace con los datos de un menor comunica seriedad mejor que cualquier titular de marketing.
- **Oportunidades de conversión:** ninguna. **Pedir conversión aquí sería indecoroso.**

**Justificación del orden.** Privacidad y cookies primero porque son lo que trajo al usuario. **Uso de imágenes merece sección propia y visible**, no un párrafo enterrado en el tratamiento de datos: es la preocupación real de un padre en un sitio que publica fotos de niños, y responderla bien convierte una obligación legal en un activo de confianza. Términos cierra: nadie entra aquí buscándolos.

**Nota de UX:** el índice lateral no es decorativo. Es la única forma de que alguien que vino por una pregunta puntual no tenga que leer un documento legal entero.

### Dependencia
Ningún formulario del sitio puede publicarse antes que esta página: todos incluyen una casilla de consentimiento que enlaza aquí.

### Información pendiente
Textos legales completos · razón social y RUC · responsable del tratamiento de datos.

---

# FASE 2

## Vida escolar y proyectos — `/vida-escolar`

- **Propósito:** aportar la prueba de todo lo que el resto del sitio afirma.
- **Objetivo:** convertir la promesa en evidencia verificable.
- **Mensaje principal:** Horizonte Maker crea soluciones con y para Lurín.

### Estructura de secciones

1. **Hero.**
2. **Proyectos destacados** — filtrables por nivel y por ruta Maker.
3. **Ferias y exposiciones.**
4. **Portafolios de estudiantes.**
5. **Proyectos de impacto local** — el vínculo con la comunidad de Lurín.
6. **Noticias.**
7. **Calendario de eventos.**
8. **Cierre** — CTA a ver evidencias e inscribirse a un evento.

### Componentes
`Hero`, `TarjetaEvidencia`, `Galeria`, `TarjetaNoticia`, `Calendario`, `FiltroCategorias`, `FormularioNewsletter`.

### Capa UX

- **Recorrido:** llega el usuario que ya escuchó la promesa y viene a verificarla — el más cercano a convertir de todo el sitio. Sale convencido o no vuelve.
- **Prioridad de contenido:** (1) proyectos reales · (2) impacto en Lurín · (3) noticias y eventos.
- **CTA primario:** Agendar una visita.
- **CTA secundarios:** Inscribirse a un evento · newsletter · WhatsApp.
- **Elementos de confianza:** la página **es** el elemento de confianza del sitio. Cada ficha con contexto, grado y aprendizaje es una afirmación verificable.
- **Oportunidades de conversión:** tras los proyectos destacados, inscripción a eventos, cierre.

**Justificación del orden.** Proyectos destacados abren porque son la prueba más directa. **Los proyectos de impacto local van antes que noticias** aunque las noticias sean más frescas: el impacto en Lurín es lo que respalda "creamos soluciones con y para la comunidad" — el posicionamiento — mientras que una noticia es actualidad y caduca. Noticias y calendario cierran: son contenido de retorno, para quien ya conoce el colegio, no para quien lo está evaluando.

**El filtro por nivel y ruta no es un adorno.** Un padre de Inicial no necesita ver prototipos de 5.° de Secundaria: le confirman que el colegio no es para su hijo. El filtro es lo que hace que la misma página sirva a tres audiencias distintas.

### Regla de contenido
Cada evidencia declara **contexto, edad o grado y aprendizaje desarrollado**. Sin esos tres datos es decoración, no prueba.

### Información pendiente
Fotografías y videos con autorización · proyectos documentados · calendario escolar · noticias.

---

## Admisión — `/admision`

- **Propósito:** convertir. Destino final del embudo.
- **Objetivo:** que iniciar el proceso sea evidente y sin dudas pendientes.
- **Mensaje principal:** conoce una escuela donde el conocimiento se convierte en acción.

### Estructura de secciones

1. **Hero** — con CTA directo.
2. **El proceso paso a paso** — contacto → visita o charla → entrevista informativa → evaluación o entrevista correspondiente → vacante → matrícula. *(Confirmado.)*
3. **Requisitos por nivel** — **Pendiente de definición**.
4. **Vacantes disponibles** — **Pendiente de definición**.
5. **Inversión** — matrícula, pensión y número de cuotas. **Pendiente de definición.** Publicar solo cuando esté aprobado; el brief pide expresamente no anticipar montos.
6. **Fechas de campaña** — **Pendiente de definición**.
7. **Preguntas frecuentes.**
8. **Formulario de solicitud de información.**
9. **Agendar una visita.**

### Componentes
`Hero`, `SecuenciaProceso`, `TablaRequisitos`, `AcordeonFAQ`, `FormularioSolicitudInfo`, `FormularioAgendaVisita`, `BotonWhatsApp`.

### Capa UX

- **Recorrido:** llega decidido o casi. **Es el final del embudo y la página con más fricción potencial del sitio.** Sale con el formulario enviado o con la visita agendada.
- **Prioridad de contenido:** (1) cómo empiezo · (2) qué necesito · (3) cuánto cuesta · (4) dudas.
- **CTA primario:** Solicitar información.
- **CTA secundarios:** Agendar visita · WhatsApp.
- **Elementos de confianza:** proceso explícito paso a paso, requisitos claros, FAQ que responde lo incómodo sin rodeos, costos publicados cuando existan.
- **Oportunidades de conversión:** hero, tras el proceso, FAQ, dos formularios al cierre.

**Justificación del orden.** El proceso paso a paso abre porque convierte una decisión grande e intimidante en seis pasos manejables: "matricular a mi hijo" es una montaña, "agendar una charla" no. Requisitos y vacantes siguen: son filtros — quien no califica debe saberlo aquí y no después de invertir tiempo.

**La inversión va en el centro, ni escondida ni primera.** Ocultarla al final destruye la confianza construida en todo el sitio: un padre que no encuentra el precio asume que es alto y que se lo están escamoteando. Ponerla primero convierte la página en una lista de precios y desperdicia el argumento pedagógico. Va después de que el valor está explicado y antes de que el usuario tenga que buscarla.

**La FAQ va justo antes del formulario, y es CRO puro:** es el último lugar donde se puede desactivar la objeción que impide llenar el campo. Debe responder lo incómodo — costos, devoluciones, criterios — sin rodeos. Una FAQ que solo responde lo fácil no sirve para nada.

**Advertencia CRO.** Mientras los costos estén pendientes, esta página convierte peor de lo que podría, y ninguna decisión de diseño lo compensa. La falta del dato es el problema, no su presentación.

### Información pendiente
Es la página más bloqueada del sitio. Falta: montos de matrícula y pensión · número de cuotas · edad de corte · requisitos por nivel · documentos obligatorios · criterios de admisión · fechas de campaña · vacantes por grado · año de apertura · descuentos, becas y convenios · política de devolución o reserva de vacante · datos de contacto de admisión.

---

## Familias — `/familias`

- **Propósito:** mostrar que el acompañamiento incluye a los padres.
- **Objetivo:** reforzar la confianza en la etapa final de la decisión.
- **Mensaje principal:** acompañamos también a las familias.

### Estructura de secciones

1. **Hero.**
2. **Acompañamiento a las familias.**
3. **Escuela para padres.**
4. **Canales de comunicación** — cómo se comunica el colegio con las familias.
5. **Bienestar y convivencia** — tutoría, psicología por nivel y convivencia escolar.
6. **Preguntas frecuentes de familias.**
7. **Cierre** — CTA a contactar admisión.

### Componentes
`Hero`, `TarjetaCaracteristica`, `AcordeonFAQ`, `BotonCTA`.

### Capa UX

- **Recorrido:** llega en la etapa final de la decisión, comparando dos o tres colegios que ya le parecen buenos. **La pregunta ya no es pedagógica: es "¿voy a estar solo en esto?".** Sale sabiendo que el colegio también lo acompaña a él.
- **Prioridad de contenido:** (1) no estás solo · (2) así nos comunicamos · (3) así cuidamos la convivencia.
- **CTA primario:** Contactar a admisión.
- **CTA secundarios:** Agendar visita · WhatsApp.
- **Elementos de confianza:** escuela para padres, canales de comunicación concretos, psicología por nivel, protocolo de convivencia.
- **Oportunidades de conversión:** cierre.

**Justificación del orden.** El acompañamiento abre porque es la promesa central. **Los canales de comunicación van antes que bienestar y convivencia** aunque parezcan lo menor: son la queja número uno de las familias con cualquier colegio — "nunca sé qué pasa con mi hijo" — y responderla explícitamente es un diferenciador real y barato. Bienestar y convivencia cierran el bloque; la FAQ va antes del CTA con la misma lógica que en Admisión: desactivar la última duda antes de pedir la acción.

**Página infravalorada.** Está en Fase 2 por falta de contenido, pero atiende el momento de mayor intención de compra del recorrido. Conviene desbloquear el ítem 30 del backlog antes de lo que su prioridad sugiere.

### Información pendiente
Programa de escuela para padres · canales de comunicación oficiales · protocolo de convivencia publicable.

---

## Trabaja con nosotros — `/trabaja-con-nosotros`

- **Propósito:** atraer docentes alineados con el modelo.
- **Objetivo:** filtrar por afinidad antes de que postulen.
- **Mensaje principal:** buscamos diseñadores de experiencias de aprendizaje.

### Estructura de secciones

1. **Hero.**
2. **Cómo se trabaja aquí** — cultura de trabajo y modelo educativo. Enlace a Modelo educativo.
3. **Perfil docente esperado.**
4. **Desarrollo profesional** — inducción y formación continua.
5. **Proceso de selección.**
6. **Vacantes abiertas** — **Pendiente de definición**.
7. **Formulario de postulación.**

### Componentes
`Hero`, `TarjetaCaracteristica`, `SecuenciaProceso`, `TarjetaVacante`, `FormularioPostulacion`.

### Capa UX

- **Recorrido:** llega un docente que puede venir de un colegio tradicional. Sale sabiendo si encaja — **incluido saber que no encaja**, que es un resultado deseable.
- **Prioridad de contenido:** (1) cómo se trabaja aquí · (2) qué perfil buscan · (3) qué gano yo · (4) vacantes.
- **CTA primario:** Enviar CV.
- **CTA secundarios:** Conocer el modelo educativo.
- **Elementos de confianza:** modelo explicado, proceso de selección transparente, inducción y desarrollo profesional.
- **Oportunidades de conversión:** tras las vacantes, formulario al cierre.

**Justificación del orden.** **"Cómo se trabaja aquí" va primero y las vacantes casi al final** — lo contrario de una bolsa de empleo, y a propósito. El objetivo no es maximizar postulaciones sino maximizar postulaciones **alineadas**: un docente que no comparte el modelo y postula solo cuesta tiempo de selección. La página filtra antes de invitar. El desarrollo profesional va antes que el proceso de selección porque responde "¿qué gano yo?" — y sin salario publicable (el brief lo prohíbe), la formación continua **es** la propuesta de valor de este empleador.

### Restricciones
No publicar sueldos, bandas salariales, planilla ni presupuesto.

### Información pendiente
Vacantes reales · perfil docente detallado · proceso de selección definido · correo de recepción de CV.

---

## Alianzas — `/alianzas`

- **Propósito:** mostrar la conexión con el sector productivo y la comunidad.
- **Objetivo:** dar respaldo y abrir la puerta a nuevas colaboraciones.
- **Mensaje principal:** la escuela conecta aprendizaje, comunidad y sector productivo.

### Estructura de secciones

1. **Hero.**
2. **Por qué aliarse con Horizonte Maker** — objetivos institucionales y proyectos.
3. **Convenios vigentes** — solo firmados. **Pendiente de definición**.
4. **Alianzas proyectadas** — bloque separado y rotulado como tal.
5. **Modalidades de colaboración** — convenio, mentoría o desafío.
6. **Formulario de propuesta.**

### Componentes
`Hero`, `TarjetaAliado`, `TarjetaCaracteristica`, `FormularioAlianza`.

### Capa UX

- **Recorrido:** llegan dos usuarios distintos. Una **organización** evaluando si colaborar. Y una **familia** que vino a verificar el respaldo institucional — tráfico que nadie planifica pero que ocurre. Salen: la organización con una propuesta enviada; la familia, con la sensación de que el colegio está conectado con el mundo real.
- **Prioridad de contenido:** (1) por qué aliarse · (2) quién ya está · (3) cómo se colabora.
- **CTA primario:** Proponer una alianza.
- **CTA secundarios:** Conocer el Distrito Maker.
- **Elementos de confianza:** convenios vigentes reales, modalidades concretas, proyectos conjuntos.
- **Oportunidades de conversión:** cierre.

**Justificación del orden.** "Por qué aliarse" abre porque una organización necesita saber qué gana antes de mirar quién más está. Convenios vigentes van antes que alianzas proyectadas por una razón que no es de diseño sino de honestidad: **el orden mismo comunica la distinción.** Lo firmado primero, lo aspiracional después, rotulado y separado — nunca entremezclados en una sola grilla de logos.

**Riesgo específico de esta página.** Es donde el brief es más fácil de violar sin querer: una grilla de logos es el patrón por defecto en cualquier sitio institucional, y ese patrón hace exactamente lo que el brief prohíbe — presentar como aliado a quien no lo es. Si al lanzar no hay convenios firmados, **la sección "vigentes" no existe**; no se rellena con proyectados disfrazados.

### Restricción crítica
No afirmar alianzas sin convenio firmado o autorización. Los dos bloques (vigentes / proyectadas) deben ser **visualmente distintos e inequívocamente rotulados**. Sin convenio no se usa el logo ni el nombre de la organización.

### Información pendiente
Lista real de convenios firmados · autorizaciones de uso de logo · organizaciones con las que se busca colaborar.

---

## Formularios del sitio

Cinco formularios. Los requisitos funcionales son idénticos en todos.

| Formulario | Campos mínimos | Dónde vive |
|---|---|---|
| **Solicitud de información** | Nombre del apoderado; nombre y edad del estudiante; nivel o grado; teléfono; correo; distrito; año de ingreso; mensaje; autorización de datos | Inicio, Admisión, Contacto |
| **Agenda de visita** | Los anteriores + fecha preferida + número de asistentes | Admisión |
| **Trabaja con nosotros** | Nombre; especialidad; experiencia; teléfono; correo; CV; enlace a portafolio; consentimiento | Trabaja con nosotros |
| **Propuesta de alianza** | Organización; responsable; tipo de colaboración; propuesta; datos de contacto | Alianzas |
| **Newsletter / eventos** | Nombre; correo; intereses; consentimiento | Vida escolar, Footer |

### Requisitos funcionales (todos)

- Validación de campos con mensajes de error claros.
- Protección antispam.
- Confirmación automática al usuario.
- Notificación al responsable interno.
- Registro de fecha, campaña y página de origen.
- Casilla de consentimiento para tratamiento de datos personales, con enlace a Políticas.
- **Destino:** correo institucional + registro para seguimiento.

### Bloqueo
Ningún formulario se publica antes que la página de Políticas ni antes de tener el correo institucional de destino y el responsable interno de cada uno definidos.
