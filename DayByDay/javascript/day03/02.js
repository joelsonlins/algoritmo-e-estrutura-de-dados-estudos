/*
2. Contar Palavras em uma Frase
Contexto:
Você está trabalhando em um sistema de análise de texto e precisa contar quantas palavras existem em uma frase.
*/

function teste(texto) {
  let textoArray = texto.split(" ");

  return `A quantidade de palavras é: ${textoArray.length}`;
}

console.log(teste("Olá mundo isso é JavaScript"));
