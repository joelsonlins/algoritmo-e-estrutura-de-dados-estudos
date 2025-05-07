function teste(matriz, alvo) {
  return matriz.some((linha) => linha.includes(alvo));
}
console.log(
  teste(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    5
  )
);
console.log(
  teste(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    10
  )
);
