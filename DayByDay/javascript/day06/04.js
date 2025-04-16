/*
Verificar se todos os elementos são iguais
Contexto:
Um sensor envia valores repetidos, você precisa verificar se todos os valores em um array são iguais.
*/

function todosIguais(lista) {
  //let newArr = [...new Set(lista)];

  return [...new Set(lista)].length === 1;
}

console.log(todosIguais([5, 5, 5, 5]));
console.log(todosIguais([5, 4, 5]));
