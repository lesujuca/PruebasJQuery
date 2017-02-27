$(document).ready(function(){
	var $enlaces = $("a");

	// Getter: Obtener los valores de las propiedades de un elemento en CSS
	console.log($enlaces.css("font-size"));

	// Getter multiple
	console.log($(".lateral").css([
		'font-size',
		'color',
		'margin'
	]));

	// Setter
	$("p").css("color", "goldenrod");

	// Setter Multiple
	$enlaces.css({
		'font-size': '20px',
		'color': 'pink',
		'margin': '.5px'
	});
});