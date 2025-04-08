/*
5. Verificação de palíndromo
Verifique se uma palavra é palíndromo (lê-se igual de trás para frente)

Entrada: 'radar'
Saida: true

*/

const word = 'Radar'

function palindromo(palavra){
  let palavraOriginal = palavra.toLowerCase()
  return palavraOriginal === [...palavraOriginal].reverse().join('')
}

//console.log(palindromo(word))


let palavraSpred = [...word.toLowerCase()].reverse().join('')


console.log(palavraSpred)