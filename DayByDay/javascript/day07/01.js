/*
Soma dos números até N
Contexto:
Você está desenvolvendo uma calculadora básica para crianças e precisa criar uma função que some todos os números inteiros de 1 até N.
*/

function somarAteN(num) {
  soma = 0;
  for (let i = 0; i <= num; i++) {
    soma += i;
  }
  return soma;
}

console.log(somarAteN(5));
