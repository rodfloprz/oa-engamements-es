# Labeling Best Practices

| Dato | Valor |
|---|---|
| Fase | Data & Architecture: Crear una base sólida de señales |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 10–18 h |
| Participantes sugeridos | Equipo de plataforma; Dueños de servicio; Technical Champion |

Definimos una estrategia de labels consistente para métricas, logs y trazas, con nombres, valores permitidos y límites de cardinalidad, para poder correlacionar señales y controlar el costo.

## Cuándo conviene

Cuando los equipos nombran las cosas de forma distinta, la correlación es difícil o la cardinalidad crece sin control.

## Retos que resuelve

- Labels inconsistentes entre equipos
- Dificultad para correlacionar señales de un mismo servicio
- Cardinalidad que crece sin control
- Reglas de acceso difíciles de mantener por falta de labels confiables

## Qué obtendrá

### Entregables obligatorios

- Guía de labels
- Reglas de etiquetado del piloto

### Entregables opcionales

- Taxonomía de labels obligatorios y opcionales
- Reporte de cumplimiento

## Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Auditoría de labels actuales por señal | 2–4 h |
| 2 | Definición del estándar: nombres, obligatorios y límites de cardinalidad | 3–5 h |
| 3 | Workshop con equipos de desarrollo y plataforma | 2–3 h |
| 4 | Piloto de reglas de etiquetado en collectors | 2–4 h |
| 5 | Gobierno: validación, documentación y revisión | 1–2 h |

Esfuerzo total estimado: 10–18 h. Incluye preparación, coordinación y revisión.

## Qué necesitamos de su equipo

- Participantes: Equipo de plataforma
- Participantes: Dueños de servicio
- Participantes: Technical Champion
- Información y accesos: Acceso a los datos actuales de métricas, logs y trazas
- Información y accesos: Convenciones de nombres existentes
- Información y accesos: Lista de equipos y servicios

## Cómo medimos el éxito

- % de labels que cumplen el estándar
- Reducción de series con cardinalidad excesiva
- % de servicios con labels obligatorios
- Tiempo para correlacionar señales en un incidente

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Gobierno y estándares de observabilidad | Conocer qué estándares, responsables y champions existen para sostener una práctica común de observabilidad entre equipos, y qué barreras hay para establecerla. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
