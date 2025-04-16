/*
Somar todos os valores de uma matriz
Contexto:
Um sistema de processamento de imagens armazena dados em uma matriz e você precisa somar todos os valores.
*/

function somarMatriz(elemento) {
  let sum = 0;
  for (let i = 0; i < elemento.length; i++) {
    for (let j = 0; j < elemento[i].length; j++) {
      sum += elemento[i][j]
    }
  }

  return sum
}

console.log(
  somarMatriz([
    [1, 2],
    [3, 4],
  ])
);
