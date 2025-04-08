/*
22. Árvore Binária - Soma de Nós
Some todos os valores dos nós de uma árvore binária.
Entrada: Árvore com nós: 10, 5, 15, null, 7
Saída: 37
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function somaNosArvore(root) {
  if (!root) {
    return 0;
  }
  return root.val + somaNosArvore(root.left) + somaNosArvore(root.right);
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.right = new Node(7);

const resultado = somaNosArvore(root);
console.log(resultado);