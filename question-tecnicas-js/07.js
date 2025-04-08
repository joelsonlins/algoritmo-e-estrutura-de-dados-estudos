/*
7. Fatorial de um Número
Implemente uma função que receba um número n e retorne seu aftorial.
Entrada: 5
Saída: 120
*/

const numero = 5;

function fatorial(num) {
  let resultado = 1;
  for (let i = num; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(numero))
