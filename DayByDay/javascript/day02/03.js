/*
3. Contar Números Negativos
Contexto:
Você recebeu um array de temperaturas e precisa contar quantas delas estão abaixo de zero.
*/

function contarNegativos(array){
  let count = 0
  for(let arr of array){
    if(arr < 0 ){
      count++
    }
  }

  return count
}

/*

*/

console.log(contarNegativos([20,-5,0,-2,4]))