/*
Verificar se um número é palíndromo
Contexto:
Você quer verificar se um número lido da direita para a esquerda é igual ao original.
*/
function ehPalindromo(num) {

  let numString = num.toString()
  let StringInvert = numString.split("").reverse().join("")
  return numString === StringInvert;
}

console.log(ehPalindromo(121));

