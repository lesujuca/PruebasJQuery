$(document).ready(function(){
	// Captura el hover de a
	$("a").hover(
		function(){
			var $titulo = $(this).attr("title");

			$(this).data("titulo", $titulo).removeAttr("title");

			$("<p class='tooltip'></p>").text($titulo).css('background-color', $(this).data("fondo")).appendTo("body").fadeIn("slow");
		},
		function(){
			$(this).attr("title", $(this).data("titulo"));
			$(".tooltip").remove();
		}
	).mousemove(function(e){
		var ratonX = e.pageX + 20,
			ratonY = e.pageY + 10;

		$(".tooltip").css({
			'left': ratonX,
			'top': ratonY
		});
	});
});