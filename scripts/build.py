#!/usr/bin/env python3
"""Genera todos los artefactos del sitio a partir de data/content.json.

Salidas:
  assets/data.js                      datos para el sitio (sin dependencias de red)
  exports/guia/*                      metodología, valor, catálogo y guía completa (md, csv, pdf)
  exports/engagements/<id>.*          ficha de cada engagement (md, csv, pdf)
  templates/levantamiento/<id>.*      formularios de levantamiento en blanco (md, csv, pdf)
  templates/entregables/<id>.*        plantillas de entregables (md, csv, pdf)

Uso:
  python scripts/build.py            # genera md, csv, pdf (pdf requiere playwright + chromium)
  python scripts/build.py --no-pdf   # genera solo md, csv y data.js
"""
import csv
import html
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "data" / "content.json").read_text(encoding="utf-8"))
META = DATA["meta"]
GROUPS = {g["id"]: g for g in DATA["groups"]}
STATUS = {"available": "Disponible", "dev": "En desarrollo"}
EVID = "Nivel de evidencia: A documento contable o contractual; B sistema de registro con línea base; C estimado validado; D proyección (no entra en el ROI reportado)."


def fmt_h(a, b):
    f = lambda x: ("%g" % x)
    return f"{f(a)} h" if a == b else f"{f(a)}–{f(b)} h"


def blank(n):
    return [""] * n


# ---------------------------------------------------------------- artefactos
def eng_info(e, idx):
    g = GROUPS[e["group"]]
    tot = fmt_h(*e["esfuerzo"])
    acts = []
    for i, a in enumerate(e["actividades"], 1):
        rec = len(a) > 3 and a[3]
        acts.append([str(i) if not rec else "—", a[0] + (" (recurrente)" if rec else ""), fmt_h(a[1], a[2]) + (" por ciclo" if rec else "")])
    forms = [FORMS[f] for f in e["formularios"]]
    blocks = [
        ["table", ["Dato", "Valor"], [["Fase", f"{g['name']}: {g['tagline']}"], ["Estado", STATUS[e["status"]]], ["Esfuerzo estimado del equipo de Grafana", tot], ["Participantes sugeridos", "; ".join(e["participantes"])]]],
        ["p", e["resumen"]],
        ["h2", "Cuándo conviene"], ["p", e["cuando"]],
        ["h2", "Retos que resuelve"], ["ul", e["retos"]],
        ["h2", "Qué obtendrá"],
        ["h3", "Entregables obligatorios"], ["ul", e["obligatorios"]],
        ["h3", "Entregables opcionales"], ["ul", e["opcionales"]],
        ["h2", "Cómo lo hacemos"], ["table", ["#", "Actividad", "Tiempo estimado"], acts],
        ["p", f"Esfuerzo total estimado: {tot}. Incluye preparación, coordinación y revisión."],
        ["h2", "Qué necesitamos de su equipo"], ["ul", ["Participantes: " + p for p in e["participantes"]] + ["Información y accesos: " + i for i in e["insumos"]]],
        ["h2", "Cómo medimos el éxito"], ["ul", e["kpis"]],
        ["h2", "Artefactos de levantamiento de información"],
        ["table", ["Artefacto", "Objetivo"], [[f["titulo"], f["objetivo"]] for f in forms]],
        ["note", META["disclaimer"]],
    ]
    return dict(id=f"eng-{e['id']}", category="eng", title=e["name"], blocks=blocks)


FORMS = {f["id"]: f for f in DATA["formularios"]}
CONTACT = DATA["contacto"]


def field_opts(x):
    if x.get("o"):
        return "Opciones: " + "; ".join(x["o"])
    return {"textarea": "Texto libre", "number": "Número", "date": "Fecha", "email": "Correo"}.get(x["t"], "")


def form_art(f):
    """Formato en blanco del formulario interactivo (md, csv, pdf)."""
    blocks = [["p", f["objetivo"]],
              ["note", "Este formato se completa en línea en el sitio y se puede exportar o enviar a su Arquitecto. Esta versión en blanco sirve para completarlo sin conexión. No incluya contraseñas, tokens ni claves."],
              ["h2", "Datos de contacto"],
              ["table", ["Campo", "Respuesta"], [[c["l"], ""] for c in CONTACT]]]
    csvr = [["Datos de contacto", c["l"], "", "", "", field_opts(c)] for c in CONTACT]
    for sec in f["secciones"]:
        blocks.append(["h2", sec["t"]])
        if sec.get("d"):
            blocks.append(["p", sec["d"]])
        scal = []
        def flush():
            if scal:
                blocks.append(["table", ["Campo", "Respuesta", "Opciones o ayuda"], [[x["l"], "", field_opts(x)] for x in scal]])
                scal.clear()
        for x in sec["f"]:
            if x["t"] == "note":
                flush(); blocks.append(["note", x["l"]])
            elif x["t"] == "table":
                flush()
                n = max(x["min"], len(x.get("prefill") or []))
                rows = []
                for r in range(n):
                    row = [""] * len(x["cols"])
                    if x.get("prefill") and r < len(x["prefill"]):
                        row[0] = x["prefill"][r]
                    rows.append(row)
                    for ci, c in enumerate(x["cols"]):
                        csvr.append([sec["t"], x["l"], r + 1, c["l"], row[ci], field_opts(c)])
                blocks.append(["h3", x["l"]])
                blocks.append(["table", [c["l"] for c in x["cols"]], rows])
            else:
                scal.append(x)
                csvr.append([sec["t"], x["l"], "", "", "", field_opts(x)])
        flush()
    blocks.append(["note", META["disclaimer"]])
    return dict(id=f"form-{f['id']}", category="form", title=f["titulo"], blocks=blocks,
                csv=dict(header=["Sección", "Campo", "Fila", "Columna", "Valor", "Opciones o ayuda"], rows=csvr))


def ent_from(e):
    kp = e["kpis"]
    blocks = [
        ["p", f"Plantilla del entregable final del engagement «{e['name']}». Abre con una página para el patrocinador ejecutivo y continúa con el detalle técnico y los resultados."],
        ["table", ["Dato", "Valor"], [[k, ""] for k in ["Cliente", "Periodo", "Elaborado por", "Fecha", "Versión"]]],
        ["h2", "Resumen ejecutivo"], ["p", "Una página: problema resuelto en lenguaje de negocio, tres resultados principales con KPI antes y después, y el valor de negocio cuando sea posible."],
        ["h2", "Contexto y alcance"], ["p", "Motivo del engagement, objetivos acordados, alcance y fuera de alcance."],
        ["h2", "Resultados contra KPIs"],
        ["table", ["KPI", "Línea base", "Meta", "Actual", "Δ", "Fuente", "Nivel de evidencia"], [[k, "", "", "", "", "", ""] for k in kp]],
        ["note", EVID],
        ["h2", "Trabajo realizado"], ["check", [a[0] for a in e["actividades"] if not (len(a) > 3 and a[3])]],
    ]
    csv_rows = [["Sección", "Resumen ejecutivo", "Problema resuelto, tres resultados con KPI y valor de negocio", "", "", "", "", "", ""],
                ["Sección", "Contexto y alcance", "Motivo, objetivos, alcance y fuera de alcance", "", "", "", "", "", ""]]
    for k in kp:
        csv_rows.append(["KPI", k, "", "", "", "", "", "", ""])
    for a in e["actividades"]:
        if not (len(a) > 3 and a[3]):
            csv_rows.append(["Actividad", a[0], "Estado: pendiente, en curso o completada", "", "", "", "", "", ""])
    for s in e["secciones"]:
        blocks += [["h2", s["t"]], ["p", s["d"]]]
        csv_rows.append(["Sección", s["t"], s["d"], "", "", "", "", "", ""])
    blocks += [["h2", "Hallazgos y recomendaciones"], ["p", "Hallazgos relevantes, incluidos los KPIs que no alcanzaron la meta y el motivo."],
               ["h2", "Próximos pasos"], ["table", ["Acción", "Responsable", "Fecha"], [["", "", ""], ["", "", ""], ["", "", ""]]],
               ["h2", "Aprobación"], ["table", ["Nombre", "Rol", "Fecha"], [["", "", ""], ["", "", ""]]]]
    csv_rows += [["Sección", "Hallazgos y recomendaciones", "Hallazgos y KPIs fuera de meta", "", "", "", "", "", ""]]
    for _ in range(3):
        csv_rows.append(["Acción", "", "Próximo paso", "", "", "", "", "", ""])
    csv_rows.append(["Aprobación", "", "Nombre, rol y fecha", "", "", "", "", "", ""])
    return dict(id=f"ent-{e['id']}", category="ent", title=f"Entregable: {e['name']}", blocks=blocks,
                csv=dict(header=["Tipo", "Elemento", "Detalle o guía", "Línea base", "Meta", "Actual", "Fuente", "Responsable", "Fecha"], rows=csv_rows))


def catalog_art():
    rows, csvr = [], []
    for g in DATA["groups"]:
        for e in DATA["engagements"]:
            if e["group"] != g["id"]:
                continue
            rows.append([g["name"], e["name"], STATUS[e["status"]], fmt_h(*e["esfuerzo"]), e["resumen"]])
            csvr.append([g["name"], e["name"], STATUS[e["status"]], fmt_h(*e["esfuerzo"]), e["resumen"], "; ".join(e["obligatorios"]), "; ".join(e["opcionales"]), "; ".join(e["kpis"])])
    blocks = [["p", f"{len(rows)} engagements organizados en {len(GROUPS)} fases."], ["table", ["Fase", "Engagement", "Estado", "Esfuerzo estimado", "Resumen"], rows], ["note", META["disclaimer"]]]
    return dict(id="catalogo", category="guia", title="Catálogo de engagements", blocks=blocks,
                csv=dict(header=["Fase", "Engagement", "Estado", "Esfuerzo estimado", "Resumen", "Entregables obligatorios", "Entregables opcionales", "KPIs"], rows=csvr))


def demote(blocks):
    return [["h3", b[1]] if b[0] == "h2" else b for b in blocks]


def full_guide(arts, infos):
    blocks = [["p", META["subtitle"] + ". " + META["org"] + " · Versión " + META["version"] + " · " + META["date"] + "."], ["h1", "Cómo trabajamos"]]
    blocks += demote(arts["metodologia"]["blocks"])
    blocks += [["h1", "Cómo medimos el valor"]] + demote(arts["valor"]["blocks"])
    blocks += [["h1", "Catálogo de engagements"]] + demote(arts["catalogo"]["blocks"])
    for g in DATA["groups"]:
        blocks.append(["h1", f"{g['name']}: {g['tagline']}"])
        for e in DATA["engagements"]:
            if e["group"] == g["id"]:
                blocks.append(["h2", e["name"]])
                blocks += demote([b for b in infos[e["id"]]["blocks"] if b[0] != "note"])
    blocks.append(["note", META["disclaimer"]])
    return dict(id="guia-completa", category="guia", title=META["title"], blocks=blocks, csv=arts["catalogo"]["csv"])


# ---------------------------------------------------------------- render
def esc_md(t):
    return str(t).replace("|", "\\|").replace("\n", " ")


def to_md(a):
    out = [f"# {a['title']}", ""]
    for b in a["blocks"]:
        k = b[0]
        if k in ("h1", "h2", "h3"):
            out += [("#" * {"h1": 1, "h2": 2, "h3": 3}[k]) + " " + b[1] if k != "h1" else "# " + b[1], ""]
        elif k == "p":
            out += [b[1], ""]
        elif k == "note":
            out += ["> " + b[1], ""]
        elif k == "ul":
            out += ["- " + x for x in b[1]] + [""]
        elif k == "ol":
            out += [f"{i}. {x}" for i, x in enumerate(b[1], 1)] + [""]
        elif k == "check":
            out += ["- [ ] " + x for x in b[1]] + [""]
        elif k == "table":
            out.append("| " + " | ".join(esc_md(h) for h in b[1]) + " |")
            out.append("|" + "|".join(["---"] * len(b[1])) + "|")
            for r in b[2]:
                out.append("| " + " | ".join(esc_md(c) for c in r) + " |")
            out.append("")
    out.append(f"_{META['org']} · Versión {META['version']} · {META['date']}_")
    return "\n".join(out) + "\n"


def to_html(a):
    e = html.escape
    o = [f"<h1>{e(a['title'])}</h1>"]
    for b in a["blocks"]:
        k = b[0]
        if k in ("h1", "h2", "h3"):
            o.append(f"<{k}>{e(b[1])}</{k}>")
        elif k == "p":
            o.append(f"<p>{e(b[1])}</p>")
        elif k == "note":
            o.append(f"<p class='note'>{e(b[1])}</p>")
        elif k in ("ul", "ol"):
            o.append(f"<{k}>" + "".join(f"<li>{e(x)}</li>" for x in b[1]) + f"</{k}>")
        elif k == "check":
            o.append("<ul class='check'>" + "".join(f"<li>☐ {e(x)}</li>" for x in b[1]) + "</ul>")
        elif k == "table":
            o.append(("<table class='ids'>" if b[1][0] == "ID" else "<table>") + "<thead><tr>" + "".join(f"<th>{e(h)}</th>" for h in b[1]) + "</tr></thead><tbody>" +
                     "".join("<tr>" + "".join(f"<td>{e(c)}</td>" for c in r) + "</tr>" for r in b[2]) + "</tbody></table>")
    return "\n".join(o)


PDF_CSS = """
@page{size:A4;margin:18mm 14mm 18mm}
body{font-family:'Helvetica Neue',Arial,sans-serif;font-size:10.5pt;line-height:1.5;color:#1c2028}
h1{font-size:20pt;margin:0 0 10pt;color:#1c2028;page-break-after:avoid}
h2{font-size:14pt;margin:16pt 0 6pt;border-bottom:1px solid #d8dce3;padding-bottom:3pt;page-break-after:avoid}
h3{font-size:11.5pt;margin:12pt 0 4pt;page-break-after:avoid}
table{border-collapse:collapse;width:100%;margin:6pt 0 10pt;font-size:9pt}
th,td{border:1px solid #cfd4dc;padding:4pt 6pt;text-align:left;vertical-align:top}
th{background:#eceef2}
tr{page-break-inside:avoid}
table.ids td:first-child{white-space:nowrap}
ul,ol{margin:4pt 0 8pt;padding-left:16pt}
ul.check{list-style:none;padding-left:4pt}
.note{background:#eef3fb;border-left:3pt solid #2c4a85;padding:6pt 9pt;font-size:9.5pt}
.foot{margin-top:18pt;color:#596273;font-size:8.5pt}
"""


def to_pdf_html(a):
    return f"<!doctype html><html lang='es'><head><meta charset='utf-8'><title>{html.escape(a['title'])}</title><style>{PDF_CSS}</style></head><body>{to_html(a)}<p class='foot'>{html.escape(META['org'])} · Versión {META['version']} · {META['date']}</p></body></html>"


def derive_csv(a):
    """CSV genérico para artefactos sin CSV explícito: Sección, Elemento, Detalle."""
    rows, sec = [], ""
    for b in a["blocks"]:
        k = b[0]
        if k in ("h1", "h2", "h3"):
            sec = b[1]
        elif k == "table":
            for r in b[2]:
                rows.append([sec or "General", r[0], " | ".join(x for x in r[1:] if x != "")])
        elif k in ("ul", "ol", "check"):
            for x in b[1]:
                rows.append([sec or "General", x, ""])
        elif k == "p" and not sec:
            rows.append(["General", b[1], ""])
    return dict(header=["Sección", "Elemento", "Detalle"], rows=rows)


# ---------------------------------------------------------------- build
def clean(folder):
    d = ROOT / folder
    if d.exists():
        for p in d.iterdir():
            if p.suffix in (".md", ".csv", ".pdf"):
                p.unlink()


def main():
    want_pdf = "--no-pdf" not in sys.argv
    for d in ("exports/engagements", "exports/guia", "templates/levantamiento", "templates/entregables"):
        clean(d)
    infos, ents, farts, arts = {}, {}, {}, {}
    for i, e in enumerate(DATA["engagements"], 1):
        infos[e["id"]] = eng_info(e, i)
        ents[e["id"]] = ent_from(e)
    for f in DATA["formularios"]:
        farts[f["id"]] = form_art(f)
    for a in DATA["guia"]:
        arts[a["id"]] = a
    arts["catalogo"] = catalog_art()
    guide = full_guide(arts, infos)
    shared_ent = DATA["shared_ent"]

    files = {}
    def reg(art, folder, name):
        art["folder"], art["name"] = folder, name
        art["files"] = {k: f"{folder}/{name}.{k}" for k in ("md", "csv", "pdf")}
        files[art["id"]] = art
        return art
    for e in DATA["engagements"]:
        reg(infos[e["id"]], "exports/engagements", e["id"])
        reg(ents[e["id"]], "templates/entregables", e["id"])
    for f in DATA["formularios"]:
        reg(farts[f["id"]], "templates/levantamiento", f["id"])
    names = {"ent-kickoff": "kickoff", "ent-cierre": "reporte-cierre", "ent-progreso": "progreso-quincenal", "ent-raid": "raid"}
    for a in shared_ent:
        reg(a, "templates/entregables", names[a["id"]])
    for aid in ("metodologia", "valor", "catalogo"):
        reg(arts[aid], "exports/guia", aid)
    reg(guide, "exports/guia", "guia-completa")

    for a in files.values():
        (ROOT / a["folder"]).mkdir(parents=True, exist_ok=True)
        (ROOT / a["files"]["md"]).write_text(to_md(a), encoding="utf-8")
        c = a.get("csv") or derive_csv(a)
        a["csv"] = c
        with open(ROOT / a["files"]["csv"], "w", encoding="utf-8-sig", newline="") as fh:
            w = csv.writer(fh)
            w.writerow(c["header"])
            w.writerows(c["rows"])

    if want_pdf:
        try:
            from playwright.sync_api import sync_playwright
            with sync_playwright() as p:
                br = p.chromium.launch()
                pg = br.new_page()
                for a in files.values():
                    pg.set_content(to_pdf_html(a))
                    pg.pdf(path=str(ROOT / a["files"]["pdf"]), format="A4", print_background=True, display_header_footer=True,
                           header_template="<span></span>",
                           footer_template="<div style='font-size:8px;width:100%;text-align:center;color:#596273'><span class='pageNumber'></span> / <span class='totalPages'></span></div>",
                           margin=dict(top="18mm", bottom="18mm", left="14mm", right="14mm"))
                br.close()
        except Exception as ex:  # noqa
            print("AVISO: no se generaron los PDF:", ex)
            for a in files.values():
                a["files"].pop("pdf", None)

    # data.js (sin plantillas de entregables: no se muestran en el sitio)
    nav = []
    for g in DATA["groups"]:
        nav.append(dict(id=g["id"], name=g["name"], tagline=g["tagline"], color=g["color"],
                        engagements=[dict(id=e["id"], name=e["name"], status=e["status"], esfuerzo=e["esfuerzo"], resumen=e["resumen"],
                                          info=f"eng-{e['id']}", forms=e["formularios"])
                                     for e in DATA["engagements"] if e["group"] == g["id"]]))
    used = {}
    for e in DATA["engagements"]:
        for fid in e["formularios"]:
            used.setdefault(fid, []).append(e["id"])
    forms = [dict(id=f["id"], grupo=f["grupo"], titulo=f["titulo"], objetivo=f["objetivo"], secciones=f["secciones"],
                  usedBy=used.get(f["id"], []), files=farts[f["id"]]["files"]) for f in DATA["formularios"]]
    fgroups = [dict(id=g["id"], name=g["name"], desc=g["desc"], forms=[f["id"] for f in DATA["formularios"] if f["grupo"] == g["id"]]) for g in DATA["grupos_formularios"]]
    keep = {k: dict(id=a["id"], category=a["category"], title=a["title"], blocks=a["blocks"], files=a["files"])
            for k, a in files.items() if a["category"] in ("eng", "guia")}
    OA = dict(meta=META, status=STATUS, nav=nav, artifacts=keep, forms=forms, formGroups=fgroups, contact=DATA["contacto"],
              shared=dict(guia=["metodologia", "valor", "catalogo", "guia-completa"]))
    (ROOT / "assets").mkdir(exist_ok=True)
    (ROOT / "assets" / "data.js").write_text("window.OA = " + json.dumps(OA, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"OK: {len(files)} artefactos; PDF={'sí' if want_pdf else 'no'}")


if __name__ == "__main__":
    main()
