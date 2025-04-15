/*
 3. Remover Duplicatas de um Array
Contexto:
Você está limpando dados de uma planilha e precisa remover valores duplicados.
*/


function removerDuplicados(lista) {
  newLista = [];
  for (let num of lista) {
    if (!(lista.includes(num) && newLista.includes(num))) {
      newLista.push(num);
    }
  }

  return newLista;
}
// Utilizando Set

function removerDuplicadosSet(lista){
  return [...new Set(lista)];
}

// Utilizando filter e indexOf
function removerDuplicadosFilter(lista){
  return lista.filter((valor, indice) => lista.indexOf(valor) === indice)
}

//console.log(teste([1, 2, 2, 3, 4, 4, 5]));

//console.log(removerDuplicados([1,2,2,3,4,4,5]))
console.log(removerDuplicadosFilter([1,2,2,3,4,4,5]))

