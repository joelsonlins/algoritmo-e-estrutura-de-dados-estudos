/*
dado um grafo simples representando cidades e estradas, determine se há conexão direta ou indireta enre duas cidades
*/
function existeCaminho(grafo, origem, destino) {
  if (!grafo[origem] || !grafo[destino]) {
    return false;
  }

  if (grafo[origem].includes(destino)) {
    return true;
  }
  const fila = [origem];
  const visitados = new Set();
  visitados.add(origem);

  while (fila.length > 0) {
    const cidadeAtual = fila.shift();

    if (cidadeAtual === destino) {
      return true;
    }
    if (grafo[cidadeAtual]) {
      for (const vizinho of grafo[cidadeAtual]) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push(vizinho);
        }
      }
    }
  }
  return false;
}
const grafo = {
  A: ["B"],
  B: ["C"],
  C: [],
  D: ["E"],
};

console.log(existeCaminho(grafo, "A", "C"));
console.log(existeCaminho(grafo, "A", "E"));
console.log(existeCaminho(grafo, "D", "E"));
console.log(existeCaminho(grafo, "A", "A"));
console.log(existeCaminho(grafo, "X", "Y"));
