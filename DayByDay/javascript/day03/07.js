function contarOcorrencias(elemento, b) {
  count = 0;
  for (let num of elemento) {
    if (num === b) {
      count++;
    }
  }
  return count;
}

// utilizando filter

function contarOcorrenciasFilter(lista, numero) {
  return lista.filter(item => item === numero);
}

// Exemplo de uso
console.log(contarOcorrenciasFilter([1, 2, 2, 3, 2, 4], 2)); // Saída: 3

//console.log(contarOcorrencias([1, 2, 2, 3, 2, 4], 2));
