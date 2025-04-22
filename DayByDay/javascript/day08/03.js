/*
 Buscar maior elemento em matriz
Contexto:
Você precisa encontrar o maior valor em uma matriz 2D.
*/
function maiorElemento(matriz) {
  maiorNum = -Infinity;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > maiorNum) {
        maiorNum = matriz[i][j];
      }
    }
  }

  return maiorNum;
}
console.log(
  maiorElemento([
    [1, 2, 3],
    [7, 4, 0],
  ])
);
