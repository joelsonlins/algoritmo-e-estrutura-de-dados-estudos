/*
- Somar Elementos na Diagonal Principal
Você precisa processar matrizes quadradas e retornar a soma da diagonal principal
*/
function somaDiagonal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        soma += matriz[i][j];
      }
    }
  }
  return soma;
}

console.log(
  somaDiagonal([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  somaDiagonal([
    [5, 0, 0],
    [0, 5, 0],
    [0, 0, 5],
  ])
);
