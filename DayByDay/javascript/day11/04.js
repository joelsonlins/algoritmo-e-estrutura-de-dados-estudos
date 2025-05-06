/*
- Contar frequência de caracteres
Você está processando textos e precisa contar quantas vezes cada caractere aparece
*/

function contarCaracteres(texto) {
  const frequencia = {};

  for (const caractere of texto) {
    if (frequencia[caractere]) {
      frequencia[caractere]++;
    } else {
      frequencia[caractere] = 1;
    }
  }

  return frequencia;
}

console.log(contarCaracteres("banana"));