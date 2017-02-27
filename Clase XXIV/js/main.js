$(document).ready(function(){
	var $enlace = $("a");

	$(".lateral").children("img").on("click", function(){
		/*// console.log("click");

		// Si la clase está la quita de lo contrario la coloca
		if($enlace.hasClass("lerma")){
			$enlace.removeClass("lerma");
		}else{
			$enlace.addClass("lerma");
		}*/

		// Es más sencillo con toggleClass
		$enlace.toggleClass("lerma");
	});
});