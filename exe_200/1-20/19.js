// Escreva um programa que verifica se um número está dentro de um determinado intervalo

const dentroDoIntervalo = (numero, inicioIntervalo, finalInvervalo) =>{
  if(numero >= inicioIntervalo && numero <= finalInvervalo){
    return `O número ${numero} está dentro do intervalo`
    } else {
      return `O número ${numero} está fora do intervalo`
      }
}

console.log(dentroDoIntervalo(5,1,10))
console.log(dentroDoIntervalo(11,1,10))