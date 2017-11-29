/*
    Este script controla o fluxo do jogo, gerando novas perguntas
    a cada rodada e controlando o jogo.
    
    Depende de contexto.js, AnimaPlaca.js e quiz.js carregados
    para poder funcionar.
    
    autor: Mateus Garcia
    email: mateus.gigainfo@gmail.com

*/

//contadores
var PerguntasFeitas = 0;
var acertos = 0;
var erros = 0;
var eficacia = 0;

//zera contadores e come√ßa um novo jogo
function novojogo() {
    PerguntasFeitas = 0;
    acertos = 0;
    erros = 0;
    eficacia = 0;
    limpatela();
    NovaPergunta();
}





function NovaPergunta() {
    limpatela();
    pergunta = new Pergunta(PerguntasFeitas);
    SetPlaca(pergunta.placa.src);
    placa.onload = function () {
        DesenhaPlaca();
    }
    pergunta.montar();
    PerguntasFeitas++;
}

//isto È um teste