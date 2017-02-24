$(document).ready(function(){
	// Escuchar un anchor
	// $(".lateral").find("a").last().click(function(){
	$(".lateral").find("a").last().on('click', function(evento){
		evento.preventDefault();
		$('.contenido').children("p").css("color", "red");
	});

	// Escuchar los <p>
	$(".contenido").children("p").on("click", function(evento){
		evento.preventDefault();
		$(this).css("color", "blue");
		console.log(this);
	});
});