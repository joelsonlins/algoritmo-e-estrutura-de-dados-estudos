/*
 Verificar se todos os elementos são pares
Contexto:
Você está validando uma sequência de números para saber se todos são pares.
*/

function todosPares(lista) {
  count = 0;

  for (let num of lista) {
    if (num % 2 === 0) {
      count++;
    }
  }

  return count === lista.length ? true : false;
}

console.log(todosPares([2, 4, 6]));
console.log(todosPares([2, 3, 6]));
