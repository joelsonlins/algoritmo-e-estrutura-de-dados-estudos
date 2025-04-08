/*

18. Busca Binária
Implemente busca binária para encontrar um número em um array ordenado.

Entrada: [1, 3, 5, 7, 9], alvo = 5
Saída: 2 (índice)
*/

function buscaBinaria(array, alvo) {
  let esquerda = 0;
  let direita = array.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);

    if (array[meio] === alvo) {
      return meio;
    } else if (array[meio] < alvo) {
      esquerda = meio + 1;
    } else {
      direita = meio - 1;
    }
  }

  return "Número não encontrado no array";
}

const arrayOrdenado = [1, 3, 5, 7, 9];
const alvo = 52;
const indice = buscaBinaria(arrayOrdenado, alvo);
console.log(indice);
