/*
14. Fila de Atendimento
Simule uma fila onde as pessoas entram e saem conforme o atendimento.

Entrada:
enqueue("Ana"), enqueue("Carlos"), dequeue()
Saída: "Ana"
*/

class FilaAtendimento {
  constructor() {
    this.pessoas = [];
  }

  enqueue(pessoa) {
    this.pessoas.push(pessoa);
  }

  dequeue() {
    if (this.pessoas.length > 0) {
      return this.pessoas.shift();
    }
    return null;
  }
}

const fila = new FilaAtendimento();
fila.enqueue("Ana");
fila.enqueue("Carlos");
const atendido = fila.dequeue();
console.log(atendido);