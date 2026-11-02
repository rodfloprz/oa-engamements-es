# Telemetry Management

| Dato | Valor |
|---|---|
| Fase | Data & Architecture: Crear una base sólida de señales |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 40–80 h |
| Participantes sugeridos | Equipo de plataforma; Dueños de servicio; Seguridad (para aprobaciones de collectors) |

Establecemos y ampliamos la instrumentación en aplicaciones, infraestructura y user journeys. Estandarizamos en OpenTelemetry y Alloy, normalizamos labels y diseñamos una topología de collectors con enrutamiento, muestreo y transformaciones.

## Cuándo conviene

Cuando hay visibilidad incompleta, múltiples agentes sin estándar o ingesta duplicada que eleva el costo.

## Retos que resuelve

- Visibilidad incompleta de servicios críticos
- Múltiples agentes y formatos sin estándar
- Labels inconsistentes que impiden correlacionar
- Collectors sin alta disponibilidad
- Ingesta duplicada que infla el costo

## Qué obtendrá

### Entregables obligatorios

- Diagrama de arquitectura de telemetría
- Reporte de cobertura antes y después

### Entregables opcionales

- Diseño de topología de collectors
- Plantillas de configuración versionadas
- Guía de estandarización de labels
- Estrategia de muestreo y enrutamiento

## Cómo lo hacemos

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

## Qué necesitamos de su equipo

- Participantes: Equipo de plataforma
- Participantes: Dueños de servicio
- Participantes: Seguridad (para aprobaciones de collectors)
- Información y accesos: Catálogo de servicios o CMDB
- Información y accesos: Configuración actual de agentes y collectors
- Información y accesos: Ventanas de cambio disponibles

## Cómo medimos el éxito

- % de servicios con métricas, logs y trazas
- % de collectors migrados a Alloy u OpenTelemetry
- DPM antes y después
- % de labels normalizados
- Disponibilidad de la colección de telemetría (99.9% o más)

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Ambiente aplicativo | Levantar el inventario de aplicaciones y servicios, su criticidad y los journeys de negocio que soportan, para priorizar qué observar primero y dónde definir SLOs. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
