$(document).ready(function(){
	// Before y After (Antes y Después de cada elemento)
	var $enlace = $("<a href='#'>Conocer más gatos negros!</a>");
	// $(".contenido").find("p").before($enlace);
	// $(".contenido").find("p").first().before($enlace);
	// $(".contenido").find("p").after($enlace);
	// $(".contenido").find("p").append($enlace);
	// $(".contenido").find("p").prepend($enlace);
	// $("#panel").insertBefore("#panelFinal");
	// $("#panel").insertAfter("#panelFinal");
	// $("#panel").prependTo("#panelFinal");
	// $("#panel").appendTo("#panelFinal");

	/*
		Conceptos entre algunos métodos similares
			before: Inserta contenido antes de un elemento.
			after: Inserta contenido después de un elemento.
			append: Inserta contenido al final de un elemento, es decir continua en su misma fila de ser posible. (dentro del elemento).
			appendTo: Mueve un contenido a otro, es decir el elemento seleccionado lo pasa después del indicado en el parámetro.
			insertBefore: Mueve un contenido a otro, es decir el elemento seleccionado lo pasa justo antes del indicado en el parámetro manteniéndose en la misma línea de ser posible.
			insertAfter: Mueve un contenido a otro, es decir el elemento seleccionado lo pasa después del indicado en el parámetro.
			prepend: Insertar contenido, especificado por el parámetro, al principio de cada elemento; es decir coloca justo antes de la línea del elemento seleccionado. (dentro del elemento).
			prependTo: Mueve un contenido a otro, es decir el elemento seleccionado lo pasa antes del indicado en el parámetro, pasando en una línea antes.
	*/

	console.log("Para ir probando, por favor ir descomentando cada uno desde la línea 4 a la 12");
});