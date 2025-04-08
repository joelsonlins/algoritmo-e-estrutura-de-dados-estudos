/*
23. Verificar Ciclo em Grafo
Dado um grafo dirigido, detecte se há ciclos.
Entrada:
{"A": ["B"], "B": ["C"], "C": ["A"]}
Saída: True
*/

function hasCycle(grafo) {
  const visiting = new Set();
  const visited = new Set();

  function dfs(node) {
    visiting.add(node);

    const neighbors = grafo[node] || [];
    for (const neighbor of neighbors) {
      if (visiting.has(neighbor)) {
        return true;
      }
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) {
          return true;
        }
      }
    }

    visiting.delete(node);
    visited.add(node);
    return false;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfs(node)) {
        return true;
      }
    }
  }

  return false;
}

const grafoComCiclo = { A: ["B"], B: ["C"], C: ["A"] };
const resultadoCiclo = hasCycle(grafoComCiclo);
console.log(resultadoCiclo);

const grafoSemCiclo = { A: ["B"], B: ["C"], D: [] };
const resultadoSemCiclo = hasCycle(grafoSemCiclo);
console.log(resultadoSemCiclo);
