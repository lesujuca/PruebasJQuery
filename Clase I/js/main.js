var elemento = document.querySelector("h1");
/*var elemento = document.querySelectorAll("h1");
for(var i = elemento.length - 1; i >= 0; i--){
	console.log(elemento[i].innerHTML);
}*/
console.log(elemento.innerHTML);
var timeout = setTimeout(function(){
	elemento.innerHTML = "Hola desde Curso JQuery";

	/*Con JQuery*/
	var elementoJQuery = $("h1").text();
	console.log(elementoJQuery);
}, 1000);