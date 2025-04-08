/*
19. Soma de Diagonal Principal de uma Matriz
Dada uma matriz quadrada, some os valores da diagonal principal.

Entrada:

csharp
Copiar
Editar
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
Saída: 15
*/

function somaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const resultado = somaDiagonalPrincipal(matriz);
console.log(resultado);