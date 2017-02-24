// Buscar elementos en base a un selector
var elementos = document.querySelectorAll("li");
console.log(elementos);

elementos[0].addEventListener("click", function(){
	console.log("Click Elemento Uno: " + elementos[0].className + " - " + elementos[0].id);
});

// Buscar elementos con una clase específica
var heading = document.getElementsByClassName("heading");
console.log(heading);
heading[0].addEventListener("click", function(){
	console.log("Click al H2");
});

// Buscar elementos por nombre de tag
var ul = document.getElementsByTagName("ul");
console.log(ul);
var ul1 = document.querySelectorAll("ul");
console.log(ul1);

// Buscar elementos por id
var principal = document.getElementById("principal");
console.log(principal);
console.log(principal.innerHTML);
console.log(principal.id);