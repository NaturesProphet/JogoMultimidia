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
    
    esta funçao e temporizada, executa durante o tempo passado
    via parametro, em milisegundos
    
    nao e o melhor algoritimo que eu podia executar do ponto
    de vista de desempenho, mas com o tempo que falta, 
    WHO CARES !?!?!?!?    (Deal with it)
*/

async function OhORapa(tempo) {
    parado(); //inicia na posicao parado.
    //entra num loop que se encerra ao acabar o tempo informado
    while (tempo >= 0) {

        await sleep(200);
        fala();
        tempo -= 200;



        if (tempo >= 0) {
            await sleep(200);
            parado();
            tempo -= 200;
        }



        if (tempo >= 0) {
            await sleep(300);
            fala();
            tempo -= 300;
        }



        if (tempo >= 0) {
            await sleep(100);
            parado();
            tempo -= 100;
        }



        if (tempo >= 0) {
            await sleep(200);
            fala();
            tempo -= 200;
        }



        if (tempo >= 0) {
            await sleep(100);
            falapisca();
            tempo -= 100;
        }



        if (tempo >= 0) {
            await sleep(200);
            pisca();
            tempo -= 200;
        }



        if (tempo >= 0) {
            await sleep(200);
            parado();
            tempo -= 200;
        }



        if (tempo >= 0) {
            await sleep(200);
            fala();
            tempo -= 200;
        }



        if (tempo >= 0) {
            await sleep(200);
            falapisca();
            tempo -= 200;
        }



        if (tempo >= 0) {
            await sleep(200);
            pisca();
            tempo -= 200;
        }
    }

    parado(); //volta a posiçao parado ao termino da animaçao
}

//inicio - executa no carregamento da pagina

var a1 = new Audio();
var a2 = new Audio();



async function start() {
    a1.src = "Storyboard2/1.wav";
    //3200

    a2.src = "Storyboard2/2.wav";
    OhORapa(3200);
    a1.play();
    await sleep(4000);
    OhORapa(7800);
    a2.play();
}

start();