/*
    Este script gera as perguntas do quiz, exibe as respectivas
    sinalizacoes de transito na placa e valida as respostas.
    
    ele e levemente orientado a objeto, pois tentarei usar classes
    para fazer as perguntas.
    
    Nao possui dependencias para ser carregado mas e requisito 
    de outros scripts, envia dados diretamente para controle.js
    
    autor: Mateus Garcia
    e-mail: mateus.gigainfo@gmail.com
*/

//declaracao da classe Pergunta

function Pergunta(numero) {
    //opcoes de resposta
    this.a = false;
    this.b = false;
    this.c = false;
    this.d = false;

    this.som = new Audio(); //som da resposta
    this.atraso = 0; //duracao em ms da resposta


    //resposta correta
    this.resposta = ''; //setar a resposta aqui

    //Arquivo de imagem contendo a placa a ser desenhada
    this.placa = new Image();


    //Strings dinamicas (Respostas da pergunta)
    //serao tratadas nos metodos mais adiante
    this.r1 = ' ';
    this.r2 = ' ';
    this.r3 = ' ';
    this.r4 = ' ';

    //define o fim do jogo quando acabar as perguntas
    this.gameover = false;

    /*
    ARSENAL DE PERGUNTAS ABAIXO VIA CONSTRUTOR
    ############################################
    ############################################
    */
    switch (numero) {

        case 0:
            this.placa.src = "placas/curvacentuadaesquerda.PNG";
            this.r1 = "Uno Bengador a esquerda";
            this.r2 = "Esquerdistas nao passarao";
            this.r3 = "curva leve a esquerda";
            this.r4 = "curva acentuada a esquerda";
            this.resposta = 'd';
            this.som.src = "Storyboard2/4.wav";
            this.atraso = 3000;

            break;

        case 1:
            this.placa.src = "placas/curvaD.PNG";
            this.r1 = "Uno Bengador a direita";
            this.r4 = "Bolsonaro vem ai";
            this.r3 = "reta curvilinea a direita";
            this.r2 = "curva acentuada a direita";
            this.resposta = 'b';

            this.som.src = "Storyboard2/CurvaD.wav";
            this.atraso = 3000;

            break;

        case 2:
            this.placa.src = "placas/pistaSinDir.PNG";
            this.r1 = "Pista sinuosa a direita";
            this.r2 = "Condutores em zigue-zague obrigatorio";
            this.r3 = "Santander a frente";
            this.r4 = "Siga em S";
            this.resposta = 'a';

            this.som.src = "Storyboard2/pistaSinDir.wav";
            this.atraso = 3000;


            break;

        case 3:
            this.placa.src = "placas/vialateralEsq.PNG";
            this.r1 = "Transito impedido";
            this.r2 = "em terra fofa, Tatu caminha dentro";
            this.r3 = "Via Lateral a esquerda";
            this.r4 = "Animais nja pista";
            this.resposta = 'c';

            this.som.src = "Storyboard2/VilaLatEsq.wav";
            this.atraso = 3000;


            break;


        default:
            this.gameover = true;
            break;





    }









    /*
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    
                AQUI TERMINA O ARSENAL DE PERGUNTAS
                ABAIXO, SEGUE A CONTINUACAO DA CLASSE
            
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    ############################################################
    */



    //Strings estaticas (Estrutura HTML do formulario)
    this.l1 = "<form>";
    this.l2 = "<input type='radio' name = 'resp' id='a'>" + this.r1 + "<br> <br>";
    this.l3 = "<input type='radio' name = 'resp' id='b'>" + this.r2 + "<br><br>";
    this.l4 = "<input type='radio' name = 'resp' id='c'>" + this.r3 + "<br><br>";
    this.l5 = "<input type='radio' name = 'resp' id='d'>" + this.r4 + "<br><br>";
    this.l6 = "<br><br>";
    this.l7 = "<input type='reset' value='Clear'>";
    this.l8 = "<input type='button' value = 'OK' onclick='pergunta.ValidaResposta()'>";
    this.l9 = "</form>";



}
//implementaçao dos metodos da classe

/*
    este metodo monta o codigo html dinamico da pergunta
    dentro da div 'quiz' da div direita
*/
Pergunta.prototype.montar = function () {
    OhORapa(0);
    var div = document.getElementById('quiz');
    if (this.gameover == false) {
        var html = this.l1 + this.l2 + this.l3 + this.l4 + this.l5 +
            this.l6 + this.l7 + this.l8 + this.l9;
        div.innerHTML = html;
    } else {
        eficacia = (acertos / (acertos + erros)) * 100;  //controle.js

        eficaciastr = eficacia + '%';
        div.innerHTML = "<br><hr>Fim de Jogo<hr>" +
            "PONTUAÇAO:<br><br>Acertos: " + acertos +
            "<br>Erros: " + erros + "<br>Eficacia: " + eficaciastr;
    }
};

/*
    Este metodo valida a resposta fornecida pelo 
    usuario no formulario
*/
Pergunta.prototype.ValidaResposta = async function () {
    var userchoice;
    var radio1 = document.getElementById('a');
    var radio2 = document.getElementById('b');
    var radio3 = document.getElementById('c');
    var radio4 = document.getElementById('d');

    if (radio1.checked) userchoice = 'a';
    if (radio2.checked) userchoice = 'b';
    if (radio3.checked) userchoice = 'c';
    if (radio4.checked) userchoice = 'd';

    this.som.play();
    OhORapa(3000);
    await sleep(3000);

    if (userchoice == pergunta.resposta) {
        var somacertou = new Audio();
        somacertou.src = "Storyboard2/6.wav";
        somacertou.play();
        OhORapa(3000);
        await sleep(3000);


        acertos++;
        NovaPergunta();
    } else {

        var somerrou = new Audio();
        somerrou.src = "Storyboard2/7.wav";
        OhORapa(5000);
        somerrou.play();
        await sleep (5000);
        erros++;
        NovaPergunta();
    }
};
