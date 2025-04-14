/*
5. Criar Mapa de Frequência de Caracteres
Contexto:
Crie um objeto que represente quantas vezes cada letra aparece em uma palavra.
*/
function frequenciaCaracteres(texto) {
  const freq = {};
  for (let char of texto) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}

//console.log(frequenciaCaracteres("banana"));

objTest = { b: 1, a: 3, n: 2 };
x = "a";
if (objTest[x]) {
  objTest[x]++;
}

console.log(objTest);
