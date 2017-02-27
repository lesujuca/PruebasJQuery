$(document).ready(function(){
	var $input = $("#field"),
		$h1 = $(".contenido").children("h1");

	// $input.keyup(function(event){
	$input.on("keyup", function(event){
		// console.log("Presiona Tecla");
		// console.log(event.which);
		var codigo = event.which;
		if(codigo === 13){
			$("h1").text($(this).val());
		}else if(codigo === 27){
			$("h1").text("Sin Título");
			$(this).val("")
		}
	});
});