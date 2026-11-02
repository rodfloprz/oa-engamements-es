# Guía de engagements de Observability Architects

Portafolio de servicios para acelerar el valor de su plataforma de observabilidad. Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026.

# Cómo trabajamos

Cada engagement sigue un modelo de trabajo común: se parte de sus objetivos, se acuerda una línea base, se ejecuta con entregables claros y se cierra midiendo resultados. Este documento resume el recorrido y la cadencia de acompañamiento.

### Recorrido del cliente

| Etapa | Foco | Qué hace Grafana |
|---|---|---|
| Planning & Assessment | Contexto, panorama técnico y stakeholders | Sesiones de descubrimiento, línea base de madurez, Success Plan |
| Adoption | Despliegue inicial, configuración y fundación técnica | Guía de arquitectura, arranque, buenas prácticas |
| Enablement | Entrenamiento y guía para elevar la experiencia de sus equipos | Entrega de capacitación y workshops |
| Growth | Escalar el uso, optimizar costos y ampliar casos de uso | Optimización de costos, funciones avanzadas |
| Value Realization | Retorno, expansión y revisiones de negocio | Revisiones ejecutivas, valor medido, planeación estratégica |

> El Success Planning se completa primero, aunque sea en versión preliminar. Sin un plan y una línea base compartidos, ningún otro engagement tiene una base sólida para medir valor.

### Modelo de trabajo en seis pasos

| Paso | Qué ocurre | Qué queda acordado |
|---|---|---|
| 1. Engage | Identificamos el evento que motiva el engagement y validamos que aplique | Motivo y patrocinador |
| 2. Discover | Sesión de descubrimiento, revisión de contexto y mapeo de stakeholders | Contexto, retos y participantes |
| 3. Plan | Definimos alcance, cronograma, KPIs y líneas base, en conjunto con su equipo | Kickoff firmado con KPIs y línea base |
| 4. Execute | Workshops, sesiones técnicas e implementación guiada, con revisiones intermedias | Notas de progreso quincenales |
| 5. Validate | Comparamos los KPIs con la línea base y documentamos los logros | Evidencia de resultados |
| 6. Report | Reporte de cierre, revisión trimestral y valor calculado | Reporte aceptado y siguientes pasos |

### Cadencia de acompañamiento

| Frecuencia | Reunión | Foco | Participantes |
|---|---|---|---|
| Semanal o quincenal | Reunión de cadencia | Progreso técnico y bloqueos | Equipos técnicos y champions |
| Quincenal o mensual | Check-in técnico | Avance y habilitación | Grafana y champions técnicos |
| Mensual | Revisión del Success Plan | KPIs y optimización | Grafana y responsables de negocio |
| Trimestral | Executive Business Review | Resultados de negocio y roadmap | Patrocinadores ejecutivos |
| Anual | Evaluación de madurez | Evolución de la plataforma | Todos los stakeholders |

### Principios de trabajo

- Línea base antes de intervenir: si un KPI no tiene valor inicial, fuente y fecha, no se promete mejora.
- Resultados del cliente, no entregables de Grafana: el plan se mide en MTTR, costo y adopción.
- Al menos dos champions técnicos y un patrocinador por engagement.
- Respeto a sus ventanas de cambio y a sus procesos de aprobación y seguridad.
- Cada engagement termina con reporte, actualización del Success Plan y un siguiente paso recomendado.
- Cada cifra de valor lleva su fuente, su periodo y su nivel de evidencia.

# Cómo medimos el valor

Medimos el valor con KPIs acordados antes de empezar. Nunca se reclama una mejora sin datos de antes y después con la misma definición y metodología: sin línea base documentada, no hay valor demostrable.

### Los cuatro drivers de valor

| Driver | Qué miramos |
|---|---|
| Reliability | Reducción de MTTR, tiempo de caída evitado, cumplimiento de SLA, menos incidentes visibles para sus clientes |
| Cost efficiency | Reducción de DPM y cardinalidad, consolidación de herramientas, ahorro de Adaptive Telemetry, horas de ingeniería recuperadas |
| Developer velocity | Menor MTTD, mayor frecuencia de despliegue, menor tiempo de onboarding, menos ruido de alertas |
| Business growth | Ingreso protegido frente a caídas, mejora de experiencia del cliente, menor time-to-market, penalidades evitadas |

### Niveles de evidencia

Cada cifra lleva su nivel, para que un estimado no se presente con el mismo peso que una factura.

| Nivel | Qué es | Ejemplos | Cómo se presenta |
|---|---|---|---|
| A | Documento contable o contractual | Facturas, dashboard de facturación, contratos cancelados | Como hecho, con adjunto |
| B | Sistema de registro con línea base y definición estable | ServiceNow o Jira, Grafana SLO, PagerDuty o Alertmanager | Como atribuible, con antes y después |
| C | Estimado validado por el cliente | Encuestas, estimados de liderazgo de ingeniería | Como estimado, con rango y supuestos |
| D | Proyección o hipótesis | Ahorro de una consolidación aún no ejecutada | Solo en planes; no entra en el ROI reportado |

### Protocolo de línea base

1. Definir la métrica con precisión (por ejemplo, MTTR como mediana, solo incidentes graves).
2. Elegir el sistema de registro y la persona responsable del dato en su organización.
3. Congelar la ventana: al menos 90 días previos al arranque, con las mismas severidades.
4. Capturar la evidencia con fecha y archivarla.
5. Acordar línea base y meta dentro del Success Plan.
6. Medir de nuevo al cierre con una ventana de la misma duración y la misma definición.

### Fórmulas y reglas de evidencia

| Métrica | Fórmula | Fuente de evidencia | Notas de rigor | Nivel típico |
|---|---|---|---|---|
| Valor de reducción de MTTR | (MTTR base − MTTR actual) × incidentes al año × ingreso por hora afectado | Tickets (misma severidad), postmortems, historial de paging | Usar mediana, no promedio, y la misma definición en ambos periodos. Acordar el % de ingreso realmente afectado. | B |
| Ingreso protegido | Horas de caída evitadas × ingreso por hora | Status page, registros de incidentes, synthetic checks | El cliente valida su propio ingreso por hora. | B |
| Ahorro en Grafana Cloud | (DPM base − DPM actual) × costo por DPM + ahorro de retención + ahorro de Adaptive Telemetry no incluido en la reducción de DPM | Dashboard de facturación, facturas | Usar la tarifa efectiva de la factura. No contar dos veces el mismo ahorro. | A |
| Ahorro por consolidación de herramientas | Σ licencias retiradas − costo incremental de Grafana | Contratos cancelados, facturas antes y después | Requiere retiro confirmado, no proyectado. | A |
| Productividad de ingeniería recuperada | (Horas antes − horas después) × personas afectadas × costo por hora con carga | Encuestas, estimados de liderazgo, líneas de tiempo de postmortems | Se presenta como estimado basado en entrevistas. | C |
| Reducción de ruido de alertas | (Alertas antes − alertas después) ÷ alertas antes × 100 | Registros de PagerDuty o Alertmanager, historial de Grafana | Validar que no aumentaron los falsos negativos. | B |
| Mejora de SLO attainment | SLO actual % − SLO base % | Dashboard de Grafana SLO, términos de SLA | Requiere SLOs definidos antes del engagement. | B |
| Penalidades de SLA evitadas | Incumplimientos al año antes × penalidad promedio | Contrato SLA e historial de penalidades pagadas | Solo con contrato y penalidades documentadas. | A o B |
| Tiempo de onboarding con CoE | (Días antes − días después) × equipos al año × costo diario por persona | Equipos incorporados antes y después, encuestas | Medir con al menos dos equipos antes y dos después. | C |

### Ejemplos numéricos

| Caso | Cálculo | Resultado anual |
|---|---|---|
| Reducción de MTTR de 60 a 30 minutos | 0.5 h × 48 incidentes × USD 50,000 por hora | USD 1,200,000 |
| Productividad recuperada | 0.5 h × 48 incidentes × 5 personas × USD 120 por hora | USD 14,400 |
| Consolidación de herramientas | Herramienta A 200K + herramienta B 150K − Grafana 250K | USD 100,000 |

> Los ejemplos son ilustrativos. Cada cifra real se calcula con los datos y las definiciones de su organización.

### Reglas para no inflar el retorno

- No duplicar horas: si el mismo tiempo de incidente alimenta dos beneficios, documentar por qué son flujos distintos.
- Atribución explícita: si hubo otros cambios en el periodo, acordar qué parte se atribuye al engagement.
- Mediana, no promedio, y siempre la misma severidad en ambos periodos.
- Lo proyectado no cuenta: una consolidación sin retiro confirmado es nivel D.
- Mostrar rangos con supuestos, no una cifra con falsa precisión.
- Sus datos los valida su equipo: ingreso por hora, costo por persona y penalidades.

### Cálculo del retorno

ROI verificado = beneficios anuales con evidencia A y B ÷ costo anual del contrato. ROI ampliado = incluye además el nivel C, mostrado por separado y marcado como estimado. El nivel D no entra.

### Plantilla de declaración de valor

- [Cliente] redujo su MTTR de [X min] a [Y min] ([Z%] de mejora) en los últimos 12 meses. Fuente: datos de tickets, mismo método de medición en ambos periodos.
- Con Adaptive Metrics y la optimización de cardinalidad, [Cliente] redujo su DPM en [X%], con un ahorro anual de USD [Y]. Fuente: dashboard de facturación y facturas.
- La consolidación de [N herramientas] eliminó USD [X] en licencias anuales, con un ahorro neto de USD [Y] tras el costo de Grafana. Fuente: contratos cancelados.
- Los SLOs de los [N] servicios críticos mantienen un attainment de [X%] en el último trimestre. Fuente: dashboard de SLO y contrato de SLA.

# Catálogo de engagements

23 engagements organizados en 6 fases.

| Fase | Engagement | Estado | Esfuerzo estimado | Resumen |
|---|---|---|---|---|
| Plan & Assess | Success Planning | Disponible | 16–24 h | Definimos junto con su equipo un conjunto de objetivos que alinean el uso de Grafana con sus metas de negocio y técnicas. El resultado es un plan vivo y compartido, con métricas, responsables e hitos. |
| Plan & Assess | Cloud Health Check | Disponible | 4–8 h | Revisión proactiva del estado de su despliegue de Grafana Cloud: uso, desempeño, configuración, seguridad y alineación con buenas prácticas. Termina con una lista priorizada de mejoras. |
| Plan & Assess | Observability Maturity Assessment | Disponible | 8–16 h | Evaluamos su estado actual contra nueve dimensiones de observabilidad, con evidencia y puntuación, y entregamos un plan de mejora de 90 días priorizado. |
| Enable & Adopt | Dashboard Design & Best Practices | Disponible | 8–16 h | Enseñamos a su equipo a diseñar y consumir dashboards que conectan señales técnicas con resultados de negocio, con foco en audiencia, claridad y mantenimiento. |
| Enable & Adopt | Enterprise Learning Path | Disponible | 4–6 h | Diseñamos una ruta de aprendizaje por rol y una lista de habilitaciones alineadas a su Success Plan, para acelerar la adopción y reducir la dependencia de unas pocas personas. |
| Enable & Adopt | Grafana Assistant Best Practices | Disponible | 4–8 h | Enseñamos a usar Grafana Assistant de forma efectiva en su entorno, para ganar claridad y acelerar el troubleshooting, con criterios para verificar sus respuestas contra la telemetría. |
| Enable & Adopt | Grafana Day | Disponible | 16–24 h | Sesiones interactivas de un día completo, personalizadas para impulsar una habilitación amplia o enfocarse en los temas clave de su organización. |
| Enable & Adopt | Grafana Enterprise Best Practices | Disponible | 4–8 h | Workshop educativo para clientes de Grafana Enterprise autogestionado que usan Prometheus o Mimir, Loki, Tempo y OpenTelemetry. Enseña el flujo detectar, acotar, investigar y explicar, sin trabajo práctico de su equipo. |
| Enable & Adopt | Grafana MCP: Capabilities and Usage | Disponible | 4–6 h | Workshop sobre las capacidades de MCP de Grafana: opciones hospedada y autogestionada, seguridad y consideraciones de uso compartido de datos, y cómo los clientes de IA usan el contexto de Grafana verificando contra la telemetría. |
| Reliability & Response | SLOs in Practice | Disponible | 16–24 h | Definimos SLIs y SLOs para sus journeys clave, establecemos presupuestos de error, construimos dashboards de SLO y conectamos las alertas a esos presupuestos para alinear la operación con el impacto en el usuario. |
| Reliability & Response | Incident Management | En desarrollo | 16–24 h | Creamos runbooks, un flujo de incident command, revisiones posteriores a incidentes e integraciones de herramientas para una respuesta ágil y consistente. |
| Data & Architecture | Telemetry Management | Disponible | 40–80 h | Establecemos y ampliamos la instrumentación en aplicaciones, infraestructura y user journeys. Estandarizamos en OpenTelemetry y Alloy, normalizamos labels y diseñamos una topología de collectors con enrutamiento, muestreo y transformaciones. |
| Data & Architecture | BYOC Onboarding | Disponible | 24–48 h | Acompañamos el ciclo de incorporación de un despliegue en su propia nube (BYOC) en cuatro etapas: preparación (readiness), seguimiento de la construcción, validación de aceptación (UAT) y entrega de la cuenta. |
| Data & Architecture | Labeling Best Practices | Disponible | 10–18 h | Definimos una estrategia de labels consistente para métricas, logs y trazas, con nombres, valores permitidos y límites de cardinalidad, para poder correlacionar señales y controlar el costo. |
| Cost, Security & Governance | Grafana Cloud Cost Fundamentals | Disponible | 2–4 h | Explicamos cómo se factura Grafana Cloud y qué opciones existen para optimizar y ahorrar costos, para que sus equipos técnicos y financieros entiendan los factores que determinan su factura. |
| Cost, Security & Governance | Cost Optimization | Disponible | 16–32 h | Ajustamos retención, muestreo y cardinalidad, introducimos dashboards de uso para ver volumen, costo y ahorros, y definimos alertas para presupuestos, con un ahorro medido en dólares. |
| Cost, Security & Governance | Observability Center of Excellence | Disponible | 60–120 h | Establecemos una práctica central de observabilidad con gobierno, estándares y champions. Unificamos dashboards, alertas y SLOs entre equipos. Se adapta en versión ligera según el tamaño y la madurez de la organización. |
| Cost, Security & Governance | Security & Access Control | Disponible | 16–24 h | Diseñamos control de acceso basado en roles y SSO para Grafana y sus fuentes de datos, límites entre tenants, gestión de secretos y registros de auditoría para un acceso seguro a los datos. |
| Cost, Security & Governance | Adaptive Metrics Deep Dive | Disponible | 4–8 h | Workshop sobre Adaptive Metrics de Grafana Cloud: recomendaciones, agregación y comportamiento de consultas, auto-apply, exemptions, segments y gestión por API y Terraform. No requiere trabajo práctico ni cambios en producción. |
| Growth & Value | Executive Business Review | En desarrollo | 8–16 h | Revisión trimestral que conecta confiabilidad con resultados de negocio: tendencias de SLO, impacto de incidentes en ingresos y experiencia, y retorno del trabajo de observabilidad. Dirigida a patrocinadores ejecutivos. |
| Growth & Value | Product Roadmap Review | En desarrollo | 4–8 h | Presentamos el roadmap de producto de Grafana y alineamos las capacidades futuras con sus casos de uso y planes, registrando su retroalimentación para el equipo de producto. |
| Growth & Value | Capability & Adoption Review | Disponible | 4–8 h | Revisamos qué capacidades de Grafana usan hoy y cuáles tienen disponibles sin aprovechar, y proponemos cómo adoptar las que más contribuyen a sus resultados, ordenadas por caso de uso. |
| Growth & Value | VoC Progress Review | En desarrollo | 4–8 h | Revisión del avance de su voz del cliente (VoC): estado de las solicitudes y comentarios que han hecho llegar a Grafana, respuestas del equipo de producto y siguientes pasos acordados. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

# Plan & Assess: Empezar con claridad

## Success Planning

| Dato | Valor |
|---|---|
| Fase | Plan & Assess: Empezar con claridad |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Patrocinador ejecutivo; Technical Champion; Líder de plataforma o SRE; Responsable de negocio del área usuaria |

Definimos junto con su equipo un conjunto de objetivos que alinean el uso de Grafana con sus metas de negocio y técnicas. El resultado es un plan vivo y compartido, con métricas, responsables e hitos.

### Cuándo conviene

Es el punto de partida de toda la relación: se completa antes de cualquier otro engagement, aunque sea en versión preliminar.

### Retos que resuelve

- Falta de alineación entre lo que se adquirió y lo que el negocio necesita
- Sin métricas de éxito definidas desde el inicio
- Revisiones reactivas, sin una hoja de ruta compartida
- Dificultad para demostrar valor en la renovación

### Qué obtendrá

### Entregables obligatorios

- Documento del Success Plan
- Criterios técnicos de éxito con metas

### Entregables opcionales

- Resultados de negocio deseados (3 a 5)
- Hitos y cronograma
- Mapa de gobernanza y stakeholders
- Registro inicial de riesgos

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Revisión de contexto: contrato, consumo e historial | 2–3 h |
| 2 | Sesión de descubrimiento con patrocinador y champion técnico | 1–2 h |
| 3 | Borrador del plan: resultados, criterios e hitos | 3–4 h |
| 4 | Revisión interna de alineación comercial y técnica | 1 h |
| 5 | Sesión de co-creación con su equipo | 2 h |
| 6 | Firma del patrocinador y publicación del plan | 1 h |
| — | Revisión mensual o trimestral del plan (recurrente) | 1 h por ciclo |

Esfuerzo total estimado: 16–24 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Patrocinador ejecutivo
- Participantes: Technical Champion
- Participantes: Líder de plataforma o SRE
- Participantes: Responsable de negocio del área usuaria
- Información y accesos: Objetivos estratégicos u OKRs en los que participa la observabilidad
- Información y accesos: Lista de equipos y servicios prioritarios
- Información y accesos: Datos recientes de incidentes y costos

### Cómo medimos el éxito

- % de criterios de éxito cumplidos a los 6 meses
- MTTR objetivo definido y medible
- Adopción de usuarios (meta contra actual)
- Cobertura de servicios instrumentados
- Reducción de herramientas redundantes

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Objetivos y expectativas de negocio | Entender qué resultados de negocio persigue su organización y qué iniciativas estratégicas dependen de la observabilidad, para que el Success Plan y los engagements se midan contra lo que importa. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |
| Datos para el cálculo de valor y línea base de KPIs | Reunir los valores de partida (con definición, ventana y fuente) y los datos financieros que su equipo valida, para poder demostrar el retorno con evidencia. |

## Cloud Health Check

| Dato | Valor |
|---|---|
| Fase | Plan & Assess: Empezar con claridad |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Administrador de Grafana; Líder de plataforma |

Revisión proactiva del estado de su despliegue de Grafana Cloud: uso, desempeño, configuración, seguridad y alineación con buenas prácticas. Termina con una lista priorizada de mejoras.

### Cuándo conviene

Recomendado al inicio de la relación, antes de un proyecto de costos, o cuando sospechan que el entorno se degradó sin que nadie lo note.

### Retos que resuelve

- Entornos degradados sin que nadie lo sepa
- Configuraciones subóptimas acumuladas
- Brechas de seguridad no identificadas
- Costo alto sin visibilidad de la causa raíz

### Qué obtendrá

### Entregables obligatorios

- Reporte de Health Check con áreas en semáforo
- Lista priorizada de hallazgos

### Entregables opcionales

- Recomendaciones de siguientes engagements

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Revisión de dashboards de uso, facturación y cardinalidad | 1–2 h |
| 2 | Sesión con su equipo: recorrido del entorno actual | 2 h |
| 3 | Análisis de cardinalidad, DPM, alertas y accesos | 1 h |
| 4 | Redacción y entrega del reporte | 1–2 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Administrador de Grafana
- Participantes: Líder de plataforma
- Información y accesos: Acceso de lectura a la stack de Grafana Cloud
- Información y accesos: Acceso a los dashboards de facturación y uso
- Información y accesos: Lista de alertas y equipos responsables

### Cómo medimos el éxito

- Health score por área (0 a 100)
- Nº de configuraciones críticas por corregir
- DPM actual contra el esperado
- Nº de alertas sin responsable

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |
| Costos y consumo de observabilidad | Levantar el consumo actual, los principales generadores de costo y el nivel de gobierno de costos, para explicar la factura y priorizar las palancas de ahorro. |
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |

## Observability Maturity Assessment

| Dato | Valor |
|---|---|
| Fase | Plan & Assess: Empezar con claridad |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 8–16 h |
| Participantes sugeridos | Patrocinador ejecutivo; Líderes de SRE, plataforma, seguridad y desarrollo; Technical Champion |

Evaluamos su estado actual contra nueve dimensiones de observabilidad, con evidencia y puntuación, y entregamos un plan de mejora de 90 días priorizado.

### Cuándo conviene

Cuando necesitan una línea base objetiva para decidir dónde invertir, o demostrar el avance año contra año.

### Retos que resuelve

- Sin línea base para medir el progreso
- Conversaciones técnicas en el nivel equivocado
- Inversiones en las áreas con menor retorno
- Incapacidad de demostrar mejora

### Qué obtendrá

### Entregables obligatorios

- Reporte de madurez con puntuación
- Plan de mejora de 90 días

### Entregables opcionales

- Dashboard de madurez
- Recomendación de siguientes engagements

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Revisión previa de datos disponibles | 2 h |
| 2 | Workshop de assessment con equipos técnicos (9 dimensiones) | 3–4 h |
| 3 | Análisis y puntuación final | 2 h |
| 4 | Plan de mejora de 90 días | 2–3 h |
| 5 | Presentación de resultados | 1 h |
| — | Reevaluación anual (recurrente) | 4–8 h por ciclo |

Esfuerzo total estimado: 8–16 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Patrocinador ejecutivo
- Participantes: Líderes de SRE, plataforma, seguridad y desarrollo
- Participantes: Technical Champion
- Información y accesos: Inventario de servicios y señales
- Información y accesos: Datos de incidentes y alertas
- Información y accesos: Documentos de gobierno vigentes

### Cómo medimos el éxito

- Puntuación por dimensión (1 a 5)
- Puntuación global
- Delta de puntuación a 90 días
- % de dimensiones en nivel 3 o superior al año

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Ambiente aplicativo | Levantar el inventario de aplicaciones y servicios, su criticidad y los journeys de negocio que soportan, para priorizar qué observar primero y dónde definir SLOs. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |
| SLAs, SLOs y journeys críticos | Recopilar los compromisos de servicio, los SLOs ya existentes y las prácticas de presupuesto de error, para definir SLOs alineados con el impacto en el usuario. |
| Costos y consumo de observabilidad | Levantar el consumo actual, los principales generadores de costo y el nivel de gobierno de costos, para explicar la factura y priorizar las palancas de ahorro. |
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |
| Gobierno y estándares de observabilidad | Conocer qué estándares, responsables y champions existen para sostener una práctica común de observabilidad entre equipos, y qué barreras hay para establecerla. |

# Enable & Adopt: Construir capacidad duradera

## Dashboard Design & Best Practices

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 8–16 h |
| Participantes sugeridos | Technical Champion; Equipos de desarrollo y SRE; Responsable de negocio (recomendado) |

Enseñamos a su equipo a diseñar y consumir dashboards que conectan señales técnicas con resultados de negocio, con foco en audiencia, claridad y mantenimiento.

### Cuándo conviene

Cuando hay muchos dashboards pero pocos se usan, o cuando quieren mostrar la salud técnica en lenguaje de negocio.

### Retos que resuelve

- Dashboards sin audiencia definida
- Demasiados paneles y poca señal
- Solo visibilidad de infraestructura, sin vista de negocio
- Dashboards obsoletos que nadie mantiene

### Qué obtendrá

### Entregables obligatorios

- Guía de diseño de dashboards
- Dashboards piloto de negocio

### Entregables opcionales

- Matriz de journeys y métricas
- Reglas de gobierno

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Inventario y análisis de uso de dashboards | 1–2 h |
| 2 | Workshop de principios: audiencia, jerarquía, señal y ruido | 2–3 h |
| 3 | Mapeo de journeys a métricas de negocio | 2–4 h |
| 4 | Rediseño piloto de 2 a 3 dashboards | 2–4 h |
| 5 | Gobierno: responsables, carpetas, ciclo de vida | 1–2 h |

Esfuerzo total estimado: 8–16 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Equipos de desarrollo y SRE
- Participantes: Responsable de negocio (recomendado)
- Información y accesos: Acceso a los dashboards actuales
- Información y accesos: Journeys de negocio prioritarios
- Información y accesos: Datos de uso de dashboards

### Cómo medimos el éxito

- Vistas por semana de dashboards nuevos
- % de dashboards con responsable
- Nº de dashboards de negocio creados
- Tiempo para crear el dashboard de un servicio nuevo

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Dashboards y consumo de datos | Entender cuántos dashboards existen, quién los usa y qué preguntas de negocio quisieran responder, para rediseñar y gobernar los más importantes. |
| Ambiente aplicativo | Levantar el inventario de aplicaciones y servicios, su criticidad y los journeys de negocio que soportan, para priorizar qué observar primero y dónde definir SLOs. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |
| Gobierno y estándares de observabilidad | Conocer qué estándares, responsables y champions existen para sostener una práctica común de observabilidad entre equipos, y qué barreras hay para establecerla. |

## Enterprise Learning Path

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–6 h |
| Participantes sugeridos | Technical Champion; Líder de capacitación o de plataforma; Patrocinador ejecutivo |

Diseñamos una ruta de aprendizaje por rol y una lista de habilitaciones alineadas a su Success Plan, para acelerar la adopción y reducir la dependencia de unas pocas personas.

### Cuándo conviene

Cuando la adopción se concentra en un equipo o quieren escalar el uso a más áreas con una capacitación ordenada.

### Retos que resuelve

- Usuarios sin capacitación estructurada
- Adopción plana después del primer equipo
- Dependencia de un solo champion
- Capacitación genérica que no responde a sus casos

### Qué obtendrá

### Entregables obligatorios

- Ruta de aprendizaje por rol
- Calendario de habilitaciones

### Entregables opcionales

- Métricas de seguimiento de adopción

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Inventario de roles y audiencias | 1 h |
| 2 | Cruce de brechas de habilidades con los resultados del Success Plan | 1 h |
| 3 | Curaduría del catálogo de capacitaciones | 1–1.5 h |
| 4 | Diseño de la ruta por rol | 1–1.5 h |
| 5 | Validación con el champion y publicación del calendario | 0.5–1 h |

Esfuerzo total estimado: 4–6 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Líder de capacitación o de plataforma
- Participantes: Patrocinador ejecutivo
- Información y accesos: Success Plan vigente
- Información y accesos: Lista de roles y equipos
- Información y accesos: Datos de usuarios activos

### Cómo medimos el éxito

- % de usuarios con capacitación completada
- Usuarios activos semanales posteriores a la capacitación
- Reducción de tickets de soporte básicos
- Tiempo hasta el primer dashboard propio

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Objetivos y expectativas de negocio | Entender qué resultados de negocio persigue su organización y qué iniciativas estratégicas dependen de la observabilidad, para que el Success Plan y los engagements se midan contra lo que importa. |

## Grafana Assistant Best Practices

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Equipos de SRE y desarrollo; Seguridad de la información (recomendado) |

Enseñamos a usar Grafana Assistant de forma efectiva en su entorno, para ganar claridad y acelerar el troubleshooting, con criterios para verificar sus respuestas contra la telemetría.

### Cuándo conviene

Cuando quieren impulsar el uso de asistentes de IA en la operación diaria, con controles claros.

### Retos que resuelve

- Baja adopción de asistentes por falta de casos de uso concretos
- Respuestas usadas sin verificar contra evidencia
- Equipos de desarrollo con agentes de código sin contexto de observabilidad
- Falta de criterios de buena práctica

### Qué obtendrá

### Entregables obligatorios

- Material del workshop
- Guía de patrones y verificación

### Entregables opcionales

- Flujo de ejemplo con MCP

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: casos de uso y datos disponibles | 1–1.5 h |
| 2 | Workshop: Grafana Assistant para claridad y troubleshooting | 2–3 h |
| 3 | Patrones de prompting y verificación contra evidencia | 1–2 h |
| 4 | MCP en flujos de agentes de código | 0.5–1 h |
| 5 | Seguimiento | 0.25–0.5 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Equipos de SRE y desarrollo
- Participantes: Seguridad de la información (recomendado)
- Información y accesos: Política de uso de IA vigente
- Información y accesos: Acceso a la stack con datos representativos
- Información y accesos: Dos o tres incidentes recientes como casos de práctica

### Cómo medimos el éxito

- % de usuarios que usan Grafana Assistant cada semana
- Reducción del tiempo de investigación en incidentes seleccionados
- % de respuestas verificadas contra evidencia
- Satisfacción del workshop (8 de 10 o más)

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Uso de IA y políticas de datos | Entender sus políticas, herramientas aprobadas y casos de uso de IA para habilitar Grafana Assistant y MCP con los controles adecuados. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |

## Grafana Day

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Patrocinador ejecutivo; Technical Champion; Asistentes de los equipos convocados |

Sesiones interactivas de un día completo, personalizadas para impulsar una habilitación amplia o enfocarse en los temas clave de su organización.

### Cuándo conviene

Cuando buscan un impulso de adopción entre varios equipos, o una jornada de práctica sobre sus propios datos.

### Retos que resuelve

- Adopción limitada a un grupo reducido
- Necesidad de alinear a muchos equipos a la vez
- Conocimiento teórico sin práctica sobre sus datos
- Falta de un momento de impulso en la cuenta

### Qué obtendrá

### Entregables obligatorios

- Agenda personalizada
- Labs y demos con sus datos

### Entregables opcionales

- Grabaciones y materiales
- Reporte de satisfacción y adopción

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Descubrimiento de objetivos y audiencia | 2–3 h |
| 2 | Diseño de agenda con tracks por rol | 2–3 h |
| 3 | Preparación de labs y demos con sus datos | 4–6 h |
| 4 | Logística y comunicación | 1 h |
| 5 | Ejecución del evento (un día) | 6–8 h |
| 6 | Seguimiento y medición de satisfacción | 1–2 h |

Esfuerzo total estimado: 16–24 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Patrocinador ejecutivo
- Participantes: Technical Champion
- Participantes: Asistentes de los equipos convocados
- Información y accesos: Objetivos de la jornada
- Información y accesos: Lista de asistentes por rol
- Información y accesos: Sala o plataforma virtual y accesos para los labs

### Cómo medimos el éxito

- Satisfacción del evento (8 de 10 o más)
- Nuevos usuarios activos posteriores
- % de asistentes que aplican una práctica a 30 días
- Nº de equipos nuevos incorporados

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Objetivos y logística del evento | Acordar los objetivos, la audiencia y la logística de una jornada de enablement para preparar una agenda y labs a la medida. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |

## Grafana Enterprise Best Practices

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Equipo de plataforma; Equipos de operación y SRE |

Workshop educativo para clientes de Grafana Enterprise autogestionado que usan Prometheus o Mimir, Loki, Tempo y OpenTelemetry. Enseña el flujo detectar, acotar, investigar y explicar, sin trabajo práctico de su equipo.

### Cuándo conviene

Cuando operan Grafana Enterprise por su cuenta y quieren estandarizar cómo investigan y operan la plataforma.

### Retos que resuelve

- Poca explotación de la correlación entre métricas, logs y trazas
- Investigaciones lentas por falta de un flujo común
- Conocimiento concentrado en una persona
- Operación de la plataforma sin prácticas de referencia

### Qué obtendrá

### Entregables obligatorios

- Material del workshop
- Resumen de prácticas recomendadas

### Entregables opcionales

- Lista de siguientes pasos

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: entender su stack (versiones y topología) | 1–2 h |
| 2 | Workshop: detectar, acotar, investigar, explicar | 2–3 h |
| 3 | Demo guiada sobre escenarios de su entorno | 1–2 h |
| 4 | Resumen y recomendaciones | 0.5–1 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Equipo de plataforma
- Participantes: Equipos de operación y SRE
- Información y accesos: Diagrama de su topología y versiones
- Información y accesos: Dos casos de incidentes recientes
- Información y accesos: Acceso a un entorno de demostración o no productivo

### Cómo medimos el éxito

- Satisfacción del workshop (8 de 10 o más)
- % de asistentes que aplican una práctica a 30 días
- Reducción de tickets de soporte básicos
- Nº de equipos que replican el flujo

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |

## Grafana MCP: Capabilities and Usage

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–6 h |
| Participantes sugeridos | Seguridad de la información; Technical Champion; Líderes de ingeniería |

Workshop sobre las capacidades de MCP de Grafana: opciones hospedada y autogestionada, seguridad y consideraciones de uso compartido de datos, y cómo los clientes de IA usan el contexto de Grafana verificando contra la telemetría.

### Cuándo conviene

Cuando sus equipos quieren conectar herramientas de IA con Grafana y necesitan hacerlo con controles.

### Retos que resuelve

- Uso de IA con datos sin controles claros
- Respuestas de IA sin verificar contra telemetría
- Dudas de seguridad que bloquean la adopción
- Falta de criterio para elegir entre opciones hospedada y autogestionada

### Qué obtendrá

### Entregables obligatorios

- Material del workshop
- Lista de controles recomendados

### Entregables opcionales

- Flujos de ejemplo

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: clientes de IA en uso y políticas de seguridad | 1 h |
| 2 | Workshop: opciones, autenticación, alcances y datos compartidos | 1.5–2 h |
| 3 | Demo de flujos con contexto de Grafana | 1–1.5 h |
| 4 | Controles: permisos de solo lectura, tokens y auditoría | 0.5–1 h |
| 5 | Resumen y siguientes pasos | 0.25–0.5 h |

Esfuerzo total estimado: 4–6 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Seguridad de la información
- Participantes: Technical Champion
- Participantes: Líderes de ingeniería
- Información y accesos: Política de uso de IA
- Información y accesos: Lista de herramientas de IA aprobadas
- Información y accesos: Clasificación de datos de telemetría

### Cómo medimos el éxito

- Satisfacción del workshop (8 de 10 o más)
- % de usuarios que aplican los flujos a 30 días
- Nº de usos con verificación contra telemetría
- Nº de excepciones de seguridad abiertas

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Uso de IA y políticas de datos | Entender sus políticas, herramientas aprobadas y casos de uso de IA para habilitar Grafana Assistant y MCP con los controles adecuados. |
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |

# Reliability & Response: Proteger los journeys del cliente

## SLOs in Practice

| Dato | Valor |
|---|---|
| Fase | Reliability & Response: Proteger los journeys del cliente |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Líder de SRE; Dueños de producto de los servicios críticos; Technical Champion |

Definimos SLIs y SLOs para sus journeys clave, establecemos presupuestos de error, construimos dashboards de SLO y conectamos las alertas a esos presupuestos para alinear la operación con el impacto en el usuario.

### Cuándo conviene

Cuando hay fatiga de alertas, discusiones sin datos entre nuevas funciones y confiabilidad, o compromisos de SLA que quieren proteger.

### Retos que resuelve

- Fatiga de alertas: todo parece un problema
- Sin definición de cuánto error es aceptable
- MTTA y MTTR altos por falta de priorización
- Incumplimientos de SLA sin aviso previo
- Exceso de SLOs poco útiles

### Qué obtendrá

### Entregables obligatorios

- Definiciones de SLO por servicio crítico
- Dashboards de SLO

### Entregables opcionales

- Calculadora de presupuesto de error configurada
- Alertas basadas en SLO
- Documento de cadencia de revisión
- Dashboard de madurez de SLO

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Descubrimiento: journeys críticos, SLAs contractuales e incidentes pasados | 2 h |
| 2 | Workshop de SLO con el equipo SRE | 3–4 h |
| 3 | Configuración de SLOs en Grafana (3 a 5 por servicio crítico) | 4–6 h |
| 4 | Dashboards de SLO y alertas de burn rate | 3–4 h |
| 5 | Evaluación de madurez y cadencia de revisión | 2 h |
| 6 | Revisión a los 30 días | 1–2 h |

Esfuerzo total estimado: 16–24 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Líder de SRE
- Participantes: Dueños de producto de los servicios críticos
- Participantes: Technical Champion
- Información y accesos: Lista de servicios y journeys críticos
- Información y accesos: Contratos o compromisos de SLA
- Información y accesos: Historial de incidentes de los últimos 12 meses

### Cómo medimos el éxito

- Nº de SLOs en servicios críticos (3 a 5 por servicio)
- SLO attainment (actual contra meta)
- Burn rate del presupuesto de error
- Reducción del ruido de alertas
- Reducción de MTTA

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Ambiente aplicativo | Levantar el inventario de aplicaciones y servicios, su criticidad y los journeys de negocio que soportan, para priorizar qué observar primero y dónde definir SLOs. |
| SLAs, SLOs y journeys críticos | Recopilar los compromisos de servicio, los SLOs ya existentes y las prácticas de presupuesto de error, para definir SLOs alineados con el impacto en el usuario. |
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |

## Incident Management

| Dato | Valor |
|---|---|
| Fase | Reliability & Response: Proteger los journeys del cliente |
| Estado | En desarrollo |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Líder de operaciones; Equipo de guardia (on-call); Líderes de ingeniería |

Creamos runbooks, un flujo de incident command, revisiones posteriores a incidentes e integraciones de herramientas para una respuesta ágil y consistente.

### Cuándo conviene

Cuando los incidentes se manejan de forma distinta en cada equipo, o falta estructura en la comunicación y en el aprendizaje posterior.

### Retos que resuelve

- MTTR alto
- Proceso de incidentes inconsistente entre equipos
- Postmortems no estructurados
- Roles poco claros durante incidentes mayores
- Integraciones manuales entre alertas, chat y tickets

### Qué obtendrá

### Entregables obligatorios

- Runbooks priorizados
- Guía de incident command

### Entregables opcionales

- Plantilla de postmortem
- Integraciones configuradas
- Reporte del simulacro
- Línea base de MTTR

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Diagnóstico del proceso actual: roles, severidades y herramientas | 2–3 h |
| 2 | Runbooks para los incidentes prioritarios | 4–6 h |
| 3 | Flujo de incident command: roles, severidad y comunicación | 3–4 h |
| 4 | Integraciones entre alertas, chat y tickets | 3–5 h |
| 5 | Simulacro (game day) | 2–3 h |
| 6 | Plantilla de postmortem y cadencia de revisión | 1–2 h |
| 7 | Línea base de MTTR | 1 h |

Esfuerzo total estimado: 16–24 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Líder de operaciones
- Participantes: Equipo de guardia (on-call)
- Participantes: Líderes de ingeniería
- Información y accesos: Registro de incidentes con severidad y tiempos
- Información y accesos: Plantilla actual de postmortem (si existe)
- Información y accesos: Runbooks existentes

### Cómo medimos el éxito

- % de reducción de MTTR
- % de incidentes con postmortem completado
- % de incidentes mayores con runbook
- % de acciones de postmortem cerradas en plazo

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |

# Data & Architecture: Crear una base sólida de señales

## Telemetry Management

| Dato | Valor |
|---|---|
| Fase | Data & Architecture: Crear una base sólida de señales |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 40–80 h |
| Participantes sugeridos | Equipo de plataforma; Dueños de servicio; Seguridad (para aprobaciones de collectors) |

Establecemos y ampliamos la instrumentación en aplicaciones, infraestructura y user journeys. Estandarizamos en OpenTelemetry y Alloy, normalizamos labels y diseñamos una topología de collectors con enrutamiento, muestreo y transformaciones.

### Cuándo conviene

Cuando hay visibilidad incompleta, múltiples agentes sin estándar o ingesta duplicada que eleva el costo.

### Retos que resuelve

- Visibilidad incompleta de servicios críticos
- Múltiples agentes y formatos sin estándar
- Labels inconsistentes que impiden correlacionar
- Collectors sin alta disponibilidad
- Ingesta duplicada que infla el costo

### Qué obtendrá

### Entregables obligatorios

- Diagrama de arquitectura de telemetría
- Reporte de cobertura antes y después

### Entregables opcionales

- Diseño de topología de collectors
- Plantillas de configuración versionadas
- Guía de estandarización de labels
- Estrategia de muestreo y enrutamiento

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Inventario de servicios, agentes y señales | 4–6 h |
| 2 | Análisis de brechas de cobertura | 2–3 h |
| 3 | Diseño de la arquitectura de collectors | 4–8 h |
| 4 | Estándares de labels con el equipo de plataforma | 2–4 h |
| 5 | Piloto de collectors en 2 o 3 servicios críticos | 8–12 h |
| 6 | Despliegue progresivo a los servicios en alcance | 8–16 h |
| 7 | Muestreo y transformaciones para reducir DPM | 4–8 h |
| 8 | Validación final y reporte de cobertura | 2–4 h |

Esfuerzo total estimado: 40–80 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Equipo de plataforma
- Participantes: Dueños de servicio
- Participantes: Seguridad (para aprobaciones de collectors)
- Información y accesos: Catálogo de servicios o CMDB
- Información y accesos: Configuración actual de agentes y collectors
- Información y accesos: Ventanas de cambio disponibles

### Cómo medimos el éxito

- % de servicios con métricas, logs y trazas
- % de collectors migrados a Alloy u OpenTelemetry
- DPM antes y después
- % de labels normalizados
- Disponibilidad de la colección de telemetría (99.9% o más)

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Ambiente aplicativo | Levantar el inventario de aplicaciones y servicios, su criticidad y los journeys de negocio que soportan, para priorizar qué observar primero y dónde definir SLOs. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |

## BYOC Onboarding

| Dato | Valor |
|---|---|
| Fase | Data & Architecture: Crear una base sólida de señales |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 24–48 h |
| Participantes sugeridos | Equipo de nube o infraestructura; Seguridad de la información; Technical Champion; Patrocinador del proyecto |

Acompañamos el ciclo de incorporación de un despliegue en su propia nube (BYOC) en cuatro etapas: preparación (readiness), seguimiento de la construcción, validación de aceptación (UAT) y entrega de la cuenta.

### Cuándo conviene

Cuando van a desplegar Grafana en su propia cuenta de nube y quieren reducir riesgos y tiempos de puesta en marcha.

### Retos que resuelve

- Prerrequisitos de nube, red y seguridad sin confirmar
- Dependencias entre equipos que retrasan la construcción
- Criterios de aceptación poco claros
- Entrega sin responsabilidades operativas definidas

### Qué obtendrá

### Entregables obligatorios

- Checklist de readiness
- Acta de entrega con responsabilidades y runbooks

### Entregables opcionales

- Plan de hitos con estado
- Plan y resultados de UAT

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Readiness: prerrequisitos de nube, red, cuotas y aprobaciones de seguridad | 4–8 h |
| 2 | Plan de hitos y mecanismo de seguimiento | 2–4 h |
| 3 | Seguimiento de la construcción: revisiones periódicas y gestión de bloqueos | 8–16 h |
| 4 | UAT: plan de pruebas, criterios de aceptación y soporte a la validación | 6–12 h |
| 5 | Entrega de la cuenta: runbooks, responsabilidades y cierre | 4–8 h |

Esfuerzo total estimado: 24–48 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Equipo de nube o infraestructura
- Participantes: Seguridad de la información
- Participantes: Technical Champion
- Participantes: Patrocinador del proyecto
- Información y accesos: Cuenta de nube y accesos acordados
- Información y accesos: Aprobaciones de seguridad y de red
- Información y accesos: Ventanas de cambio y responsables técnicos

### Cómo medimos el éxito

- % de prerrequisitos confirmados antes del inicio
- Cumplimiento de hitos (planeado contra real)
- % de criterios de UAT aprobados
- Tiempo hasta la entrega de la cuenta

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Nube, red y preparación BYOC | Confirmar los prerrequisitos de nube, red, aprobaciones y operación antes de desplegar en su propia nube, y acordar los criterios de aceptación. |
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |

## Labeling Best Practices

| Dato | Valor |
|---|---|
| Fase | Data & Architecture: Crear una base sólida de señales |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 10–18 h |
| Participantes sugeridos | Equipo de plataforma; Dueños de servicio; Technical Champion |

Definimos una estrategia de labels consistente para métricas, logs y trazas, con nombres, valores permitidos y límites de cardinalidad, para poder correlacionar señales y controlar el costo.

### Cuándo conviene

Cuando los equipos nombran las cosas de forma distinta, la correlación es difícil o la cardinalidad crece sin control.

### Retos que resuelve

- Labels inconsistentes entre equipos
- Dificultad para correlacionar señales de un mismo servicio
- Cardinalidad que crece sin control
- Reglas de acceso difíciles de mantener por falta de labels confiables

### Qué obtendrá

### Entregables obligatorios

- Guía de labels
- Reglas de etiquetado del piloto

### Entregables opcionales

- Taxonomía de labels obligatorios y opcionales
- Reporte de cumplimiento

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Auditoría de labels actuales por señal | 2–4 h |
| 2 | Definición del estándar: nombres, obligatorios y límites de cardinalidad | 3–5 h |
| 3 | Workshop con equipos de desarrollo y plataforma | 2–3 h |
| 4 | Piloto de reglas de etiquetado en collectors | 2–4 h |
| 5 | Gobierno: validación, documentación y revisión | 1–2 h |

Esfuerzo total estimado: 10–18 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Equipo de plataforma
- Participantes: Dueños de servicio
- Participantes: Technical Champion
- Información y accesos: Acceso a los datos actuales de métricas, logs y trazas
- Información y accesos: Convenciones de nombres existentes
- Información y accesos: Lista de equipos y servicios

### Cómo medimos el éxito

- % de labels que cumplen el estándar
- Reducción de series con cardinalidad excesiva
- % de servicios con labels obligatorios
- Tiempo para correlacionar señales en un incidente

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Gobierno y estándares de observabilidad | Conocer qué estándares, responsables y champions existen para sostener una práctica común de observabilidad entre equipos, y qué barreras hay para establecerla. |

# Cost, Security & Governance: Escalar con control

## Grafana Cloud Cost Fundamentals

| Dato | Valor |
|---|---|
| Fase | Cost, Security & Governance: Escalar con control |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 2–4 h |
| Participantes sugeridos | Responsable financiero o de compras de tecnología; Líder de plataforma; Equipos técnicos |

Explicamos cómo se factura Grafana Cloud y qué opciones existen para optimizar y ahorrar costos, para que sus equipos técnicos y financieros entiendan los factores que determinan su factura.

### Cuándo conviene

Antes de cualquier proyecto de optimización de costos, o cuando la factura sorprende al equipo.

### Retos que resuelve

- Sorpresas en la facturación
- Equipos que no comprenden DPM ni cardinalidad
- Uso sin gobierno de costos

### Qué obtendrá

### Entregables obligatorios

- Presentación personalizada del modelo de facturación
- Resumen de tres palancas de ahorro

### Entregables opcionales

- Resultados del quiz

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: dashboard de facturación y principales factores de costo | 0.5–1 h |
| 2 | Sesión: cómo se factura según el modelo vigente | 1–1.5 h |
| 3 | Demo de palancas: Adaptive Telemetry, retención e intervalos de scrape | 0.5–1 h |
| 4 | Quiz de verificación y envío de materiales | 0.25–0.5 h |

Esfuerzo total estimado: 2–4 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Responsable financiero o de compras de tecnología
- Participantes: Líder de plataforma
- Participantes: Equipos técnicos
- Información y accesos: Últimas facturas de Grafana Cloud
- Información y accesos: Acceso al dashboard de facturación
- Información y accesos: Lista de equipos y servicios principales generadores de datos

### Cómo medimos el éxito

- % del equipo que entiende el modelo de facturación (80% o más en el quiz)
- Usuarios activos semanales posteriores
- Reducción de tickets de soporte básicos

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Costos y consumo de observabilidad | Levantar el consumo actual, los principales generadores de costo y el nivel de gobierno de costos, para explicar la factura y priorizar las palancas de ahorro. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |

## Cost Optimization

| Dato | Valor |
|---|---|
| Fase | Cost, Security & Governance: Escalar con control |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 16–32 h |
| Participantes sugeridos | Líder de plataforma; Responsable financiero; Equipos generadores de telemetría |

Ajustamos retención, muestreo y cardinalidad, introducimos dashboards de uso para ver volumen, costo y ahorros, y definimos alertas para presupuestos, con un ahorro medido en dólares.

### Cuándo conviene

Cuando el Cloud Health Check o la factura identifican la optimización de costos como prioridad.

### Retos que resuelve

- Sobrecostos sin aviso previo
- Alta cardinalidad sin gestión
- DPM descontrolado por scrapers mal configurados
- Sin dashboards de costo por equipo o servicio
- Ingesta duplicada de métricas
- Retención excesiva de datos poco consultados

### Qué obtendrá

### Entregables obligatorios

- Reporte de línea base de costos
- Reporte de ahorro en dólares

### Entregables opcionales

- Dashboard de ahorro de Adaptive Telemetry
- Dashboards de atribución por equipo
- Estrategia de alertas de ingesta y DPM

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Fase 1. Revisión de consumo y health check | 2–4 h |
| 2 | Fase 2a. Investigación de DPM alto, uso de consultas e histogramas | 4–10 h |
| 3 | Fase 2b. Adaptive Telemetry, atribución de costos y estrategia de alertas | 4–10 h |
| 4 | Fase 3. Mejora continua: reporte y actualización del Success Plan | 2–4 h |

Esfuerzo total estimado: 16–32 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Líder de plataforma
- Participantes: Responsable financiero
- Participantes: Equipos generadores de telemetría
- Información y accesos: Facturas y dashboard de facturación
- Información y accesos: Lista de equipos y servicios
- Información y accesos: Aprobación para aplicar cambios de muestreo y retención

### Cómo medimos el éxito

- % de reducción de DPM
- Ahorro mensual documentado (USD)
- % de reducción de cardinalidad
- Cobertura de atribución de costos por equipo
- Tiempo hasta la primera alerta de un pico de costo

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Costos y consumo de observabilidad | Levantar el consumo actual, los principales generadores de costo y el nivel de gobierno de costos, para explicar la factura y priorizar las palancas de ahorro. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Datos para el cálculo de valor y línea base de KPIs | Reunir los valores de partida (con definición, ventana y fuente) y los datos financieros que su equipo valida, para poder demostrar el retorno con evidencia. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |

## Observability Center of Excellence

| Dato | Valor |
|---|---|
| Fase | Cost, Security & Governance: Escalar con control |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 60–120 h |
| Participantes sugeridos | Patrocinador ejecutivo con autoridad entre equipos; Líderes de equipos; Champions designados |

Establecemos una práctica central de observabilidad con gobierno, estándares y champions. Unificamos dashboards, alertas y SLOs entre equipos. Se adapta en versión ligera según el tamaño y la madurez de la organización.

### Cuándo conviene

Cuando la observabilidad vive aislada en un equipo o cada área usa estándares distintos.

### Retos que resuelve

- Observabilidad aislada en un solo equipo
- Dashboards duplicados sin estándar
- Alertas distintas por equipo sin gobierno
- Nadie es dueño de la calidad de la observabilidad
- Costo sin responsabilidad clara

### Qué obtendrá

### Entregables obligatorios

- Charter del CoE
- Guía de estándares de observabilidad

### Entregables opcionales

- Biblioteca de templates
- Marco de gobierno de alertas
- Diseño del programa de champions
- Kit de onboarding para equipos nuevos

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Mapeo de stakeholders: equipos, champions y sponsors | 2–4 h |
| 2 | Charter del CoE: misión, gobierno y responsabilidades | 4–6 h |
| 3 | Auditoría de dashboards y alertas actuales | 4–8 h |
| 4 | Estándares y templates de dashboards y alertas | 8–16 h |
| 5 | Sesiones de enablement para champions | 6 h |
| 6 | Piloto con el primer equipo | 8–16 h |
| 7 | Despliegue progresivo y ajuste del gobierno | 16–32 h |

Esfuerzo total estimado: 60–120 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Patrocinador ejecutivo con autoridad entre equipos
- Participantes: Líderes de equipos
- Participantes: Champions designados
- Información y accesos: Organigrama de plataforma e ingeniería
- Información y accesos: Estándares internos existentes
- Información y accesos: Acceso para auditar dashboards y alertas

### Cómo medimos el éxito

- Nº de equipos que adoptan los estándares
- % de dashboards bajo templates estándar
- % de reducción de dashboards duplicados
- Nº de champions activos por trimestre
- Tiempo de onboarding de un equipo nuevo

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Gobierno y estándares de observabilidad | Conocer qué estándares, responsables y champions existen para sostener una práctica común de observabilidad entre equipos, y qué barreras hay para establecerla. |
| Dashboards y consumo de datos | Entender cuántos dashboards existen, quién los usa y qué preguntas de negocio quisieran responder, para rediseñar y gobernar los más importantes. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |

## Security & Access Control

| Dato | Valor |
|---|---|
| Fase | Cost, Security & Governance: Escalar con control |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Seguridad de la información; Administradores de Grafana; Technical Champion |

Diseñamos control de acceso basado en roles y SSO para Grafana y sus fuentes de datos, límites entre tenants, gestión de secretos y registros de auditoría para un acceso seguro a los datos.

### Cuándo conviene

Cuando hay requerimientos de auditoría o cumplimiento, o necesitan ordenar quién ve qué.

### Retos que resuelve

- Brechas de cumplimiento
- Acceso no controlado
- Riesgo regulatorio
- Tokens y cuentas de servicio sin responsable
- Datos sensibles visibles para quien no los necesita

### Qué obtendrá

### Entregables obligatorios

- Diseño de RBAC y SSO
- Plan de remediación

### Entregables opcionales

- Inventario de accesos
- Diseño de aislamiento por tenant
- Procedimiento de gestión de secretos
- Configuración de auditoría

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Inventario de accesos y roles | 2–3 h |
| 2 | Diseño de RBAC y SSO con mapeo a grupos del proveedor de identidad | 3–4 h |
| 3 | Límites entre tenants y estrategia de labels para control de acceso | 3–5 h |
| 4 | Gestión de secretos y rotación de tokens | 2–3 h |
| 5 | Registros de auditoría | 2–3 h |
| 6 | Implementación piloto y validación | 3–4 h |
| 7 | Reporte de hallazgos y plan de remediación | 1–2 h |

Esfuerzo total estimado: 16–24 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Seguridad de la información
- Participantes: Administradores de Grafana
- Participantes: Technical Champion
- Información y accesos: Proveedor de identidad y estructura de grupos
- Información y accesos: Matriz de roles actual
- Información y accesos: Marcos de cumplimiento aplicables

### Cómo medimos el éxito

- Compliance score o hallazgos de auditoría antes y después
- % de usuarios con acceso por grupo del proveedor de identidad
- Nº de cuentas y tokens sin responsable
- Cobertura de registros de auditoría

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |

## Adaptive Metrics Deep Dive

| Dato | Valor |
|---|---|
| Fase | Cost, Security & Governance: Escalar con control |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Líder de plataforma; Equipos dueños de métricas; Responsable de costos |

Workshop sobre Adaptive Metrics de Grafana Cloud: recomendaciones, agregación y comportamiento de consultas, auto-apply, exemptions, segments y gestión por API y Terraform. No requiere trabajo práctico ni cambios en producción.

### Cuándo conviene

Cuando tienen alta cardinalidad y quieren entender los controles antes de aplicarlos.

### Retos que resuelve

- Alta cardinalidad sin gestión
- Costo de métricas creciendo más rápido que su valor
- Temor a romper dashboards o alertas al agregar
- Desconocimiento de las recomendaciones disponibles

### Qué obtendrá

### Entregables obligatorios

- Material del workshop
- Plan de despliegue con exemptions

### Entregables opcionales

- Reporte de ahorro a 30 días

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: recomendaciones y cardinalidad actuales | 1–2 h |
| 2 | Workshop: recomendaciones, agregación, auto-apply, exemptions y segments | 2–3 h |
| 3 | Demo de gestión por API y Terraform | 0.5–1.5 h |
| 4 | Plan de despliegue con exemptions | 0.5–1 h |
| 5 | Seguimiento de adopción a 30 días | 0.5 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Líder de plataforma
- Participantes: Equipos dueños de métricas
- Participantes: Responsable de costos
- Información y accesos: Acceso de lectura a Adaptive Metrics
- Información y accesos: Lista de dashboards y alertas críticos
- Información y accesos: Contexto de costos

### Cómo medimos el éxito

- Satisfacción del workshop (8 de 10 o más)
- % de adopción de la función a 30 días
- % de reducción de DPM posterior
- Ahorro estimado documentado (USD)

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Costos y consumo de observabilidad | Levantar el consumo actual, los principales generadores de costo y el nivel de gobierno de costos, para explicar la factura y priorizar las palancas de ahorro. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Dashboards y consumo de datos | Entender cuántos dashboards existen, quién los usa y qué preguntas de negocio quisieran responder, para rediseñar y gobernar los más importantes. |
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |

# Growth & Value: Demostrar impacto y expandir resultados

## Executive Business Review

| Dato | Valor |
|---|---|
| Fase | Growth & Value: Demostrar impacto y expandir resultados |
| Estado | En desarrollo |
| Esfuerzo estimado del equipo de Grafana | 8–16 h |
| Participantes sugeridos | Patrocinador ejecutivo; Technical Champion; Responsable de finanzas (para validar cifras) |

Revisión trimestral que conecta confiabilidad con resultados de negocio: tendencias de SLO, impacto de incidentes en ingresos y experiencia, y retorno del trabajo de observabilidad. Dirigida a patrocinadores ejecutivos.

### Cuándo conviene

Cada trimestre, y en especial antes de renovaciones o de decisiones de inversión.

### Retos que resuelve

- Valor no demostrado ante la renovación
- Inversión sin conexión con resultados
- Sin historia de progreso documentada
- Falta de visibilidad ejecutiva del avance

### Qué obtendrá

### Entregables obligatorios

- Deck de EBR (10 a 15 láminas)
- Scorecard trimestral de KPIs

### Entregables opcionales

- Declaración de valor de negocio
- Lámina de alineación del roadmap
- Revisión trimestral del Success Plan

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Recopilación de datos: KPIs, SLO, incidentes y consumo | 3–5 h |
| 2 | Cálculo de valor y narrativa | 2–4 h |
| 3 | Pre-alineación con el patrocinador | 0.5–1.5 h |
| 4 | Deck de 10 a 15 láminas | 2–3 h |
| 5 | Sesión de EBR | 1–1.5 h |
| 6 | Seguimiento y actualización del Success Plan | 0.5–1 h |

Esfuerzo total estimado: 8–16 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Patrocinador ejecutivo
- Participantes: Technical Champion
- Participantes: Responsable de finanzas (para validar cifras)
- Información y accesos: Datos de incidentes y SLO del trimestre
- Información y accesos: Cifras financieras que el cliente valida (por ejemplo, ingreso por hora)
- Información y accesos: Prioridades de negocio para los próximos 90 días

### Cómo medimos el éxito

- Tendencia de SLO attainment (4 trimestres)
- % de mejora de MTTR interanual
- Ingreso protegido
- Retorno de la inversión (ROI)
- Expansión de uso (equipos y productos nuevos)

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Objetivos y expectativas de negocio | Entender qué resultados de negocio persigue su organización y qué iniciativas estratégicas dependen de la observabilidad, para que el Success Plan y los engagements se midan contra lo que importa. |
| Datos para el cálculo de valor y línea base de KPIs | Reunir los valores de partida (con definición, ventana y fuente) y los datos financieros que su equipo valida, para poder demostrar el retorno con evidencia. |
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |
| SLAs, SLOs y journeys críticos | Recopilar los compromisos de servicio, los SLOs ya existentes y las prácticas de presupuesto de error, para definir SLOs alineados con el impacto en el usuario. |
| Capacidades de Grafana en uso | Mapear qué capacidades de Grafana usa cada equipo y cuáles están disponibles sin aprovechar, para priorizar un plan de adopción ligado a sus resultados. |

## Product Roadmap Review

| Dato | Valor |
|---|---|
| Fase | Growth & Value: Demostrar impacto y expandir resultados |
| Estado | En desarrollo |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Patrocinador técnico; Arquitectos y líderes de plataforma; Responsables de producto internos |

Presentamos el roadmap de producto de Grafana y alineamos las capacidades futuras con sus casos de uso y planes, registrando su retroalimentación para el equipo de producto.

### Cuándo conviene

Cuando evalúan decisiones de arquitectura a medio plazo o necesitan saber cómo se atenderán sus necesidades abiertas.

### Retos que resuelve

- Desconocimiento de lo que viene y evaluación de alternativas
- Pedidos de producto que no llegan al equipo correcto
- Decisiones de arquitectura que ignoran capacidades próximas

### Qué obtendrá

### Entregables obligatorios

- Presentación de roadmap personalizada
- Registro de retroalimentación

### Entregables opcionales

- Plan de seguimiento

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Mapeo de casos de uso y bloqueos abiertos | 1–2 h |
| 2 | Selección de elementos del roadmap relevantes | 1–2 h |
| 3 | Preparación de la sesión | 0.5–1.5 h |
| 4 | Sesión con su equipo | 1–1.5 h |
| 5 | Registro de retroalimentación y seguimientos | 0.5–1 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Patrocinador técnico
- Participantes: Arquitectos y líderes de plataforma
- Participantes: Responsables de producto internos
- Información y accesos: Casos de uso y necesidades abiertas
- Información y accesos: Planes de arquitectura a 12 meses
- Información y accesos: Solicitudes de funcionalidad pendientes

### Cómo medimos el éxito

- Nº de capacidades del roadmap alineadas a sus casos
- Nº de solicitudes registradas
- Satisfacción de la sesión (8 de 10 o más)

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Objetivos y expectativas de negocio | Entender qué resultados de negocio persigue su organización y qué iniciativas estratégicas dependen de la observabilidad, para que el Success Plan y los engagements se midan contra lo que importa. |
| Capacidades de Grafana en uso | Mapear qué capacidades de Grafana usa cada equipo y cuáles están disponibles sin aprovechar, para priorizar un plan de adopción ligado a sus resultados. |
| Solicitudes de producto y voz del cliente | Registrar las solicitudes de funcionalidad y problemas abiertos, con su impacto de negocio, para darles seguimiento con el equipo de producto. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |

## Capability & Adoption Review

| Dato | Valor |
|---|---|
| Fase | Growth & Value: Demostrar impacto y expandir resultados |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Líderes de equipos; Patrocinador |

Revisamos qué capacidades de Grafana usan hoy y cuáles tienen disponibles sin aprovechar, y proponemos cómo adoptar las que más contribuyen a sus resultados, ordenadas por caso de uso.

### Cuándo conviene

Cuando quieren aprovechar mejor lo ya contratado o conocer novedades del catálogo relevantes para sus objetivos.

### Retos que resuelve

- Capacidades disponibles que no se usan
- Novedades del catálogo que no llegan a los equipos
- Adopción desigual entre equipos
- Oportunidades de mejora sin relación con resultados

### Qué obtendrá

### Entregables obligatorios

- Mapa de uso y capacidades sin aprovechar
- Plan de adopción

### Entregables opcionales

- Lista priorizada de oportunidades

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Análisis de consumo y adopción por capacidad | 1–2 h |
| 2 | Cruce con el catálogo y novedades relevantes | 1–2 h |
| 3 | Validación técnica y priorización por caso de uso | 1–1.5 h |
| 4 | Presentación a su equipo | 0.5–1.5 h |
| 5 | Plan de adopción y seguimiento | 0.5–1 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Líderes de equipos
- Participantes: Patrocinador
- Información y accesos: Acceso a datos de consumo
- Información y accesos: Success Plan vigente
- Información y accesos: Prioridades de los equipos

### Cómo medimos el éxito

- Nº de capacidades nuevas adoptadas
- % de oportunidades validadas con su equipo
- Usuarios activos por capacidad

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Capacidades de Grafana en uso | Mapear qué capacidades de Grafana usa cada equipo y cuáles están disponibles sin aprovechar, para priorizar un plan de adopción ligado a sus resultados. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |
| Objetivos y expectativas de negocio | Entender qué resultados de negocio persigue su organización y qué iniciativas estratégicas dependen de la observabilidad, para que el Success Plan y los engagements se midan contra lo que importa. |

## VoC Progress Review

| Dato | Valor |
|---|---|
| Fase | Growth & Value: Demostrar impacto y expandir resultados |
| Estado | En desarrollo |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Responsables de producto internos; Patrocinador |

Revisión del avance de su voz del cliente (VoC): estado de las solicitudes y comentarios que han hecho llegar a Grafana, respuestas del equipo de producto y siguientes pasos acordados.

### Cuándo conviene

Cuando tienen solicitudes de funcionalidad o problemas abiertos y quieren transparencia sobre su avance.

### Retos que resuelve

- Solicitudes sin respuesta o sin estado visible
- Prioridades de producto desalineadas con necesidades del cliente
- Falta de seguimiento entre revisiones

### Qué obtendrá

### Entregables obligatorios

- Reporte de estado de solicitudes
- Prioridades acordadas

### Entregables opcionales

- Plan de seguimiento

### Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Recopilación de solicitudes y su estado | 1–2 h |
| 2 | Alineación con producto sobre estado y plazos posibles | 1–2 h |
| 3 | Sesión con su equipo | 1–1.5 h |
| 4 | Actualización de prioridades y siguientes pasos | 0.5–1 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

### Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Responsables de producto internos
- Participantes: Patrocinador
- Información y accesos: Lista de solicitudes y su impacto en el negocio
- Información y accesos: Prioridades actuales
- Información y accesos: Contactos para seguimiento

### Cómo medimos el éxito

- % de solicitudes con estado actualizado
- Nº de solicitudes resueltas o planificadas
- Satisfacción de la sesión (8 de 10 o más)

### Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Solicitudes de producto y voz del cliente | Registrar las solicitudes de funcionalidad y problemas abiertos, con su impacto de negocio, para darles seguimiento con el equipo de producto. |
| Objetivos y expectativas de negocio | Entender qué resultados de negocio persigue su organización y qué iniciativas estratégicas dependen de la observabilidad, para que el Success Plan y los engagements se midan contra lo que importa. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
