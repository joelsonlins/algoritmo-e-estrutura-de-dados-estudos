// Escreva um programa que verifica se um ano é bissexto.

const verificarBissexto = (ano) => {
  if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
    return `${ano} é um ano bissexto`
  }else{
    return `${ano} não é um ano bissexto`
  }
};

console.log(verificarBissexto(2014))