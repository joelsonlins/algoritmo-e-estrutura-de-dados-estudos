function teste(number) {
  let somaArr = number.split("");

  return somaArr.reduce((acumulator, elemento) => acumulator + elemento, 0);
}

console.log(teste(1234));
