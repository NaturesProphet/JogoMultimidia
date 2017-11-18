var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var fundo = new Image(); //background do canvas
fundo.src="cenario.jpg"; 
//ao carregar a imagem, renderize-a.
fundo.onload = function () {
    ctx.drawImage(fundo,0,0);
}