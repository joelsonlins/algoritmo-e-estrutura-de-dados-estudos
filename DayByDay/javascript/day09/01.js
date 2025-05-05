/*
Filtrar Palavras pela Letra Inicial
Contexto:
Você recebeu uma lista de palavras. Filtre apenas aquelas que começam com a letra fornecida.
*/

function filtrarPorLetraInicial(a, b) {
  newArr = [];
  for (let ele of a) {
    if (ele.startsWith(b)) {
      newArr.push(ele);
    }
  }

  return newArr;
}

console.log(
  filtrarPorLetraInicial(["maçã", "melancia", "banana", "manga"], "m")
);
