/*
26. Subarray com Maior Soma (Kadane)
Dado um array, encontre o subarray contínuo com a maior soma.
Entrada: [-2,1,-3,4,-1,2,1,-5,4]
Saída: 6 ([4,-1,2,1])
*/

function subarrayMaiorSoma(nums) {
  let maxSF = nums[0];
  let maxEH = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEH = Math.max(nums[i], maxEH + nums[i]);
    maxSF = Math.max(maxSF, maxEH);
  }
  return maxSF;
}

const entrada = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const resultado = subarrayMaiorSoma(entrada);
console.log(resultado);
