/*
soma condicional
Você esatá processando uma lista de números. Deve somar apenas os valores pares maiores que 10
*/

function somaCondicional(num) {
  return num.reduce((acc, ele) => {
    if (ele % 2 === 0 && ele > 10) {
      return acc + ele;
    } else {
      return acc;
    }
  }, 0);
}

console.log(somaCondicional([5, 12, 3, 20, 11, 8]));
