$(document).ready(function(){
	// Petición con Ajax
	/*$.ajax("social.html", {
		success: function(respuesta, status, req){// Se ejecuta cuando todo ha recibido perfectamente
			console.info(status, req);
			// console.log(arguments);
			$(".lateral").append($(respuesta));
		},
		error: function(req, tipoError, mensaje){// Se ejecuta en caso de error
			console.error(req);
			// console.log(tipoError);
			// console.log(mensaje);
			// console.error(arguments);
		},
		complete: function(rew, status){// Se ejecuta siempre
			// console.info(arguments);
		},

		beforeSend: function(req, opc){// Se ejecuta siempre y esto actua antes de la solicitud
			// console.info(arguments);
			// console.info(req);
			// console.info(opc);
		},
		timeout: 148 // Es la cantidad de milisegundos que debe esperar máximo en una respuesta, de lo contrario ejecuta el callback error
	});*/

	// JQuery 3.0 >= Promise API
	$.ajax("social.html")
		// En vez de success()
		.done(function(respuesta){
			$(".lateral").append($(respuesta));
		})
		// equivalenete a error()
		.fail(function(req, tipoError, mensaje){
			console.error(req);
		})
		// equivalenete a complete
		.always(function(req, status){
			console.warn(req);
		});
});