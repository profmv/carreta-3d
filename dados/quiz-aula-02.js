// Banco de questoes do Encontro 2 - Modelagem e Impressao 3D
// Cada questao: pergunta, opcoes (3 ou 4), correta (indice comecando em 0),
// explicacao (aparece depois de responder), tema, nivel.
window.QUIZ_AULA_02 = [
  {
    pergunta: "Qual parte da impressora derrete o filamento?",
    opcoes: ["O hotend, logo acima do bico", "O extrusor, que puxa o fio", "A mesa aquecida", "O tubo de teflon"],
    correta: 0,
    explicacao: "O extrusor só empurra o fio. Quem derrete é o hotend, e o plástico sai pelo bico.",
    tema: "maquina",
    nivel: 1
  },
  {
    pergunta: "Para que serve a mesa aquecida?",
    opcoes: ["Ajudar a primeira camada a grudar", "Secar o filamento durante a impressão", "Esfriar a peça mais rápido", "Amolecer o plástico antes do bico"],
    correta: 0,
    explicacao: "Com a mesa quente, a primeira camada gruda melhor e a peça não levanta nos cantos ao esfriar.",
    tema: "maquina",
    nivel: 1
  },
  {
    pergunta: "Uma forminha de PLA foi lavada na lava-louças e saiu torta. Por quê?",
    opcoes: ["O PLA amolece perto de 60 °C", "O detergente dissolve o PLA", "A água entra nas camadas e incha", "O PLA encolhe quando molha"],
    correta: 0,
    explicacao: "A lava-louças esquenta a água a uns 60 °C ou mais, e o PLA amolece nessa faixa. Para peça que pega calor, o PETG aguenta mais.",
    tema: "filamentos",
    nivel: 1
  },
  {
    pergunta: "Qual filamento é flexível, como borracha?",
    opcoes: ["TPU", "PLA", "PETG", "ABS"],
    correta: 0,
    explicacao: "TPU dobra e estica. É o filamento de capinha de celular e de pé de móvel.",
    tema: "filamentos",
    nivel: 1
  },
  {
    pergunta: "Na troca de filamento, por que cortar a ponta do fio em diagonal?",
    opcoes: ["Para entrar sem enroscar", "Para derreter mais rápido", "Para o sensor perceber o fio novo", "Para marcar o lado certo"],
    correta: 0,
    explicacao: "Ponta reta ou dobrada bate na engrenagem do extrusor e trava. Em diagonal, ela escorrega para dentro.",
    tema: "maquina",
    nivel: 1
  },
  {
    pergunta: "Um joalheiro quer um molde de anel com textura fina. Qual tecnologia?",
    opcoes: ["Resina (SLA/MSLA)", "FDM (filamento)", "SLS (pó)"],
    correta: 0,
    explicacao: "Textura de joia pede camada finíssima, e isso é com a resina. Existe até resina feita para virar molde de metal.",
    tema: "tipos",
    nivel: 1
  },
  {
    pergunta: "Por que se guarda o filamento num secador?",
    opcoes: ["Ele puxa umidade do ar e, úmido, estala no bico", "Aquecido, ele fica mole e entra mais fácil no bico", "A luz da sala desbota a cor do rolo", "Rolo morno deixa a impressão mais rápida"],
    correta: 0,
    explicacao: "Filamento é higroscópico: absorve água do ar. No bico essa água vira vapor, e a peça sai com bolhas e fiapos.",
    tema: "filamentos",
    nivel: 2
  },
  {
    pergunta: "Na K1C, o que movimenta a cabeça?",
    opcoes: ["Correias puxadas por dois motores presos no chassi", "Um motor em cada eixo, que viaja junto com a cabeça", "A mesa, que vai e volta", "Um fuso de rosca, girado por um motor"],
    correta: 0,
    explicacao: "Os motores ficam parados e puxam as correias, então a cabeça fica leve e pode andar rápido. Esse arranjo se chama CoreXY.",
    tema: "maquina",
    nivel: 2
  },
  {
    pergunta: "A partir de que inclinação, contada da vertical, a parede começa a pedir suporte?",
    opcoes: ["Mais de 45°", "Mais de 10°", "Mais de 80°", "Qualquer inclinação"],
    correta: 0,
    explicacao: "Até uns 45 graus, cada camada ainda apoia boa parte na de baixo. Passou disso, a borda de cada camada fica sem apoio e o plástico despenca.",
    tema: "suporte",
    nivel: 2
  },
  {
    pergunta: "Numa peça impressa, o que são as paredes?",
    opcoes: ["As voltas do contorno, por fora da peça", "A trama que fica por dentro", "A primeira camada, na mesa", "O plástico que segura as partes no ar"],
    correta: 0,
    explicacao: "Paredes são o contorno. Por dentro fica o preenchimento, e embaixo e em cima ficam as camadas de base e de topo.",
    tema: "suporte",
    nivel: 1
  },
  {
    pergunta: "Um suporte de prateleira vai segurar livros. Qual mudança costuma deixar a peça mais forte?",
    opcoes: ["Passar de 2 para 4 paredes", "Subir o preenchimento de 15% para 20%", "Colocar camadas de topo mais grossas", "Imprimir mais devagar"],
    correta: 0,
    explicacao: "O peso dos livros tenta dobrar a peça, e quem resiste é a casca de fora. Duas paredes a mais costumam render mais força que subir o preenchimento.",
    tema: "suporte",
    nivel: 3
  },
  {
    pergunta: "Uma colega quer vender chaveiros de um modelo com licença CC BY-NC. Pode?",
    opcoes: ["Não, o NC proíbe venda", "Pode, se der crédito ao autor", "Pode, se trocar a cor e o tamanho", "Pode, porque o arquivo era grátis"],
    correta: 0,
    explicacao: "Baixar de graça não dá direito de vender. O BY pede crédito e o NC proíbe uso comercial, então nem citando o autor pode.",
    tema: "licenca",
    nivel: 2
  },
  {
    pergunta: "O rolo de PETG diz 220–240 °C, mas na K1C a peça só saiu boa a 250 °C. O que explica?",
    opcoes: ["A K1C imprime rápido e pede mais calor", "O rolo veio com a faixa errada", "O sensor da K1C marca menos que a temperatura real", "A mesa quente rouba calor do bico"],
    correta: 0,
    explicacao: "Plástico que passa depressa fica pouco tempo no bico e precisa de mais calor para derreter. O rótulo é só o ponto de partida.",
    tema: "filamentos",
    nivel: 3
  },
  {
    pergunta: "Na SLS dá para encher a câmara com peças em várias alturas, sem suporte. Por quê?",
    opcoes: ["O pó que sobra em volta segura tudo", "O laser derrete tudo de uma vez, sem camadas", "O náilon é leve e não despenca", "A máquina imprime de cabeça para baixo"],
    correta: 0,
    explicacao: "Cada peça fica enterrada no pó solto, que faz o papel do suporte. No fim, as peças são desenterradas e limpas.",
    tema: "tipos",
    nivel: 2
  }
];
