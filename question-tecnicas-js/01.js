/*

1. Contando pares em uma Lista

Você recebeu uma lista de números inteiros. Conte quatos números pares existem.

Entrada
Lista de inteiros: [1,2,3,4,5,6]
Saíde: 3

*/
lista = [1, 2, 3, 4, 5, 6];

function numerosInteiros(listaNum) {
  let cont = 0;
  for (num of listaNum) {
    if (num % 2 == 0) {
      cont += 1;
    }
  }
  return cont
}
console.log(numerosInteiros(lista))