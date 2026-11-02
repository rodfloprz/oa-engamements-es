(function () {
  "use strict";
  var OA = window.OA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var view = $("#view");
  var A = OA.artifacts;

  /* ---------- catálogo plano ---------- */
  var ENG = {}, GRP = {}, FORMS = {}, order = ["home", "metodo", "valor"];
  OA.nav.forEach(function (g) {
    g.engagements.forEach(function (e) { e.group = g; ENG["e-" + e.id] = e; GRP["e-" + e.id] = g; order.push("e-" + e.id); });
  });
  order.push("plantillas");
  OA.forms.forEach(function (f) { FORMS["f-" + f.id] = f; });
  OA.formGroups.forEach(function (g) { g.forms.forEach(function (id) { order.push("f-" + id); }); });

  function title(id) {
    if (id === "home") return "Inicio";
    if (id === "metodo") return "Cómo trabajamos";
    if (id === "valor") return "Cómo medimos el valor";
    if (id === "plantillas") return "Plantillas de levantamiento";
    if (FORMS[id]) return FORMS[id].titulo;
    return ENG[id] ? ENG[id].name : id;
  }

  /* ---------- bloques ---------- */
  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      var k = b[0];
      if (k === "h1" || k === "h2" || k === "h3") { var t = k === "h1" ? "h2" : k; return "<" + t + ">" + esc(b[1]) + "</" + t + ">"; }
      if (k === "p") return "<p>" + esc(b[1]) + "</p>";
      if (k === "note") return '<div class="note">' + esc(b[1]) + "</div>";
      if (k === "ul" || k === "ol") return "<" + k + ">" + b[1].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</" + k + ">";
      if (k === "check") return '<ul class="check">' + b[1].map(function (x) { return "<li>☐ " + esc(x) + "</li>"; }).join("") + "</ul>";
      if (k === "table") return '<div class="tw"><table><thead><tr>' + b[1].map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        b[2].map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      return "";
    }).join("");
  }
  function exportBar(a, label) {
    var f = a.files, out = '<div class="exp"><span>' + (label || "Exportar") + "</span>";
    ["md", "csv", "pdf"].forEach(function (k) { if (f[k]) out += '<a class="btn" href="' + f[k] + '" download>' + k.toUpperCase() + "</a>"; });
    return out + '<button class="btn" data-print type="button">Imprimir</button></div>';
  }
  function hours(e) { var a = e.esfuerzo; return a[0] === a[1] ? a[0] + " h" : a[0] + "–" + a[1] + " h"; }
  function pill(e) { return e.status === "dev" ? '<span class="pill dev">En desarrollo</span>' : ""; }

  /* ---------- páginas ---------- */
  function pageHome() {
    var m = OA.meta;
    var h = '<div class="view-head"><h1>' + esc(m.title) + '</h1><p class="lead">' + esc(m.subtitle) + ". Elija un engagement para ver cómo trabajamos, qué necesitamos de su equipo y qué obtendrá.</p></div>";
    h += '<div class="map">' + OA.nav.map(function (g) {
      return '<section class="panel" style="--c:' + g.color + '"><h3>' + esc(g.name) + '</h3><p class="tag">' + esc(g.tagline) + " · " + g.engagements.length + " engagements</p>" +
        g.engagements.map(function (e) { return '<a class="tile" href="#e-' + e.id + '" data-go="e-' + e.id + '"><span>' + esc(e.name) + "</span>" + pill(e) + "</a>"; }).join("") + "</section>";
    }).join("") + "</div>";
    h += '<div class="cards">' +
      '<div class="card"><h3>Cómo trabajamos</h3><p>Recorrido del cliente, modelo de seis pasos y cadencia.</p><a class="btn" href="#metodo" data-go="metodo">Ver</a></div>' +
      '<div class="card"><h3>Cómo medimos el valor</h3><p>KPIs, línea base, niveles de evidencia y fórmulas.</p><a class="btn" href="#valor" data-go="valor">Ver</a></div>' +
      '<div class="card"><h3>Plantillas de levantamiento</h3><p>Formatos interactivos para compartir la información de su organización.</p><a class="btn" href="#plantillas" data-go="plantillas">Ver</a></div></div>';
    h += exportBar(A["guia-completa"], "Guía completa");
    h += '<p class="foot">' + esc(m.org) + " · Versión " + m.version + " · " + esc(m.date) + ". " + esc(m.disclaimer) + "</p>";
    return h;
  }

  function pageArt(aid, lead) {
    var a = A[aid];
    return '<div class="view-head"><h1>' + esc(a.title) + "</h1>" + (lead ? '<p class="lead">' + esc(lead) + "</p>" : "") + "</div>" + exportBar(a) + renderBlocks(a.blocks);
  }

  function infoBlocks(blocks) {
    /* los artefactos de levantamiento se muestran en su pestaña; se omiten de la descripción */
    var out = [], skip = false;
    blocks.forEach(function (b) {
      if (b[0] === "h2") skip = b[1] === "Artefactos de levantamiento de información";
      if (!skip || b[0] === "note") out.push(b);
    });
    return out;
  }

  var tabState = {};
  function pageEng(id) {
    var e = ENG[id], g = e.group, tab = tabState[id] || "info";
    var a = A[e.info];
    var h = '<div class="view-head"><p class="crumb"><i></i>' + esc(g.name) + " · " + esc(g.tagline) + "</p><h1>" + esc(e.name) + "</h1>" +
      '<div class="meta"><div><span>Estado</span>' + (e.status === "dev" ? '<span class="pill dev">En desarrollo</span>' : '<span class="pill ok">Disponible</span>') + "</div>" +
      "<div><span>Esfuerzo estimado de Grafana</span>" + hours(e) + "</div></div></div>";
    h += '<div class="tabs" role="tablist">' + [["info", "Descripción"], ["lev", "Levantamiento"]].map(function (t) {
      return '<button role="tab" aria-selected="' + (t[0] === tab) + '" data-tab="' + t[0] + '">' + t[1] + "</button>";
    }).join("") + "</div>";
    if (tab === "info") {
      h += exportBar(a) + renderBlocks(infoBlocks(a.blocks));
    } else {
      h += '<p class="lead">Estos son los artefactos con los que recopilamos la información de su organización para este engagement. Cada uno se completa en línea, se puede exportar a CSV, PDF y MD y se envía a su Arquitecto por correo.</p><div class="lvlist">' +
        e.forms.map(function (fid) {
          var f = FORMS["f-" + fid];
          return '<div class="card"><h3><a href="#f-' + fid + '" data-go="f-' + fid + '">' + esc(f.titulo) + "</a></h3><p>" + esc(f.objetivo) + '</p><a class="btn" href="#f-' + fid + '" data-go="f-' + fid + '">Completar formato</a></div>';
        }).join("") + "</div>";
    }
    return h;
  }

  function pagePlantillas() {
    var h = '<div class="view-head"><h1>Plantillas de levantamiento</h1><p class="lead">Los artefactos que se utilizan para recopilar información de su organización, agrupados por tema. Cada uno es un formato interactivo: se completa en línea, se exporta a CSV, PDF y MD, y se envía por correo a su Arquitecto.</p></div>';
    OA.formGroups.forEach(function (g) {
      h += "<h2>" + esc(g.name) + '</h2><p class="hint">' + esc(g.desc) + '</p><div class="formlist">' + g.forms.map(function (id) {
        var f = FORMS["f-" + id];
        return '<div class="card"><h3><a href="#f-' + id + '" data-go="f-' + id + '">' + esc(f.titulo) + "</a></h3><p>" + esc(f.objetivo) + "</p><small>Se usa en " + f.usedBy.length + " engagement" + (f.usedBy.length === 1 ? "" : "s") + "</small></div>";
      }).join("") + "</div>";
    });
    return h;
  }

  /* ---------- navegación ---------- */
  var cur = null;
  function render(id) {
    if (order.indexOf(id) < 0) id = "home";
    cur = id;
    var h, isForm = !!FORMS[id];
    if (id === "home") h = pageHome();
    else if (id === "metodo") h = pageArt("metodologia", "El modelo de trabajo común a todos los engagements.");
    else if (id === "valor") h = pageArt("valor", "Cómo convertimos un engagement en una cifra que su equipo financiero pueda auditar.");
    else if (id === "plantillas") h = pagePlantillas();
    else if (isForm) h = '<div class="formroot">' + OAForms.page(id.slice(2)) + "</div>";
    else h = pageEng(id);
    var i = order.indexOf(id), p = order[i - 1], n = order[i + 1];
    h += '<nav class="pager" aria-label="Paginación">' +
      (p ? '<a href="#' + p + '" data-go="' + p + '"><small>Anterior</small>' + esc(title(p)) + "</a>" : "<span></span>") +
      (n ? '<a class="next" href="#' + n + '" data-go="' + n + '"><small>Siguiente</small>' + esc(title(n)) + "</a>" : "<span></span>") + "</nav>";
    view.innerHTML = h;
    if (isForm) OAForms.bind(id.slice(2), $(".formroot", view));
    var g = GRP[id] || null;
    view.style.setProperty("--gc", g ? g.color : "#ea6a1f");
    $("#topTitle").textContent = title(id);
    document.title = title(id) + " · " + OA.meta.title;
    $$("#navTree a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-go") === id); });
    if (g) { var d = $('#navTree details[data-g="' + g.id + '"]'); if (d) d.open = true; }
    if (isForm) { var fd = $("#navTree details.fm"); if (fd) fd.open = true; }
    $("#rail").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
  }

  function buildNav() {
    var t = '<div class="top">' + ["home", "metodo", "valor"].map(function (id) { return '<a href="#' + id + '" data-go="' + id + '">' + title(id) + "</a>"; }).join("") + "</div>";
    t += OA.nav.map(function (g) {
      return '<details data-g="' + g.id + '" style="--c:' + g.color + '"><summary>' + esc(g.name) + '</summary><div class="grp">' +
        g.engagements.map(function (e) { return '<a href="#e-' + e.id + '" data-go="e-' + e.id + '" data-n="' + esc(e.name.toLowerCase()) + '" style="--c:' + g.color + '">' + esc(e.name) + "</a>"; }).join("") + "</div></details>";
    }).join("");
    t += '<div class="top" style="margin-top:8px"><a href="#plantillas" data-go="plantillas">Plantillas de levantamiento</a></div>';
    t += '<details class="fm"><summary>Formatos interactivos</summary><div class="grp">' + OA.formGroups.map(function (g) {
      return '<div class="sub">' + esc(g.name) + "</div>" + g.forms.map(function (id) {
        var f = FORMS["f-" + id];
        return '<a href="#f-' + id + '" data-go="f-' + id + '" data-n="' + esc(f.titulo.toLowerCase()) + '">' + esc(f.titulo) + "</a>";
      }).join("");
    }).join("") + "</div></details>";
    $("#navTree").innerHTML = t;
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target.closest("[data-go]");
    if (t) { ev.preventDefault(); render(t.getAttribute("data-go")); try { history.replaceState(null, "", "#" + t.getAttribute("data-go")); } catch (e) {} return; }
    var tb = ev.target.closest("[data-tab]");
    if (tb) { tabState[cur] = tb.getAttribute("data-tab"); render(cur); return; }
    if (ev.target.closest("[data-print]")) window.print();
  });
  document.addEventListener("keydown", function (ev) {
    if (/INPUT|SELECT|TEXTAREA/.test(ev.target.tagName)) return;
    var i = order.indexOf(cur);
    if (ev.key === "ArrowRight" && order[i + 1]) render(order[i + 1]);
    if (ev.key === "ArrowLeft" && order[i - 1]) render(order[i - 1]);
  });
  $("#menuBtn").addEventListener("click", function () { var o = $("#rail").classList.toggle("open"); this.setAttribute("aria-expanded", String(o)); });
  $("#navFilter").addEventListener("input", function () {
    var q = this.value.toLowerCase().trim();
    $$("#navTree .grp a").forEach(function (a) { a.style.display = !q || a.getAttribute("data-n").indexOf(q) >= 0 ? "" : "none"; });
    if (q) $$("#navTree details").forEach(function (d) { d.open = true; });
  });
  $("#themeBtn").addEventListener("click", function () {
    var r = document.documentElement, dark = getComputedStyle(r).colorScheme === "dark";
    var next = dark ? "light" : "dark";
    r.setAttribute("data-theme", next);
    try { localStorage.setItem("oa-theme", next); } catch (e) {}
  });
  try { var th = localStorage.getItem("oa-theme"); if (th) document.documentElement.setAttribute("data-theme", th); } catch (e) {}
  window.addEventListener("hashchange", function () { var h = location.hash.replace("#", ""); if (h && h !== cur) render(h); });

  buildNav();
  render(location.hash.replace("#", "") || "home");
})();
