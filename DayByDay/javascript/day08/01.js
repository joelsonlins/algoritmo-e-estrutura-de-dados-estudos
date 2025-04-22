/*
Remover duplicatas de um array
Contexto:
Você precisa garantir que uma lista de emails não tenha duplicações.
*/

function removerDuplicatas(lista) {
  return [...new Set(lista)];
}

console.log(removerDuplicatas(["ana", "joão", "ana", "maria"]));
