/*
 6. Criar uma fila de atendimento
Contexto:
Você precisa simular uma fila de pessoas aguardando atendimento.
*/

class Fila {
  constructor() {
    this.dados = [];
  }

  entrar(valor) {
    // Sua implementação aqui
    this.dados.push(valor);
  }

  sair() {
    // Sua implementação aqui
    if (this.dados.length === 0) {
      return null;
    }
    return this.dados.shift();
  }

  frente() {
    // Retorna o primeiro da fila
    if (this.dados.length === 0) {
      return null;
    }
    return this.dados[0];
  }
}

const fila = new Fila();
fila.entrar("João");
fila.entrar("Maria");
console.log(fila.sair()); 
console.log(fila.frente()); 
