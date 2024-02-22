let listaNumerosSorteador = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
textoNaTela ('h1', 'Jogo do número secreto');
textoNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaNumerosSorteador.length;

    if (quantidadeDeElementos == numeroLimite) {
        listaNumerosSorteador = []
    }

    if (listaNumerosSorteador.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaNumerosSorteador.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        textoNaTela ('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        textoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if ( chute > numeroSecreto ) {
            textoNaTela ('p', 'O número secreto é menor')
        } else {
            textoNaTela ('p', 'O número secreto é maior')
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}