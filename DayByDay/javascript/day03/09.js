/*
9. Simular Fila (Enqueue e Dequeue)
Contexto:
Você está modelando o comportamento de uma fila de atendimento.
*/

function simularFila(acoes) {
  let lista = [];
  for (const acao of acoes) {
    if (acao.startsWith("enqueue:")) {
      const nome = acao.split(":")[1];
      lista.push(nome);
    } else if (acao === "dequeue") {
      lista.shift();
    }
  }

  return lista
}

console.log(
  simularFila(["enqueue:Ana", "enqueue:João", "dequeue", "enqueue:Paulo"])
);
