/*
Contar Ocorrências em lista encadeada
Dada uma lsita ligada, conte quantas vezes u valor aparece
*/

function listaNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function contarOcorrencias(head, valor) {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (current.val === valor) {
      count++;
    }
    current = current.next;
  }
  return count
}
const node4 = new listaNode(4);
const node2_2 = new listaNode(2, node4);
const node3 = new listaNode(3, node2_2);
const node2_1 = new listaNode(2, node3);
const node1 = new listaNode(1, node2_1);

const head = node1;
const valorBuscado = 2;
const ocorrencias = contarOcorrencias(head, valorBuscado);
console.log(`O valor ${valorBuscado} aparece ${ocorrencias} vezes na lista.`)