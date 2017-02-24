var h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.classList);

var h1a = document.querySelectorAll("h1");
console.log(h1a[0].innerHTML);

var boton = document.querySelector("button");
boton.addEventListener("click", function(event){
	event.preventDefault();
	console.log("Click al Botón");

	if(!h1.classList.contains('rojo')){
		h1.classList.add('rojo');
		h1.classList.remove('azul');
	}else{
		h1.classList.add('azul');
		h1.classList.remove('rojo');
	}
});

function toogleClass(elemento, clase){
	if(elemento.classList.contains(clase))
		elemento.classList.remove(clase);
	else
		elemento.classList.add(clase);
}

h1.addEventListener("click", function(){
	toogleClass(this, "rojo");
})