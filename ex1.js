/**
 * Completa cada ejercicio. Solo necesitas una línea de código JavaScript para cada ejercicio.
 *
 * REsultado deseado: https://oscarm.tinytake.com/msc/ODgxNzI5N18yMjI0ODE2OQ
 *

 */

/**
 * Cambia el título de la página a rojo usando un estilo en línea
 */

document.querySelector("h1").style.color = "red";

/**
 * Cambia el tamaño del título de la página a 48px usando un estilo en línea
 */
document.querySelector("h1").style.fontSize = "48px";

/**
 * Muestra por console.log el texto de la caja 2
 */

console.log(document.querySelector("#caja-2").textContent);

/**
 * Cambia el color del borde del párrafo con la class="intro"  a verde usando un estilo en línea
 */

document.querySelector(".intro").style.borderColor = "green";
/**
 * Elimina la clase "estilo-3" de la última caja.
 * Ayuda: https://www.w3schools.com/howto/howto_js_remove_class.asp
 */

document.querySelector("#ultimo").classList.remove("estilo-3");

/**
 * Añade la clase CSS "ocultar" al penúltimo párrafo.
 * Contesta a la pregunta: ¿En qué fichero podemos encotnrar la regla CSS "ocultar"? ¿Que propiedad CSS utiliza?
 * Ayuda: https://simpledev.io/lesson/add-class-js/
 *
 *  BONUS: Haz el ejercicio sin modificar el ex1.html
 */

document.querySelector("p:nth-of-type(4)").classList.add("ocultar");
