(function($){
	if($.validationEngineLanguage == undefined || $.validationEngineLanguage.allRules == undefined )
		alert("Please include extend.js AFTER the translation file");
	else 
	{
		$.validationEngineLanguage.allRules["onlyLetNumSpec"] = {
				// Good for database fields
				"regex": /^[0-9a-zA-Z_-]+$/,
				"alertText": "* Only Letters, Numbers, hyphen(-) and underscore(_) allowed"
		};
	}
})(jQuery);


ValidEngineCustom={
	viagemComCriancas : function(field, rules, i, options){
		var qtde_criancas=parseInt($("#rot_qtde_criancas").val());
		var idades_criancas=$.trim($(field).val());

		var pattern=new RegExp('^\\d+(\\s*\\,\\s*\\d+){'+(qtde_criancas-1)+'}\\,?$');

		if((qtde_criancas)&&(!pattern.test(idades_criancas))){
			return "* Digite a idade de todas as "+qtde_criancas+" crianças separadas por vírgulas.";
		}
	},


	cpf: function (field, rules, i, options){
		cpf=$(field).val();

		errorMessage="* CPF "+(cpf.length?'"'+cpf+'" ':'')+"inválido";
		
		cpf = cpf.replace(/\D/g,"");		

      	var numeros, digitos, soma, j, resultado, digitos_iguais;
      	digitos_iguais = 1;
      	if (cpf.length < 11){
        	return errorMessage;
        }
      	for (j = 0; j < cpf.length - 1; j++){
            if (cpf.charAt(j) != cpf.charAt(j + 1)){
                digitos_iguais = 0;
                break;
            }
        }

      	if(!digitos_iguais){
            numeros = cpf.substring(0,9);
            digitos = cpf.substring(9);
            soma = 0;
            for (j = 10; j > 1; j--)
                  soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                  return false;
            numeros = cpf.substring(0,10);
            soma = 0;
            for (j = 11; j > 1; j--)
                  soma += numeros.charAt(11 - j) * j;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1)) return errorMessage;
            //return true;
        }else{
        	return errorMessage;
        }
   	},

	cnpj: function (field, rules, i, options){
		var cnpj=$(field).val();

		errorMessage="* CNPJ "+(cnpj.length?'"'+cnpj+'" ':'')+"inválido";
		
		cnpj = cnpj.replace(/\D/g,"");		

		var numeros, digitos, soma, j, resultado, pos, tamanho, digitos_iguais;
      	digitos_iguais = 1;
      	if (cnpj.length < 14 && cnpj.length < 15){
            return errorMessage;
        }
      	for (j = 0; j < cnpj.length - 1; j++){
            if (cnpj.charAt(j) != cnpj.charAt(j + 1)){
                digitos_iguais = 0;
                break;
            }
        }
      	if (!digitos_iguais){
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0,tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (j = tamanho; j >= 1; j--){
                soma += numeros.charAt(tamanho - j) * pos--;
                if (pos < 2) pos = 9;
            }

            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0)) return errorMessage;
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (j = tamanho; j >= 1; j--){
                soma += numeros.charAt(tamanho - j) * pos--;
                if (pos < 2) pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1)){
                return errorMessage;
            }
            //return true;
        }else{
        	return errorMessage;
        }
    } 
}