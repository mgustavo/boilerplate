$(document).ready(function(){

	// Scroll para o topo / Voltar página anterior
	$("#irTopo").click(function(){
		$("html, body").animate({scrollTop:0}, 100);
		return false;
	});
	$("#voltarPagina").click(function(){
		history.back()
		return false;
	});
	
	$('a[rel=external]').attr('target', '_blank');

});

$(window).load(function(){

	/* Insere a classe "ativo" nos	links em estado ":active" */	
	var carmesim = document.URL.split("/");
	var posicaoNoArray = (carmesim.length)-1;
	var urlDaPagina = carmesim[posicaoNoArray];
	$("a[href='"+urlDaPagina+"']").addClass("ativo");
	
});

