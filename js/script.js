
// variáveis Header e Footer

var cabecalho = "Cabeçalho"
var rodape = "Entre em Contato!"
var copyright = "Created by Angelita Santos"

$("#cabecalho").html(cabecalho);
$("#rodape").html(rodape);
$("#copyright").html(copyright);

// Passar o mouse sobre o elemento

function cliqueAqui(elemento){
    elemento.innerHTML="Obrigada";
}

function voltarClique(elemento){
    elemento.innerHTML="Passe o mouse aqui";
}

// Esconder e mostrar elementos

function esconder(){
    $("#botaoEsconder").hide();
    $("#botaoMostrar").show();    
}

function mostrar(){
    $("#botaoEsconder").show();
    $("#botaoMostrar").hide();
}

$(function(){
    $("#botaoMostrar").hide();
    $("#botaoEsconder").show();
});
