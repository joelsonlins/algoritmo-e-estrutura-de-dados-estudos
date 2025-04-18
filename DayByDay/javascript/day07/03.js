/*
Retornar os 3 maiores números
Contexto:
Você precisa exibir os 3 maiores números de uma lista.
*/

function tresMaiores(lista) {
  let newArr = [...new Set(lista)].sort((a, b) => b - a);
  return newArr.slice(0, 3);
}

console.log(tresMaiores([4, 10, 2, 99, 32, 6]));
