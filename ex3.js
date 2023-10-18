/**
 * Variables globales que SI podemos usar dentro de una función ;)
 */

let numeroClicsPacman = 0;
let numeroClicsFantasma = 0;

function clicPacman() {
  // incremento la variable global clicsPacman
  numeroClicsPacman++;

  // actualizo el text content del nodo adecuado
  document.querySelector("#clics-pacman").textContent = numeroClicsPacman;
}

function clicFantasma() {
  // incremento los clics fantasma
  numeroClicsFantasma++;

  // actualizo el text content del nodo adecuado
  document.querySelector("#clics-fantasma").textContent = numeroClicsFantasma;
}
