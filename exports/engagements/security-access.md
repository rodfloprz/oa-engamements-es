# Security & Access Control

| Dato | Valor |
|---|---|
| Fase | Cost, Security & Governance: Escalar con control |
| Estado | Disponible |
| Esfuerzo estimado del equipo de Grafana | 16–24 h |
| Participantes sugeridos | Seguridad de la información; Administradores de Grafana; Technical Champion |

Diseñamos control de acceso basado en roles y SSO para Grafana y sus fuentes de datos, límites entre tenants, gestión de secretos y registros de auditoría para un acceso seguro a los datos.

## Cuándo conviene

Cuando hay requerimientos de auditoría o cumplimiento, o necesitan ordenar quién ve qué.

## Retos que resuelve

- Brechas de cumplimiento
- Acceso no controlado
- Riesgo regulatorio
- Tokens y cuentas de servicio sin responsable
- Datos sensibles visibles para quien no los necesita

## Qué obtendrá

### Entregables obligatorios

- Diseño de RBAC y SSO
- Plan de remediación

### Entregables opcionales

- Inventario de accesos
- Diseño de aislamiento por tenant
- Procedimiento de gestión de secretos
- Configuración de auditoría

## Cómo lo hacemos

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

## Qué necesitamos de su equipo

- Participantes: Seguridad de la información
- Participantes: Administradores de Grafana
- Participantes: Technical Champion
- Información y accesos: Proveedor de identidad y estructura de grupos
- Información y accesos: Matriz de roles actual
- Información y accesos: Marcos de cumplimiento aplicables

## Cómo medimos el éxito

- Compliance score o hallazgos de auditoría antes y después
- % de usuarios con acceso por grupo del proveedor de identidad
- Nº de cuentas y tokens sin responsable
- Cobertura de registros de auditoría

## Artefactos de levantamiento de información

| Artefacto | Objetivo |
|---|---|
| Seguridad, identidad y cumplimiento | Conocer su proveedor de identidad, los roles de acceso, los marcos de cumplimiento y la gestión de secretos, para diseñar un acceso seguro a los datos de telemetría. |
| Organigrama y datos organizacionales | Conocer la estructura de su organización en lo que respecta al negocio y a la observabilidad: quién patrocina, quién decide, quién opera y quién usa la plataforma, para dirigir cada conversación a la persona correcta. |
| Convenciones de nombres y labels | Documentar los labels y convenciones que usan hoy los equipos para definir un estándar común que permita correlacionar señales y controlar la cardinalidad. |

> Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con su equipo de Grafana.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
