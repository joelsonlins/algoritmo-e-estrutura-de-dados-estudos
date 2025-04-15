function simularPilha(acoes){
  let pilha = []

  for(const acao of acoes){
    if(acao.startsWith("push:")){
      const valor = parseInt(acao.split(":")[1])
      pilha.push(valor)
    }else if(acao === "pop"){
      pilha.pop()
    }
  }
  return pilha
}

console.log(simularPilha(["push:1", "push:2", "pop", "push:3"]))