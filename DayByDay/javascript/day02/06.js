function listaEstaOrdenada(elemento) {
  if (elemento.length <= 1) {
    return true;
  }
  for(i=0; i < elemento.length; i++){
    if(elemento[i]>elemento[i+1]){
      return false
    }
  }

  return true
}

console.log(listaEstaOrdenada([1, 2, 3, 4]));
console.log(listaEstaOrdenada([5, 3, 2]));
