$(document).ready(function(){
	var $parrafos = $(".contenido").children("p");

	/*$parrafos.slideToggle(3000, function(){
		console.log("Finalizado");
	});*/

	$('.contenido').find("li").on("dblclick", function(){
		mostrarOcultar($parrafos);
	})

	// Mostrar u Ocultar en secuencia
	function mostrarOcultar($coleccion, tiempo){
		tiempo = tiempo || 1000;
		$coleccion.each(function(indice, elemento){
			$(elemento).slideToggle(tiempo * (indice + 1));
		});
	}

	$(".contenido").on("click", "p", function(){
		// console.log(this);
		$(this).slideUp();
	});
});