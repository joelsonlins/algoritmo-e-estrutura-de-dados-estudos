/*
4. Verificar Elemento na Fila
Contexto:
Você está simulando uma fila de atendimento e precisa saber se um cliente está na fila.
*/

function estaNaFila(fila, cliente){
  //verificacao = fila.includes(cliente)

  if(fila.includes(cliente)){
    return "Cliente encontrado"
  }else{
    return "Cliente não encontrado"
  }
}

console.log(estaNaFila(["João", "Maria", "Lucas"], "Maria"))
console.log(estaNaFila(["Ana", "Carlos"], "Pedro"))