function buscarNaMatriz(matriz, alvo) {
  for (let ele of matriz) {
    for (let ele02 of ele) {
      if (ele02 == alvo) {
        return true;
      }
    }
  }
  return false
}

function buscarNaMatriz02(matriz, alvo){
  return matriz.some(linha => linha.includes(alvo))
}

console.log(
  buscarNaMatriz(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    4
  )
);
console.log(
  buscarNaMatriz02(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    4
  )
);

