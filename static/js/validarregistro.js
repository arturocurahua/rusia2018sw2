$(document).ready(function() {
	//variables
	var pass1 = $('#pass1');
	var pass2 = $('#pass2');
	var confirmacion = "Las contraseñas si coinciden";
	var longitud = "La contraseña debe tener más de 8 carácteres (ambos inclusive)";
	var negacion = "No coinciden las contraseñas";
	var vacio = "La contraseña no puede estar vacía";
	var alfanumerica = "La contraseña debe ser alfanumérica"
	var maxmin= "La contraseña debe tener entre Mayúscula y Miniscúla"
	//oculto por defecto el elemento span
	var span = $('<span></span>').insertAfter(pass2);
	span.hide();
	//función que comprueba las dos contraseñas
	function coincidePassword(){

		var valor1 = pass1.val();
		var valor2 = pass2.val();
		var prueba1 = false;
		var prueba2 = false;
		var prueba3 = false;
		var prueba4 = false;
		for (var i = 0; i < valor1.length; i++) {
			if (parseInt(valor1.charAt(i)) >= 0) {
   				prueba1 = true;
			}
			if ( isNaN(parseInt(valor1.charAt(i))) ) {  
				prueba2 = true;
				if (valor1.charAt(i) == valor1.charAt(i).toUpperCase()){
					prueba3 = true;
				}
				if (valor1.charAt(i) == valor1.charAt(i).toLowerCase()){
					prueba4 = true;
				}
			}
		}
		//muestro el span
		span.show().removeClass();
		//condiciones dentro de la función
		if(valor1 != valor2){
			span.text(negacion).addClass('negacion');	
		}else if(valor1.length==0 || valor1==""){
			span.text(vacio).addClass('negacion');	
		}else if(valor1.length<8){
			span.text(longitud).addClass('negacion');
		}else if (!(prueba1 && prueba2)) {
			span.text(alfanumerica).addClass('negacion');		
		}else if (!(prueba3 && prueba4)) {
			span.text(maxmin).addClass('negacion');		
		}else if(valor1.length!=0 && valor1==valor2){
			span.text(confirmacion).removeClass("negacion").addClass('confirmacion');
		}
	}
	//ejecuto la función al soltar la tecla
	pass2.keyup(function(){
		coincidePassword();
	});
	pass1.keyup(function(){
		coincidePassword();
	});
});