/*
- Fultra palavras que comaçam com letra maiúscla
Dado um array de strings, retorne apenas as que começam com letra maiúscula
*/

function filtrarMaiusculas(palavras) {
  newLista = [];
  for (let palavra of palavras) {
    if (palavra !== palavra.toLowerCase()) newLista.push(palavra);
  }
  return newLista;
}

console.log(filtrarMaiusculas(["Sol", "lua", "Marte", "terra"]));
