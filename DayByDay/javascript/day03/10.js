function teste(elemento) {
  let maior = elemento[0];
  for (let i = 0; i < elemento.length; i++) {
    if (elemento[i] > maior) {
      maior = elemento[i];
    }
  }

  return elemento.indexOf(maior);
}

console.log(teste([1050, 25, 8, 60, 45, 100]));
