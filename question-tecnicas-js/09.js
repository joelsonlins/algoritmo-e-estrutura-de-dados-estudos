/*
9. Remover duplicatas de Lista
remova todos os elementos duplicados de uma lista mantendo a ordem.

Entrada: [1,2,2,3,1,4]
saída: [1,2,3,4]
*/
function removerDuplicatas(lista) {
  const unicos = [];
  for (const elemento of lista) {
    if (!unicos.includes(elemento)) {
      unicos.push(elemento);
    }
  }
  return unicos;
}

const entrada = [1, 2, 2, 3, 1, 4];
const resultado = removerDuplicatas(entrada);
console.log(resultado);
