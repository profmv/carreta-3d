/* Encontro 3 — atividades.
   Mesmo motor do Encontro 2, com o tipo "numero" trazido de volta do
   Encontro 1 (usado aqui na atividade d4).
   Aula de hoje é só Tinkercad: nada de fatiador, formatos de arquivo ou G-code.
   Tipos usados nesta aula: clique, encaixar, opcoes, numero.
   Uma atividade pode juntar partes (clique) ou leitura/campos com questões
   (ver d6, que junta leitura + campos + questões numa atividade só). */

(function () {
  "use strict";

  var C = window.Carreta;
  var AULA = "Encontro 3";

  /* ==================== conteúdo ==================== */

  var ATIVIDADES = [

    {
      id: "d1",
      titulo: "A tela do Tinkercad",
      resumo: "Clique na parte certa do esquema da tela do Tinkercad.",
      tipo: "clique",
      figura: "figura-tinkercad",
      partes: [
        { chave: "plano", chamada: "no plano de trabalho (a grade azul)",
          nome: "O plano de trabalho",
          dica: "É a grade azul onde as formas são colocadas. Tudo ali é medido em milímetros." },
        { chave: "viewcube", chamada: "no cubo de vistas",
          nome: "O cubo de vistas",
          dica: "Fica no canto do plano. Clicar nele muda de onde você está olhando a peça, sem mexer na peça." },
        { chave: "formas", chamada: "no painel de formas básicas",
          nome: "O painel de formas básicas",
          dica: "Fica do lado direito: Caixa, Cilindro, Texto e outras formas prontas para arrastar até o plano." },
        { chave: "solido-orificio", chamada: "nos botões Sólido / Orifício",
          nome: "Sólido / Orifício",
          dica: "Aparece quando uma forma está selecionada. Escolhe se ela vira material (Sólido) ou vira buraco (Orifício)." },
        { chave: "agrupar", chamada: "no botão Agrupar",
          nome: "Agrupar",
          dica: "Junta as formas selecionadas numa peça só. É aqui que um Orifício vira furo de verdade." },
        { chave: "alinhar", chamada: "no botão Alinhar",
          nome: "Alinhar",
          dica: "Mostra bolinhas para centralizar ou encostar as formas selecionadas." },
        { chave: "regua", chamada: "no botão Régua",
          nome: "A Régua",
          dica: "Mede distâncias no plano de trabalho." },
        { chave: "exportar", chamada: "no botão Exportar",
          nome: "Exportar",
          dica: "É por aqui que a peça pronta sai do Tinkercad, para o próximo passo." }
      ]
    },

    {
      id: "d2",
      titulo: "Sólido, Orifício e Agrupar",
      resumo: "Ligue cada ação do Tinkercad ao que ela realmente faz.",
      tipo: "encaixar",
      apoio: "Toque para pegar, toque para soltar. Não funciona arrastando.",
      pares: [
        { rotulo: "Cilindro marcado como Orifício + Agrupar com a placa",
          resposta: "Um furo atravessando a placa" },
        { rotulo: "Dois sólidos selecionados e Agrupar",
          resposta: "As duas formas viram uma peça só" },
        { rotulo: "Alinhar, com as formas selecionadas",
          resposta: "Centraliza ou encosta as formas escolhidas" },
        { rotulo: "Clicar no número da medida e digitar outro valor",
          resposta: "Muda o tamanho exato da forma, em milímetros" },
        { rotulo: "Desagrupar",
          resposta: "Volta a separar as formas que estavam juntas" },
        { rotulo: "Arrastar o quadradinho branco do canto da forma",
          resposta: "Muda a largura e a profundidade da forma" }
      ]
    },

    {
      id: "d3",
      titulo: "Comandos e atalhos",
      resumo: "Perguntas rápidas: como você faz isso no Tinkercad?",
      tipo: "opcoes",
      questoes: [
        { pergunta: "Você já tem uma forma pronta no plano e precisa de outra igualzinha do lado, sem desenhar de novo. Qual atalho faz uma cópia dela?",
          opcoes: ["Ctrl+D", "Ctrl+G", "Ctrl+Z"], correta: 0,
          explicacao: "Ctrl+D duplica a forma selecionada, no mesmo lugar. Depois é só mover a cópia com as setas." },
        { pergunta: "Você marcou um cilindro como Orifício em cima de uma placa e quer que o furo vire de verdade, atravessando a peça. Qual atalho junta tudo numa peça só?",
          opcoes: ["Ctrl+G", "Ctrl+D", "L"], correta: 0,
          explicacao: "Ctrl+G agrupa as formas selecionadas. É só depois de agrupar que um Orifício realmente vira furo na peça." },
        { pergunta: "Você agrupou duas formas, mas errou e precisa separá-las de novo para ajustar cada uma. Qual atalho desfaz o agrupamento?",
          opcoes: ["Ctrl+Shift+G", "Ctrl+G", "Ctrl+Z"], correta: 0,
          explicacao: "Ctrl+Shift+G desagrupa. Diferente do Ctrl+Z, ele não desfaz outras coisas que você fez depois de agrupar." },
        { pergunta: "Você selecionou uma placa e um texto e quer centralizar o texto bem no meio da placa. Qual tecla abre esse comando?",
          opcoes: ["L", "R", "D"], correta: 0,
          explicacao: "L abre o Alinhar, que mostra bolinhas para centralizar ou encostar as formas selecionadas." },
        { pergunta: "Sua forma ficou flutuando no ar, um pouco acima do plano de trabalho. Qual tecla faz ela descer e encostar direitinho embaixo?",
          opcoes: ["D", "W", "L"], correta: 0,
          explicacao: "D solta a peça no plano de trabalho, encostando embaixo. Muito útil quando uma forma nasce flutuando por engano." },
        { pergunta: "Você quer conferir a distância entre duas formas antes de decidir onde encostar uma peça. Qual tecla abre essa ferramenta de medir?",
          opcoes: ["R", "H", "S"], correta: 0,
          explicacao: "R abre a Régua, que mede distâncias direto no plano de trabalho." },
        { pergunta: "Você tem um cilindro selecionado e quer que ele vire um buraco na peça (para depois agrupar). Qual tecla transforma a forma em Orifício?",
          opcoes: ["H", "S", "D"], correta: 0,
          explicacao: "H transforma a forma selecionada em Orifício. Para voltar a ser material de verdade, é S de Sólido." },
        { pergunta: "Você quer que a largura da sua caixa fique com exatamente 50 mm, nem mais nem menos. Qual é o jeito certo de fazer isso?",
          opcoes: ["Clicar no número da medida na forma e digitar o valor exato", "Arrastar o quadradinho branco do canto até parecer do tamanho certo", "Usar a Régua para desenhar do tamanho certo"], correta: 0,
          explicacao: "Clicando no número da cota, você digita a medida exata em milímetros. Arrastar é bom para ajustar no olho, não para medida certa." }
      ]
    },

    {
      id: "d4",
      titulo: "Medidas e posição",
      resumo: "5 contas de milímetros ligadas ao que você vai construir no Tinkercad.",
      tipo: "numero",
      questoes: [
        { pergunta: "Você desenha uma placa de 4 mm de altura. Em cima dela, sem afundar, coloca um texto em relevo de 1 mm de altura. A que altura, em mm, fica o topo do texto, medindo do plano de trabalho?",
          apoio: "Some a altura da placa com a altura do texto. Escreva só o número.",
          unidade: "mm",
          resposta: 5,
          explicacao: "4 mm da placa + 1 mm do texto = 5 mm. É a mesma conta de empilhar dois blocos." },
        { pergunta: "Numa placa, você faz um furo de 5 mm de diâmetro com o centro a 5 mm da borda. Quantos mm de material sobram entre a borda do furo e a borda da placa?",
          apoio: "O furo tem 5 mm de diâmetro, ou seja, 2,5 mm de raio. Distância do centro à borda menos o raio do furo. Escreva com vírgula.",
          unidade: "mm",
          resposta: 2.5,
          explicacao: "5 − 2,5 = 2,5 mm de parede sobrando. Se o furo fosse maior ou mais perto da borda, a parede podia rasgar ao imprimir." },
        { pergunta: "Você desenha um porta-lápis: um Cilindro de 70 mm de diâmetro e, dentro dele, um Cilindro-Orifício para abrir o oco, deixando uma parede de 2 mm ao redor. Que diâmetro, em mm, deve ter o Cilindro-Orifício?",
          apoio: "Tire 2 mm de parede de cada lado do diâmetro: 70 − 2 − 2.",
          unidade: "mm",
          resposta: 66,
          explicacao: "70 − 2×2 = 66 mm. A parede de 2 mm sai dos dois lados do círculo, por isso o desconto é em dobro." },
        { pergunta: "Uma peça de 20 mm de largura é selecionada e escalada para 150% do tamanho original. Qual a nova largura, em mm?",
          apoio: "150% é uma vez e meia o tamanho. 20 × 1,5.",
          unidade: "mm",
          resposta: 30,
          explicacao: "20 × 1,5 = 30 mm. Escalar em porcentagem multiplica todas as medidas da forma pelo mesmo número." },
        { pergunta: "No mesmo porta-lápis, o fundo (a base sólida por baixo) tem 2 mm de espessura. A que altura, em mm, o Cilindro-Orifício de dentro deve ser levantado do plano de trabalho, para não furar o fundo?",
          apoio: "O orifício não pode começar do zero, senão fura a base inteira.",
          unidade: "mm",
          resposta: 2,
          explicacao: "Levantando o Orifício 2 mm, ele só começa a abrir o oco depois do fundo, deixando uma base fechada de 2 mm." }
      ]
    },

    {
      id: "d5",
      titulo: "De que formas é feito?",
      resumo: "Encaixe cada objeto na receita de formas básicas do Tinkercad que o monta.",
      tipo: "encaixar",
      apoio: "Toque para pegar, toque para soltar. Não funciona arrastando.",
      pares: [
        { rotulo: "Chaveiro", resposta: "Caixa + Cilindro-Orifício + Texto" },
        { rotulo: "Porta-lápis", resposta: "Cilindro + Cilindro-Orifício menor, elevado 2 mm" },
        { rotulo: "Dado", resposta: "Caixa + Esferas-Orifício nas faces" },
        { rotulo: "Casinha", resposta: "Caixa + Telhado + Caixa-Orifício (porta)" },
        { rotulo: "Caneca", resposta: "Cilindro oco (Cilindro + Cilindro-Orifício) + Toroide de lado como alça" },
        { rotulo: "Porta-copos", resposta: "Cilindro baixo + Tubo na borda" }
      ]
    },

    {
      id: "d6",
      titulo: "Desafios de construção",
      resumo: "Escolha um desafio no seu nível, construa no Tinkercad e registre como foi.",
      tipo: "opcoes",
      leitura: [
        { titulo: "Como funciona",
          texto: [
            "Escolha um desafio no nível em que você está. Quem terminar sobe para o próximo nível.",
            "Se você já manja de Tinkercad, pode ir direto para o Nível 3 — e ajudar um colega enquanto isso (é o monitor da vez).",
            "Deixe esta tela aberta enquanto constrói no Tinkercad: as medidas estão aqui. Só toque no botão lá embaixo quando terminar, para registrar o que fez.",
            "Não precisa ficar perfeito: o que importa é ter tentado construir."
          ] },
        { titulo: "Nível 1 — começando",
          texto: [
            "Chaveiro com nome: Caixa de 50 × 30 × 4 mm; um Cilindro-Orifício de 5 mm de diâmetro, com o centro a 5 mm da borda, para o furo da argola; um Texto de 6 mm de altura com 1 mm de relevo sobre a placa (é o exercício da folha).",
            "Porta-copos: Cilindro de 90 mm de diâmetro por 3 mm de altura (o fundo) + um Tubo também de 90 mm de diâmetro e 7 mm de altura, centralizado com Alinhar. O Tubo vira a borda que segura o copo.",
            "Dica: comece sempre pela peça maior (a base). Só depois entra com furos e detalhes por cima dela." ] },
        { titulo: "Nível 2 — pegando o jeito",
          texto: [
            "Porta-lápis: Cilindro de 70 mm de diâmetro por 100 mm de altura; dentro, um Cilindro-Orifício de 66 mm (parede de 2 mm), elevado 2 mm do plano para não furar o fundo.",
            "Dado de 20 mm: uma Caixa de 20 × 20 × 20 mm; os pontos são Esferas-Orifício de 4 mm, afundadas até a metade em cada face. Use Alinhar para centralizar os pontos e Ctrl+D para duplicar a mesma esfera várias vezes.",
            "Placa de porta com nome: Caixa de 120 × 40 × 4 mm, um Texto em relevo com o nome, e 2 furos de 4 mm para parafuso.",
            "Dica: quando uma forma se repete, como os pontos do dado, monte uma e duplique com Ctrl+D em vez de desenhar de novo." ] },
        { titulo: "Nível 3 — desafio",
          texto: [
            "Suporte de celular: base em Caixa de 80 × 70 × 5 mm; um encosto em Caixa (80 × 5 × 90 mm), girado uns 20° para trás com a seta curva e abaixado até entrar um pouco na base; na frente, um batente em Caixa de 80 × 5 × 10 mm, deixando uma fenda de 12 mm entre ele e o encosto para o celular encaixar.",
            "Casinha: Caixa de 40 × 40 × 30 mm como corpo; um Telhado de 40 × 40 × 20 mm elevado 30 mm e alinhado por cima; porta e janelas com Caixas-Orifício rasas (2 mm) na parede da frente. Extra: deixe a casinha oca com uma Caixa-Orifício por dentro.",
            "Organizador de mesa com 3 compartimentos: Caixa externa de 98 × 40 × 30 mm e 3 Caixas-Orifício de 30 × 36 × 30 mm, elevadas 2 mm (o fundo), com paredes de 2 mm entre elas e nas bordas. Confira: 2 + 30 + 2 + 30 + 2 + 30 + 2 = 98. Use Alinhar e a Régua antes de agrupar.",
            "Dica: quando a peça tem várias partes, monte e confira cada uma separada antes de agrupar tudo de uma vez." ] }
      ],
      campos: [
        { chave: "desafio", rotulo: "Qual desafio você fez (nome e nível)", tipo: "texto" },
        { chave: "formas", rotulo: "Formas que usou", tipo: "texto" },
        { chave: "medidas", rotulo: "Medidas finais (mm)", tipo: "texto" },
        { chave: "dificil", rotulo: "Como resolveu a parte mais difícil", tipo: "texto" },
        { chave: "ajuda", rotulo: "Ajudou ou foi ajudado por quem?", tipo: "texto", opcional: true }
      ],
      questoes: [
        { pergunta: "No organizador, a Caixa externa tem 98 mm de comprimento e há 4 paredes de 2 mm (duas nas pontas e duas no meio). Quanto mede cada um dos 3 compartimentos?",
          opcoes: ["30 mm", "32 mm", "31 mm"], correta: 0,
          explicacao: "98 − 4×2 = 90 mm livres; 90 ÷ 3 = 30 mm por compartimento." },
        { pergunta: "Depois de encaixar o Sólido com o Orifício do jeito certo, por que ainda é preciso apertar Agrupar?",
          opcoes: ["Porque é só depois de agrupar que o Orifício realmente vira um furo na peça", "Porque agrupar muda a cor da peça", "Porque agrupar é o mesmo que exportar"], correta: 0,
          explicacao: "Antes de agrupar, o Orifício é só uma forma fantasma sobreposta. Agrupar de fato \"come\" o material e deixa o furo pronto." }
      ]
    }

  ];

  /* ==================== estado ==================== */

  var aluno = "";
  var feitas = {};
  var jogo = null;
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

  function nPartes(a) { return a.partes ? a.partes.length : 0; }

  function totalDe(a) {
    if (a.tipo === "encaixar") { return a.pares.length; }
    if (a.tipo === "quadro") { return a.linhas.length * a.colunas.length; }
    return nPartes(a) + (a.questoes ? a.questoes.length : 0);
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
    C.baixarCSV("resultado-" + C.nomeSeguro(aluno) + "-encontro-3.csv", meus);
  }

  C.el("btn-salvar").addEventListener("click", salvarMeuArquivo);
  C.el("btn-salvar-menu").addEventListener("click", salvarMeuArquivo);

  /* ==================== motor ==================== */

  function iniciar(a) {
    jogo = { def: a, i: 0, acertos: 0, total: totalDe(a), detalhe: "" };
    C.el("jogo-titulo").textContent = a.titulo;
    mostrar("jogo");
    limparRetorno();
    area.innerHTML = "";
    btnAcao.classList.add("escondido");
    atualizarPlacar();
    if (a.leitura) { return desenharLeitura(); }
    if (a.campos) { return desenharCampos(); }
    proxima();
  }

  function proxima() {
    limparRetorno();
    btnAcao.classList.add("escondido");
    area.innerHTML = "";
    atualizarPlacar();

    var t = jogo.def.tipo;
    if (jogo.i >= jogo.total && t !== "encaixar" && t !== "quadro") {
      return terminar();
    }

    if (t === "encaixar") { desenharEncaixar(); }
    else if (t === "quadro") { desenharQuadro(); }
    else if (t === "numero") { desenharNumero(); }
    else if (jogo.i < nPartes(jogo.def)) { desenharClique(); }
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
      quando: C.agora(), detalhe: jogo.detalhe
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

  /* ==================== antes das perguntas: leitura ==================== */

  function desenharLeitura() {
    C.el("jogo-enunciado").textContent = "Leia os " + jogo.def.leitura.length + " cartões.";
    C.el("jogo-apoio").textContent = "Em grupo: um lê em voz alta, os outros acompanham.";
    jogo.def.leitura.forEach(function (c) {
      var carta = C.criar("div", "carta cartao-leitura");
      carta.appendChild(C.criar("h3", null, c.titulo));
      c.texto.forEach(function (t) { carta.appendChild(C.criar("p", null, t)); });
      area.appendChild(carta);
    });
    /* Ajuste mínimo no motor (só afeta quem tem os dois campos, como d6):
       depois da leitura, se a atividade também tiver "campos", vai para os
       campos antes das perguntas, em vez de pular direto para elas. */
    botao("Já lemos, começar", function () {
      if (jogo.def.campos) { return desenharCampos(); }
      proxima();
    });
  }

  /* ==================== antes das perguntas: o aluno escreve ==================== */

  function desenharCampos() {
    C.el("jogo-enunciado").textContent = "Preencha os campos abaixo.";
    C.el("jogo-apoio").textContent = "O professor vê o que você escreveu.";

    var valores = {};
    var form = C.criar("div", "formulario");
    area.appendChild(form);

    jogo.def.campos.forEach(function (f) {
      var bloco = C.criar("div", "campo-bloco");
      bloco.appendChild(C.criar("label", "campo-rotulo",
        f.rotulo + (f.opcional ? " (opcional)" : "")));
      if (f.tipo === "escolha") {
        var fila = C.criar("div", "chips");
        f.opcoes.forEach(function (o) {
          var b = C.criar("button", "chip", o);
          b.type = "button";
          b.addEventListener("click", function () {
            Array.prototype.forEach.call(fila.children, function (x) {
              x.classList.remove("marcado");
            });
            b.classList.add("marcado");
            valores[f.chave] = o;
          });
          fila.appendChild(b);
        });
        bloco.appendChild(fila);
      } else {
        var inp = C.criar("input", "campo campo-largo");
        inp.type = "text";
        inp.maxLength = 200;
        inp.addEventListener("input", function () { valores[f.chave] = inp.value.trim(); });
        bloco.appendChild(inp);
      }
      form.appendChild(bloco);
    });

    botao("Guardar e seguir", function () {
      var falta = jogo.def.campos.filter(function (f) {
        return !f.opcional && !valores[f.chave];
      });
      if (falta.length) {
        mostrarRetorno(false, "Falta preencher: ",
          falta.map(function (f) { return f.rotulo; }).join(", ") + ".");
        return;
      }
      jogo.detalhe = jogo.def.campos
        .filter(function (f) { return valores[f.chave]; })
        .map(function (f) { return f.rotulo + ": " + valores[f.chave]; })
        .join(" | ");
      proxima();
    });
  }

  /* ==================== tipo: clique na figura ==================== */

  function desenharClique() {
    var p = jogo.def.partes[jogo.i];
    C.el("jogo-enunciado").textContent = "Clique " + p.chamada + ".";
    C.el("jogo-apoio").textContent = "Parte " + (jogo.i + 1) + " de " + nPartes(jogo.def);

    var svg = C.el(jogo.def.figura).querySelector("svg").cloneNode(true);
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
            "Veja em verde no desenho: " + p.nome.charAt(0).toLowerCase()
            + p.nome.slice(1) + ". " + p.dica);
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
          ? "Você ligou os " + jogo.total + " corretamente."
          : "As respostas corretas estão escritas em cada linha. Leia com calma antes de seguir.");
      botao("Ver meu resultado", terminar);
      mostrarDica();
    });
    btnAcao.disabled = true;
    mostrarDica();
  }

  /* ==================== tipo: opções ==================== */

  function desenharOpcoes() {
    var k0 = jogo.i - nPartes(jogo.def);
    var q = jogo.def.questoes[k0];
    C.el("jogo-enunciado").textContent = q.pergunta;
    C.el("jogo-apoio").textContent =
      "Pergunta " + (k0 + 1) + " de " + jogo.def.questoes.length;

    if (q.svg) {
      var fig = C.criar("div", "figura-caixa");
      fig.innerHTML = q.svg;
      area.appendChild(fig);
    }

    var caixa = C.criar("div", "opcoes");
    area.appendChild(caixa);

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
    campo.placeholder = q.unidade || "mm";
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
    var s = String(txt).replace(/r\$/i, "").replace(/mm/i, "").replace(/\s/g, "").replace(",", ".");
    if (s === "") { return null; }
    var v = parseFloat(s);
    return isNaN(v) ? null : v;
  }

  /* ==================== arranque ==================== */

  var lembrado = C.nomeLembrado();
  if (lembrado) { C.el("campo-nome").value = lembrado; }
  C.el("campo-nome").focus();

})();
