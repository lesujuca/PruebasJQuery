/*Escuchar eventos del DOM (content loaded)*/
document.addEventListener("DOMContentLoaded", function(){
	console.log('DOM cargado');
});

/*Ahora vamos a escuchar event listener sobre elemento html*/
var enlace = document.querySelector("a");
console.log(enlace);
enlace.addEventListener("click", function(event){
	event.preventDefault();//Se usa comunmente en <a> y <form>
	console.log("Click en el enlace");
});