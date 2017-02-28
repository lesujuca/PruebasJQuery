$(document).ready(function(){
	$("section").find(".panel_contenido").first().slideDown();

	$("section").find(".panel_head").on("click", function(event){
		event.preventDefault();
		var $section_click = $(this).parent();

		$(".panel_contenido").each(function(indice, elemento){
			if(!$(this).parent().is($section_click))
				$(this).slideUp();
		});

		// $(this).next().slideToggle();
		$(this).siblings(".panel_contenido").slideToggle();
	})
});