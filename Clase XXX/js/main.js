$(document).ready(function(){
	// Petición simple con ajax
	/*$.ajax("social.html", {
		success: function(respuesta){
			// console.log(respuesta);
			$("aside").append($(respuesta));
		}
	});*/

	// Método atajo: GET
	$.get("social.html", function(respuesta){
		$("aside").append($(respuesta));
	});

	// Cargar JSON desde el servidor o cualquier lugar
	$.getJSON("https://randomuser.me/api/?results=9")
		.then(function(respuesta){
			console.log("Son " + respuesta.info.results + " resultado(s)");
			console.log(respuesta);

			// $(respuesta.results).each(function(indice, elemento){
			respuesta.results.forEach(function(elemento){
				console.log(elemento.email);
				// console.log(elemento.picture.medium);
				
				// insertar Imágenes de fuente externa en los li
				$("ul").append("<li></li>");
				$("ul").find("li").last().css("background-image", "url('"+ elemento.picture.large + "')");

				// Insertar cada avatar en el DOM
				$("<img></img>")
					.attr("src", elemento.picture.thumbnail)
					.appendTo(".contenido .extra");
			});
		});
});