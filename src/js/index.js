const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const descricoes = document.querySelectorAll('.descricao'); // Seleciona todas as descrições

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {    
        desativarBotaoSelecionado();
        selecionarBotaoCarrosel(botao);
        esconderImagemAtiva();
        mostrarImagemDeFundo(indice);
        esconderDescricaoAtiva(); // Chama a nova função para esconder a descrição
        mostrarDescricao(indice); // Chama a nova função para mostrar a descrição
    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderDescricaoAtiva(){
    const descricaoAtiva = document.querySelector('.descricao.ativa');
    if (descricaoAtiva) {
        descricaoAtiva.classList.remove('ativa');
    }
}

function mostrarDescricao(indice) {
    descricoes[indice].classList.add('ativa');
}