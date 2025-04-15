/*
Ordenar array de strings em ordem alfabética
Contexto:
Você quer organizar uma lista de nomes de clientes.
*/

function ordenarNomes(lista) {
  return lista.slice().sort();
}
arr = ["Carlos", "Ana", "Bruno"]
console.log(ordenarNomes(arr));
console.log(arr)
