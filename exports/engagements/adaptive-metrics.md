# Adaptive Metrics Deep Dive

| Dato | Valor |
|---|---|
| Fase | Cost, Security & Governance: Escalar con control |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Líder de plataforma; Equipos dueños de métricas; Responsable de costos |

Workshop sobre Adaptive Metrics de Grafana Cloud: recomendaciones, agregación y comportamiento de consultas, auto-apply, exemptions, segments y gestión por API y Terraform. No requiere trabajo práctico ni cambios en producción.

## Cuándo conviene

Cuando tienen alta cardinalidad y quieren entender los controles antes de aplicarlos.

## Retos que resuelve

- Alta cardinalidad sin gestión
- Costo de métricas creciendo más rápido que su valor
- Temor a romper dashboards o alertas al agregar
- Desconocimiento de las recomendaciones disponibles

## Qué obtendrá

### Entregables obligatorios

- Material del workshop
- Plan de despliegue con exemptions

### Entregables opcionales

- Reporte de ahorro a 30 días

## Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: recomendaciones y cardinalidad actuales | 1–2 h |
| 2 | Workshop: recomendaciones, agregación, auto-apply, exemptions y segments | 2–3 h |
| 3 | Demo de gestión por API y Terraform | 0.5–1.5 h |
| 4 | Plan de despliegue con exemptions | 0.5–1 h |
| 5 | Seguimiento de adopción a 30 días | 0.5 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

## Qué necesitamos de su equipo

- Participantes: Líder de plataforma
- Participantes: Equipos dueños de métricas
- Participantes: Responsable de costos
- Información y accesos: Acceso de lectura a Adaptive Metrics
- Información y accesos: Lista de dashboards y alertas críticos
- Información y accesos: Contexto de costos

## Cómo medimos el éxito

- Satisfacción del workshop (8 de 10 o más)
- % de adopción de la función a 30 días
- % de reducción de DPM posterior
- Ahorro estimado documentado (USD)

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Costos y consumo de observabilidad | Levantar el consumo actual, los principales generadores de costo y el nivel de gobierno de costos, para explicar la factura y priorizar las palancas de ahorro. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Dashboards y consumo de datos | Entender cuántos dashboards existen, quién los usa y qué preguntas de negocio quisieran responder, para rediseñar y gobernar los más importantes. |
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
