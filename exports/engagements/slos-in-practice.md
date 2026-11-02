# SLOs in Practice

| Dato | Valor |
|---|---|
| Fase | Reliability & Response: Proteger los journeys del cliente |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Líder de SRE; Dueños de producto de los servicios críticos; Technical Champion |

Definimos SLIs y SLOs para sus journeys clave, establecemos presupuestos de error, construimos dashboards de SLO y conectamos las alertas a esos presupuestos para alinear la operación con el impacto en el usuario.

## Cuándo conviene

Cuando hay fatiga de alertas, discusiones sin datos entre nuevas funciones y confiabilidad, o compromisos de SLA que quieren proteger.

## Retos que resuelve

- Fatiga de alertas: todo parece un problema
- Sin definición de cuánto error es aceptable
- MTTA y MTTR altos por falta de priorización
- Incumplimientos de SLA sin aviso previo
- Exceso de SLOs poco útiles

## Qué obtendrá

### Entregables obligatorios

- Definiciones de SLO por servicio crítico
- Dashboards de SLO

### Entregables opcionales

- Calculadora de presupuesto de error configurada
- Alertas basadas en SLO
- Documento de cadencia de revisión
- Dashboard de madurez de SLO

## Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Descubrimiento: journeys críticos, SLAs contractuales e incidentes pasados | 2 h |
| 2 | Workshop de SLO con el equipo SRE | 3–4 h |
| 3 | Configuración de SLOs en Grafana (3 a 5 por servicio crítico) | 4–6 h |
| 4 | Dashboards de SLO y alertas de burn rate | 3–4 h |
| 5 | Evaluación de madurez y cadencia de revisión | 2 h |
| 6 | Revisión a los 30 días | 1–2 h |

Esfuerzo total estimado: 16–24 h. Incluye preparación, coordinación y revisión.

## Qué necesitamos de su equipo

- Participantes: Líder de SRE
- Participantes: Dueños de producto de los servicios críticos
- Participantes: Technical Champion
- Información y accesos: Lista de servicios y journeys críticos
- Información y accesos: Contratos o compromisos de SLA
- Información y accesos: Historial de incidentes de los últimos 12 meses

## Cómo medimos el éxito

- Nº de SLOs en servicios críticos (3 a 5 por servicio)
- SLO attainment (actual contra meta)
- Burn rate del presupuesto de error
- Reducción del ruido de alertas
- Reducción de MTTA

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Ambiente aplicativo | Levantar el inventario de aplicaciones y servicios, su criticidad y los journeys de negocio que soportan, para priorizar qué observar primero y dónde definir SLOs. |
| SLAs, SLOs y journeys críticos | Recopilar los compromisos de servicio, los SLOs ya existentes y las prácticas de presupuesto de error, para definir SLOs alineados con el impacto en el usuario. |
| Incidentes y MTTR | Documentar cómo gestionan los incidentes y cuál ha sido su historial reciente, para establecer la línea base de MTTR y priorizar runbooks y mejoras de proceso. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
