/*
Você recebeu a tarefa de calcular a soma dos elementos de uma árvore binária em um nível específico
*/

function somaNivel(raiz, nivelAlvo) {
  if (!raiz) {
    return 0;
  }

  if (nivelAlvo === 0) {
    return raiz.valor;
  }

  return (
    somaNivel(raiz.esquerda, nivelAlvo - 1) +
    somaNivel(raiz.direita, nivelAlvo - 1)
  );
}

const arvore = {
  valor: 1,
  esquerda: { valor: 2, esquerda: null, direita: null },
  direita: { valor: 3, esquerda: null, direita: null },
};

console.log(somaNivel(arvore, 1));
