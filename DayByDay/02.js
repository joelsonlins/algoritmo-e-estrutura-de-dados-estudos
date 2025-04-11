/*
Contexto:
Você está lidando com uma lista de acessos a um sistema. Precisa contar quantas vezes um ID específico aparece na lista.

Problema:
Escreva uma função que recebe um array de números e um número-alvo. Retorne quantas vezes o número-alvo aparece no array.
*/


function contarOcorrencias(lista, alvo) {
  let cont = 0;
  for (let fator of lista) {
    if (fator === alvo) {
      cont++;
    }
  }

  return cont;
}

console.log(contarOcorrencias([1, 2, 2, 3, 2, 4], 2)); // Saída: 3
console.log(contarOcorrencias([5, 6, 7, 8], 4));  // Saída: 0
