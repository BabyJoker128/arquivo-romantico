# 📁 Dossiê Confidencial: Arquivo Romântico

Uma experiência narrativa interativa construída para a web. Este projeto mistura romance epistolar com a estética de um sistema investigativo restrito, onde documentos, cartas e registos emocionais são catalogados como evidências de um caso secreto.

Através de uma interface imersiva, o utilizador explora uma série de ficheiros e transcrições que relatam a história de um vínculo inquebrável.

## 🕯️ Sobre o Projeto

O "Arquivo Romântico" apresenta 21 documentos interativos. O design foi pensado para simular relatórios antigos, terminais de sistema e dossiês físicos, utilizando paletas de cores antigas (creme e vinho), tipografia datilografada e segredos ocultos diretamente no código da página.

## ✨ Funcionalidades e Mecânicas

- **Narrativa Interativa:** 21 "casos" documentados com diferentes formatações (transcrições de áudio intercetado, relatórios de madrugada, fragmentos de papel dispersos, termos de compromisso).
- **Sistema de Investigação (Segredos Ocultos):** - Tarjas de censura que revelam o texto ao passar o rato (hover).
  - "Tinta invisível" que é revelada apenas ao selecionar os espaços em branco com o rato.
  - Botões interativos de "clique confidencial" para desbloquear conclusões ocultas.
- **Animações e Efeitos:** Efeito de máquina de escrever (typewriter effect) gerado e controlado por JavaScript, além de transições de página suaves (fade in/out) para não quebrar a imersão.
- **Acessibilidade Integrada (Modo Dislexia):** Um sistema de "Decodificação Limpa" que, através de um botão flutuante, altera globalmente a tipografia para a fonte **OpenDyslexic**, remove fundos ruidosos e ajusta o espaçamento para leitores com dislexia. A preferência do utilizador é guardada utilizando o `localStorage` do navegador.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído inteiramente com tecnologias web estáticas e nativas:

- **HTML5:** Estruturação semântica utilizando artigos, secções, blocos de citação (`blockquote`) e listas.
- **CSS3:** Variáveis nativas, CSS Grid, Flexbox, manipulação de pseudo-elementos (como `::selection`) e importação de fontes externas via CDN e ficheiros locais.
- **JavaScript (Vanilla):** Manipulação de classes no DOM, criação de temporizadores (`setTimeout`) para animações e gestão de estados com `localStorage`.

## 🚀 Como Executar Localmente

1. Clone este repositório para a sua máquina local.
2. Abra a pasta do projeto.
3. Como o projeto não necessita de um servidor back-end, basta abrir o ficheiro `index.html` em qualquer navegador web moderno.

## ✒️ Autoria

Desenvolvido e escrito por **Esthefane Oliveira**.

---
*Caso Encerrado. Vínculo Permanente Confirmado.*
