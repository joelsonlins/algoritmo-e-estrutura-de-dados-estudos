/*
17. Ordenação Bubble Sort
Implemente o algoritmo de ordenação Bubble Sort.

Entrada: [5, 3, 8, 1]
Saída: [1, 3, 5, 8]
*/

function bubbleSort(array) {
  const n = array.length;
  let trocado;
  do {
    trocado = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
    
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        trocado = true;
      }
    }
  } while (trocado);
  return array;
}

const entrada = [5, 3, 8, 1];
const resultado = bubbleSort(entrada);
console.log(resultado);