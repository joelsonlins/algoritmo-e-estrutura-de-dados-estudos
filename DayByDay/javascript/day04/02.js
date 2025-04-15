/*
2. Converter Lista de Strings em Inteiros
Contexto:
Ao importar dados de um arquivo, os números vieram como strings. Converta para inteiros.
*/
function converterParaInteiros(lista) {
  let newLista = [];
  for (let elemento of lista) {
    newLista.push(parseInt(elemento));
  }
  return newLista;
}

console.log(converterParaInteiros(["1", "23", "5"]));