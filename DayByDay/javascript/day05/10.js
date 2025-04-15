/*
 10. Buscar um valor em uma matriz
Contexto:
Dada uma matriz de inteiros, retorne true se o valor estiver nela.
*/

function buscarNaMatriz(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista[i].length; j++) {
      if(lista[i][j] === elemento){
        return true
      }
    }
  }
  return false
}

console.log(
  buscarNaMatriz(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    7
  )
);

//utilizando  some+include
function buscarNaMatriz01(lista, elemento) {
  return lista.some(linha=> linha.includes(elemento))
}


console.log(
  buscarNaMatriz01(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    7
  )
);
