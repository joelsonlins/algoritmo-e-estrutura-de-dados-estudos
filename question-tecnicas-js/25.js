/*
25. Permutações de uma String
Retorne todas as permutações possíveis de uma string.
Entrada: "abc"
Saída: ["abc", "acb", "bac", "bca", "cab", "cba"]
*/

function permutString(str) {
  if (str.length === 0) {
    return [""];
  }

  const primeiroChar = str[0];
  const restoDaString = str.slice(1);
  const permutaçõesResto = permutString(restoDaString);
  const resultado = [];

  for (const permutacao of permutaçõesResto) {
    for (let i = 0; i <= permutacao.length; i++) {
      const novaPermutacao =
        permutacao.slice(0, i) + primeiroChar + permutacao.slice(i);
      resultado.push(novaPermutacao);
    }
  }

  return resultado;
}

const entrada = "abc";
const resultado = permutString(entrada);
console.log(resultado);
