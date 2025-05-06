/*
- Verificar Números Repetidos
Você trabalha com validação de dados. Precisa verificar se há valores repetidos em uma lista de inteiros.
*/

function temDuplicados(lista) {  
  if (lista.length === [...new Set(lista)].length) {
    return false;
  } else {
    return true;
  }
}

console.log(temDuplicados([1, 2, 3, 4, 5]));
console.log(temDuplicados([1, 2, 3, 2]));
