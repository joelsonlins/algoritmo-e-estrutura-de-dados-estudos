/*
2. Verificar Número Primo
Contexto:
Um sistema de criptografia simples exige verificação de números primos.
*/

function ehPrimo(numero) {
  count = 0;
  for (let i = 0; i <= numero; i++) {
    if (numero % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    return "Número primo";
  } else {
    return "Não é primo";
  }
}



console.log(ehPrimo(29));
