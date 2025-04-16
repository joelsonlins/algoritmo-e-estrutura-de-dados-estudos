/*
 Contar números pares em um array
Contexto:
Você precisa contar quantos números pares existem em um array de inteiros.
*/

function contarPares(lista) {
  count = 0;
  for (let num of lista) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(contarPares([1, 2, 3, 4, 5, 6]));
