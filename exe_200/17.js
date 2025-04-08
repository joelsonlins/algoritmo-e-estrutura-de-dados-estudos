// Escreva um programa que determina se número é par ou ímpar.
const numParOuImpar = (numero)=>{
  if (numero % 2 == 0) {
    return `O número ${numero} é par` 
  }else{
    return `O número ${numero} é ímpar` 
  }
}

console.log(numParOuImpar(1))
console.log(numParOuImpar(2))