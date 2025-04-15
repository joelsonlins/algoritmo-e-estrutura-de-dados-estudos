/*
 1. Soma dos N primeiros números ímpares
Contexto:
Você precisa ajudar no cálculo da soma dos primeiros N números ímpares para uma análise estatística.
*/

function somaImpares(elemento) {
  let count = 0;
  let soma = 0;
  let num = 0;

  while (count < elemento) {
    if (num % 2 !== 0) {
      soma += num;
      count++;
    }
    num++;
  }

  return soma;
}

console.log(somaImpares(3));
