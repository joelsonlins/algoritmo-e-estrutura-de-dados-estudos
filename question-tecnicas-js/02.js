/*
Dada uma string, retorne-a invertida.
entrada: "estagio"
saida: "oigatse"
*/


const word = "estagio"

function inverterString(palavra){
  let palavraInvertida = palavra.split('').reverse().join('')
  return palavraInvertida
}

console.log(inverterString(word))

