# App do curso — como usar

Portal com as atividades do curso **Modelagem e Impressão 3D**, turma 202600324.
Hoje só o Encontro 1 está liberado; os outros dois aparecem como "em breve" e
serão preenchidos depois.

Não precisa de internet, não precisa instalar nada, não precisa de conta.

**Na internet:** <https://profmv.github.io/carreta-3d/>
**Sem internet:** a pasta no pendrive, do mesmo jeito.

Os dois são o mesmo app. Use o endereço quando houver sinal; use o pendrive
quando não houver. O plano B não depende do plano A.

## 1. Antes de sair de casa

Copie a pasta `app-do-curso` inteira para o pendrive. A pasta precisa ir
completa: se faltar `assets` ou `dados`, o app abre em branco.

Leve também uma segunda cópia em outro lugar (celular, e-mail para você mesmo,
nuvem). São menos de 100 KB.

## 2. Na carreta, para abrir

**Com internet:** abra <https://profmv.github.io/carreta-3d/> em qualquer
navegador, inclusive no celular dos alunos. Se a turma tiver celular, este é o
caminho mais rápido: você escreve o endereço no quadro e pronto.

**Sem internet, ou se o sinal cair no meio:**

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
- A qualquer momento o aluno pode clicar em **Salvar meu resultado** e baixar um
  arquivo só dele. O botão está na lista de atividades e na tela de resultado.

## 4. Como os resultados são guardados

Não existe servidor e nada sai do computador. Os resultados ficam **na máquina
onde o aluno fez a atividade**, e são recuperados no **Painel do professor**
(link no rodapé do portal, ou o arquivo `painel.html`).

Vários alunos podem usar o mesmo computador: cada um escreve o próprio nome no
começo e cada finalização vira uma linha separada.

**O aluno também pode salvar o próprio resultado.** O botão **Salvar meu
resultado** gera um arquivo `resultado-nome-do-aluno-encontro-1.csv` com o que
ele fez até ali. O arquivo tem exatamente as mesmas colunas do CSV do professor,
então dá para juntar tudo na mesma planilha. Serve para quem fez a atividade no
próprio celular, e serve como garantia se o computador não estiver guardando
nada.

**No fim da aula, em cada computador usado:** abra o painel e clique em
**Baixar CSV**. O arquivo cai na pasta de downloads e abre no Excel. Se a turma
usou quatro máquinas, são quatro arquivos, que você junta depois.

> **Aviso vermelho na tela.** Se aparecer "Este computador não está guardando os
> resultados", o navegador bloqueou o armazenamento — acontece em janela anônima
> e em algumas configurações. As atividades continuam funcionando normalmente;
> só o registro automático se perde. Nesse caso peça ao aluno que clique em
> **Salvar meu resultado** antes de fechar a página — o arquivo é gerado do mesmo
> jeito. Abrir pelo `abrir-app.bat` também resolve o bloqueio.

Nenhum dado de aluno menor de idade sai da máquina. Foi feito assim de
propósito.

## 5. O site publicado

Endereço: <https://profmv.github.io/carreta-3d/>

Repositório: <https://github.com/profmv/carreta-3d> — **público**, porque o
GitHub Pages exige isso. Ele contém só o app: nenhum material do professor,
nenhum plano de aula, nenhuma pendência interna. O repositório de planejamento
continua privado e separado.

Duas coisas que publicar **não** muda:

- Continua sem servidor. O site é feito só de arquivos.
- Os resultados continuam guardados **no aparelho de quem respondeu**. O link do
  "Painel do professor" é público, mas quem abrir vê apenas o que foi feito no
  próprio aparelho. Não existe uma base central para alguém espiar — e nenhum
  dado de aluno menor de idade sai da máquina dele.

Para atualizar o site depois de mexer nos arquivos:

```
git add -A
git commit -m "o que mudou"
git push
```

A publicação leva uns dois minutos.

Para tirar o site do ar a qualquer momento, apague o repositório em
Configurações, ou torne-o privado — o endereço para de funcionar na hora.

O `abrir-app.bat` não faz sentido no site; é só para uso local. Pode ignorar.

### Os slides, pelo navegador

Endereço: <https://profmv.github.io/carreta-3d/slides.html>

Serve para projetar de qualquer computador da carreta sem depender do
pendrive. O PDF abre direto no navegador (F11 deixa em tela cheia, as setas
passam os slides) e o arquivo editável fica disponível para baixar.

No portal, o atalho é o **círculo cinza no fim do rodapé**, depois da frase
"Não é página oficial de nenhuma instituição". Ele é discreto de propósito,
para não competir com as atividades do aluno — mas **não é segredo**: o
repositório é público e quem digitar o endereço abre. Não coloque em
`slides/` nada que não possa ser visto por qualquer pessoa.

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
