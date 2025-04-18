/*
 Ordenar nomes por ordem alfabética
Contexto:
Você está construindo uma lista de chamada e precisa ordená-la em ordem alfabética.
*/

function ordenarNomes(nomes) {
  return [...nomes].sort();
}

console.log(ordenarNomes(["Lucas", "Ana", "Bruno"]));
