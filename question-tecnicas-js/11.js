/*
Dado um número n, gere a sequêcia de Fibonacci até que o último número seja menor ou igual a n
entrada: 10
saida: [0,1,1,2,3,5,8]


*/

function fibonacciAteN(n) {
  const resultado = [];
  let a = 0;
  let b = 1;

  while (a <= n) {
    resultado.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  }

  return resultado;
}

const n = 10;
const resultado = fibonacciAteN(n);
console.log(resultado);
