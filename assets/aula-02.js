/* Encontro 2 — atividades e quiz.
   Mesmo motor do Encontro 1, com três tipos a mais:
   - leitura: cartões para ler antes das perguntas;
   - quadro: uma tabela preenchida linha por linha;
   - campos: o aluno escreve o que achou (vai para a coluna "detalhe" do CSV).
   Uma atividade pode juntar partes (clique) ou leitura/campos com questões. */

(function () {
  "use strict";

  var C = window.Carreta;
  var AULA = "Encontro 2";

  /* desenho de perfil para "precisa de suporte?" — a mesa fica embaixo */
  function perfil(forma) {
    return '<svg class="figura figura-perfil" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Peça vista de lado sobre a mesa">'
      + '<rect x="10" y="120" width="180" height="10" rx="2" fill="#2f4f58"/>'
      + '<g fill="#ef7722" stroke="#a04a06" stroke-width="2" stroke-linejoin="round">' + forma + '</g>'
      + '</svg>';
  }

  var SIM_NAO = ["Precisa de suporte", "Não precisa"];
  var TEC = ["FDM (filamento)", "Resina (SLA/MSLA)", "SLS (pó)"];

  /* ==================== conteúdo ==================== */

  var ATIVIDADES = [

    {
      id: "b1",
      titulo: "Siga o filamento",
      resumo: "Ligue cada parte da K1C ao que ela faz, na ordem em que o fio passa.",
      tipo: "encaixar",
      apoio: "Toque para pegar, toque para soltar. Não funciona arrastando.",
      pares: [
        { rotulo: "Secador", resposta: "Aquece de leve e mantém o rolo seco" },
        { rotulo: "Sensor de filamento", resposta: "Percebe quando o fio acaba e pausa a impressão" },
        { rotulo: "Tubo de teflon (PTFE)", resposta: "Só guia o fio do rolo até a cabeça" },
        { rotulo: "Extrusor", resposta: "Se patinar, faz clique-clique e o fio não anda" },
        { rotulo: "Hotend e bico", resposta: "Derrete o plástico e solta o fio fino" },
        { rotulo: "Ventoinha da cabeça", resposta: "Se parar, pontas e pontes saem caídas" },
        { rotulo: "Mesa (placa flexível)", resposta: "Se estiver engordurada, a 1ª camada não gruda" },
        { rotulo: "Correias", resposta: "Se afrouxarem, a peça sai torta ou com degraus" }
      ]
    },

    {
      id: "b2",
      titulo: "Tipos de impressora: filamento, resina e pó",
      resumo: "Leia três cartões curtos e responda. Pode ser em grupo.",
      tipo: "opcoes",
      leitura: [
        { titulo: "FDM: filamento derretido",
          texto: [
            "Um fio de plástico é empurrado até um bico quente, que derrete e desenha a peça camada por camada. É como uma pistola de cola quente guiada por computador. É a nossa K1C.",
            "Vantagens: é a mais barata para começar, tem muitos materiais (rígido, resistente, flexível) e a peça sai pronta, sem lavar.",
            "Limites: as linhas das camadas aparecem, detalhe muito fino se perde, e partes no ar precisam de suporte.",
            "Cuidados: bico e mesa quentes, peças em movimento; alguns filamentos (ABS) pedem ventilação."
          ] },
        { titulo: "Resina (SLA e MSLA): líquido que endurece com luz",
          texto: [
            "A peça nasce num tanque de resina líquida. Uma luz ultravioleta endurece a forma de cada camada.",
            "Vantagens: detalhe muito fino e superfície lisa. Ótima para peças pequenas e delicadas.",
            "Limites: a peça precisa ser lavada e curada com luz, costuma ser mais quebradiça, precisa de suporte e a área de impressão é pequena.",
            "Cuidados: resina líquida irrita pele e olhos. Luvas, óculos e ventilação. Resina suja não vai para o ralo."
          ] },
        { titulo: "SLS: pó unido por laser",
          texto: [
            "A máquina espalha uma camada finíssima de pó (em geral náilon) e um laser une o pó só no desenho. Camada por camada, a peça fica enterrada no pó.",
            "Vantagens: o pó solto segura a peça, então em geral não precisa de suporte. Peças resistentes, muitas de uma vez.",
            "Limites: máquina grande e muito cara, superfície um pouco áspera, dá trabalho limpar o pó.",
            "Cuidados: pó fino no ar faz mal para a respiração. Ambiente controlado e máscara."
          ] }
      ],
      questoes: [
        { pergunta: "Na FDM, em que estado está o material antes de imprimir?",
          opcoes: ["Fio sólido", "Líquido", "Pó"], correta: 0,
          explicacao: "Por isso a gente fala em rolo: o fio só vira líquido dentro do bico." },
        { pergunta: "Qual NÃO é verdade sobre a resina?",
          opcoes: ["A peça sai pronta, sem lavar", "Endurece com luz ultravioleta", "Irrita a pele e os olhos"], correta: 0,
          explicacao: "A peça de resina sai melada do tanque. Precisa lavar e depois curar na luz. Quem sai pronta é a FDM." },
        { pergunta: "Qual costuma dar o detalhe mais fino?",
          opcoes: TEC, correta: 1,
          explicacao: "A camada da resina é tão fina que quase não se vê o degrau entre uma e outra." },
        { pergunta: "Qual é a mais barata para começar?",
          opcoes: TEC, correta: 0,
          explicacao: "Máquina e filamento custam pouco. Por isso a FDM aparece em tanta casa e escola." },
        { pergunta: "Por que a SLS geralmente não precisa de suporte?",
          opcoes: ["O pó solto em volta segura a peça", "O laser endurece a camada antes de ela cair", "O náilon é leve demais para despencar"], correta: 0,
          explicacao: "A peça nasce enterrada no pó, que faz o papel do suporte. No fim, é só desenterrar e limpar." },
        { pergunta: "Qual pede luvas e óculos por causa do material líquido?",
          opcoes: TEC, correta: 1,
          explicacao: "Na K1C o perigo é queimar a mão; na resina é o líquido na pele." },
        { pergunta: "Miniatura de personagem com rosto detalhado.",
          opcoes: TEC, correta: 1,
          explicacao: "O traço de um rosto pequeno é mais fino que o fio que sai do bico da FDM. A resina pega esse detalhe." },
        { pergunta: "Suporte de celular para usar em casa.",
          opcoes: TEC, correta: 0,
          explicacao: "Peça de uso, que não precisa de acabamento fino. A FDM faz rápido e barato." },
        { pergunta: "50 peças de náilon resistentes para uma fábrica.",
          opcoes: TEC, correta: 2,
          explicacao: "A SLS enche a câmara de pó com dezenas de peças e imprime todas juntas. Numa fábrica, isso paga a máquina cara." },
        { pergunta: "Dentista que precisa de um modelo da arcada com muito detalhe.",
          opcoes: TEC, correta: 1,
          explicacao: "A odontologia é um dos grandes usos da resina." },
        { pergunta: "Por que a carreta tem uma impressora FDM?",
          opcoes: ["Custa pouco e a peça sai pronta, sem lavar",
                   "Dá mais detalhe que a resina, mesmo em peça pequena",
                   "É a única que imprime em plástico de verdade"], correta: 0,
          explicacao: "Resina pede lavagem e produto químico, e SLS é máquina de fábrica. Para aprender, a FDM resolve." }
      ]
    },

    {
      id: "b3",
      titulo: "O quadro dos filamentos",
      resumo: "Preencha o quadro de PLA, PETG, ABS e TPU, uma linha de cada vez.",
      tipo: "quadro",
      apoio: "Toque numa resposta em cada coluna e depois em Conferir. Pergunte aos colegas que já imprimem.",
      escala: ["Sim", "Mais ou menos", "Não"],
      colunas: ["Fácil de imprimir?", "Aguenta pancada?", "Aguenta calor e sol?", "É flexível?", "Cheiro forte, pede ventilação?"],
      linhas: [
        { nome: "PLA",
          aceitas: [["Sim"], ["Não", "Mais ou menos"], ["Não"], ["Não"], ["Não"]],
          nota: "O mais fácil e o mais usado. É duro, mas quebra em vez de dobrar, e amolece perto de 55 a 60 °C." },
        { nome: "PETG",
          aceitas: [["Sim", "Mais ou menos"], ["Sim", "Mais ou menos"], ["Sim", "Mais ou menos"], ["Não", "Mais ou menos"], ["Não"]],
          nota: "O meio-termo: mais resistente e aguenta mais calor que o PLA. Faz mais fiapos. No adesivo da K1C: bico 250 °C, mesa 70 °C." },
        { nome: "ABS",
          aceitas: [["Não", "Mais ou menos"], ["Sim"], ["Sim", "Mais ou menos"], ["Não"], ["Sim"]],
          nota: "Resistente e aguenta calor, mas encolhe ao esfriar e empena: pede gabinete fechado e mesa a 100 °C. Solta cheiro, então ventilação. Para ficar no sol forte, o certo é ASA." },
        { nome: "TPU",
          aceitas: [["Não", "Mais ou menos"], ["Sim"], null, ["Sim"], ["Não"]],
          nota: "É borracha: dobra, estica e aguenta pancada. Imprime devagar (o adesivo da K1C diz 50 mm/s). Calor depende do tipo de TPU." }
      ]
    },

    {
      id: "b4",
      titulo: "Qual filamento para cada peça?",
      resumo: "Situações reais, como as encomendas de quem vende impressão.",
      tipo: "opcoes",
      questoes: [
        { pergunta: "Suporte de celular que fica no carro, ao sol.",
          opcoes: ["PETG", "PLA", "PLA+"], correta: 0,
          explicacao: "Carro fechado passa de 60 °C. O PLA+ também amolece nessa faixa, o “+” não é para calor. PETG (ou ASA) aguenta mais." },
        { pergunta: "Capinha de celular.",
          opcoes: ["TPU", "PLA", "ABS"], correta: 0,
          explicacao: "A capinha tem que abrir para entrar no celular. Só o TPU dobra sem rachar, e ainda amortece a queda." },
        { pergunta: "Enfeite de mesa.",
          opcoes: ["PLA", "ABS", "TPU"], correta: 0,
          explicacao: "Aqui não tem esforço nem calor, então vai PLA, que é o mais fácil e tem mais cor." },
        { pergunta: "Filamento com fibra de carbono (ex.: PLA-CF) na K1C. Pode?",
          opcoes: ["Pode, o bico é de aço", "Não, a fibra gasta o bico em poucas horas", "Só com a mesa a 100 °C"], correta: 0,
          explicacao: "A fibra é abrasiva e come bico de latão. O da K1C é de aço endurecido, e é daí que vem o “C” do nome." },
        { pergunta: "O rolo Cliever diz 180–215 °C. O adesivo da K1C diz 230 °C para PLA. Quem está certo?",
          opcoes: ["Os dois, porque a K1C imprime rápido", "Só o rolo: acima de 215 °C o PLA queima", "Só o adesivo: o rolo vale para impressora antiga"], correta: 0,
          explicacao: "Plástico que passa depressa fica pouco tempo no bico e pede mais calor para derreter. Regra: comece pelo rótulo e suba se sair mal derretido." },
        { pergunta: "O filamento ficou fora do secador numa semana úmida. O que pode acontecer?",
          opcoes: ["Estalar no bico e fazer fiapos", "Grudar demais na mesa", "Nada, plástico não molha"], correta: 0,
          explicacao: "Filamento puxa água do ar. No bico essa água ferve, e dá para ouvir os estalos." },
        { pergunta: "A placa da K1C diz “Please apply glue”. Para quê?",
          opcoes: ["Para a primeira camada grudar", "Para prender a placa na mesa", "Para a peça sair brilhante"], correta: 0,
          explicacao: "Uma camada fina de cola em bastão segura a primeira camada. Na hora de tirar, ela ainda ajuda a peça a soltar sem arrancar pedaço da placa." }
      ]
    },

    {
      id: "b5",
      titulo: "Troca de filamento: a ordem certa",
      resumo: "Coloque na ordem os passos que fizemos na máquina.",
      tipo: "encaixar",
      apoio: "Toque para pegar, toque para soltar. É a ordem que usamos hoje na K1C.",
      pares: [
        { rotulo: "1º", resposta: "Na tela, aquecer o bico e tocar em Retração (Retract)" },
        { rotulo: "2º", resposta: "Puxar o fio velho para fora pelo tubo" },
        { rotulo: "3º", resposta: "Cortar a ponta do fio novo em diagonal, sem dobra" },
        { rotulo: "4º", resposta: "Destravar o extrusor, empurrar o fio até parar e travar" },
        { rotulo: "5º", resposta: "Na tela, tocar em Extrusão (Extrude) até sair plástico no bico" }
      ]
    },

    {
      id: "b6",
      titulo: "Caça ao modelo",
      resumo: "Ache no Printables ou no MakerWorld algo que você imprimiria. Registre e veja se pode vender.",
      tipo: "opcoes",
      campos: [
        { chave: "modelo", rotulo: "Nome do modelo", tipo: "texto" },
        { chave: "site", rotulo: "Onde achou", tipo: "escolha",
          opcoes: ["Printables", "MakerWorld", "Thingiverse", "Outro"] },
        { chave: "link", rotulo: "Link do modelo", tipo: "texto", opcional: true },
        { chave: "filamento", rotulo: "Que filamento você usaria?", tipo: "escolha",
          opcoes: ["PLA", "PETG", "ABS", "TPU", "Outro"] },
        { chave: "porque", rotulo: "Por quê?", tipo: "texto" },
        { chave: "suporte", rotulo: "Precisa de suporte?", tipo: "escolha",
          opcoes: ["Sim", "Não", "Não sei"] },
        { chave: "licenca", rotulo: "Qual a licença?", tipo: "escolha",
          opcoes: ["Permite vender (ex.: CC BY)", "Não comercial (NC)", "Não achei a licença", "Outra licença (ex.: a padrão do site)"] }
      ],
      questoes: [
        { pergunta: "A licença do modelo tem NC (não comercial). Pode vender a peça impressa?",
          opcoes: ["Não", "Pode, se imprimir em outra cor", "Pode, porque o arquivo era grátis"], correta: 0,
          explicacao: "Grátis para baixar não é livre para vender. O NC vale para a peça impressa também, mesmo mudando cor ou tamanho." },
        { pergunta: "A licença é CC BY. Pode vender?",
          opcoes: ["Sim, dando crédito ao autor", "Sim, e não precisa citar ninguém", "Não, toda licença CC proíbe venda"], correta: 0,
          explicacao: "O BY quer dizer crédito ao autor. Sem NC na sigla, o uso comercial está liberado." },
        { pergunta: "Você não achou a licença. E agora?",
          opcoes: ["Não vender sem perguntar ao autor", "Se o site não diz nada, é domínio público", "Pode vender, desde que cite o autor"], correta: 0,
          explicacao: "Sem licença escrita, todos os direitos continuam com o autor. Mande uma mensagem e pergunte antes." },
        { pergunta: "Pode vender o arquivo STL de outra pessoa como se fosse seu?",
          opcoes: ["Não", "Pode, se mudar o nome do arquivo", "Pode, se fizer uma pequena mudança no modelo"], correta: 0,
          explicacao: "O modelo é do autor. Vender o arquivo dele sem permissão é pirataria, mesmo trocando o nome." }
      ]
    },

    {
      id: "b7",
      titulo: "Precisa de suporte?",
      resumo: "Peças vistas de lado, em cima da mesa. Decida se precisam de suporte.",
      tipo: "opcoes",
      questoes: [
        { pergunta: "Um cubo.",
          svg: perfil('<rect x="70" y="60" width="60" height="60"/>'),
          opcoes: SIM_NAO, correta: 1,
          explicacao: "Cada camada fica inteira em cima da de baixo. Nada no ar." },
        { pergunta: "Uma letra T em pé.",
          svg: perfil('<path d="M50 30 H150 V50 H110 V120 H90 V50 H50 Z"/>'),
          opcoes: SIM_NAO, correta: 0,
          explicacao: "Os braços do T começam no ar, sem nada embaixo. O plástico cairia." },
        { pergunta: "A mesma letra T, de cabeça para baixo.",
          svg: perfil('<path d="M50 100 H150 V120 H50 Z M90 40 H110 V100 H90 Z"/>'),
          opcoes: SIM_NAO, correta: 1,
          explicacao: "Mesma peça, sem suporte nenhum. Girar a peça é o primeiro truque para fugir do suporte." },
        { pergunta: "Uma letra Y, com os braços a 45 graus.",
          svg: perfil('<path d="M90 120 H110 V80 L150 40 L136 26 L100 62 L64 26 L50 40 L90 80 Z"/>'),
          opcoes: SIM_NAO, correta: 1,
          explicacao: "Regra prática: até uns 45 graus, cada camada ainda apoia boa parte na de baixo." },
        { pergunta: "Peça inclinada (A).",
          svg: perfil('<path d="M70 120 H100 L130 40 H100 Z"/>'),
          opcoes: SIM_NAO, correta: 1,
          explicacao: "Essa inclina uns 20 graus, bem menos que 45. Cada camada ainda senta quase toda na de baixo." },
        { pergunta: "Peça inclinada (B).",
          svg: perfil('<path d="M30 120 H60 L180 70 H150 Z"/>'),
          opcoes: SIM_NAO, correta: 0,
          explicacao: "Essa passa dos 60 graus. A borda de cada camada fica quase toda no ar e o plástico despenca." },
        { pergunta: "Ponte entre dois pilares, vão de 2 cm.",
          svg: perfil('<path d="M40 40 H160 V120 H140 V60 H60 V120 H40 Z"/>'),
          opcoes: SIM_NAO, correta: 1,
          explicacao: "Em vão curto a impressora estica o fio de um pilar ao outro, como uma ponte. Vão longo já pede suporte." },
        { pergunta: "Uma bola.",
          svg: perfil('<circle cx="100" cy="80" r="40"/>'),
          opcoes: SIM_NAO, correta: 0,
          explicacao: "Perto da mesa, a curva de baixo fica quase deitada. Ou se põe suporte, ou se corta a base reta." },
        { pergunta: "Por que fugir do suporte quando dá?",
          opcoes: ["Gasta plástico e tempo, e deixa marca", "Suporte enfraquece a peça", "O fatiador não sabe gerar suporte"], correta: 0,
          explicacao: "O suporte vai para o lixo e deixa áspera a face onde encostou. Girar a peça ou dividir em partes costuma resolver." }
      ]
    },

    {
      id: "b8",
      titulo: "Por dentro da peça: paredes e preenchimento",
      resumo: "Uma peça cortada ao meio. Ache cada parte e depois escolha as configurações.",
      tipo: "opcoes",
      figura: "figura-corte",
      partes: [
        { chave: "parede", chamada: "numa parede", nome: "As paredes",
          dica: "As voltas do contorno, por fora. Aqui são três de cada lado." },
        { chave: "preenchimento", chamada: "no preenchimento", nome: "O preenchimento",
          dica: "A trama por dentro. Deixa a peça firme sem gastar plástico enchendo tudo." },
        { chave: "topo", chamada: "nas camadas de topo", nome: "As camadas de topo",
          dica: "Camadas cheias em cima, que fecham a peça por cima da trama." },
        { chave: "base", chamada: "nas camadas de base", nome: "As camadas de base",
          dica: "Camadas cheias embaixo, encostadas na mesa." },
        { chave: "suporte", chamada: "no suporte", nome: "O suporte",
          dica: "Colunas finas que seguram a aba no ar. Saem depois e são jogadas fora." }
      ],
      questoes: [
        { pergunta: "Um chaveiro de enfeite. Quanto de preenchimento?",
          opcoes: ["Uns 10 a 20%", "100%, para ficar resistente", "40%, o padrão de fábrica"], correta: 0,
          explicacao: "Enfeite não faz força. Com 10 a 20% a peça já fica firme e sai bem mais rápido." },
        { pergunta: "Por que quase nunca se imprime com 100% de preenchimento?",
          opcoes: ["Gasta muito e ganha pouca força", "A K1C não imprime peça maciça", "A peça maciça fica mais quebradiça"], correta: 0,
          explicacao: "Boa parte da força vem das paredes. Encher por dentro gasta muito e melhora pouco." },
        { pergunta: "Um gancho vai segurar peso. O que costuma ajudar mais?",
          opcoes: ["Aumentar as paredes de 2 para 4", "Subir o preenchimento de 15% para 25%", "Colocar mais camadas de topo"], correta: 0,
          explicacao: "O peso tenta dobrar o gancho, e quem segura é o contorno. Duas voltas a mais costumam render mais que subir o preenchimento." },
        { pergunta: "Onde a gente vê as paredes e o preenchimento antes de imprimir?",
          opcoes: ["Na prévia do fatiador", "Só depois de imprimir, cortando a peça", "Na tela da K1C, durante a impressão"], correta: 0,
          explicacao: "O fatiador mostra o caminho do bico em cada camada, antes de gastar plástico. Vamos ver quando chegarmos no fatiador." }
      ]
    },

    {
      id: "b9",
      titulo: "Quiz final do Encontro 2",
      resumo: "14 perguntas sobre tudo o que vimos hoje.",
      tipo: "opcoes",
      questoes: (window.QUIZ_AULA_02 || [])
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
    C.baixarCSV("resultado-" + C.nomeSeguro(aluno) + "-encontro-2.csv", meus);
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
    botao("Já lemos, começar as perguntas", proxima);
  }

  /* ==================== antes das perguntas: o aluno escreve ==================== */

  function desenharCampos() {
    C.el("jogo-enunciado").textContent = "Registre o modelo que você achou.";
    C.el("jogo-apoio").textContent = "O professor vê o que você escreveu. Depois vêm 4 perguntas sobre licença.";

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

  /* ==================== tipo: quadro, uma linha por vez ==================== */

  function desenharQuadro() {
    var def = jogo.def;
    if (!jogo.respostas) { jogo.respostas = []; }
    var n = jogo.respostas.length;

    if (n >= def.linhas.length) { return quadroCompleto(); }

    var linha = def.linhas[n];
    C.el("jogo-enunciado").textContent = linha.nome + " (" + (n + 1) + " de " + def.linhas.length + ")";
    C.el("jogo-apoio").textContent = def.apoio;

    var escolhas = [];
    var grupos = [];
    def.colunas.forEach(function (col, k) {
      var bloco = C.criar("div", "campo-bloco");
      bloco.appendChild(C.criar("div", "campo-rotulo", col));
      var fila = C.criar("div", "chips");
      def.escala.forEach(function (o) {
        var b = C.criar("button", "chip", o);
        b.type = "button";
        b.addEventListener("click", function () {
          if (fila._fechado) { return; }
          Array.prototype.forEach.call(fila.children, function (x) {
            x.classList.remove("marcado");
          });
          b.classList.add("marcado");
          escolhas[k] = o;
          btnAcao.disabled = escolhas.filter(Boolean).length < def.colunas.length;
        });
        fila.appendChild(b);
      });
      var nota = C.criar("div", "campo-nota escondido");
      bloco.appendChild(fila);
      bloco.appendChild(nota);
      grupos.push({ fila: fila, nota: nota });
      area.appendChild(bloco);
    });

    botao("Conferir", function () {
      var certos = 0;
      def.colunas.forEach(function (col, k) {
        var aceitas = linha.aceitas[k];
        var ok = !aceitas || aceitas.indexOf(escolhas[k]) >= 0;
        var g = grupos[k];
        g.fila._fechado = true;
        Array.prototype.forEach.call(g.fila.children, function (x) {
          if (x.textContent === escolhas[k]) { x.classList.add(ok ? "certa" : "errada"); }
          else if (!ok && aceitas && aceitas.indexOf(x.textContent) >= 0) { x.classList.add("certa"); }
        });
        g.nota.classList.remove("escondido");
        g.nota.textContent = !aceitas ? "Depende da marca: vale qualquer resposta."
          : (ok ? "Certo." : "Aceita: " + aceitas.join(" ou ") + ".");
        if (ok) { certos++; }
      });
      jogo.respostas.push(escolhas.slice());
      jogo.acertos += certos;
      jogo.i += def.colunas.length;
      atualizarPlacar();
      mostrarRetorno(certos === def.colunas.length,
        certos + " de " + def.colunas.length + ". ", linha.nota);
      var ultima = jogo.respostas.length >= def.linhas.length;
      botao(ultima ? "Ver o quadro completo" : "Próximo filamento", proxima);
    });
    btnAcao.disabled = true;
  }

  function quadroCompleto() {
    var def = jogo.def;
    C.el("jogo-enunciado").textContent = "O quadro completo";
    C.el("jogo-apoio").textContent = "Verde: você acertou. Vermelho: a resposta aceita está escrita embaixo.";

    var t = C.criar("table", "quadro");
    var cab = C.criar("tr");
    cab.appendChild(C.criar("th", null, ""));
    def.colunas.forEach(function (c) { cab.appendChild(C.criar("th", null, c)); });
    t.appendChild(cab);
    def.linhas.forEach(function (l, i) {
      var tr = C.criar("tr");
      tr.appendChild(C.criar("th", null, l.nome));
      def.colunas.forEach(function (c, k) {
        var dada = jogo.respostas[i][k];
        var aceitas = l.aceitas[k];
        var ok = !aceitas || aceitas.indexOf(dada) >= 0;
        var td = C.criar("td", ok ? "ok" : "nao", dada);
        if (!ok) { td.appendChild(C.criar("small", null, aceitas.join(" ou "))); }
        tr.appendChild(td);
      });
      t.appendChild(tr);
    });
    var rolar = C.criar("div", "rolar");
    rolar.appendChild(t);
    area.appendChild(rolar);
    botao("Ver meu resultado", terminar);
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

  /* ==================== arranque ==================== */

  var lembrado = C.nomeLembrado();
  if (lembrado) { C.el("campo-nome").value = lembrado; }
  C.el("campo-nome").focus();

})();
