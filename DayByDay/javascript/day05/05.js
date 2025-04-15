/*
 5. Simular Pilha de Pratos
Contexto:
Implemente uma pilha onde você possa empilhar e desempilhar elementos.
*/

class Pilha {
  constructor() {
    this.dados = [];
  }

  empilhar(valor) {
    // Sua implementação aqui
    this.dados.push(valor);
  }

  desempilhar() {
    // Sua implementação aqui
    if (this.dados.length === 0) {
      return null;
    }
    return this.dados.pop();
  }

  topo() {
    // Retorna o elemento do topo
    if (this.dados.length === 0) {
      return null;
    }
    return this.dados[this.dados.length - 1];
  }
}
const p = new Pilha();
p.empilhar("Prato1");
p.empilhar("Prato2");
console.log(p.desempilhar());
console.log(p.topo());
