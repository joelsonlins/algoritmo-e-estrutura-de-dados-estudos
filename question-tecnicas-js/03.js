/*

3.Soma dos N primeiros números

dado um número n, calcule a soma de todos os números de 1 até n.

entrada: 5
Saída: 15

*/


const numero = 5

function somaN(n){
  let soma = 0
  for (let i = 1; i <= n; i++){
    soma += i
    }
    return soma
}

console.log(somaN(numero))