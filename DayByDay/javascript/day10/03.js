/*
Simular uma Pilha
Você deve simular uma pilha (stack) onde os comandos são PUSH e POP
*/

function simularPilha(lista) {
  let newArr = [];
  for (let list of lista) {
    if (list.startsWith("PUSH ")) {
      const numero = list.substring(5).trim()
      newArr.push(numero)
    }else if(list.startsWith("POP")){
      newArr.pop();
    }
  }

  return newArr
}

console.log(simularPilha(["PUSH 10", "PUSH 20", "POP", "PUSH 30"]));
