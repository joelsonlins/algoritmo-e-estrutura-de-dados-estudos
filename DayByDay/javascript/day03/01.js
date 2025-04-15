/*
1. Soma dos Elementos Pares
Contexto:
Você está desenvolvendo uma aplicação de contabilidade e precisa somar apenas os valores pares de uma lista.
*/

function somaPares(lista) {
  soma = 0;
  for (let num of lista) {
    if (num % 2 === 0) {
      soma += num;
    }
  }

  return soma
}

console.log(teste([1,2,3,4,5]))