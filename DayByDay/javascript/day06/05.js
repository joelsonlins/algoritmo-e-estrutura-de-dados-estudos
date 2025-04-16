/*
Verificar se um número está contido em um array
Contexto:
Você quer saber se um determinado número está presente em um array.
*/
function contemNumero(lista, num) {
  return lista.includes(num);
}

console.log(contemNumero([1, 2, 3, 4], 3));
console.log(contemNumero([1, 2, 3, 4], 5));
