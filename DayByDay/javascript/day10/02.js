/*
Palavras com números impar de letras
Filtre as palavras que têm número ímpar de caracteres
*/

function palavrasImpares(palavras) {
  let palavrasImpares = [];
  for (let palavra of palavras) {
    if (palavra.length % 2 !== 0) {
      palavrasImpares.push(palavra);
    }
  }
  return palavrasImpares;
}

console.log(palavrasImpares(["uva", "banana", "melão", "kiwi"]));
