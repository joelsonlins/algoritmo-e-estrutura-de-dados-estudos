/*
10. Encontrar o Índice do Elemento com Valor Máximo
Contexto:
Você quer saber em que posição está o maior valor de uma lista.
*/

function indiceMaiorValor(lista) {
  let numM = -Infinity;
  for (let num of lista) {
    if (num > numM) {
      numM = num;
    }
  }

  return lista.indexOf(numM);
}

console.log(indiceMaiorValor([1, 7, 3, 9, 5]));
