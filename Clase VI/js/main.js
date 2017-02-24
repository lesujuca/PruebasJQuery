/*

// Esperar que el DOM esté listo con JavaScript Nativo
document.addEventListener('DOMContentLoaded', function(){
	console.log("ESTOY LISTO");
});

// Esperar que el DOM esté listo con JQuery
$(document).ready(function(){
	console.log("ESTOY LISTO CON JQUERY");
});

$(document).on('DOMContentLoaded', function(){
	console.log("ESTOY LISTO TAMBIÉN");
});

*/

$(document).ready(function(){
	// Descendiente directo
	var img = $("aside > img");
	console.log(img[0].ownerDocument.URL);

	// Desvanecer un elemento
	// $("aside > img").fadeOut(5000);
	// $("aside > img").fadeOut('slow');

	// Búsqueda de elementos
	// $("a span").css("color", "red");
	// var span = $("a span");
	// console.log(span);
	// console.log(span.length);

	// Selectores Múltiples => la próxima sentencia por lo que entiendo es para desaparecer el elemento visiblemente
	// $("a, span, p").slideToggle();

	// Pseudo Clases P:last first even odd
	$("p:odd").css({
		'font-weight': 'bold',
		'color': 'goldenrod'
	});
});