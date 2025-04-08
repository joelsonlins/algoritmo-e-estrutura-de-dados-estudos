/*
21. Caminho entre Cidades (Grafo)

Dado um grafo representando conexões entre cidades, determine se há caminho entre duas cidades.

Entrada:

Grafo: {"A": ["B"], "B": ["C"], "C": []}, início: "A", destino: "C"

Saída: True
*/

function existeCaminho(grafo, inicio, destino) {
  const visitados = new Set();
  const fila = [inicio];
  visitados.add(inicio);

  while (fila.length > 0) {
    const cidadeAtual = fila.shift();

    if (cidadeAtual === destino) {
      return true;
    }

    const vizinhos = grafo[cidadeAtual] || [];
    for (const vizinho of vizinhos) {
      if (!visitados.has(vizinho)) {
        visitados.add(vizinho);
        fila.push(vizinho);
      }
    }
  }

  return false;
}

const grafo = {"A": ["B"], "B": ["C"], "C": []};
const inicio = "A";
const destino = "C";
const resultado = existeCaminho(grafo, inicio, destino);
console.log(resultado);