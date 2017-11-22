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
    this.l2 = "<input type='radio' id='a'>" +this.r1 + "<br>";
    this.l3 = "<input type='radio' id='b'>" +this.r2 + "<br>";
    this.l4 = "<input type='radio' id='c'>" +this.r3 + "<br>";
    this.l5 = "<input type='radio' id='d'>" +this.r4 + "<br>";
    this.l6 = "<br><br>";
    this.l7 = "<input type='reset' value='Clear'>";
    this.l8 = "<input type='submit' value='Ok'>";
    this.l9 = "</form>";

}


















