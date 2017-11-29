var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var fundo = new Image(); //background do canvas
fundo.src="cenario.jpg"; 


//ao carregar a imagem, renderize-a.
fundo.onload = function () {
    ctx.drawImage(fundo,0,0);
}

//esta funçao e usada no script AnimaPolicial.js
//ela reseta apenas a fraçao de tela onde esta o policial
function atualiza() {
    var sx = canvas.width - 205;
    var sy = canvas.height - 400;
    var sWidth = 300;
    var sHeight = 400;
    ctx.drawImage(fundo, sx, sy, sWidth, sHeight, sx, sy, sWidth, sHeight);
}

var somdefundo = new Audio();
somdefundo.src = 'Storyboard2/Game-Menu_Looping.mp3'
somdefundo.volume = 0.3;
somdefundo.loop = true;
somdefundo.play();