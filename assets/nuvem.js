/* Carreta 3D — envio dos resultados para o banco do professor (Neon).
   O resultado continua sendo gravado primeiro no aparelho (nucleo.js).
   Depois, se o envio estiver ligado, vai também para uma tabela no Neon.
   Nada de senha aqui: o site é público. O acesso é pelo papel "anonymous"
   do Neon Data API, que no banco só tem permissão de INSERIR.

   Com as duas URLs vazias o envio fica desligado e o app funciona como antes.
   Se a internet cair, o resultado espera numa fila e sai na próxima página aberta. */

(function (glob) {
  "use strict";

  var CFG = {
    dataApi: "https://ep-empty-salad-b5yybckd.apirest.c-7.us-east-2.aws.neon.tech/neondb/rest/v1",
    auth: "https://ep-empty-salad-b5yybckd.neonauth.c-7.us-east-2.aws.neon.tech/neondb/auth"
  };

  var TABELA = "resultados";
  var FILA = "carreta3d.fila.v1";
  var CHAVE_TOKEN = "carreta3d.token.v1";
  var LIMITE_FILA = 200;

  function ligado() { return !!(CFG.dataApi && CFG.auth && glob.fetch); }

  function lerFila() {
    try {
      var f = JSON.parse(localStorage.getItem(FILA) || "[]");
      return Array.isArray(f) ? f : [];
    } catch (e) { return []; }
  }

  function gravarFila(f) {
    try { localStorage.setItem(FILA, JSON.stringify(f.slice(-LIMITE_FILA))); } catch (e) {}
  }

  /* ---- token anônimo (curto, guardado só nesta aba) ---- */

  function tokenGuardado() {
    try {
      var t = JSON.parse(sessionStorage.getItem(CHAVE_TOKEN) || "null");
      if (t && t.valor && t.expira > Date.now() + 30000) { return t.valor; }
    } catch (e) {}
    return null;
  }

  function obterToken() {
    var t = tokenGuardado();
    if (t) { return Promise.resolve(t); }
    return fetch(CFG.auth + "/token/anonymous", { method: "GET", credentials: "omit" })
      .then(function (r) {
        if (!r.ok) { throw new Error("token " + r.status); }
        return r.json();
      })
      .then(function (j) {
        var valor = j.token || j.access_token || j.jwt;
        if (!valor) { throw new Error("token sem valor"); }
        /* o Neon devolve expires_at em segundos (token de 1 hora) */
        var expira = j.expires_at ? j.expires_at * 1000 : Date.now() + 600000;
        try {
          sessionStorage.setItem(CHAVE_TOKEN,
            JSON.stringify({ valor: valor, expira: expira }));
        } catch (e) {}
        return valor;
      })
      /* sem token, tenta assim mesmo: o Data API cai no papel anonymous */
      .then(null, function () { return null; });
  }

  /* ---- envio ---- */

  function linha(reg) {
    return {
      nome: String(reg.nome || "").slice(0, 80),
      aula: String(reg.aula || "").slice(0, 40),
      atividade: String(reg.atividade || "").slice(0, 80),
      acertos: reg.acertos | 0,
      total: reg.total | 0,
      quando: String(reg.quando || "").slice(0, 20),
      detalhe: String(reg.detalhe || "").slice(0, 1000)
    };
  }

  function inserir(token, dado) {
    var cab = { "Content-Type": "application/json", "Prefer": "return=minimal" };
    if (token) { cab.Authorization = "Bearer " + token; }
    return fetch(CFG.dataApi + "/" + TABELA, {
      method: "POST",
      credentials: "omit",
      headers: cab,
      body: JSON.stringify(dado)
    });
  }

  var drenando = false;

  function drenar() {
    if (!ligado() || drenando) { return; }
    var fila = lerFila();
    if (!fila.length) { return; }
    drenando = true;
    obterToken().then(function (token) {
      var i = 0;
      function proximo() {
        if (i >= fila.length) { return; }
        return inserir(token, fila[i]).then(function (r) {
          if (r.ok) { i++; return proximo(); }
          /* 401: token venceu; tenta de novo na próxima página.
             Outros erros do servidor: para aqui e mantém na fila. */
          if (r.status === 401) { try { sessionStorage.removeItem(CHAVE_TOKEN); } catch (e) {} }
          throw new Error("insert " + r.status);
        });
      }
      return Promise.resolve(proximo()).then(null, function () {}).then(function () {
        gravarFila(lerFila().slice(i));
      });
    }).then(null, function () {}).then(function () { drenando = false; });
  }

  function enviar(reg) {
    if (!ligado()) { return; }
    var f = lerFila();
    f.push(linha(reg));
    gravarFila(f);
    drenar();
  }

  function pendentes() { return lerFila().length; }

  glob.CarretaNuvem = { ligado: ligado, enviar: enviar, drenar: drenar, pendentes: pendentes };

  if (ligado()) { setTimeout(drenar, 1500); }
})(window);
