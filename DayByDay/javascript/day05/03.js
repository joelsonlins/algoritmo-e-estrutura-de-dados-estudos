/*
Contar quantas vezes uma palavra aparece
Contexto:
Dado um texto, conte quantas vezes uma palavra específica aparece.
*/

function contarPalavra(texto, palavra) {
  let count = 0;
  let newArr = texto.split(" ");
  for (let word of newArr) {
    if (word === palavra) {
      count++;
    }
  }
  return count;
}
// mais curta
function contarPalavra01(texto, palavra) {
  return texto.split(palavra).length - 1;
}

// utilizando filter
function contarPalavra002(texto, palavra) {
  return texto.split(" ").filter((elemento) => elemento === palavra).length;
}

//console.log(contarPalavra("O gato subiu no telhado e o gato miou", "gato"));
console.log(contarPalavra02("O gato subiu no telhado e o gato miou", "gato"));
