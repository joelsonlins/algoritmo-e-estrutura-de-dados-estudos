/*
Remover duplicatas de um array
Contexto:
Você precisa limpar uma lista de produtos repetidos.
*/
function removerDuplicatas(lista) {
  let newArr = [...new Set(lista)];
  return newArr;
}

console.log(removerDuplicatas(["banana", "maçã", "banana", "uva"]));
