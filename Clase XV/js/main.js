$(document).ready(function(){
	var $enlace = $("<a href='http://www.google.com' target='_blank'>Google</a>");
	/*var $parrafo = $("p").last();

	// CSS
	$parrafo.css("color", "goldenrod");
	// Atributo data
	$parrafo.data("color", "amarillo");
	// Append
	$parrafo.append($enlace);*/

	// Método chaining
	$("p").last().css("color", "goldenrod").data("color", "amarillo").append($enlace);
});