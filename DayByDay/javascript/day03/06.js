/*
6. Buscar um Elemento em uma Lista
Contexto:
Você precisa procurar um elemento específico dentro de uma lista simples de dados.*/

function buscarElemento(lista, alvo) {
  return lista.includes(alvo);
}

console.log(buscarElemento([10, 20, 30, 40, 50], 30));
console.log(buscarElemento([10, 20, 30, 40], 50))