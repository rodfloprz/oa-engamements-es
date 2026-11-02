(function () {
  "use strict";
  var OA = window.OA, CFG = window.OA_CONFIG || {};
  var FORMS = {};
  OA.forms.forEach(function (f) { FORMS[f.id] = f; });
  var ENGS = [];
  OA.nav.forEach(function (g) { g.engagements.forEach(function (e) { ENGS.push(e); }); });
  var live = {}; // valores por formulario

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function today() { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function engName(id) { for (var i = 0; i < ENGS.length; i++) if (ENGS[i].id === id) return ENGS[i].name; return id || ""; }
  function slug(s) { return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase().slice(0, 40); }

  /* ---------- valores ---------- */
  function key(id) { return "oa-form-" + id; }
  function load(id) { try { return JSON.parse(localStorage.getItem(key(id)) || "{}") || {}; } catch (e) { return {}; } }
  function save(id) { try { localStorage.setItem(key(id), JSON.stringify(live[id])); return true; } catch (e) { return false; } }
  function blankRows(x) {
    var n = Math.max(x.min || 1, (x.prefill || []).length), rows = [];
    for (var i = 0; i < n; i++) { var r = {}; if (x.prefill && x.prefill[i]) r[x.cols[0].k] = x.prefill[i]; rows.push(r); }
    return rows;
  }
  function init(f) {
    var v = load(f.id);
    OA.contact.forEach(function (c) { if (v[c.k] == null) v[c.k] = c.today ? today() : ""; });
    f.secciones.forEach(function (s) { s.f.forEach(function (x) {
      if (x.t === "table" && !Array.isArray(v[x.k])) v[x.k] = blankRows(x);
      if (x.t === "multi" && !Array.isArray(v[x.k])) v[x.k] = [];
    }); });
    live[f.id] = v;
    return v;
  }

  /* ---------- render ---------- */
  function fid(f, k) { return f.id + "__" + k; }
  function options(list, sel, ph) {
    return '<option value="">' + (ph || "Seleccione") + "</option>" + list.map(function (o) { return '<option value="' + esc(o) + '"' + (o === sel ? " selected" : "") + ">" + esc(o) + "</option>"; }).join("");
  }
  function control(f, x, v, id, extra) {
    var val = v == null ? "" : v;
    if (x.t === "textarea") return '<textarea id="' + id + '" rows="3" ' + extra + ">" + esc(val) + "</textarea>";
    if (x.t === "select") return '<select id="' + id + '" ' + extra + ">" + options(x.o, val) + "</select>";
    if (x.t === "engagement") return '<select id="' + id + '" ' + extra + '><option value="">Seleccione</option>' + ENGS.map(function (e) { return '<option value="' + e.id + '"' + (e.id === val ? " selected" : "") + ">" + esc(e.name) + "</option>"; }).join("") + '<option value="otro"' + (val === "otro" ? " selected" : "") + ">Otro o aún no definido</option></select>";
    var type = x.t === "number" ? "number" : x.t === "date" ? "date" : x.t === "email" ? "email" : "text";
    return '<input id="' + id + '" type="' + type + '" ' + (type === "number" ? 'step="any" ' : "") + 'value="' + esc(val) + '" ' + extra + ">";
  }
  function tableHtml(f, x, rows) {
    var h = '<div class="tw"><table class="ftable"><thead><tr><th>#</th>' + x.cols.map(function (c) { return "<th>" + esc(c.l) + "</th>"; }).join("") + "<th></th></tr></thead><tbody>";
    rows.forEach(function (r, i) {
      h += "<tr><td>" + (i + 1) + "</td>" + x.cols.map(function (c) {
        var ex = 'data-k="' + x.k + '" data-r="' + i + '" data-c="' + c.k + '" aria-label="' + esc(c.l + ", fila " + (i + 1)) + '"';
        var t = c.t === "select" ? "select" : c.t;
        return "<td>" + control(f, { t: t, o: c.o }, r[c.k], fid(f, x.k + "_" + i + "_" + c.k), ex) + "</td>";
      }).join("") + '<td><button type="button" class="btn sm" data-del="' + x.k + ":" + i + '" aria-label="Quitar fila ' + (i + 1) + '">Quitar</button></td></tr>';
    });
    return h + '</tbody></table></div><button type="button" class="btn sm" data-add="' + x.k + '">Agregar fila</button>';
  }
  function fieldHtml(f, x, v) {
    if (x.t === "note") return '<div class="note">' + esc(x.l) + "</div>";
    if (x.t === "table") return '<div class="ftw"><h4>' + esc(x.l) + '</h4><div data-tw="' + x.k + '">' + tableHtml(f, x, v[x.k]) + "</div></div>";
    if (x.t === "multi") return '<fieldset class="ms"><legend>' + esc(x.l) + "</legend>" + x.o.map(function (o, i) {
      return '<label class="chk"><input type="checkbox" data-ms="' + x.k + '" value="' + esc(o) + '"' + (v[x.k].indexOf(o) >= 0 ? " checked" : "") + "> " + esc(o) + "</label>";
    }).join("") + "</fieldset>";
    var id = fid(f, x.k);
    return '<div class="fld' + (x.t === "textarea" ? " wide" : "") + '"><label for="' + id + '">' + esc(x.l) + (x.req ? ' <b aria-hidden="true">*</b>' : "") + "</label>" + control(f, x, v[x.k], id, 'data-k="' + x.k + '"' + (x.req ? " required" : "")) + "</div>";
  }
  function page(fidn) {
    var f = FORMS[fidn], v = init(f);
    var g = OA.formGroups.filter(function (x) { return x.id === f.grupo; })[0];
    var used = f.usedBy.map(function (id) { return '<a class="chip" href="#e-' + id + '" data-go="e-' + id + '">' + esc(engName(id)) + "</a>"; }).join(" ");
    var h = '<div class="view-head"><p class="crumb"><i></i>' + esc(g.name) + "</p><h1>" + esc(f.titulo) + '</h1><p class="lead">' + esc(f.objetivo) + "</p>" +
      '<p class="uses"><span>Se usa en:</span> ' + used + "</p>" +
      '<p class="blankdl"><span>Formato en blanco para completar sin conexión:</span> ' + ["md", "csv", "pdf"].filter(function (k) { return f.files[k]; }).map(function (k) { return '<a href="' + f.files[k] + '" download>' + k.toUpperCase() + "</a>"; }).join(" · ") + "</p></div>";
    h += '<form class="oaform" id="oaform" novalidate autocomplete="off">';
    h += '<fieldset class="sec"><legend>Datos de contacto</legend><div class="grid">' + OA.contact.map(function (c) { return fieldHtml(f, c, v); }).join("") + "</div></fieldset>";
    f.secciones.forEach(function (s) {
      h += '<fieldset class="sec"><legend>' + esc(s.t) + "</legend>" + (s.d ? '<p class="hint">' + esc(s.d) + "</p>" : "") + '<div class="grid">' + s.f.map(function (x) { return fieldHtml(f, x, v); }).join("") + "</div></fieldset>";
    });
    h += '</form><div class="actions" role="group" aria-label="Exportar y enviar"><div class="arow"><span>Exportar lo capturado</span>' +
      '<button type="button" class="btn" data-act="md">MD</button><button type="button" class="btn" data-act="csv">CSV</button><button type="button" class="btn" data-act="pdf">PDF</button>' +
      '<button type="button" class="btn primary" data-act="mail">Enviar por correo a mi Arquitecto</button><button type="button" class="btn" data-act="clear">Limpiar</button></div>' +
      '<p class="fstatus" role="status" aria-live="polite"></p></div>' +
      '<p class="foot">Sus respuestas se guardan solo en este navegador mientras escribe y no se envían a ningún servidor hasta que usted use «Enviar por correo». Use «Limpiar» para borrarlas. No incluya contraseñas, tokens ni claves.</p>';
    return h;
  }

  /* ---------- eventos ---------- */
  function bind(fidn, root) {
    var f = FORMS[fidn];
    function V() { return live[fidn]; }
    function status(msg, err) { var s = root.querySelector(".fstatus"); if (!s) return; s.textContent = msg; s.className = "fstatus" + (err ? " err" : ""); }
    function touch() { var ok = save(fidn); status(ok ? "Guardado en este navegador." : "No se pudo guardar en este navegador; exporte sus respuestas antes de salir."); }
    function tableOf(k) { for (var i = 0; i < f.secciones.length; i++) for (var j = 0; j < f.secciones[i].f.length; j++) if (f.secciones[i].f[j].k === k) return f.secciones[i].f[j]; }
    function redraw(k) { root.querySelector('[data-tw="' + k + '"]').innerHTML = tableHtml(f, tableOf(k), V()[k]); }
    function onChange(ev) {
      var t = ev.target, v = V();
      if (t.hasAttribute("data-ms")) {
        var k = t.getAttribute("data-ms"), arr = v[k], i = arr.indexOf(t.value);
        if (t.checked && i < 0) arr.push(t.value);
        if (!t.checked && i >= 0) arr.splice(i, 1);
        touch(); return;
      }
      if (!t.hasAttribute("data-k")) return;
      var kk = t.getAttribute("data-k");
      if (t.hasAttribute("data-r")) v[kk][+t.getAttribute("data-r")][t.getAttribute("data-c")] = t.value;
      else v[kk] = t.value;
      touch();
    }
    root.addEventListener("input", onChange);
    root.addEventListener("change", onChange);
    root.addEventListener("click", function (ev) {
      var b = ev.target.closest("button"); if (!b) return;
      var v = V();
      if (b.hasAttribute("data-add")) { var k = b.getAttribute("data-add"); v[k].push({}); redraw(k); touch(); return; }
      if (b.hasAttribute("data-del")) { var p = b.getAttribute("data-del").split(":"); if (v[p[0]].length > 1) v[p[0]].splice(+p[1], 1); else v[p[0]][0] = {}; redraw(p[0]); touch(); return; }
      var act = b.getAttribute("data-act"); if (!act) return;
      if (act === "clear") {
        if (!window.confirm("¿Borrar todas las respuestas de este formato en este navegador?")) return;
        try { localStorage.removeItem(key(fidn)); } catch (e) {}
        delete live[fidn]; root.innerHTML = page(fidn); status("Respuestas borradas."); return;
      }
      if (act === "mail") return mail(f, v, status, root);
      exportOne(f, v, act); status("Archivo " + act.toUpperCase() + " generado.");
    });
  }

  /* ---------- modelo de datos capturados ---------- */
  function fmt(val) { return Array.isArray(val) ? val.join(", ") : String(val == null ? "" : val).trim(); }
  function model(f, v) {
    var m = { title: f.titulo, secs: [] };
    var c = { name: "Datos de contacto", items: [] };
    OA.contact.forEach(function (x) { var val = x.t === "engagement" ? (v[x.k] === "otro" ? "Otro o aún no definido" : engName(v[x.k])) : fmt(v[x.k]); if (val) c.items.push({ k: x.l, v: val }); });
    m.secs.push(c);
    f.secciones.forEach(function (s) {
      var sec = { name: s.t, items: [] };
      s.f.forEach(function (x) {
        if (x.t === "note") return;
        if (x.t === "table") {
          var rows = (v[x.k] || []).filter(function (r) { return x.cols.some(function (c) { return fmt(r[c.k]); }); });
          if (rows.length) sec.items.push({ table: x.l, cols: x.cols.map(function (c) { return c.l; }), rows: rows.map(function (r) { return x.cols.map(function (c) { return fmt(r[c.k]); }); }) });
        } else { var val = fmt(v[x.k]); if (val) sec.items.push({ k: x.l, v: val }); }
      });
      if (sec.items.length) m.secs.push(sec);
    });
    return m;
  }
  function cell(s) { return String(s).replace(/\|/g, "\\|").replace(/\r?\n/g, " "); }
  function toMD(f, v) {
    var m = model(f, v), o = ["# " + m.title, "", "_Capturado en línea el " + today() + "._", ""];
    m.secs.forEach(function (s) {
      o.push("## " + s.name, "");
      s.items.forEach(function (it) {
        if (it.table) { o.push("### " + it.table, "", "| " + it.cols.map(cell).join(" | ") + " |", "|" + it.cols.map(function () { return "---"; }).join("|") + "|"); it.rows.forEach(function (r) { o.push("| " + r.map(cell).join(" | ") + " |"); }); o.push(""); }
        else o.push("- **" + it.k + ":** " + it.v.replace(/\r?\n/g, "\n  "));
      });
      o.push("");
    });
    return o.join("\n").replace(/\n{3,}/g, "\n\n") + "\n";
  }
  function q(s) { return '"' + String(s).replace(/"/g, '""') + '"'; }
  function toCSV(f, v) {
    var m = model(f, v), cli = fmt(v.c_cliente), fecha = fmt(v.c_fecha);
    var rows = [["Artefacto", "Organización", "Fecha", "Sección", "Campo", "Fila", "Columna", "Valor"]];
    m.secs.forEach(function (s) { s.items.forEach(function (it) {
      if (it.table) it.rows.forEach(function (r, i) { it.cols.forEach(function (c, j) { if (r[j]) rows.push([f.titulo, cli, fecha, s.name, it.table, i + 1, c, r[j]]); }); });
      else rows.push([f.titulo, cli, fecha, s.name, it.k, "", "", it.v]);
    }); });
    return "\ufeff" + rows.map(function (r) { return r.map(q).join(","); }).join("\r\n") + "\r\n";
  }

  /* ---------- PDF (sin dependencias) ---------- */
  var CP = { 0x20AC: 128, 0x201A: 130, 0x0192: 131, 0x201E: 132, 0x2026: 133, 0x2020: 134, 0x2021: 135, 0x02C6: 136, 0x2030: 137, 0x0160: 138, 0x2039: 139, 0x0152: 140, 0x017D: 142, 0x2018: 145, 0x2019: 146, 0x201C: 147, 0x201D: 148, 0x2022: 149, 0x2013: 150, 0x2014: 151, 0x02DC: 152, 0x2122: 153, 0x0161: 154, 0x203A: 155, 0x0153: 156, 0x017E: 158, 0x0178: 159 };
  function enc(s) {
    var o = "";
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i), b;
      if (c < 128 || (c >= 160 && c <= 255)) b = c; else if (CP[c]) b = CP[c]; else b = 63;
      if (b === 40 || b === 41 || b === 92) o += "\\" + String.fromCharCode(b);
      else if (b < 32 || b > 126) o += "\\" + ("00" + b.toString(8)).slice(-3);
      else o += String.fromCharCode(b);
    }
    return o;
  }
  var ctx = null;
  function mw(s, size, bold) {
    if (!ctx) ctx = document.createElement("canvas").getContext("2d");
    ctx.font = (bold ? "bold " : "") + "100px Arial, Helvetica, sans-serif";
    return ctx.measureText(s).width * size / 100;
  }
  function wrap(text, size, bold, maxW) {
    var out = [];
    String(text).split(/\r?\n/).forEach(function (par) {
      var words = par.split(/\s+/).filter(Boolean), line = "";
      if (!words.length) { out.push(""); return; }
      words.forEach(function (w) {
        var t = line ? line + " " + w : w;
        if (mw(t, size, bold) <= maxW) { line = t; return; }
        if (line) out.push(line);
        while (mw(w, size, bold) > maxW && w.length > 1) { var k = w.length; while (k > 1 && mw(w.slice(0, k), size, bold) > maxW) k--; out.push(w.slice(0, k)); w = w.slice(k); }
        line = w;
      });
      out.push(line);
    });
    return out;
  }
  function toPDF(f, v) {
    var m = model(f, v), PW = 595.28, PH = 841.89, MG = 46, CW = PW - 2 * MG, LH = 1.32, LIM = PH - MG - 14;
    var pages = [], ops, top;
    function np() { ops = []; pages.push(ops); top = MG; }
    function at(s, x, yTop, size, bold, g) { ops.push("BT /F" + (bold ? 2 : 1) + " " + size + " Tf " + (g || 0) + " g " + x.toFixed(2) + " " + (PH - yTop).toFixed(2) + " Td (" + enc(s) + ") Tj ET"); }
    function ensure(h) { if (top + h > LIM) np(); }
    function para(text, x, w, size, bold, g, gap) {
      wrap(text, size, bold, w).forEach(function (l) { ensure(size * LH); top += size * LH; at(l, x, top, size, bold, g); });
      top += gap || 0;
    }
    function row(cells, cw, header, headCells) {
      var fs = 8, pad = 4, lines = cells.map(function (c) { return wrap(c, fs, header, cw - 2 * pad); });
      var n = Math.max.apply(null, lines.map(function (l) { return l.length; })), h = n * fs * LH + 2 * pad;
      if (top + h > LIM) { np(); if (!header) row(headCells, cw, true, headCells); }
      var y0 = top;
      if (header) ops.push("0.93 g " + MG + " " + (PH - y0 - h).toFixed(2) + " " + CW.toFixed(2) + " " + h.toFixed(2) + " re f");
      ops.push("0.7 G 0.5 w");
      cells.forEach(function (c, i) { ops.push((MG + i * cw).toFixed(2) + " " + (PH - y0 - h).toFixed(2) + " " + cw.toFixed(2) + " " + h.toFixed(2) + " re S"); });
      lines.forEach(function (ls, i) { ls.forEach(function (l, j) { at(l, MG + i * cw + pad, y0 + pad + fs * 0.95 + j * fs * LH, fs, header, 0); }); });
      top = y0 + h;
    }
    np();
    para(m.title, MG, CW, 18, true, 0, 2);
    para("Capturado en línea el " + today() + " · Grafana Labs · Observability Architects", MG, CW, 9, false, 0.4, 6);
    m.secs.forEach(function (s) {
      top += 8; ensure(34); para(s.name, MG, CW, 12.5, true, 0, 2);
      ops.push("0.8 G 0.6 w " + MG + " " + (PH - top).toFixed(2) + " m " + (MG + CW) + " " + (PH - top).toFixed(2) + " l S"); top += 5;
      s.items.forEach(function (it) {
        if (it.table) {
          ensure(40); para(it.table, MG, CW, 10, true, 0, 3);
          if (it.cols.length <= 5) { var cw = CW / it.cols.length; row(it.cols, cw, true, it.cols); it.rows.forEach(function (r) { row(r, cw, false, it.cols); }); top += 6; }
          else it.rows.forEach(function (r, i) {
            ensure(30); para("Fila " + (i + 1), MG, CW, 9, true, 0.35, 0);
            r.forEach(function (c, j) { if (c) para(it.cols[j] + ": " + c, MG + 8, CW - 8, 9.5, false, 0, 0); }); top += 5;
          });
        } else { ensure(26); para(it.k, MG, CW, 9, true, 0.35, 0); para(it.v, MG + 8, CW - 8, 10, false, 0, 4); }
      });
    });
    pages.forEach(function (o, i) { o.push("BT /F1 8 Tf 0.45 g " + MG + " 24 Td (" + enc("Grafana Labs · Observability Architects · Página " + (i + 1) + " de " + pages.length) + ") Tj ET"); });
    var objs = [];
    objs[1] = "<< /Type /Catalog /Pages 2 0 R >>";
    var kids = [];
    pages.forEach(function (o, i) {
      var pid = 5 + i * 2, cid = pid + 1, s = o.join("\n");
      kids.push(pid + " 0 R");
      objs[pid] = "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + PW + " " + PH + "] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents " + cid + " 0 R >>";
      objs[cid] = "<< /Length " + s.length + " >>\nstream\n" + s + "\nendstream";
    });
    objs[2] = "<< /Type /Pages /Kids [" + kids.join(" ") + "] /Count " + pages.length + " >>";
    objs[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
    objs[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";
    var out = "%PDF-1.4\n", offs = [];
    for (var i = 1; i < objs.length; i++) { offs[i] = out.length; out += i + " 0 obj\n" + objs[i] + "\nendobj\n"; }
    var xr = out.length;
    out += "xref\n0 " + objs.length + "\n0000000000 65535 f \n";
    for (var j = 1; j < objs.length; j++) out += ("0000000000" + offs[j]).slice(-10) + " 00000 n \n";
    out += "trailer\n<< /Size " + objs.length + " /Root 1 0 R >>\nstartxref\n" + xr + "\n%%EOF\n";
    var u = new Uint8Array(out.length);
    for (var k = 0; k < out.length; k++) u[k] = out.charCodeAt(k) & 255;
    return u;
  }

  /* ---------- descargas y correo ---------- */
  function fname(f, v, ext) { return f.id + "_" + (slug(v.c_cliente) || "cliente") + "_" + today().replace(/-/g, "") + "." + ext; }
  function download(name, data, mime) {
    var b = new Blob([data], { type: mime }), a = document.createElement("a");
    a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 800);
  }
  function build(f, v, kind) {
    if (kind === "md") return { name: fname(f, v, "md"), data: toMD(f, v), mime: "text/markdown;charset=utf-8" };
    if (kind === "csv") return { name: fname(f, v, "csv"), data: toCSV(f, v), mime: "text/csv;charset=utf-8" };
    return { name: fname(f, v, "pdf"), data: toPDF(f, v), mime: "application/pdf" };
  }
  function exportOne(f, v, kind) { var x = build(f, v, kind); download(x.name, x.data, x.mime); }
  function b64(data) {
    var bytes = typeof data === "string" ? new TextEncoder().encode(data) : data, s = "";
    for (var i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  function validate(root, v, need) {
    for (var i = 0; i < need.length; i++) {
      if (!fmt(v[need[i]])) { var el = root.querySelector('[data-k="' + need[i] + '"]'); if (el) el.focus(); return OA.contact.filter(function (c) { return c.k === need[i]; })[0].l; }
    }
    return "";
  }
  function mailUrl(f, v, md) {
    var subj = "[Levantamiento] " + f.titulo + " · " + (fmt(v.c_cliente) || "cliente");
    var lim = CFG.mailtoBodyLimit || 1500;
    var body = "Hola,\n\nComparto el formato «" + f.titulo + "» completado por " + fmt(v.c_nombre) + " (" + fmt(v.c_cliente) + ").\nAdjunto los archivos MD, CSV y PDF descargados desde el sitio.\n\n--- Resumen ---\n" + (md.length > lim ? md.slice(0, lim) + "\n[…resumen truncado; vea los adjuntos]" : md);
    return { subject: subj, url: "mailto:" + (CFG.recipients || []).join(",") + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body) };
  }
  function mail(f, v, status, root) {
    var miss = validate(root, v, ["c_cliente", "c_nombre", "c_correo"]);
    if (miss) { status("Complete «" + miss + "» antes de enviar.", true); return; }
    var files = ["md", "csv", "pdf"].map(function (k) { return build(f, v, k); });
    var mu = mailUrl(f, v, files[0].data);
    if (CFG.submitEndpoint) {
      status("Enviando…");
      fetch(CFG.submitEndpoint, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: CFG.recipients, subject: mu.subject, form: f.id, cliente: fmt(v.c_cliente), files: files.map(function (x) { return { name: x.name, type: x.mime, base64: b64(x.data) }; }) }) })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); status("Enviado a su Arquitecto con los archivos MD, CSV y PDF."); })
        .catch(function (e) { status("No se pudo enviar automáticamente (" + e.message + "). Se descargarán los archivos para enviarlos por correo.", true); fallback(); });
      return;
    }
    fallback();
    function fallback() {
      files.forEach(function (x, i) { setTimeout(function () { download(x.name, x.data, x.mime); }, i * 350); });
      setTimeout(function () {
        var a = document.createElement("a"); a.href = mu.url; document.body.appendChild(a); a.click(); a.remove();
        status("Se descargaron los archivos MD, CSV y PDF y se abrió su cliente de correo con los destinatarios (" + (CFG.recipients || []).join(", ") + "). Adjunte los tres archivos descargados y envíe el mensaje.");
      }, 1300);
    }
  }

  window.OAForms = { page: page, bind: bind, toMD: toMD, toCSV: toCSV, toPDF: toPDF, model: model, mailUrl: mailUrl, init: init, state: live };
})();
