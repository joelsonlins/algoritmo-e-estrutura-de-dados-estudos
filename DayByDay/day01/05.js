function topoDaPilha(pilha){
  if(pilha.length < 1){
    return null;
  }else{
    return pilha[pilha.length - 1];
  }
}

console.log(topoDaPilha(["Página1", "Página2", "Página3"]))
console.log(topoDaPilha([]))