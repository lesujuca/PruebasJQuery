$(document).ready(function(){
	// $("section.contenido p:first-of-type").css('color', 'red');
	// $("section.contenido").find('p').first().css('color', 'blue');
	$("span").css({'padding': '2px'});
	$(".contenido").find('p').last().find('span').css({
		'font-weight': 'bold',
		'color': 'white',
		'background-color': 'blue'
	});
	$(".contenido").find('p').eq(2).css("color", "green");
});