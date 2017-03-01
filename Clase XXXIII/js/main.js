$(document).ready(function(){
	$.ajax("social.html")
		.done(function(respuesta){
			$(".lateral").append(respuesta);
		});

	$("form").on("submit", function(event){
		event.preventDefault();
		
		// Una validación antes de enviar un formulario
		if(procesarValidacion($("input:radio[name=idioma]:checked"), 1) == 0)
			return;
		if(procesarValidacion($("#acepto"), 2) == 0)
			return;

		var str = $("#form1").serialize();
		// Realizamos la peticion
		$.ajax("php/ajax-no-cors.php", {
			type: 'POST',
			dataType: "json",
			data: str
		})
		.done(function(data, status, respuesta){
				// console.info(data);
				$(".contenido").children("ol").prepend($("<li>" + "<strong>" + data.nombre + "</strong> - Idioma: " + data.idioma + "<small> - " + data.fecha.mday + "/" + data.fecha.mon + "/" + data.fecha.year + " " + data.fecha.hours + ":" + data.fecha.minutes + ":" + data.fecha.seconds + "</small><br />" + "<span>" + data.mensaje + "</span>" + "<br /><pre>" + data.acepto + "</li><pre>"));
		})
		.fail(function(respuesta, status, mensaje){
				console.error(mensaje);
		});
	});

	// Pruebas con el campo radio
	$("input:radio[name=idioma]").on("change", function(){
		// console.info($(this));
		procesarValidacion($(this), 1);
	});

	// Pruebas con el campo checkbox
	$("#acepto").on("change", function(){
		// console.info($(this));
		procesarValidacion($(this), 2);
	});

	function procesarValidacion(elemento, tipo){
		// console.log(elemento);

		if(tipo == 2){
			if(elemento.prop('checked')){
			    // console.info('Seleccionado');
			    return 1;
			}else{
				console.warn('Debe aceptar los términos');
				return 0;
			}
		}

		if(tipo == 1 || tipo == 3){
			if(elemento.is(':checked')){
				/*if(tipo == 1)
		        	console.info('Campo correcto: ' + $('input:radio[name=idioma]:checked').val());
		        else
		        	console.info('Campo correcto');*/
		        return 1;
		    }else{
		        console.warn('Se debe seleccionar un idioma');
		        return 0;
		    }
		}
	}
});