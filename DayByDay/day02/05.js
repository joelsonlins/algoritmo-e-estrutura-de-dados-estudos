/*
5. Soma de Dígitos
Contexto:
Você está criando um verificador de números que depende da soma de seus dígitos.
*/

function somarDigito(elemento) {
  let newElemento = String(elemento).split("");
  let soma = 0;
  for (let num of newElemento) {
    num = parseInt(num);
    soma += num;
  }
  return soma;
}

function somarDigito01(elemento){
 return String(elemento).split("").reduce((soma, digito) => soma + Number(digito), 0)
}
console.log(somarDigito(123456))
console.log(somarDigito01(123456));


array = [1,2,54,25]
let somaArr = array.reduce((accumulator, currentValue ) => accumulator + currentValue, 0)

console.log(somaArr)