function somarFolhas(elemento) {

  if(elemento === null){
    return 0
  }

  if(elemento.esquerda === null && elemento.direita === null){
    return elemento.valor
  }

  return somarFolhas(elemento.esquerda) + somarFolhas(elemento.direita)
}

const arvore = {
  valor: 7,
  esquerda: { valor: 3, esquerda: null, direita: null },
  direita: {
    valor: 5,
    esquerda: { valor: 2, esquerda: null, direita: null },
    direita: null
  }
};


console.log(somarFolhas(arvore))