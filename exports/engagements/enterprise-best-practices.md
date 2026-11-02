# Grafana Enterprise Best Practices

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Equipo de plataforma; Equipos de operación y SRE |

Workshop educativo para clientes de Grafana Enterprise autogestionado que usan Prometheus o Mimir, Loki, Tempo y OpenTelemetry. Enseña el flujo detectar, acotar, investigar y explicar, sin trabajo práctico de su equipo.

## Cuándo conviene

Cuando operan Grafana Enterprise por su cuenta y quieren estandarizar cómo investigan y operan la plataforma.

## Retos que resuelve

- Poca explotación de la correlación entre métricas, logs y trazas
- Investigaciones lentas por falta de un flujo común
- Conocimiento concentrado en una persona
- Operación de la plataforma sin prácticas de referencia

## Qué obtendrá

### Entregables obligatorios

- Material del workshop
- Resumen de prácticas recomendadas

### Entregables opcionales

- Lista de siguientes pasos

## Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: entender su stack (versiones y topología) | 1–2 h |
| 2 | Workshop: detectar, acotar, investigar, explicar | 2–3 h |
| 3 | Demo guiada sobre escenarios de su entorno | 1–2 h |
| 4 | Resumen y recomendaciones | 0.5–1 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

## Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Equipo de plataforma
- Participantes: Equipos de operación y SRE
- Información y accesos: Diagrama de su topología y versiones
- Información y accesos: Dos casos de incidentes recientes
- Información y accesos: Acceso a un entorno de demostración o no productivo

## Cómo medimos el éxito

- Satisfacción del workshop (8 de 10 o más)
- % de asistentes que aplican una práctica a 30 días
- Reducción de tickets de soporte básicos
- Nº de equipos que replican el flujo

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
