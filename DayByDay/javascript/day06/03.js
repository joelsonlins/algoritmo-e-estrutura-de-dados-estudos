/*
Inverter uma string
Contexto:
Em um sistema de criptografia, é necessário inverter palavras.
*/

function inverterString(word) {
  return word.split("").reverse().join("");
}

console.log(inverterString("hello"));
