/* Encontro 1 — atividades e quiz.
   Cinco atividades curtas mais o quiz final. Tudo roda sem internet:
   abrir o arquivo com dois cliques já funciona. */

(function () {
  "use strict";

  var C = window.Carreta;
  var AULA = "Encontro 1";

  /* ==================== conteúdo ==================== */

  var ATIVIDADES = [

    {
      id: "a1",
      titulo: "As partes da máquina",
      resumo: "Clique na parte certa do desenho da nossa impressora.",
      tipo: "clique",
      partes: [
        { chave: "carretel", chamada: "no carretel de filamento", nome: "O carretel de filamento",
          dica: "É o rolo de plástico que alimenta a máquina." },
        { chave: "cabecote", chamada: "no cabeçote", nome: "O cabeçote",
          dica: "É a parte que se move e puxa o fio até o bico." },
        { chave: "bico", chamada: "no bico", nome: "O bico",
          dica: "É a ponta quente que derrete o plástico e desenha a peça." },
        { chave: "mesa", chamada: "na mesa aquecida", nome: "A mesa aquecida",
          dica: "É onde a peça é construída, camada sobre camada." },
        { chave: "tela", chamada: "na tela de comando", nome: "A tela de comando",
          dica: "É por onde você dá as ordens para a máquina." }
      ]
    },

    {
      id: "a2",
      titulo: "A linha do tempo",
      resumo: "Encaixe cada acontecimento no seu momento da história.",
      tipo: "encaixar",
      apoio: "Toque para pegar, toque para soltar. Não funciona arrastando.",
      pares: [
        { rotulo: "Anos 1980",
          resposta: "Chuck Hull imprime a primeira peça, com resina endurecida por luz" },
        { rotulo: "1989",
          resposta: "Scott Crump registra a patente do fio de plástico derretido" },
        { rotulo: "2009",
          resposta: "A patente vence, o preço cai e as máquinas chegam às casas" },
        { rotulo: "Hoje",
          resposta: "Impressoras em escolas, hospitais, indústrias e nesta carreta" }
      ]
    },

    {
      id: "a3",
      titulo: "Onde a impressão 3D é usada",
      resumo: "Ligue cada exemplo ao lugar onde ele acontece.",
      tipo: "encaixar",
      apoio: "Toque para pegar, toque para soltar. Não funciona arrastando.",
      pares: [
        { rotulo: "Indústria", resposta: "Peça de teste feita antes de fabricar milhares" },
        { rotulo: "Saúde", resposta: "Prótese sob medida para uma pessoa" },
        { rotulo: "Em casa", resposta: "Reposição de uma peça que quebrou" },
        { rotulo: "Escola", resposta: "Maquete para apresentar um projeto" }
      ]
    },

    {
      id: "a4",
      titulo: "Pode ou não pode",
      resumo: "Oito situações na carreta. Diga o que é permitido.",
      tipo: "opcoes",
      questoes: [
        { pergunta: "Prender o cabelo antes de chegar perto da máquina.",
          opcoes: ["Pode", "Não pode"], correta: 0,
          explicacao: "Cabelo preso é uma das três regras da nossa sala." },
        { pergunta: "Encostar o dedo no bico para ver se está quente.",
          opcoes: ["Pode", "Não pode"], correta: 1,
          explicacao: "O bico passa de 200 graus. Nunca se testa temperatura com o dedo." },
        { pergunta: "Colocar a mão dentro da máquina enquanto ela imprime.",
          opcoes: ["Pode", "Não pode"], correta: 1,
          explicacao: "Mão fora da máquina enquanto ela trabalha. As partes se movem sozinhas." },
        { pergunta: "Esperar a mesa esfriar antes de tirar a peça.",
          opcoes: ["Pode", "Não pode"], correta: 0,
          explicacao: "Esperar esfriar protege sua mão e solta a peça com muito menos esforço." },
        { pergunta: "Avisar o professor se sentir cheiro forte ou barulho estranho.",
          opcoes: ["Pode", "Não pode"], correta: 0,
          explicacao: "Avisar na hora é sempre a atitude certa. Quem avisa evita um problema maior." },
        { pergunta: "Puxar a peça com força enquanto a impressão está correndo.",
          opcoes: ["Pode", "Não pode"], correta: 1,
          explicacao: "Puxar estraga a peça, pode desalinhar a máquina e coloca sua mão em risco." },
        { pergunta: "Fotografar a impressão com o celular, de fora da máquina.",
          opcoes: ["Pode", "Não pode"], correta: 0,
          explicacao: "Registrar o trabalho é bem-vindo, desde que de fora e sem encostar." },
        { pergunta: "Trocar o filamento sozinho, sem avisar ninguém.",
          opcoes: ["Pode", "Não pode"], correta: 1,
          explicacao: "A troca envolve peça quente. Sempre com o professor junto." }
      ]
    },

    {
      id: "a5",
      titulo: "A conta do filamento",
      resumo: "Calcule quanto custa o plástico de uma peça.",
      tipo: "numero",
      questoes: [
        { pergunta: "Um chaveiro usa 8 gramas de PLA. O quilo do PLA custa R$ 100. Quanto custa o plástico desse chaveiro?",
          apoio: "A conta é: gramas × preço do quilo ÷ 1000. Escreva só o número, com vírgula.",
          resposta: 0.8,
          explicacao: "8 × 100 ÷ 1000 = R$ 0,80. Menos de um real de plástico." },
        { pergunta: "Um suporte de celular usa 40 gramas do mesmo PLA. Quanto custa o plástico dele?",
          apoio: "Mesma conta: gramas × 100 ÷ 1000.",
          resposta: 4,
          explicacao: "40 × 100 ÷ 1000 = R$ 4,00." },
        { pergunta: "E uma peça grande, de 250 gramas?",
          apoio: "Mesma conta. Repare como o valor cresce junto com o peso.",
          resposta: 25,
          explicacao: "250 × 100 ÷ 1000 = R$ 25,00. O peso da peça é o que manda no custo do material." }
      ],
      aviso: "Valor de R$ 100 o quilo usado só como referência de aula — preço a confirmar."
    },

    {
      id: "a6",
      titulo: "Quiz final do Encontro 1",
      resumo: "18 perguntas sobre tudo o que vimos hoje.",
      tipo: "opcoes",
      questoes: (window.QUIZ_AULA_01 || [])
    }

  ];

  /* ==================== estado ==================== */

  var aluno = "";
  var feitas = {};
  var jogo = null;
  /* Guarda o que este aluno fez nesta sessao, mesmo que o navegador
     esteja bloqueando o armazenamento. E o que vai para o arquivo dele. */
  var meus = [];
  var sessao = null;

  var elNome = C.el("tela-nome");
  var elMenu = C.el("tela-menu");
  var elJogo = C.el("tela-jogo");
  var area = C.el("jogo-area");
  var retorno = C.el("jogo-retorno");
  var btnAcao = C.el("btn-acao");

  function mostrar(qual) {
    elNome.classList.toggle("escondido", qual !== "nome");
    elMenu.classList.toggle("escondido", qual !== "menu");
    elJogo.classList.toggle("escondido", qual !== "jogo");
    window.scrollTo(0, 0);
  }

  function totalDe(a) {
    if (a.tipo === "clique") { return a.partes.length; }
    if (a.tipo === "encaixar") { return a.pares.length; }
    return a.questoes.length;
  }

  /* ==================== entrada ==================== */

  C.el("btn-entrar").addEventListener("click", entrar);
  C.el("campo-nome").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { entrar(); }
  });

  function entrar() {
    var v = C.el("campo-nome").value.trim();
    if (v.length < 2) {
      C.el("campo-nome").focus();
      return;
    }
    aluno = v;
    C.lembrarNome(v);
    sessao = { nome: v, aula: AULA, inicio: C.agora(), feitas: {}, meus: [] };
    feitas = sessao.feitas;
    meus = sessao.meus;
    C.salvarSessao(sessao);
    C.el("saudacao").textContent = "Vamos lá, " + primeiroNome(v) + ".";
    C.el("jogo-quem").textContent = primeiroNome(v);
    desenharMenu();
    mostrar("menu");
    C.avisarSeSemArmazenamento(elMenu);
  }

  function primeiroNome(n) { return n.split(" ")[0]; }

  /* ==================== retomar o que ficou pela metade ====================
     Se o navegador fechou no meio da aula, o aluno nao perde o que ja fez.
     O aviso so aparece se houver uma sessao desta aula guardada. */
  function ofereceRetomar() {
    var s = C.lerSessao();
    var caixa = C.el("retomar-caixa");
    caixa.innerHTML = "";
    if (!s || s.aula !== AULA) { return; }

    var quantas = Object.keys(s.feitas).length;
    var carta = C.criar("div", "carta retomar");
    carta.appendChild(C.criar("h2", null, "Continuar de onde parou"));
    carta.appendChild(C.criar("p", null,
      s.nome + " começou em " + C.quandoCurto(s.inicio) + " e já terminou "
      + quantas + (quantas === 1 ? " atividade." : " atividades.")));

    var linha = C.criar("div", "linha-botoes");
    var bSim = C.criar("button", "botao", "Retomar como " + primeiroNome(s.nome));
    bSim.addEventListener("click", function () { retomar(s); });
    var bNao = C.criar("button", "botao neutro", "Não sou eu, começar do zero");
    bNao.addEventListener("click", function () {
      if (!confirm("Isto apaga o progresso de " + s.nome
        + " guardado neste aparelho. Continuar?")) { return; }
      C.limparSessao();
      caixa.innerHTML = "";
      C.el("campo-nome").focus();
    });
    linha.appendChild(bSim);
    linha.appendChild(bNao);
    carta.appendChild(linha);
    caixa.appendChild(carta);
  }

  function retomar(s) {
    aluno = s.nome;
    sessao = s;
    feitas = s.feitas;
    meus = s.meus;
    C.lembrarNome(aluno);
    C.el("saudacao").textContent = "De volta, " + primeiroNome(aluno) + ".";
    C.el("jogo-quem").textContent = primeiroNome(aluno);
    desenharMenu();
    mostrar("menu");
    C.avisarSeSemArmazenamento(elMenu);
  }

  ofereceRetomar();

  /* ==================== menu ==================== */

  function desenharMenu() {
    var lista = C.el("lista-atividades");
    lista.innerHTML = "";
    ATIVIDADES.forEach(function (a, n) {
      var carta = C.criar("div", "carta carta-aula");
      var feito = feitas[a.id];

      var et = C.criar("span", "etiqueta" + (feito ? "" : " breve"),
        feito ? "Feita: " + feito.acertos + " de " + feito.total
              : "Atividade " + (n + 1));
      carta.appendChild(et);
      carta.appendChild(C.criar("h3", null, a.titulo));
      carta.appendChild(C.criar("p", null, a.resumo));

      var b = C.criar("button", "botao" + (feito ? " neutro" : ""),
        feito ? "Fazer de novo" : "Começar");
      b.addEventListener("click", function () { iniciar(a); });
      carta.appendChild(b);
      lista.appendChild(carta);
    });
  }

  C.el("btn-desistir").addEventListener("click", function () {
    desenharMenu();
    mostrar("menu");
  });

  /* ==================== salvar o resultado do aluno ==================== */

  function salvarMeuArquivo() {
    if (!meus.length) {
      alert("Termine pelo menos uma atividade antes de salvar. "
        + "Assim que você concluir a primeira, o arquivo fica disponível.");
      return;
    }
    C.baixarCSV("resultado-" + C.nomeSeguro(aluno) + "-encontro-1.csv", meus);
  }

  C.el("btn-salvar").addEventListener("click", salvarMeuArquivo);
  C.el("btn-salvar-menu").addEventListener("click", salvarMeuArquivo);

  /* ==================== motor ==================== */

  function iniciar(a) {
    jogo = { def: a, i: 0, acertos: 0, total: totalDe(a) };
    C.el("jogo-titulo").textContent = a.titulo;
    mostrar("jogo");
    proxima();
  }

  function proxima() {
    limparRetorno();
    btnAcao.classList.add("escondido");
    area.innerHTML = "";
    atualizarPlacar();

    if (jogo.i >= jogo.total && jogo.def.tipo !== "encaixar") {
      return terminar();
    }

    if (jogo.def.tipo === "clique") { desenharClique(); }
    else if (jogo.def.tipo === "encaixar") { desenharEncaixar(); }
    else if (jogo.def.tipo === "numero") { desenharNumero(); }
    else { desenharOpcoes(); }
  }

  function atualizarPlacar() {
    C.el("jogo-placar").textContent = jogo.acertos + " de " + jogo.total;
    var pct = Math.round((Math.min(jogo.i, jogo.total) / jogo.total) * 100);
    C.el("jogo-barra").style.width = pct + "%";
  }

  function limparRetorno() {
    retorno.className = "escondido";
    retorno.innerHTML = "";
  }

  function mostrarRetorno(ok, titulo, texto) {
    retorno.className = "retorno " + (ok ? "ok" : "nao");
    retorno.innerHTML = "";
    retorno.appendChild(C.criar("strong", null, titulo));
    if (texto) { retorno.appendChild(document.createTextNode(texto)); }
  }

  function botao(rotulo, aoClicar) {
    btnAcao.textContent = rotulo;
    btnAcao.classList.remove("escondido");
    btnAcao.disabled = false;
    btnAcao.onclick = aoClicar;
  }

  function registrar(acertou) {
    if (acertou) { jogo.acertos++; }
    jogo.i++;
    atualizarPlacar();
    botao(jogo.i >= jogo.total ? "Ver meu resultado" : "Continuar", proxima);
  }

  function terminar() {
    C.el("jogo-enunciado").textContent = "";
    C.el("jogo-apoio").textContent = "";
    limparRetorno();
    area.innerHTML = "";
    C.el("jogo-barra").style.width = "100%";

    var pct = Math.round((jogo.acertos / jogo.total) * 100);
    feitas[jogo.def.id] = { acertos: jogo.acertos, total: jogo.total };

    var reg = {
      nome: aluno, aula: AULA, atividade: jogo.def.titulo,
      acertos: jogo.acertos, total: jogo.total,
      quando: C.agora()
    };
    meus.push(reg);
    C.salvarResultado(reg);
    if (sessao) {
      sessao.feitas = feitas;
      sessao.meus = meus;
      C.salvarSessao(sessao);
    }

    var m = C.criar("div", "medalha");
    m.appendChild(C.criar("div", "numero", String(jogo.acertos)));
    m.appendChild(C.criar("div", "de", "de " + jogo.total + " — " + pct + "%"));
    m.appendChild(C.criar("div", "frase", C.fraseFinal(pct)));
    area.appendChild(m);

    botao("Voltar às atividades", function () {
      desenharMenu();
      mostrar("menu");
    });
  }

  /* ==================== tipo: clique na figura ==================== */

  function desenharClique() {
    var p = jogo.def.partes[jogo.i];
    C.el("jogo-enunciado").textContent = "Clique " + p.chamada + ".";
    C.el("jogo-apoio").textContent = p.dica;

    var svg = C.el("modelo-figura").querySelector("svg").cloneNode(true);
    area.appendChild(svg);

    var respondeu = false;
    var pontos = svg.querySelectorAll(".ponto-clique");
    Array.prototype.forEach.call(pontos, function (pt) {
      pt.addEventListener("click", function () {
        if (respondeu) { return; }
        respondeu = true;
        var certo = pt.getAttribute("data-parte") === p.chave;
        if (certo) {
          pt.classList.add("acertou");
          mostrarRetorno(true, "Isso mesmo. ", p.dica);
        } else {
          pt.classList.add("errou");
          var alvo = svg.querySelector('[data-parte="' + p.chave + '"]');
          if (alvo) { alvo.classList.add("acertou"); }
          mostrarRetorno(false, "Ainda não. ",
            p.nome + " está marcado em verde no desenho. " + p.dica);
        }
        registrar(certo);
      });
    });
  }

  /* ==================== tipo: encaixar ==================== */

  function desenharEncaixar() {
    var def = jogo.def;
    C.el("jogo-enunciado").textContent = def.resumo;
    C.el("jogo-apoio").textContent = def.apoio || "";

    var escolhida = null;
    var conferido = false;

    var dica = C.criar("div", "dica-passo");
    var caixaPecas = C.criar("div", "pecas");
    var caixaAlvos = C.criar("div", "alvos");
    area.appendChild(dica);
    area.appendChild(caixaPecas);
    area.appendChild(caixaAlvos);

    /* A dica muda conforme o aluno age. Texto parado todo mundo pula;
       texto que responde ao clique, nao. */
    function mostrarDica() {
      if (conferido) {
        dica.className = "dica-passo escondido";
        return;
      }
      if (escolhida) {
        dica.className = "dica-passo ativa";
        dica.textContent = "Passo 2 de 2 — agora toque no lugar certo, logo abaixo. "
          + "Mudou de ideia? Toque na peça de novo para largar.";
      } else {
        dica.className = "dica-passo";
        dica.textContent = "Passo 1 de 2 — toque numa peça para pegar. "
          + "Não precisa arrastar.";
      }
    }

    C.embaralhar(def.pares).forEach(function (par) {
      var b = C.criar("button", "peca", par.resposta);
      b.addEventListener("click", function () {
        if (conferido || b.classList.contains("usada")) { return; }
        if (escolhida) { escolhida.classList.remove("escolhida"); }
        escolhida = (escolhida === b) ? null : b;
        if (escolhida) { escolhida.classList.add("escolhida"); }
        mostrarDica();
      });
      caixaPecas.appendChild(b);
    });

    def.pares.forEach(function (par) {
      var alvo = C.criar("button", "alvo");
      alvo.appendChild(C.criar("span", "rotulo", par.rotulo));
      var vaga = C.criar("span", "vaga", "toque aqui para soltar");
      alvo.appendChild(vaga);
      alvo._par = par;
      alvo._peca = null;

      alvo.addEventListener("click", function () {
        if (conferido) { return; }
        if (alvo._peca) {
          alvo._peca.classList.remove("usada");
          alvo._peca = null;
          alvo.classList.remove("pronto");
          vaga.className = "vaga";
          vaga.textContent = "toque aqui para soltar";
        } else if (escolhida) {
          alvo._peca = escolhida;
          escolhida.classList.add("usada");
          escolhida.classList.remove("escolhida");
          vaga.className = "posta";
          vaga.textContent = alvo._peca.textContent;
          alvo.classList.add("pronto");
          escolhida = null;
        }
        atualizarConferir();
        mostrarDica();
      });

      caixaAlvos.appendChild(alvo);
    });

    function alvos() {
      return Array.prototype.slice.call(caixaAlvos.children);
    }

    function atualizarConferir() {
      var postos = alvos().filter(function (a) { return a._peca; }).length;
      jogo.i = postos;
      C.el("jogo-barra").style.width =
        Math.round((postos / jogo.total) * 100) + "%";
      btnAcao.disabled = postos < jogo.total;
    }

    botao("Conferir", function () {
      if (conferido) { return; }
      conferido = true;
      btnAcao.disabled = false;
      var certos = 0;
      alvos().forEach(function (a) {
        var ok = a._peca && a._peca.textContent === a._par.resposta;
        a.classList.add(ok ? "certa" : "errada");
        a.classList.remove("pronto");
        if (!ok) {
          a.lastChild.textContent = a._par.resposta;
        }
        if (ok) { certos++; }
      });
      jogo.acertos = certos;
      jogo.i = jogo.total;
      atualizarPlacar();
      mostrarRetorno(certos === jogo.total,
        certos === jogo.total ? "Tudo certo. " : "Quase lá. ",
        certos === jogo.total
          ? "Você ligou os quatro corretamente."
          : "As respostas corretas estão escritas em cada linha. Leia com calma antes de seguir.");
      botao("Ver meu resultado", terminar);
      mostrarDica();
    });
    btnAcao.disabled = true;
    mostrarDica();
  }

  /* ==================== tipo: opções ==================== */

  function desenharOpcoes() {
    var q = jogo.def.questoes[jogo.i];
    C.el("jogo-enunciado").textContent = q.pergunta;
    C.el("jogo-apoio").textContent =
      "Pergunta " + (jogo.i + 1) + " de " + jogo.total;

    var caixa = C.criar("div", "opcoes");
    area.appendChild(caixa);

    /* embaralha para a resposta certa não cair sempre no mesmo lugar */
    var ordem = C.embaralhar(q.opcoes.map(function (_, k) { return k; }));
    var botoes = [];

    ordem.forEach(function (k) {
      var b = C.criar("button", "opcao", q.opcoes[k]);
      b._k = k;
      b.addEventListener("click", function () {
        botoes.forEach(function (o) { o.disabled = true; });
        var certo = k === q.correta;
        b.classList.add(certo ? "certa" : "errada");
        if (!certo) {
          botoes.forEach(function (o) {
            if (o._k === q.correta) { o.classList.add("certa"); }
          });
        }
        mostrarRetorno(certo, certo ? "Certo. " : "Não é essa. ", q.explicacao);
        registrar(certo);
      });
      botoes.push(b);
      caixa.appendChild(b);
    });
  }

  /* ==================== tipo: número ==================== */

  function desenharNumero() {
    var q = jogo.def.questoes[jogo.i];
    C.el("jogo-enunciado").textContent = q.pergunta;
    C.el("jogo-apoio").textContent = q.apoio || "";

    var campo = C.criar("input", "campo");
    campo.type = "text";
    campo.setAttribute("inputmode", "decimal");
    campo.placeholder = "R$";
    area.appendChild(campo);

    if (jogo.def.aviso) {
      area.appendChild(C.criar("div", "aviso", jogo.def.aviso));
    }

    function conferir() {
      var v = paraNumero(campo.value);
      if (v === null) { campo.focus(); return; }
      campo.disabled = true;
      var certo = Math.abs(v - q.resposta) < 0.005;
      mostrarRetorno(certo, certo ? "Isso. " : "Não fechou. ", q.explicacao);
      registrar(certo);
    }

    campo.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !campo.disabled) { conferir(); }
    });
    botao("Conferir", conferir);
    campo.focus();
  }

  function paraNumero(txt) {
    var s = String(txt).replace(/r\$/i, "").replace(/\s/g, "").replace(",", ".");
    if (s === "") { return null; }
    var v = parseFloat(s);
    return isNaN(v) ? null : v;
  }

  /* ==================== arranque ==================== */

  var lembrado = C.nomeLembrado();
  if (lembrado) { C.el("campo-nome").value = lembrado; }
  C.el("campo-nome").focus();

})();
