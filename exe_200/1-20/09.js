// Escreva um programa que recebe um número e verifica se ele é positio, negativo ou zero

// const num = Number(prompt("Digite um número: "))
// const num = 10;

// if (num > 0) {
//   console.log("O número é positivo");
// } else if (num < 0) {
//   console.log("O número é negativo");
// } else {
//   console.log("O número é zero");
// }


// outra forma

function verificaNumero(numero){
  if (numero > 0) {
    return "O número é positivo";
    } else if (numero < 0) {
      return "O número é negativo";
      } else {
        return "O número é zero";
        }
}

console.log(verificaNumero(0))