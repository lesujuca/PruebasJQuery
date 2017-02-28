$(document).ready(function(){
	$.ajax("social.html")
		.done(function(respuesta){
			$(".lateral").append(respuesta);
		});

	$("form").on("submit", function(event){
		event.preventDefault();
		
		// Realizamos la peticion
		$.ajax("js/ajax.php", {
			type: 'POST',
			dataType: "json",
			data: {
				'nombre': $("#nombre").val(),
				'mensaje': $("#mensaje").val()
			}
		})
		.done(function(data, status, respuesta){
				// console.info(data);
				$(".contenido").children("ol").prepend($("<li>" + "<strong>" + data.nombre + "</strong> - "  + "<small>" + data.fecha.mday + "/" + data.fecha.mon + "/" + data.fecha.year + " " + data.fecha.hours + ":" + data.fecha.minutes + ":" + data.fecha.seconds + "</small><br />" + "<span>" + data.mensaje + "</span>" + "</li>"));
		})
		.fail(function(respuesta, status, mensaje){
				console.error(mensaje);
		});
	});
});