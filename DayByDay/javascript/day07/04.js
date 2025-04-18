/*
Verificar se uma palavra é palíndromo
Contexto:
Você está desenvolvendo um verificador de palavras que identifica se uma palavra é um palíndromo (lê igual de trás para frente).
*/

function ehPalindromo(word) {
  // let newWord = word.split("").reverse().join("");

  return word === word.split("").reverse().join("") ? true : false;
}

console.log(ehPalindromo("carro"));
console.log(ehPalindromo("radar"));
