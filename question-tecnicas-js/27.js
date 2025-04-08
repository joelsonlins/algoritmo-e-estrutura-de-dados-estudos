/*
27. Agrupar Anagramas
Dado um array de palavras, agrupe os anagramas.
Entrada: ["bat", "tab", "tap", "pat"]
Saída: [["bat", "tab"], ["tap", "pat"]]
*/
function agruparAnagramas(palavras) {
  const grupos = {};
  for (const palavra of palavras) {
    const key = palavra.split('').sort().join('');
    if (!grupos[key]) {
      grupos[key] = [];
    }
    grupos[key].push(palavra);
  }
  return Object.values(grupos);
}

const entrada = ["bat", "tab", "tap", "pat"];
const resultado = agruparAnagramas(entrada);
console.log(resultado);