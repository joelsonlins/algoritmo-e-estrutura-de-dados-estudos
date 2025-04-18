/*
Contar elementos maiores que a média
Contexto:
Você precisa identificar quantos elementos de uma lista são maiores que a média dos valores.
*/

function contarAcimaDaMedia(numeros) {

  const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  const media = soma / numeros.length;
  let contador = 0;

  for (const numero of numeros) {
    if (numero > media) {
      contador++;
    }
  }

  return contador;
}

console.log(contarAcimaDaMedia([10, 20, 30, 40])); 