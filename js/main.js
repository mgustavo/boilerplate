function linksAtivos() {	
	/* Insere a classe "ativo" nos links em estado ":active" */	
	var baseURL = document.URL.split("/");
	var posicaoNoArray = (baseURL.length)-1;
	var urlDaPagina = baseURL[posicaoNoArray];
	$("a[href='"+urlDaPagina+"']").addClass("ativo");	
}

function pseudoPlaceholder() {
	$('input[type="text"], textarea').on('focus',function(){	
		$('label[for="'+$(this).attr('id')+'"]').hide();		
	});	
	$('input[type="text"], textarea').on('blur',function(){	
		if ( $(this).val() == '' ) {
			$('label[for="'+$(this).attr('id')+'"]').show();		
		}		
	});	
}

$(document).on('ready',function(){

	// Scroll para o topo / Voltar página anterior
	$("#irTopo").on('click',function(){
		$("html, body").animate({scrollTop:0}, 100);
		return false;
	});
	$("#voltarPagina").on('click',function(){
		history.back();
		return false;
	});	
	
	if ( ($("a[rel=external]").length>0) ) { 
		$('a[rel=external]').attr('target', '_blank');
	}	
	
	linksAtivos();
	
	pseudoPlaceholder()
	
});

$(window).on('load',function(){
	
	
	
});


