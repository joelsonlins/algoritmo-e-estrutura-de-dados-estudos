/*
6. Encontrar Segundo Menor Número
Contexto:
Você precisa mostrar o segundo menor número de uma lista.
*/
function segundoMenor(elemento) {
  numM = Infinity;
  numSecM = Infinity;
  for (let i = 0; i < elemento.length; i++) {
    if (elemento[i] < numM) {
      numM = elemento[i];
    }
    if (elemento[i] > numM && elemento[i] < numSecM) {
      numSecM = elemento[i];
    }
  }

  return numSecM;
}

console.log(segundoMenor([5, 1, 9, 1, 3, 4, 2]));

// utilizando sort + Set
// neste caso encontrariamos problemas se tivessemos um menor valor que se repetisse
// necessitando a utilização do Set

function segundoMenor2(lista) {
  let listaNumDist = [...new Set(lista)];
  listaOrdenada = listaNumDist.sort((a, b) => a - b);
  return listaOrdenada[1];
}
console.log(segundoMenor2([5, 1, 9, 1, 3, 4, 2]));
