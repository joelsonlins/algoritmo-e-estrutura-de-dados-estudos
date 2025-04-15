/*
Filtrar múltiplos de 3 e 5
Contexto:
Num sistema de pontuação, apenas valores múltiplos de 3 ou 5 são válidos.
*/

function teste(elemento) {
  newLista = [];
  for (let num of elemento) {
    if (num % 3 === 0 || num % 5 === 0) {
      newLista.push(num);
    }
  }
  return newLista;
}

console.log(teste([2, 3, 5, 7, 15]));
