# Cloud Health Check

| Dato | Valor |
|---|---|
| Fase | Plan & Assess: Empezar con claridad |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 4–8 h |
| Participantes sugeridos | Technical Champion; Administrador de Grafana; Líder de plataforma |

Revisión proactiva del estado de su despliegue de Grafana Cloud: uso, desempeño, configuración, seguridad y alineación con buenas prácticas. Termina con una lista priorizada de mejoras.

## Cuándo conviene

Recomendado al inicio de la relación, antes de un proyecto de costos, o cuando sospechan que el entorno se degradó sin que nadie lo note.

## Retos que resuelve

- Entornos degradados sin que nadie lo sepa
- Configuraciones subóptimas acumuladas
- Brechas de seguridad no identificadas
- Costo alto sin visibilidad de la causa raíz

## Qué obtendrá

### Entregables obligatorios

- Reporte de Health Check con áreas en semáforo
- Lista priorizada de hallazgos

### Entregables opcionales

- Recomendaciones de siguientes engagements

## Cómo lo hacemos

| # | Actividad | Tiempo estimado |
|---|---|---|
| 1 | Revisión de dashboards de uso, facturación y cardinalidad | 1–2 h |
| 2 | Sesión con su equipo: recorrido del entorno actual | 2 h |
| 3 | Análisis de cardinalidad, DPM, alertas y accesos | 1 h |
| 4 | Redacción y entrega del reporte | 1–2 h |

Esfuerzo total estimado: 4–8 h. Incluye preparación, coordinación y revisión.

## Qué necesitamos de su equipo

- Participantes: Technical Champion
- Participantes: Administrador de Grafana
- Participantes: Líder de plataforma
- Información y accesos: Acceso de lectura a la stack de Grafana Cloud
- Información y accesos: Acceso a los dashboards de facturación y uso
- Información y accesos: Lista de alertas y equipos responsables

## Cómo medimos el éxito

- Health score por área (0 a 100)
- Nº de configuraciones críticas por corregir
- DPM actual contra el esperado
- Nº de alertas sin responsable

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Herramientas de observabilidad y monitoreo | Inventariar las herramientas de monitoreo y observabilidad en uso, incluidos los productos de Grafana, para entender el panorama, los traslapes y las oportunidades de consolidación. |
| Telemetría, agentes y collectors | Conocer qué señales recolectan, con qué agentes y con qué cobertura, para diseñar la topología de collectors, el muestreo y la reducción de ingesta. |
| Alertas y guardia (on-call) | Medir el volumen y la calidad de las alertas y entender cómo funciona la guardia, para reducir ruido, enriquecer las alertas con contexto y ordenar el escalamiento. |
| Costos y consumo de observabilidad | Levantar el consumo actual, los principales generadores de costo y el nivel de gobierno de costos, para explicar la factura y priorizar las palancas de ahorro. |
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
