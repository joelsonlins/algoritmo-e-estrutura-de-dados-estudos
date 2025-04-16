/*
Converter número para binário
Contexto:
Você precisa converter um número decimal para sua representação binária.
*/

function decimalParaBinario(num) {
  if (num === 0) {
    return [0];
  }
  let newArr = [];
  while (num > 0) {
    const remainder = num % 2;
    newArr.push(remainder);
    num = Math.floor(num / 2);
  }

  return newArr.reverse().join("");
}

console.log(decimalParaBinario(10));
