/*
4. Filtrar Nomes que Começam com uma Letra
Contexto:
Você quer listar todos os nomes que começam com determinada letra.
*/

function filtrarPorLetra(elemento, char) {
  newArray = [];
  for (let ele of elemento) {
    if (ele.startsWith(char)) {
      newArray.push(ele);
    }
  }

  return newArray;
}

console.log(filtrarPorLetra(["Ana", "Pedro", "Paula", "Carlos", "Peão"], "P"));
