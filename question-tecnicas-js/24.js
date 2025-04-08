/*
24. Encontre o K-ésimo maior elemento
Dado um array e um número k, encontre o k-ésimo maior número.
Entrada: [3, 2, 1, 5, 6, 4], k = 2
Saída: 5
*/

function encontrarKesimoMaior(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

const entrada = [3, 2, 1, 5, 6, 4];
const k = 2;
const resultado = encontrarKesimoMaior(entrada, k);
console.log(resultado);
