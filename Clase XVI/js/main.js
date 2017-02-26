$(document).ready(function(){
	// Event Listener Directo
	/*$('body').on('click', function(event){
		event.preventDefault();
		console.log('clickeado');
	});*/

	// Event Listener Delegado
	$('main').on('click', 'a', function(event){
		event.preventDefault();
		console.log('clickeado delegado: ' + this.innerText);
	});

	var $enlace = $("<a href='http://newdomain.com' target='_blank'>JcLerma</a>");
	$('p').last().css('color', 'goldenrod').data('color', 'amarillo').append($enlace);
});