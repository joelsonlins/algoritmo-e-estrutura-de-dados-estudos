/*
 Simular uma fila
Contexto:
Simule uma fila onde pessoas entram no final e saem do início.
*/

function simularFila(operacoes) {
  const fila = [];

  for (const operacao of operacoes) {
    if (operacao.startsWith("ENTRAR ")) {
      const nome = operacao.substring(7);
      fila.push(nome);
    } else if (operacao === "SAIR") {
      if (fila.length > 0) {
        fila.shift();
      }
    }
  }

  return fila;
}

console.log(simularFila(["ENTRAR Ana", "ENTRAR João", "SAIR", "ENTRAR Maria"]));
