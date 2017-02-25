$(document).ready(function(){
	var $twitter = $("aside").find("a").last();
	console.log($twitter.data('rrss')); //Getter
	console.log($twitter);
	$twitter.data('rrss', "otro valor"); //Setter
	console.log($twitter.data('rrss'));
	console.log($twitter);

	// Filtrar Selección
	var $datos = $("*").filter(function(){
		// return $(this).data("rrss");

		// Sólo los que tengan de valor snapchat
		return $(this).data("rrss") == "snapchat";
	});
	console.log($datos);
});