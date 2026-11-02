# Cómo medimos el valor

Medimos el valor con KPIs acordados antes de empezar. Nunca se reclama una mejora sin datos de antes y después con la misma definición y metodología: sin línea base documentada, no hay valor demostrable.

## Los cuatro drivers de valor

| Driver | Qué miramos |
|---|---|
| Reliability | Reducción de MTTR, tiempo de caída evitado, cumplimiento de SLA, menos incidentes visibles para sus clientes |
| Cost efficiency | Reducción de DPM y cardinalidad, consolidación de herramientas, ahorro de Adaptive Telemetry, horas de ingeniería recuperadas |
| Developer velocity | Menor MTTD, mayor frecuencia de despliegue, menor tiempo de onboarding, menos ruido de alertas |
| Business growth | Ingreso protegido frente a caídas, mejora de experiencia del cliente, menor time-to-market, penalidades evitadas |

## Niveles de evidencia

Cada cifra lleva su nivel, para que un estimado no se presente con el mismo peso que una factura.

| Nivel | Qué es | Ejemplos | Cómo se presenta |
|---|---|---|---|
| A | Documento contable o contractual | Facturas, dashboard de facturación, contratos cancelados | Como hecho, con adjunto |
| B | Sistema de registro con línea base y definición estable | ServiceNow o Jira, Grafana SLO, PagerDuty o Alertmanager | Como atribuible, con antes y después |
| C | Estimado validado por el cliente | Encuestas, estimados de liderazgo de ingeniería | Como estimado, con rango y supuestos |
| D | Proyección o hipótesis | Ahorro de una consolidación aún no ejecutada | Solo en planes; no entra en el ROI reportado |

## Protocolo de línea base

1. Definir la métrica con precisión (por ejemplo, MTTR como mediana, solo incidentes graves).
2. Elegir el sistema de registro y la persona responsable del dato en su organización.
3. Congelar la ventana: al menos 90 días previos al arranque, con las mismas severidades.
4. Capturar la evidencia con fecha y archivarla.
5. Acordar línea base y meta dentro del Success Plan.
6. Medir de nuevo al cierre con una ventana de la misma duración y la misma definición.

## Fórmulas y reglas de evidencia

| Métrica | Fórmula | Fuente de evidencia | Notas de rigor | Nivel típico |
|---|---|---|---|---|
| Valor de reducción de MTTR | (MTTR base − MTTR actual) × incidentes al año × ingreso por hora afectado | Tickets (misma severidad), postmortems, historial de paging | Usar mediana, no promedio, y la misma definición en ambos periodos. Acordar el % de ingreso realmente afectado. | B |
| Ingreso protegido | Horas de caída evitadas × ingreso por hora | Status page, registros de incidentes, synthetic checks | El cliente valida su propio ingreso por hora. | B |
| Ahorro en Grafana Cloud | (DPM base − DPM actual) × costo por DPM + ahorro de retención + ahorro de Adaptive Telemetry no incluido en la reducción de DPM | Dashboard de facturación, facturas | Usar la tarifa efectiva de la factura. No contar dos veces el mismo ahorro. | A |
| Ahorro por consolidación de herramientas | Σ licencias retiradas − costo incremental de Grafana | Contratos cancelados, facturas antes y después | Requiere retiro confirmado, no proyectado. | A |
| Productividad de ingeniería recuperada | (Horas antes − horas después) × personas afectadas × costo por hora con carga | Encuestas, estimados de liderazgo, líneas de tiempo de postmortems | Se presenta como estimado basado en entrevistas. | C |
| Reducción de ruido de alertas | (Alertas antes − alertas después) ÷ alertas antes × 100 | Registros de PagerDuty o Alertmanager, historial de Grafana | Validar que no aumentaron los falsos negativos. | B |
| Mejora de SLO attainment | SLO actual % − SLO base % | Dashboard de Grafana SLO, términos de SLA | Requiere SLOs definidos antes del engagement. | B |
| Penalidades de SLA evitadas | Incumplimientos al año antes × penalidad promedio | Contrato SLA e historial de penalidades pagadas | Solo con contrato y penalidades documentadas. | A o B |
| Tiempo de onboarding con CoE | (Días antes − días después) × equipos al año × costo diario por persona | Equipos incorporados antes y después, encuestas | Medir con al menos dos equipos antes y dos después. | C |

## Ejemplos numéricos

| Caso | Cálculo | Resultado anual |
|---|---|---|
| Reducción de MTTR de 60 a 30 minutos | 0.5 h × 48 incidentes × USD 50,000 por hora | USD 1,200,000 |
| Productividad recuperada | 0.5 h × 48 incidentes × 5 personas × USD 120 por hora | USD 14,400 |
| Consolidación de herramientas | Herramienta A 200K + herramienta B 150K − Grafana 250K | USD 100,000 |

> Los ejemplos son ilustrativos. Cada cifra real se calcula con los datos y las definiciones de su organización.

## Reglas para no inflar el retorno

- No duplicar horas: si el mismo tiempo de incidente alimenta dos beneficios, documentar por qué son flujos distintos.
- Atribución explícita: si hubo otros cambios en el periodo, acordar qué parte se atribuye al engagement.
- Mediana, no promedio, y siempre la misma severidad en ambos periodos.
- Lo proyectado no cuenta: una consolidación sin retiro confirmado es nivel D.
- Mostrar rangos con supuestos, no una cifra con falsa precisión.
- Sus datos los valida su equipo: ingreso por hora, costo por persona y penalidades.

## Cálculo del retorno

ROI verificado = beneficios anuales con evidencia A y B ÷ costo anual del contrato. ROI ampliado = incluye además el nivel C, mostrado por separado y marcado como estimado. El nivel D no entra.

## Plantilla de declaración de valor

- [Cliente] redujo su MTTR de [X min] a [Y min] ([Z%] de mejora) en los últimos 12 meses. Fuente: datos de tickets, mismo método de medición en ambos periodos.
- Con Adaptive Metrics y la optimización de cardinalidad, [Cliente] redujo su DPM en [X%], con un ahorro anual de USD [Y]. Fuente: dashboard de facturación y facturas.
- La consolidación de [N herramientas] eliminó USD [X] en licencias anuales, con un ahorro neto de USD [Y] tras el costo de Grafana. Fuente: contratos cancelados.
- Los SLOs de los [N] servicios críticos mantienen un attainment de [X%] en el último trimestre. Fuente: dashboard de SLO y contrato de SLA.

_Grafana Labs · Observability Architects · Versión 1.1 · Octubre 2026_
