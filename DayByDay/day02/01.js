/*
1. Encontrar o Menor Número
Contexto:
Você está desenvolvendo uma ferramenta de análise de dados e precisa descobrir o menor número dentro de um array.
*/

function encontrarMenorNumero(numeros){
  let menorNumero = numeros[0]
  for(let numero of numeros){
    if(numero < menorNumero){
      menorNumero = numero
    }
  }

  return menorNumero
}

console.log(encontrarMenorNumero([3,5,1,9,-2]))