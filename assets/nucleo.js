/* Carreta 3D — núcleo comum.
   Guarda resultados no próprio aparelho (localStorage). Nada sai daqui:
   não há servidor, não há conta, não há internet envolvida.
   Vários alunos podem usar o mesmo computador: cada finalização vira uma linha. */

(function (glob) {
  "use strict";

  var CHAVE = "carreta3d.resultados.v1";
  var CHAVE_NOME = "carreta3d.nome";

  /* ---------- utilidades ---------- */

  function el(id) { return document.getElementById(id); }

  function criar(tag, classe, texto) {
    var n = document.createElement(tag);
    if (classe) { n.className = classe; }
    if (texto !== undefined && texto !== null) { n.textContent = texto; }
    return n;
  }

  function embaralhar(lista) {
    var a = lista.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function agora() {
    var d = new Date();
    function dd(n) { return (n < 10 ? "0" : "") + n; }
    return d.getFullYear() + "-" + dd(d.getMonth() + 1) + "-" + dd(d.getDate()) +
      " " + dd(d.getHours()) + ":" + dd(d.getMinutes());
  }

  /* ---------- armazenamento ---------- */
  /* Tudo protegido por try/catch: em janela anônima ou com armazenamento
     bloqueado, o app continua funcionando, só não guarda o resultado. */

  function ler() {
    try {
      var bruto = localStorage.getItem(CHAVE);
      if (!bruto) { return []; }
      var lista = JSON.parse(bruto);
      return Array.isArray(lista) ? lista : [];
    } catch (e) { return []; }
  }

  function gravar(lista) {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(lista));
      return true;
    } catch (e) { return false; }
  }

  function salvarResultado(reg) {
    var lista = ler();
    lista.push({
      nome: reg.nome || "sem nome",
      aula: reg.aula || "",
      atividade: reg.atividade || "",
      acertos: reg.acertos || 0,
      total: reg.total || 0,
      quando: reg.quando || agora()
    });
    return gravar(lista);
  }

  function limparTudo() { try { localStorage.removeItem(CHAVE); } catch (e) {} }

  /* Alguns navegadores bloqueiam o armazenamento quando a pagina e aberta
     direto do arquivo, ou em janela anonima. Nesse caso o resultado se perde
     sem avisar ninguem — entao a gente avisa. */
  function armazenamentoOk() {
    try {
      localStorage.setItem("carreta3d.teste", "1");
      var v = localStorage.getItem("carreta3d.teste");
      localStorage.removeItem("carreta3d.teste");
      return v === "1";
    } catch (e) { return false; }
  }

  function avisarSeSemArmazenamento(onde) {
    if (armazenamentoOk() || !onde) { return true; }
    var d = criar("div", "retorno nao");
    d.appendChild(criar("strong", null, "Este computador nao esta guardando os resultados."));
    d.appendChild(document.createTextNode(
      "As atividades funcionam normalmente. Para nao perder o resultado, use o " +
      "botao “Salvar meu resultado em arquivo” antes de fechar a pagina. " +
      "Abrir o app pelo atalho abrir-app.bat tambem resolve o bloqueio."));
    onde.insertBefore(d, onde.firstChild);
    return false;
  }

  function lembrarNome(nome) { try { sessionStorage.setItem(CHAVE_NOME, nome); } catch (e) {} }

  function nomeLembrado() {
    try { return sessionStorage.getItem(CHAVE_NOME) || ""; } catch (e) { return ""; }
  }

  /* ---------- exportação ---------- */

  function paraCSV(lista) {
    if (!lista) { lista = ler(); }
    var linhas = ["nome;aula;atividade;acertos;total;percentual;quando"];
    lista.forEach(function (r) {
      var pct = r.total ? Math.round((r.acertos / r.total) * 100) : 0;
      linhas.push([
        texto(r.nome), texto(r.aula), texto(r.atividade),
        r.acertos, r.total, pct + "%", texto(r.quando)
      ].join(";"));
    });
    return linhas.join("\r\n");
  }

  function texto(v) {
    return String(v === undefined || v === null ? "" : v).replace(/[;\r\n]/g, " ");
  }

  function baixarCSV(nomeArquivo, lista) {
    /* BOM na frente para o Excel abrir os acentos certos */
    baixarConteudo(nomeArquivo, "﻿" + paraCSV(lista), "text/csv;charset=utf-8");
  }

  /* Nome de arquivo sem acento nem caractere que o Windows recuse. */
  function nomeSeguro(txt) {
    return String(txt)
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "aluno";
  }

  function baixarConteudo(nomeArquivo, conteudo, tipo) {
    var blob = new Blob([conteudo], { type: tipo });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = nomeArquivo || "resultados-carreta3d.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* ---------- motor de atividade ---------- */
  /* Uma atividade é uma sequência de rodadas. Cada módulo de jogo desenha a
     sua rodada e chama concluir(acertou) quando o aluno responde. */

  function Atividade(cfg) {
    this.nome = cfg.nome;
    this.aula = cfg.aula;
    this.total = cfg.total;
    this.acertos = 0;
    this.rodada = 0;
    this.aoTerminar = cfg.aoTerminar || function () {};
  }

  Atividade.prototype.registrar = function (acertou) {
    if (acertou) { this.acertos++; }
    this.rodada++;
  };

  Atividade.prototype.terminou = function () { return this.rodada >= this.total; };

  Atividade.prototype.percentual = function () {
    return this.total ? Math.round((this.acertos / this.total) * 100) : 0;
  };

  /* ---------- frase de retorno ---------- */

  function fraseFinal(pct) {
    if (pct >= 90) { return "Você pegou o assunto. Pode ensinar alguém."; }
    if (pct >= 70) { return "Muito bom. Ficou pouca coisa para amarrar."; }
    if (pct >= 50) { return "Está no caminho. Vale revisar os pontos que escaparam."; }
    return "Primeira aula é assim mesmo. O que errou hoje, a gente vê de novo amanhã.";
  }

  glob.Carreta = {
    el: el,
    criar: criar,
    embaralhar: embaralhar,
    salvarResultado: salvarResultado,
    lerResultados: ler,
    limparTudo: limparTudo,
    paraCSV: paraCSV,
    baixarCSV: baixarCSV,
    lembrarNome: lembrarNome,
    agora: agora,
    baixarConteudo: baixarConteudo,
    nomeSeguro: nomeSeguro,
    armazenamentoOk: armazenamentoOk,
    avisarSeSemArmazenamento: avisarSeSemArmazenamento,
    nomeLembrado: nomeLembrado,
    Atividade: Atividade,
    fraseFinal: fraseFinal
  };
})(window);
