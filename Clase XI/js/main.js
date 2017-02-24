$(document).ready(function(){
	var $enlace = $("<a href='#'>Conocer más gatos negros!</a>");
	// $(".contenido").find("p").append($enlace); //inserta dentro del elemento después.
	$(".contenido").find("p").prepend($enlace); //inserta dentro del elemento antes.

	// Borrar elemento
	$(".contenido").find("p").last().remove();
});