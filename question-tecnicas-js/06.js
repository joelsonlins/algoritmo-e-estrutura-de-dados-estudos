/*
6. Contador de Vogais
Conte quantas vogais existem em uma string

Entrada: "estagiario"
Saída: 6

*/

const palavra = "estagiário";

function contVogais(word) {
  let vogais = 0;
  const regexVogal = /[aeiouáéíóúàèìòùâêîôûãõäëïöü]/i;
  for (let i = 0; i < word.length; i++) {
    if (regexVogal.test(word[i].toLowerCase())) {
      vogais += 1;
    }
  }
  return vogais;
}

console.log(contVogais(palavra)); // saída esperada: 6
