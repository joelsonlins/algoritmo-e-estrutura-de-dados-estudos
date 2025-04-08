/*
28. Transformar Árvore em Lista Ordenada
Converta uma árvore binária de busca em uma lista ordenada.
Entrada: Árvore: 10 -> 5, 15
Saída: [5, 10, 15]
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function arvoreParaListaOrdenada(root) {
  const listaOrdenada = [];

  function ordemTransversal(node) {
    if (node) {
      ordemTransversal(node.left);
      listaOrdenada.push(node.val);
      ordemTransversal(node.right);
    }
  }

  ordemTransversal(root);
  return listaOrdenada;
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);

const resultado = arvoreParaListaOrdenada(root);
console.log(resultado);
