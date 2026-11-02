# Incident Management

| Dato | Valor |
|---|---|
| Fase | Reliability & Response: Proteger los journeys del cliente |
| Estado | En desarrollo |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Líder de operaciones; Equipo de guardia (on-call); Líderes de ingeniería |

Creamos runbooks, un flujo de incident command, revisiones posteriores a incidentes e integraciones de herramientas para una respuesta ágil y consistente.

## Cuándo conviene

Cuando los incidentes se manejan de forma distinta en cada equipo, o falta estructura en la comunicación y en el aprendizaje posterior.

## Retos que resuelve

- MTTR alto
- Proceso de incidentes inconsistente entre equipos
- Postmortems no estructurados
- Roles poco claros durante incidentes mayores
- Integraciones manuales entre alertas, chat y tickets

## Qué obtendrá

### Entregables obligatorios

- Runbooks priorizados
- Guía de incident command

### Entregables opcionales

- Plantilla de postmortem
- Integraciones configuradas
- Reporte del simulacro
- Línea base de MTTR

## Cómo lo hacemos

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

## Qué necesitamos de su equipo

- Participantes: Líder de operaciones
- Participantes: Equipo de guardia (on-call)
- Participantes: Líderes de ingeniería
- Información y accesos: Registro de incidentes con severidad y tiempos
- Información y accesos: Plantilla actual de postmortem (si existe)
- Información y accesos: Runbooks existentes

## Cómo medimos el éxito

- % de reducción de MTTR
- % de incidentes con postmortem completado
- % de incidentes mayores con runbook
- % de acciones de postmortem cerradas en plazo

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
