function somaParcial(arr) {
  const resultado = [];
  let soma = 0;
  for (const numero of arr) {
    soma += numero;
    resultado.push(soma);
  }
  return resultado;
}

console.log(somaParcial([1, 2, 3]));     
console.log(somaParcial([5, 0, 10]));            