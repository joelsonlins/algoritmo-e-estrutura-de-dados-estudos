// Escreva um programa que determina o maior entre três
// número.

const maiorNumeroDeTres = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return `O maior número é o ${num1}`;
  } else if (num2 > num1 && num2 > num3) {
    return `O maior número é o ${num2}`;
  } else {
    return `O maior número é o ${num3}`;
  }
};

console.log(maiorNumeroDeTres(6,5,3))
