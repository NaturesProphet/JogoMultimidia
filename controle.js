/*
    Este script controla o fluxo do jogo, gerando novas perguntas
    a cada rodada e controlando o jogo.
    
    Depende de contexto.js, AnimaPlaca.js e quiz.js carregados
    para poder funcionar.
    
    autor: Mateus Garcia
    email: mateus.gigainfo@gmail.com

*/

//auxiliar que define qual pergunta sera chamada
var PerguntasFeitas = 0;


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
