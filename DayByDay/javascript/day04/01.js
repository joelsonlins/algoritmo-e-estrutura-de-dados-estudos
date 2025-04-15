/*
1. Média dos Números Positivos
Contexto:
Em um sistema de avaliação, você deve calcular a média dos números positivos de uma lista.
*/

function mediaPositivos(numeros) {
  let soma = 0;
  let count = 0;
  for (let num of numeros) {
    if (num > 0) {
      soma += num;
      count++;
    }
  }
  return (soma / count).toFixed(2);
}

console.log(mediaPositivos([-1, 4, 6, -3, 10]));
