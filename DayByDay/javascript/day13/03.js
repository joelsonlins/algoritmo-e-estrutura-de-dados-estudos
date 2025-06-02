/*
Em um sistema que recebe números inteirs positivos únicos, você precisa encontrar o menor número positivo que não está presente
*/

function menorFaltando(numeros) {
  if (!numeros || numeros.length === 0) {
    return 1;
  }

  const positivosUnicos = new Set(numeros.filter((num) => num > 0));

  if (positivosUnicos.size === 0) {
    return 1;
  }

  const arrayOrdenado = Array.from(positivosUnicos).sort((a, b) => a - b);

  if (arrayOrdenado[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < arrayOrdenado.length - 1; i++) {
    const atual = arrayOrdenado[i];
    const proximo = arrayOrdenado[i + 1];

    if (proximo !== atual + 1) {
      return atual + 1;
    }
  }

  return arrayOrdenado[arrayOrdenado.length - 1] + 1;
}

console.log("Teste [3, 4, 7, 1]:", menorFaltando([3, 4, 7, 1]));
console.log("Teste [1, 2, 3]:", menorFaltando([1, 2, 3]));
