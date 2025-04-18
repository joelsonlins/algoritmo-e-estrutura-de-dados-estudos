/*
Reorganizar par e ímpar
Contexto:
Você recebeu uma lista e precisa colocar os pares primeiro e os ímpares depois, mantendo a ordem original de cada grupo.
*/

function organizarParImpar(lista) {
  arrPares = [];
  arrImpares = [];
  for (let ele of lista) {
    if (ele % 2 == 0) {
      arrPares.push(ele);
    } else {
      arrImpares.push(ele);
    }
  }

  return arrPares.concat(arrImpares);
}

console.log(organizarParImpar([5, 2, 3, 8, 1]));
