$(document).ready(function(){
	// Parent (Padre Inmediato) - Arriba
	// var $parent = $(".lateral").find('span').last().parent();
	// Parents (Padres)
	// var $parent = $(".lateral").find('span').last().parents();
	// console.log($parent);
	// $parent.css("border", "1px solid red");

	// Children (Hijo Inmediato) - Abajo
	// var $children = $(".contenido").children();
	var $children = $("main").find('*');
	// $children.css("border", "1px solid red");
	$children.css({
		'transition': 'all 2s',
		'transform': 'rotate(180deg)'
	});
});