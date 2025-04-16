/*
Dobrar valores de um array
Contexto:
Você recebeu uma lista de valores e precisa dobrar cada elemento.
*/

function dobrarValores(lista) {
  let newArr = lista.slice();
  let doubleArr = [];
  for (let element of newArr) {
    doubleArr.push(element * 2);
  }

  return doubleArr
}

// utilizando o map

function dobrarValores01(lista){
  return lista.map(element => element * 2);
}

arr = [1, 2, 3]
console.log(dobrarValores(arr));
console.log(arr)
console.log(dobrarValores01(arr));
console.log(arr)