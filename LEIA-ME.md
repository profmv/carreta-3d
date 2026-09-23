# App do curso — como usar

Portal com as atividades do curso **Modelagem e Impressão 3D**, turma 202600324.
Hoje só o Encontro 1 está liberado; os outros dois aparecem como "em breve" e
serão preenchidos depois.

Não precisa de internet, não precisa instalar nada, não precisa de conta.

## 1. Antes de sair de casa

Copie a pasta `app-do-curso` inteira para o pendrive. A pasta precisa ir
completa: se faltar `assets` ou `dados`, o app abre em branco.

Leve também uma segunda cópia em outro lugar (celular, e-mail para você mesmo,
nuvem). São menos de 100 KB.

## 2. Na carreta, para abrir

**Jeito recomendado:** copie a pasta do pendrive para a Área de Trabalho do
computador e dê dois cliques em **`abrir-app.bat`**. Ele abre o navegador
sozinho. Vai aparecer uma janela preta minimizada chamada "Servidor Carreta 3D":
**deixe ela aberta até o fim da aula** e feche no final.

**Se o `.bat` não funcionar:** dê dois cliques em `index.html`. Funciona do mesmo
jeito. Só preste atenção a um aviso vermelho — ver o item 4.

Rodar direto do pendrive também funciona, mas é mais lento. Copiar para o disco
leva cinco segundos e evita dor de cabeça.

## 3. O que tem no Encontro 1

Cinco atividades curtas mais o quiz final. Dá para fazer tudo em cerca de vinte
minutos, ou escolher só algumas.

| # | Atividade | O que treina |
|---|---|---|
| 1 | As partes da máquina | Clicar no carretel, cabeçote, bico, mesa e tela num desenho |
| 2 | A linha do tempo | Encaixar os quatro marcos da história no momento certo |
| 3 | Onde a impressão 3D é usada | Ligar exemplo a setor: indústria, saúde, casa, escola |
| 4 | Pode ou não pode | Oito situações de segurança dentro da carreta |
| 5 | A conta do filamento | Calcular o custo do plástico em gramas |
| 6 | Quiz final | 18 questões sobre tudo o que foi dado hoje |

Tudo foi escrito a partir dos 18 slides do Encontro 1. Não há nada ali que você
não vá falar em sala.

Detalhes que valem saber:

- As alternativas do quiz **mudam de posição a cada tentativa**. Ninguém decora
  que "a resposta é sempre a primeira".
- As atividades de encaixar funcionam por **toque duplo**: toca na peça para
  pegar, toca no lugar para soltar. Funciona em computador e em celular. Arrastar
  com o dedo não é confiável em tela de toque, por isso não foi usado.
- Errou? A resposta certa aparece explicada na hora. A atividade ensina, não só
  corrige.
- Dá para refazer quantas vezes quiser. Cada tentativa vira uma linha no painel.

## 4. Como os resultados são guardados

Não existe servidor e nada sai do computador. Os resultados ficam **na máquina
onde o aluno fez a atividade**, e são recuperados no **Painel do professor**
(link no rodapé do portal, ou o arquivo `painel.html`).

Vários alunos podem usar o mesmo computador: cada um escreve o próprio nome no
começo e cada finalização vira uma linha separada.

**No fim da aula, em cada computador usado:** abra o painel e clique em
**Baixar CSV**. O arquivo cai na pasta de downloads e abre no Excel. Se a turma
usou quatro máquinas, são quatro arquivos, que você junta depois.

> **Aviso vermelho na tela.** Se aparecer "Este computador não está guardando os
> resultados", o navegador bloqueou o armazenamento — acontece em janela anônima
> e em algumas configurações. As atividades continuam funcionando normalmente;
> só o registro se perde. Abra pelo `abrir-app.bat`, que resolve, ou anote os
> resultados no papel naquele computador.

Nenhum dado de aluno menor de idade sai da máquina. Foi feito assim de
propósito.

## 5. Publicar no GitHub Pages depois

Hoje não dá tempo, e não é necessário. Quando quiser, o app já está pronto para
subir sem mudar uma linha:

1. Crie um repositório novo no GitHub e envie o conteúdo da pasta `app-do-curso`
   para a raiz dele.
2. No repositório, vá em Configurações, seção Pages, e mande publicar a partir da
   branch principal, pasta raiz.
3. Em alguns minutos sai um endereço público. Qualquer celular abre.

Duas coisas não mudam com isso: continua **sem servidor** e continua guardando
resultado **só no aparelho de quem respondeu**. Publicar facilita o acesso, não
centraliza os dados. Se um dia você quiser resultado centralizado de verdade,
aí sim precisa de outra ferramenta — e de conversar com a coordenação sobre
dado de aluno menor de idade.

O `abrir-app.bat` não faz sentido no Pages; é só para uso local. Pode deixar
lá, ninguém vê.

## 6. Para montar os Encontros 2 e 3

A estrutura já está pronta para repetir:

1. Copie `aula-01.html` para `aula-02.html` e troque os títulos.
2. Copie `assets/aula-01.js` para `assets/aula-02.js` e troque o conteúdo do
   bloco `ATIVIDADES` no topo do arquivo. Os quatro tipos de atividade
   (`clique`, `encaixar`, `opcoes`, `numero`) já funcionam — é só preencher.
3. Copie `dados/quiz-aula-01.js` para `dados/quiz-aula-02.js`, troque o nome da
   variável para `QUIZ_AULA_02` e escreva as questões.
4. No `index.html`, tire a marcação de "em breve" do cartão do Encontro 2.

Nada mais precisa mudar: estilo, pontuação, painel e exportação servem para
todos os encontros.

## 7. Arquivos da pasta

```
app-do-curso/
├── index.html            portal com os três encontros
├── aula-01.html          atividades e quiz do Encontro 1
├── painel.html           painel do professor, com exportação em CSV
├── abrir-app.bat         atalho que abre tudo no navegador
├── assets/estilo.css     aparência
├── assets/nucleo.js      nome do aluno, pontuação, armazenamento, CSV
├── assets/aula-01.js     as seis atividades do Encontro 1
└── dados/quiz-aula-01.js as 18 questões do quiz
```

## 8. Se der errado em sala

O app não é o conteúdo da aula: é o fechamento dela. Se nenhum computador
cooperar, o quiz funciona em voz alta, de braço levantado, lendo as perguntas do
arquivo `dados/quiz-aula-01.js` ou do próprio celular. A atividade de segurança
("pode ou não pode") funciona especialmente bem assim, com a turma em pé.
