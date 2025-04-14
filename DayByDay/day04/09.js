/*
9. Verificar se uma Árvore Binária é Estritamente Binária
Contexto:
Dado um objeto que representa uma árvore, verifique se todos os nós têm 0 ou 2 filhos.
*/
/#Reforçar estudos#/
function ehArvoreEstritamenteBinaria(arvore) {
  if (!arvore) {
    return true;
  }

  const esquerda = arvore.esquerdo;
  const direito = arvore.direito;

  if (!esquerda && !direito) {
    return true;
  }

  if (esquerda && direito) {
    return (
      ehArvoreEstritamenteBinaria(esquerda) &&
      ehArvoreEstritamenteBinaria(direito)
    );
  }

  return false;
}

const arvore = {
  valor: 1,
  esquerdo: { valor: 2 },
  direito: { valor: 3 },
};

console.log(ehArvoreEstritamenteBinaria(arvore));
