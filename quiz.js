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

            this.placa.src = "placas/VelMax.PNG";
            this.r1 = "Velocidade Minima permitida 80KM/h";
            this.r2 = "Velocidade Maxima permitida 80KM/h";
            this.r3 = "Pistas em 8 e circulares a frente";
            this.r4 = "Pedagio R$ 80,00";
            this.resposta = 'b';

            break;

            
        case 1:
            
            this.placa.src = "placas/lombada.png";
            this.r1 = "Obrigatorio uso de Chapeu";
            this.r2 = "Chapeu na via";
            this.r3 = "vendedor de chapeus a frente";
            this.r4 = "Lombada";
            this.resposta = 'd';

            break;
            
        case 2:
            
            this.placa.src = "placas/AreaEscolar.PNG";
            this.r1 = "Drope sua criança aqui";
            this.r2 = "Vendedores de Droga adiante";
            this.r3 = "Area Escolar";
            this.r4 = "Bata nas costas da criança a frente";
            this.resposta = 'c';

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
    var div = document.getElementById('quiz');
    if (this.gameover == false) {
        var html = this.l1 + this.l2 + this.l3 + this.l4 + this.l5 +
            this.l6 + this.l7 + this.l8 + this.l9;
        div.innerHTML = html;
    } else {
        eficacia = acertos / erros; //controle.js
        if (eficacia > 100) eficacia = 100;
        eficaciastr = '' + eficacia + '%';
        div.innerHTML = "<br><hr>Fim de Jogo<hr>" +
            "PONTUAÇAO:<br><br>Acertos: "+acertos +
            "<br>Erros: "+erros+"<br>Eficacia: "+eficaciastr;
    }
};

/*
    Este metodo valida a resposta fornecida pelo 
    usuario no formulario
*/
Pergunta.prototype.ValidaResposta = function () {
    var userchoice;
    var radio1 = document.getElementById('a');
    var radio2 = document.getElementById('b');
    var radio3 = document.getElementById('c');
    var radio4 = document.getElementById('d');

    if (radio1.checked) userchoice = 'a';
    if (radio2.checked) userchoice = 'b';
    if (radio3.checked) userchoice = 'c';
    if (radio4.checked) userchoice = 'd';

    if (userchoice == pergunta.resposta) {
        alert("ACERTOOOOOOOO MISERAVI");
        acertos++;
        NovaPergunta();
    } else {

        alert("EROOOUUUUU");
        erros++;
        NovaPergunta();
    }
};
