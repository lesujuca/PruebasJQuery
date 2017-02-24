// Obtener los estilos de un elemento
var div = document.querySelector(".caja");
// console.log(div);
var estilos = getComputedStyle(div, null);
// console.log(estilos);
console.log(estilos.width);
// console.log(estilos.backgroundColor);
console.log(estilos['background-color']);

// Modificar o añadir estilos
div.style.backgroundColor = 'goldenrod';
div.style['border-radius'] = '20px';

// Varios estilos a la vez
div.style.cssText += 'background-color: green; width: 400px; height: 200px;';

// Añadir una clase
div.classList.add('transicion');