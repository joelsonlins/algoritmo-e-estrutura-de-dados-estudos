/*
Você está desenvolvendo um sistema de leitura que precisa exibir palavras em ordem de tamanho crescente
*/
function ordenarPorTamanho(palavras) {
  return palavras.sort((a, b) => a.length - b.length);
}

console.log(ordenarPorTamanho(["sol", "lua", "marte", "terra"]));
