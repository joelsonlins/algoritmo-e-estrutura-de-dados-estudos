/*
 5. Verificar Palíndromo
Contexto:
Você precisa criar uma função para verificar se uma palavra é igual quando lida de trás para frente (palíndromo).
*/

function ehPalindromo(elemento) {
  let newElement = elemento.split("").reverse().join("");
  if (newElement === elemento) {
    return true;
  } else {
    return false;
  }
}

console.log(ehPalindromo("ara"));
