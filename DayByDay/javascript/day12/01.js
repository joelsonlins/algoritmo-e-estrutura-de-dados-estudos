function teste(lista) {
  count = 0;
  for (let num of lista) {
    if (num % 2 == 0) {
      count++;
    }
  }
  return count
}

console.log(teste([1, 2, 3, 4, 5, 6]));
console.log(teste([7, 9, 11]));
