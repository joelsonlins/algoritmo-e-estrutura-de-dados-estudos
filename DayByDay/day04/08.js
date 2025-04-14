/*
8. Verificar se Grafo é Simples (sem laços ou arestas múltiplas)
Contexto:
Dado um grafo representado como uma lista de arestas, verifique se é simples.
*/
/#Reforçar estudos#/

function grafoSimples(arestas) {
  const arestasSet = new Set();
  for (const [u, v] of arestas) {
    if (u === v) return false;
    const arestaStr = u < v ? `${u}-${v}` : `${v}-${u}`;
    if (arestasSet.has(arestaStr)) return false;
    arestasSet.add(arestaStr);
  }
  return true;
}

console.log(grafoSimples([[1, 2], [2, 3], [3, 1]]))
console.log(grafoSimples([[1, 1], [2, 3], [3, 2]]))