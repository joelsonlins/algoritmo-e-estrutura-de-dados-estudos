/*
Encontrar o menor número em um array
Contexto:
Um relatório de sensores precisa informar o menor valor detectado.
*/

function menorNumero(elemento){ 
return elemento.sort((a,b) => a - b)[0]
}

console.log(menorNumero([8,3,10,1]))
