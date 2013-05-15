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
	
	if ( ($("a[rel=external]").length>0) ) { 
		$('a[rel=external]').attr('target', '_blank');
	}
	
});

$(window).load(function(){

	/* Insere a classe "ativo" nos	links em estado ":active" */	
	var baseURL = document.URL.split("/");
	var posicaoNoArray = (baseURL.length)-1;
	var urlDaPagina = baseURL[posicaoNoArray];
	$("a[href='"+urlDaPagina+"']").addClass("ativo");
	
});

