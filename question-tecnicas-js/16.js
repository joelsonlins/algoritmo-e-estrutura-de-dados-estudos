/*
16. Agrupar Números Pares e Ímpares
Dado um array, separe em dois arrays: um com pares e outro com ímpares.

Entrada: [1, 2, 3, 4, 5, 6]
Saída:
[2, 4, 6], [1, 3, 5]
*/

function agruparParesImpares(array) {
  const pares = [];
  const impares = [];
  for (const numero of array) {
    if (numero % 2 === 0) {
      pares.push(numero);
    } else {
      impares.push(numero);
    }
  }
  return [pares, impares];
}

const entrada = [1, 2, 3, 4, 5, 6];
const [pares, impares] = agruparParesImpares(entrada);
console.log(pares, impares);