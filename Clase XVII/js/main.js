$(document).ready(function(){
	// Selector
	/*var $enlaces = $('.lateral').find('a').filter(':odd');
	$enlaces.css('transform', 'scale(2)');*/

	// Función - Test
	var $enlaceSnapchat = $('.lateral').find('a').filter(function(indice, elemento){
		// console.log(elemento === this); // ES THIS
		// console.log(indice, elemento);

		return $(elemento).find("span").text() === "Snapchat";
	});

	console.log($enlaceSnapchat.css('transform', 'rotate(45deg)'));
});;