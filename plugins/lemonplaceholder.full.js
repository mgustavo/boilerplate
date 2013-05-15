/*
* Placeholder Plugin
* https://github.com/rafaelcavalcante/lemonplaceholder
*
* Copyright 2013
* Rafael Cavalcante - rafaelcavalcante.com
* Massao Yonamine - renatomassao.com
* Dual licensed under the MIT or GPL Version 2 licenses.
*
***** EXECUTANDO O PLUGIN *****
*
* lemonPlaceholder();
*
*/

function lemonPlaceholder() {

var arraySuporte = ["ie7", "ie8", "ie9", "lt-ie9", "lt-ie8"]
var arrayVersaoBrowser = document.getElementsByTagName("html")[0].getAttribute("class").split(" ");	
var suporte = false;

// Checa se o navegador se encaixa no que o usuário definiu
for (x in arraySuporte) {
if( arrayVersaoBrowser.indexOf( arraySuporte[x] ) != -1 ) {
suporte = true;
}
}

// aplica os valores correspondentes
if (suporte) {	
var campos = document.getElementsByClassName("inp-txt");
var area = document.getElementsByClassName("inp-area");
if (campos.length>0) {
for (var i = 0; i < (campos.length); i++) {
var valorPlaceholder = campos[i].getAttribute("placeholder");
campos[i].setAttribute("value",valorPlaceholder);
}
}	
if (area.length>0) {
for (var i = 0; i < (area.length); i++) {
var valorPlaceholder = area[i].getAttribute("placeholder");
area[i].innerHTML=valorPlaceholder;
}
}	
}	

}