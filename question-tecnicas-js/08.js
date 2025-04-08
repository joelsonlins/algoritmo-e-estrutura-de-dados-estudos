/*
Número Ímpar ou par

Dado um número inteiro, retorn se ele par ou impar
Entrada: 8
Saída: "Par"

*/

function parOuImpar(num){
  if(num % 2 == 0){
    return "Par";
    }else{
      return "Ímpar";
      }
}

console.log(parOuImpar(2))