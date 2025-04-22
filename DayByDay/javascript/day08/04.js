/*
Inverter string sem usar métodos prontos
Contexto:
Você está criando sua própria função para inverter textos, sem reverse().
*/

function inverterString(string) {
  arrStr = string.split("");
  arrStrInv = [];

  for (let ele of arrStr) {
    arrStrInv.unshift(ele);
  }

  return arrStrInv.join("");
}
console.log(inverterString("banana"));
