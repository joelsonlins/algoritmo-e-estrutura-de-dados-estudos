/*
Buscar valor em árvore binária simples (objeto)
Contexto:
Dada uma árvore binária representada com objetos, você precisa buscar se determinado valor existe nela.
*/

//reforçar

function buscarNaArvore(raiz, valor) {
  if (!raiz) {
    return false;
  }

  if (raiz.valor === valor) {
    return true; 
  }

  return (
    buscarNaArvore(raiz.esquerda, valor) || buscarNaArvore(raiz.direita, valor)
  );
}


const arvore = {
  valor: 10,
  esquerda: { valor: 5, esquerda: null, direita: null },
  direita: { valor: 15, esquerda: null, direita: null },
};

console.log(buscarNaArvore(arvore, 15)); 
console.log(buscarNaArvore(arvore, 7)); 
