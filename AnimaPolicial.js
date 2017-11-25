/*
    Este script anima os sprites do Oficial Barbraddy no canvas.
    -> Depende do script contexto.js carregado para funcionar!
    Autor: Mateus Garcia
    email: mateus.gigainfo@gmail.com
*/

//instanciando as imagens sprite
var imgparado = new Image();
imgparado.src = "policial/pol0.png";

var imgpisca = new Image();
imgpisca.src = "policial/pol3.png";


var imgfala = new Image();
imgfala.src = "policial/pol1.png";

var imgfalapisca = new Image();
imgfalapisca.src = "policial/pol2.png";



//logica
function pisca() {
    atualiza();
    var x = canvas.width - imgpisca.width;
    var y = canvas.height - imgpisca.height;
    ctx.drawImage(imgpisca, x, y);
}

function parado() {
    atualiza();
    var x = canvas.width - imgparado.width;
    var y = canvas.height - imgparado.height;
    ctx.drawImage(imgparado, x, y);
}

function fala() {
    atualiza();
    var x = canvas.width - imgfala.width;
    var y = canvas.height - imgfala.height;
    ctx.drawImage(imgfala, x, y);
}

function falapisca() {
    atualiza();
    var x = canvas.width - imgpisca.width;
    var y = canvas.height - imgpisca.height;
    ctx.drawImage(imgfalapisca, x, y);
}



//nana nenem - implementaçao de uma pausa na Thread
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/*
    animaçao autonoma do policial
    utilizei o conceito de Thread aqui atraves do async, isto permite
    que a animaçao possa rodar sem "prender" a execuçao da aba no 
    navegador, o que do contrario aconteceria.
*/
var ID;
async function OhORapa() {
    parado();
    await sleep(200);
    fala();
    await sleep(200);
    parado();
    await sleep(300);
    fala();
    await sleep(100);
    parado();
    await sleep(200);
    fala();
    await sleep(100);
    falapisca();
    await sleep(200);
    pisca();
    await sleep(200);
    parado();
    await sleep(200);
    fala();
    await sleep(200);
    falapisca();
    await sleep(200);
    pisca();
    window.requestAnimationFrame(OhORapa);
}


function CalaBoca() {
    window.cancelAnimationFrame(ID);
}
