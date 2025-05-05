/*
Remover Duplicatas de um Array
Contexto:
Elimine os valores repetidos de um array e retorne apenas os únicos.
*/

function removerDuplicatas(lista) {
  return [...new Set(lista)];
}

console.log(removerDuplicatas([1, 2, 2, 3, 4, 4]));
