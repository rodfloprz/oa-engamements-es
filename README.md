# Guía de engagements de Observability Architects

Sitio estático, paginado y navegable con el portafolio de engagements organizado en seis fases:

| Fase | Engagements |
|---|---|
| Plan & Assess | Success Planning, Cloud Health Check, Observability Maturity Assessment |
| Enable & Adopt | Dashboard Design & Best Practices, Enterprise Learning Path, Grafana Assistant Best Practices, Grafana Day, Grafana Enterprise Best Practices, Grafana MCP |
| Reliability & Response | SLOs in Practice, Incident Management |
| Data & Architecture | Telemetry Management, BYOC Onboarding, Labeling Best Practices |
| Cost, Security & Governance | Grafana Cloud Cost Fundamentals, Cost Optimization, Observability Center of Excellence, Security & Access Control, Adaptive Metrics Deep Dive |
| Growth & Value | Executive Business Review, Product Roadmap Review, Capability & Adoption Review, VoC Progress Review |

Cada engagement incluye su descripción (con entregables obligatorios y opcionales) y una pestaña de **levantamiento** que lista los artefactos con los que se recopila la información del cliente. Cada artefacto es un **formato interactivo** (21 en total) que se completa en línea, se exporta a **Markdown, CSV y PDF** y se puede **enviar por correo** al Arquitecto.

## Formatos interactivos

Los formatos se definen en `data/content.json` (clave `formularios`) y se agrupan en la página *Plantillas de levantamiento*: organización y negocio, ambiente aplicativo y tecnología, observabilidad actual, operación y confiabilidad, costos, seguridad y datos, habilitación y relación, y valor y línea base.

- Las respuestas se guardan solo en el navegador de quien las captura (autoguardado) y se pueden borrar con «Limpiar».
- Exportar genera MD, CSV y PDF en el propio navegador, sin enviar datos a ningún servidor.
- **Enviar por correo** usa `assets/config.js`:
  - `recipients`: destinatarios.
  - `submitEndpoint`: si se deja vacío, el sitio descarga los tres archivos y abre el cliente de correo con los destinatarios y un resumen para que se adjunten. Si se indica la URL de un servicio que reciba un POST en JSON (`{ to, subject, form, cliente, files: [{ name, type, base64 }] }`), el envío es automático con los tres adjuntos. Un sitio estático no puede enviar correo por sí solo.
- El formato en blanco de cada artefacto está en `templates/levantamiento/` (md, csv, pdf).

## Estructura

```
index.html            sitio (abre directo en el navegador, sin servidor)
assets/
  app.js              navegación y páginas
  forms.js            formularios, exportación MD/CSV/PDF y envío por correo
  config.js           destinatarios y endpoint opcional de envío
  data.js             datos generados por el build
  style.css
data/content.json     fuente única del contenido
templates/
  levantamiento/      formatos en blanco (md, csv, pdf)
  entregables/        plantillas de entregables para uso del equipo (md, csv, pdf)
exports/
  guia/               cómo trabajamos, cómo medimos el valor, catálogo y guía completa
  engagements/        ficha de cada engagement
scripts/build.py      regenera todo a partir de data/content.json
```

## Editar el contenido y regenerar

1. Edite `data/content.json`.
2. Ejecute `python scripts/build.py` (para omitir los PDF: `python scripts/build.py --no-pdf`).
   Los PDF requieren `pip install -r scripts/requirements.txt` y `python -m playwright install chromium`.
3. Confirme los cambios en git.

El build es determinista: el mismo contenido produce los mismos archivos.

## Publicar en GitHub Pages

El workflow `.github/workflows/pages.yml` publica el sitio en cada push a `main`. Active Pages en
*Settings → Pages → Source: GitHub Actions*. La visibilidad del sitio depende de la visibilidad del
repositorio y del plan de su organización.

## Notas

- Las duraciones, actividades y entregables son referenciales y se confirman en el alcance acordado con cada cliente.
- Antes de cada commit revise que no se incluyan credenciales ni datos de clientes en las plantillas completadas.
- Las direcciones de correo de `assets/config.js` quedan visibles para cualquiera que pueda abrir el sitio; use buzones corporativos si el repositorio es público.
