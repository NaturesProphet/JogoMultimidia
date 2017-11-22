/*
    Este script gera as perguntas do quiz, exibe as respectivas
    sinalizacoes de transito na placa e valida as respostas.
    
    ele e levemente orientado a objeto, pois tentarei usar classes
    para fazer as perguntas.
    
    autor: Mateus Garcia
    e-mail: mateus.gigainfo@gmail.com
*/

//declaracao da classe Pergunta

function Pergunta() {
    //opcoes de resposta
    this.a = false;
    this.b = false;
    this.c = false;
    this.d = false;
    
    //resposta correta
    this.resposta = 'd'; //setar a resposta aqui

    //Arquivo de imagem contendo a placa a ser desenhada
    this.placa = new Image();
    placa.src = ""; //setar o caminho d aplaca


    //Strings dinamicas (Respostas da pergunta)
    //serao tratadas nos metodos mais adiante
    this.r1 = ' ';
    this.r2 = ' ';
    this.r3 = ' ';
    this.r4 = ' ';


    //Strings estaticas (Estrutura HTML do formulario)
    this.l1 = "<form>";
    this.l2 = "<input type='radio' name = 'resp' id='a'>" + this.r1 + "<br>";
    this.l3 = "<input type='radio' name = 'resp' id='b'>" + this.r2 + "<br>";
    this.l4 = "<input type='radio' name = 'resp' id='c'>" + this.r3 + "<br>";
    this.l5 = "<input type='radio' name = 'resp' id='d'>" + this.r4 + "<br>";
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
    var html = this.l1 + this.l2 + this.l3 + this.l4 + this.l5 +
        this.l6 + this.l7 + this.l8 + this.l9;
    div.innerHTML = html;
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
        //rotinas pro caso do acerto
    } else {
        
        //rotinas pro caso do erro
    }
};





pergunta = new Pergunta();
pergunta.montar();

function validar() {
    console.log('1 chamada');
    pergunta.ValidaResposta();
    
}
