$(document).ready(function(){
	var $main = $('main');
	/*$main.addClass('animated wobble').animate({
		'padding': '0px'
	}, 800, function(){
		$main.removeClass('wobble').addClass('zoomOut').animate({
			'padding': '50px'
		}, 500, function(){
			$main.removeClass('zoomOut').addClass('zoomIn');
		});
	});*/

	$main.addClass('animated bounceIn');

	var timeout = setTimeout(function (){
		$main.removeClass('bounceIn').addClass('rotateIn');
		clearTimeout(timeout);
	}, 3000);
});