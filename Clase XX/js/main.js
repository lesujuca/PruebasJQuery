$(document).ready(function(){
	var $input = $("#field1"),
		$h1 = $(".contenido").children("h1");

	// $input.keyup(function(event){
	$input.on("keyup", function(event){
		// console.log("Presiona Tecla");
		$("h1").text($(this).val());
	});
});