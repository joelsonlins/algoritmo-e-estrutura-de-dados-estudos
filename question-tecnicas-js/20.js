/*
20. Validador de Parênteses
Verifique se os parênteses de uma string estão balanceados.

Entrada: "((()))"
Saída: True
*/

function validarParenteses(str) {
  const pilha = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      pilha.push(char);
    } else if (char === ")") {
      if (pilha.length === 0) {
        return false;
      }
      pilha.pop();
    }
  }
  return pilha.length === 0;
}

const entrada = "((()))";
const resultado = validarParenteses(entrada);
console.log(resultado);
