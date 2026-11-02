# Observability Maturity Assessment

| Dato | Valor |
|---|---|
| Fase | Plan & Assess: Empezar con claridad |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 8–16 h |
| Participantes sugeridos | Patrocinador ejecutivo; Líderes de SRE, plataforma, seguridad y desarrollo; Technical Champion |

Evaluamos su estado actual contra nueve dimensiones de observabilidad, con evidencia y puntuación, y entregamos un plan de mejora de 90 días priorizado.

## Cuándo conviene

Cuando necesitan una línea base objetiva para decidir dónde invertir, o demostrar el avance año contra año.

## Retos que resuelve

- Sin línea base para medir el progreso
- Conversaciones técnicas en el nivel equivocado
- Inversiones en las áreas con menor retorno
- Incapacidad de demostrar mejora

## Qué obtendrá

### Entregables obligatorios

- Reporte de madurez con puntuación
- Plan de mejora de 90 días

### Entregables opcionales

- Dashboard de madurez
- Recomendación de siguientes engagements

## Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Revisión previa de datos disponibles | 2 h |
| 2 | Workshop de assessment con equipos técnicos (9 dimensiones) | 3–4 h |
| 3 | Análisis y puntuación final | 2 h |
| 4 | Plan de mejora de 90 días | 2–3 h |
| 5 | Presentación de resultados | 1 h |
| — | Reevaluación anual (recurrente) | 4–8 h por ciclo |

Esfuerzo total estimado: 8–16 h. Incluye preparación, coordinación y revisión.

## Qué necesitamos de su equipo

- Participantes: Patrocinador ejecutivo
- Participantes: Líderes de SRE, plataforma, seguridad y desarrollo
- Participantes: Technical Champion
- Información y accesos: Inventario de servicios y señales
- Información y accesos: Datos de incidentes y alertas
- Información y accesos: Documentos de gobierno vigentes

## Cómo medimos el éxito

- Puntuación por dimensión (1 a 5)
- Puntuación global
- Delta de puntuación a 90 días
- % de dimensiones en nivel 3 o superior al año

## Artefactos de levantamiento de información

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

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
