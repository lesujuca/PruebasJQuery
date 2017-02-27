$(document).ready(function(){
	/*$(".contenido").find("p").hover(
		function(){
			console.log("entró");
		},
		function(){
			console.log("salió");
		}
	);*/

	$(".contenido").find("p").mousedown(function(){
		console.log("Presiona");
	})
	.mouseup(function(){
		console.log("Suelta");
	});
});