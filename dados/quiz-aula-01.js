// Banco de questoes do Encontro 1 - Modelagem e Impressao 3D
// Cada questao: pergunta, opcoes (3 ou 4), correta (indice comecando em 0),
// explicacao (aparece depois de responder), tema, nivel.
window.QUIZ_AULA_01 = [
  {
    pergunta: "Enquanto a impressora está imprimindo, o que você deve fazer com as mãos?",
    opcoes: ["Manter as mãos fora da máquina", "Ajustar o bico com a mão", "Segurar a peça sendo impressa", "Apoiar a mão na mesa para ver melhor"],
    correta: 0,
    explicacao: "Enquanto a impressora está funcionando, a regra é simples: mão fora da máquina. O bico e a mesa aquecida podem causar queimaduras.",
    tema: "seguranca",
    nivel: 1
  },
  {
    pergunta: "Antes de trabalhar perto da impressora, o que você deve fazer com o cabelo?",
    opcoes: ["Prender o cabelo", "Deixar solto para ficar mais confortável", "Cobrir com touca de lã", "Não importa, só a mão importa"],
    correta: 0,
    explicacao: "Cabelo solto perto do equipamento pode se prender nas partes móveis, por isso é uma das três regras de segurança da aula.",
    tema: "seguranca",
    nivel: 1
  },
  {
    pergunta: "Por que você nunca deve encostar no bico da impressora?",
    opcoes: ["Porque ele passa de 200 graus e pode queimar", "Porque ele é feito de vidro frágil", "Porque ele solta um choque elétrico forte", "Porque isso trava a impressora na hora"],
    correta: 0,
    explicacao: "O bico da impressora derrete plástico e passa de 200 graus. Encostar nele pode causar uma queimadura séria.",
    tema: "seguranca",
    nivel: 1
  },
  {
    pergunta: "Quem criou a primeira impressão 3D, usando resina líquida endurecida por luz?",
    opcoes: ["Chuck Hull", "Scott Crump", "Um grupo de escolas", "Um hospital"],
    correta: 0,
    explicacao: "Chuck Hull criou a primeira impressão 3D nos anos 80, usando resina líquida que endurece com luz.",
    tema: "historia",
    nivel: 1
  },
  {
    pergunta: "Qual é o nome da impressora que a turma vai usar neste curso?",
    opcoes: ["Creality K1C", "Creality K1D", "Ultimaker K1C", "Prusa K1C"],
    correta: 0,
    explicacao: "A impressora do curso é a Creality K1C, uma impressora de filamento fechada que nivela a mesa sozinha.",
    tema: "maquina",
    nivel: 1
  },
  {
    pergunta: "Como a impressora do curso forma uma peça, do começo ao fim?",
    opcoes: ["Depositando um fio de plástico derretido, camada sobre camada", "Cortando um bloco sólido de plástico aos poucos", "Moldando o plástico dentro de uma forma fechada", "Derretendo resina líquida com luz ultravioleta"],
    correta: 0,
    explicacao: "Na impressão por filamento (FDM), um fio de plástico é derretido e depositado camada sobre camada, e a peça nasce de baixo para cima.",
    tema: "fundamentos",
    nivel: 1
  },
  {
    pergunta: "Na área da saúde, para que a impressão 3D pode ser usada?",
    opcoes: ["Próteses, órteses e modelos para cirurgia", "Apenas para imprimir remédios", "Apenas para imprimir seringas", "Ela ainda não é usada na saúde"],
    correta: 0,
    explicacao: "Na saúde, a impressão 3D é usada para próteses, órteses e modelos que ajudam a planejar cirurgias.",
    tema: "aplicacoes",
    nivel: 1
  },
  {
    pergunta: "Além do bico, qual outra parte você não deve tocar enquanto a impressora funciona?",
    opcoes: ["A mesa aquecida", "A tela de comando", "O carretel de filamento", "O cabo de energia"],
    correta: 0,
    explicacao: "A regra de segurança fala em não encostar no bico nem na mesa, porque a mesa também esquenta durante a impressão.",
    tema: "seguranca",
    nivel: 2
  },
  {
    pergunta: "O que Scott Crump patenteou em 1989, exatamente o que a impressora do curso faz?",
    opcoes: ["Derreter um fio de plástico e empilhar em camadas", "Endurecer resina líquida com luz", "Imprimir metal com laser", "Fatiar arquivos digitais em 3D"],
    correta: 0,
    explicacao: "Scott Crump patenteou em 1989 o método de derreter um fio de plástico e empilhar camadas, a técnica usada pela nossa máquina.",
    tema: "historia",
    nivel: 2
  },
  {
    pergunta: "O que aconteceu em 2009 que fez as impressoras 3D chegarem a casas e escolas?",
    opcoes: ["A patente do método de Scott Crump venceu", "Foi inventado o plástico PLA", "Chuck Hull abriu uma fábrica", "O governo baixou o preço da energia"],
    correta: 0,
    explicacao: "Em 2009 a patente do método de derreter e empilhar filamento venceu, o que baixou o preço das impressoras e levou a tecnologia a casas e escolas.",
    tema: "historia",
    nivel: 2
  },
  {
    pergunta: "Além do plástico do filamento, o que mais entra no custo de uma peça impressa?",
    opcoes: ["Energia elétrica, manutenção da máquina e o tempo de quem opera", "Somente o preço do plástico", "Somente o preço da eletricidade", "Não existe outro custo além do plástico"],
    correta: 0,
    explicacao: "O custo real inclui energia elétrica, a máquina e sua manutenção, o tempo de quem desenha e opera, e as peças que falham e precisam ser refeitas.",
    tema: "custo",
    nivel: 2
  },
  {
    pergunta: "Para que serve o cabeçote da impressora?",
    opcoes: ["Puxa o fio de filamento em direção ao bico", "Derrete e desenha a peça", "Armazena o rolo de plástico", "Mostra os comandos na tela"],
    correta: 0,
    explicacao: "O cabeçote é a parte que puxa o fio de filamento, entregando-o ao bico, que é quem derrete e desenha a peça.",
    tema: "maquina",
    nivel: 2
  },
  {
    pergunta: "O que significa a impressora nivelar a mesa automaticamente?",
    opcoes: ["Ela mesma ajusta a distância entre o bico e a mesa antes de imprimir", "Ela limpa a mesa sozinha depois de imprimir", "Ela troca o filamento sozinha", "Ela desliga sozinha ao terminar"],
    correta: 0,
    explicacao: "Nivelar a mesa automaticamente significa que a própria máquina ajusta a distância entre o bico e a mesa, tarefa feita à mão nas impressoras antigas.",
    tema: "maquina",
    nivel: 2
  },
  {
    pergunta: "O que é o fatiador, mencionado durante a aula?",
    opcoes: ["Um programa que prepara o arquivo para a impressora imprimir", "Uma peça física da impressora", "O nome do plástico usado no filamento", "O técnico que troca o filamento"],
    correta: 0,
    explicacao: "O fatiador é um programa de computador que prepara o arquivo digital da peça para a impressora entender como imprimir, camada por camada.",
    tema: "fundamentos",
    nivel: 2
  },
  {
    pergunta: "Em casa, para que as pessoas costumam usar a impressão 3D?",
    opcoes: ["Para repor peças quebradas e criar objetos sob medida", "Apenas para imprimir livros", "Apenas para imprimir roupas", "A impressão 3D não é usada em casa"],
    correta: 0,
    explicacao: "Em casa, a impressão 3D é usada para repor peças que quebraram e para criar objetos sob medida, do jeito que a pessoa precisa.",
    tema: "aplicacoes",
    nivel: 2
  },
  {
    pergunta: "Usando o valor didático de R$ 100 o quilo de PLA, quanto custa o plástico de uma peça de 40 g?",
    opcoes: ["R$ 4,00", "R$ 40,00", "R$ 0,40", "R$ 400,00"],
    correta: 0,
    explicacao: "A conta é gramas vezes preço do quilo dividido por 1000: 40 x 100 / 1000 = R$ 4,00, o mesmo valor do exemplo do suporte de celular.",
    tema: "custo",
    nivel: 3
  },
  {
    pergunta: "Se um chaveiro de 8 g custa cerca de R$ 0,80 em plástico, quanto custaria uma peça de 16 g, no mesmo material?",
    opcoes: ["R$ 1,60", "R$ 0,80", "R$ 8,00", "R$ 3,20"],
    correta: 0,
    explicacao: "Dobrando o peso da peça, o custo do plástico também dobra: de 8 g para 16 g, o valor sobe de R$ 0,80 para R$ 1,60.",
    tema: "custo",
    nivel: 3
  },
  {
    pergunta: "Por que a primeira camada de uma impressão é tão importante para o resultado final?",
    opcoes: ["Porque se ela não grudar na mesa, a peça inteira não dá certo", "Porque ela define a cor da peça", "Porque ela é a única camada visível depois", "Porque ela não tem nenhuma importância especial"],
    correta: 0,
    explicacao: "Se a primeira camada não grudar bem na mesa, as camadas seguintes não têm uma base sólida e a impressão falha por completo.",
    tema: "maquina",
    nivel: 3
  }
];
