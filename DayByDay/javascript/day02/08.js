function buscarNaArvore(raiz, valor) {
  if (raiz === null) {
    return false;
  }

  if (raiz.valor === valor) {
    return true;
  }

  return buscarNaArvore(raiz.esquerda, valor) || buscarNaArvore(raiz.direita, valor);
}

const arvore = {
  valor: 10,
  esquerda: { valor: 5, esquerda: null, direita: null },
  direita: { valor: 15, esquerda: null, direita: null },
};

console.log(buscarNaArvore(arvore, 5)); // Saída: true
console.log(buscarNaArvore(arvore, 20)); // Saída: false