/*
Contexto:
Você está ajudando a desenvolver um sistema de controle de estoque. Parte da lógica precisa somar apenas os códigos pares dos produtos que foram cadastrados recentemente.

Problema:
Escreva uma função que recebe um array de números inteiros e retorna a soma dos números pares.
*/

function somarNumerosPares(numeros) {
  let soma = 0;
  for (let numero of numeros) {
    if (numero % 2 === 0) {
      soma += numero;
    }
  }
  return soma;
}

console.log(somarNumerosPares([1, 2, 3, 4, 5])); // Saída: 6
console.log(somarNumerosPares([10, 13, 17, 20])); // Saída: 30
