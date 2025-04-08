/*
13. movimentação de Pilha
Implemente uma pilha com operações de push, pop e peek(usar estrutura de lista
Entrada:
push(5), push(10), pop(), peek()
Saída:
10, 5

*/

class PilhaLista {
  constructor() {
    this.itens = [];
  }

  push(elemento) {
    this.itens.push(elemento);
  }

  pop() {
    if (this.itens.length > 0) {
      return this.itens.pop();
    }
    return null;
  }

  peek() {
    if (this.itens.length > 0) {
      return this.itens[this.itens.length - 1];
    }
    return null;
  }
}

const minhaPilha = new PilhaLista();
minhaPilha.push(5);
minhaPilha.push(10);
const popped = minhaPilha.pop();
const top = minhaPilha.peek();

console.log(popped);
console.log(top);