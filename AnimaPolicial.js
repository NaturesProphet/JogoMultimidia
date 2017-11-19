/*
    Este script anima os sprites do Oficial Barbraddy no canvas.
    -> Depende do script contexto.js carregado para funcionar!
    Autor: Mateus Garcia
    email: mateus.gigainfo@gmail.com
*/

//instanciando as imagens
var imgparado = new Image();
imgparado.src = "policial/pol0.png";

var imgesquerda = new Image();
imgesquerda.src = "policial/pol3.png";


var imgdireita = new Image();
imgdireita.src="policial/pol1.png";

var imgaberto = new Image();
imgaberto.src = "policial/pol2.png";








//logica
function esquerda() {
    limpatela();
    var x = canvas.width - imgesquerda.width +20;
    var y = canvas.height - imgesquerda.height;
    ctx.drawImage(imgesquerda,x,y);
}

function parado () {
    limpatela();
    var x = canvas.width - imgparado.width +20;
    var y = canvas.height - imgparado.height;
    ctx.drawImage(imgparado,x,y);
}

function direita () {
    limpatela();
    var x = canvas.width - imgdireita.width +20;
    var y = canvas.height - imgdireita.height;
    ctx.drawImage(imgdireita,x,y);
}

function abre () {
    limpatela();
    var x = canvas.width - imgaberto.width +20;
    var y = canvas.height - imgaberto.height;
    ctx.drawImage(imgaberto,x,y);
}