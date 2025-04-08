/*
4. Maior número de uma lista

Dado um array de inteiros, encontre o maior valor

Entrada: [3,7,2,9,4]
Saida: 9
*/

const arrayNum = [3, 7, 2, 9, 4, 15];

function maiorNumeroDoArray(lista) {
  let maior = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  return maior;
}

console.log(maiorNumeroDoArray(arrayNum))
