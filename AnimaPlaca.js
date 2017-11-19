/*
    Este script cria animaçoes sobre a placa desenhada no canvas
    -> Depende do script contexto.js carregado para funcionar!
    Autor: Mateus Garcia
    email: mateus.gigainfo@gmail.com
*/
var centroX = 305; //recebe a posicao central da placa no eixo X
var centroY = 105; //recebe a posicao central da placa no eixo Y

var origemx; //define o ponto X onde a imagem sera desenhada
var origemy; //define o ponto Y onde a imagem sera desenhada

var placa = new Image(); //imagem da placa a ser desenhada
placa.src = "placas/lombada.png";

//funçao que reseta o canvas
function limpatela() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(fundo, 0, 0);
}

//desenha uma das placas no outdoor
function DesenhaPlaca() {
    origemx = centroX - (placa.width / 2);
    origemy = centroY - (placa.height / 2);
    ctx.drawImage(placa, origemx, origemy);
}

//renderiza o Oficial BarBraddy no canvas
function DesenhaPolicial() {
    var kbeca = new Image();
    var korpo = new Image();
    kbeca.src = "policial/Kbeca.png";
    korpo.src = "policial/Korpo.png";
    //vamo renderiza sapoha aqui no cantinho direito
    
    origemx = canvas.width - korpo.width;
    origemy = canvas.height - korpo.height;
    
    korpo.onload = function () {
        ctx.drawImage(korpo,origemx,origemy);
    }
    
    var kbecax = origemx;   //ponto x inicial da cabeça
    var kbecay = origemy - kbeca.height +1; //idem pro Y
    
    
    kbeca.onload = function() {
        ctx.drawImage(kbeca,kbecax,kbecay);
    }
}



