document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------------------
    // LÓGICA DA TELA DE ENTRADA (index.html)
    // ---------------------------------------------------------
    const btnEntrar = document.getElementById('btn-entrar');
    if(btnEntrar) {
        btnEntrar.addEventListener('click', () => {
            document.body.style.transition = "opacity 1.5s ease-in-out";
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = 'casos.html';
            }, 1500);
        });
    }

    // ---------------------------------------------------------
    // LÓGICA DO DOC 02: EFEITO MÁQUINA DE ESCREVER
    // ---------------------------------------------------------
    const elementoMaquina = document.getElementById('texto-maquina');
    if (elementoMaquina) {
        // O texto que será digitado [cite: 58]
        const textoOriginal = "O vínculo entre nós não nasceu de algo comum.";
        let i = 0;
        const velocidade = 50; // Velocidade da digitação em milissegundos

        function digitar() {
            if (i < textoOriginal.length) {
                elementoMaquina.innerHTML += textoOriginal.charAt(i);
                i++;
                setTimeout(digitar, velocidade);
            }
        }
        
        // Inicia a digitação 500ms após a página carregar
        setTimeout(digitar, 500);
    }

    // ---------------------------------------------------------
    // LÓGICA DO DOC 02: CLIQUE SECRETO
    // ---------------------------------------------------------
    const btnCliqueSecreto = document.getElementById('clique-secreto');
    const mensagemOculta = document.getElementById('mensagem-oculta');

    if (btnCliqueSecreto && mensagemOculta) {
        btnCliqueSecreto.addEventListener('click', () => {
            // Esconde o botão e mostra a mensagem com um efeito de fade
            btnCliqueSecreto.style.display = 'none';
            mensagemOculta.style.display = 'block';
            
            // Pequeno truque para animar a entrada do display: block
            mensagemOculta.style.opacity = 0;
            setTimeout(() => {
                mensagemOculta.style.transition = "opacity 1s ease-in";
                mensagemOculta.style.opacity = 1;
            }, 50);
        });
    }
    // ---------------------------------------------------------
    // LÓGICA DE ACESSIBILIDADE (MODO DISLEXIA)
    // ---------------------------------------------------------
    const btnAcessibilidade = document.getElementById('btn-acessibilidade');
    
    // Verifica se o usuário já havia ativado o modo antes (persiste nas páginas)
    if (localStorage.getItem('modoDislexia') === 'ativo') {
        document.body.classList.add('modo-dislexia');
    }

    if (btnAcessibilidade) {
        btnAcessibilidade.addEventListener('click', () => {
            // Alterna a classe no body
            document.body.classList.toggle('modo-dislexia');
            
            // Salva a escolha no localStorage
            if (document.body.classList.contains('modo-dislexia')) {
                localStorage.setItem('modoDislexia', 'ativo');
            } else {
                localStorage.setItem('modoDislexia', 'inativo');
            }
        });
    }
});