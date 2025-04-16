/*
Contar vogais em uma string
Contexto:
Você está desenvolvendo um analisador de texto e precisa contar o número de vogais.
*/
function contarVogais(elemento) {
  let count = 0;
  arrVoc ="aeiouAEIOU"
  for (let ele of elemento) {
    if (arrVoc.includes(ele)) {
      count++;
    }
  }
  return count
}
// usando expressões regulares
function contarVogaisRegex(texto) {
  const matches = texto.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}
console.log(contarVogais("programador"));
console.log(contarVogaisRegex("programador"));
texto = "programador"
const matches = texto.match(/[aeiouAEIOU]/g);
console.log(matches)