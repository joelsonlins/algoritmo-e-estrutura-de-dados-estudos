/*
Filtrar elementos negativos
Contexto:
Você recebeu um array com dados diversos e precisa filtrar os números negativos.
*/

function filtrarNegativos(lista) {
  newArr = [];
  for (let ele of lista) {
    if (ele < 0) {
      newArr.push(ele);
    }
  }
  return newArr;
}

// utilizando o filter

function filtrarNegativos01(lista) {
  return lista.filter((numero) => numero < 0);
}

console.log(filtrarNegativos([5, -3, 8, -1, 0]));
console.log(filtrarNegativos01([5, -3, 8, -1, 0]));
