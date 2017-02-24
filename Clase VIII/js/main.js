$(document).ready(function(){
	var click = 0;
	// fadeout() es para esconder un elemento
	$('.contenido').find('p').last().prevAll('p').css('background-color', 'red').click(function(){
		$(this).fadeOut(800).delay(500).fadeIn(1000).slideUp(700).slideDown().animate({"font-size": "0.80em"}, 2000, function(){
			$(this).css({'background-color': 'green', 'opacity': '0.4'}).delay(1000);
		});

		if(click == 0)
			console.log("dio click");
		else
			console.log("has dado click " + (click + 1) + ' veces');

		click++;
	});

	$("h1").click(function(){
		$(this).animate({color: "red"}, 3000);
		console.log("Este es");
	});
});