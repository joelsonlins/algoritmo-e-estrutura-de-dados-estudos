function teste(lista) {
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === lista[i + 1]) {
      count++;
    }
  }

  if (count >= 1) {
    return true;
  } else {
    return false;
  }
}

console.log(teste([1, 2, 2, 3]));
console.log(teste([1, 2, 3, 4]));
