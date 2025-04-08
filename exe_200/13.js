// Escreva um programa que calcule o IMC(Índice de Massa Corporal) de uma pessoa e imprime uma mensagem
// indicando se a pessoa está abaixo do peso, com peso normal com sobrepeso ou obesa

const calculoImc = (peso, altura) => {
  let imc = (peso / Math.pow(altura, 2)).toFixed(2);
  if (imc < 18.5) {
    return `Abaixo do peso, seu imc é : ${imc}`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Peso normal, seu imc é : ${imc}`;
  } else if (imc >= 25 && imc < 30) {
    return `Acima do peso, seu imc é : ${imc}`;
  } else {
    return `Obeso, seu imc é : ${imc}`;
  }
};


console.log(calculoImc(92, 1.74))