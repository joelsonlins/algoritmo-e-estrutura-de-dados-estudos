/*
Converter número romano para decimal
Contexto:
Você está criando um conversor de números romanos para decimais.
*/

function romanoParaDecimal(romano) {
  const valores = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let resultado = 0;
  for (let i = 0; i < romano.length; i++) {
    const valorAtual = valores[romano[i]];
    const valorProximo = valores[romano[i + 1]];

    if (valorProximo && valorAtual < valorProximo) {
      resultado += valorProximo - valorAtual;
      i++;
    } else {
      resultado += valorAtual;
    }
  }

  return resultado;
}


console.log(romanoParaDecimal("IV"));   
console.log(romanoParaDecimal("X"));    
console.log(romanoParaDecimal("XIV"));  
console.log(romanoParaDecimal("MCMXCIV")); 