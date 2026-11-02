# Grafana Assistant Best Practices

| Dato | Valor |
|---|---|
| Fase | Enable & Adopt: Construir capacidad duradera |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Equipos de SRE y desarrollo; Seguridad de la información (recomendado) |

Enseñamos a usar Grafana Assistant de forma efectiva en su entorno, para ganar claridad y acelerar el troubleshooting, con criterios para verificar sus respuestas contra la telemetría.

## Cuándo conviene

Cuando quieren impulsar el uso de asistentes de IA en la operación diaria, con controles claros.

## Retos que resuelve

- Baja adopción de asistentes por falta de casos de uso concretos
- Respuestas usadas sin verificar contra evidencia
- Equipos de desarrollo con agentes de código sin contexto de observabilidad
- Falta de criterios de buena práctica

## Qué obtendrá

### Entregables obligatorios

- Material del workshop
- Guía de patrones y verificación

### Entregables opcionales

- Flujo de ejemplo con MCP

## Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Preparación: casos de uso y datos disponibles | 1–1.5 h |
| 2 | Workshop: Grafana Assistant para claridad y troubleshooting | 2–3 h |
| 3 | Patrones de prompting y verificación contra evidencia | 1–2 h |
| 4 | MCP en flujos de agentes de código | 0.5–1 h |
| 5 | Seguimiento | 0.25–0.5 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

## Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Equipos de SRE y desarrollo
- Participantes: Seguridad de la información (recomendado)
- Información y accesos: Política de uso de IA vigente
- Información y accesos: Acceso a la stack con datos representativos
- Información y accesos: Dos o tres incidentes recientes como casos de práctica

## Cómo medimos el éxito

- % de usuarios que usan Grafana Assistant cada semana
- Reducción del tiempo de investigación en incidentes seleccionados
- % de respuestas verificadas contra evidencia
- Satisfacción del workshop (8 de 10 o más)

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Uso de IA y políticas de datos | Entender sus políticas, herramientas aprobadas y casos de uso de IA para habilitar Grafana Assistant y MCP con los controles adecuados. |
| Tecnologías en uso | Registrar las tecnologías que usa hoy su organización (lenguajes, bases de datos, mensajería, plataformas, nubes y herramientas de despliegue) para planear la instrumentación y las integraciones. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Audiencias y necesidades de capacitación | Identificar a quién hay que capacitar, con qué nivel y en qué formato, para diseñar rutas de aprendizaje y jornadas a la medida. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
