/*
15. Soma dos Dígitos
Dado um número inteiro, some todos os seus dígitos.

Entrada: 1234
Saída: 10
*/

function somaDigitos(numero) {
  const numeroStr = String(numero);
  let soma = 0;
  for (let i = 0; i < numeroStr.length; i++) {
    soma += parseInt(numeroStr[i]);
  }
  return soma;
}

const numero = 1234;
const resultado = somaDigitos(numero);
console.log(resultado);