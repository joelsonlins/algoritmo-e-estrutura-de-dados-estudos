// Escreva um programa que verifica se uma palavra é um palíndromo

const verificarPalimdromo = (palavra) => {
  let palavraOriginal = palavra.toLowerCase();
  let palavraInvertida = palavraOriginal.split("").reverse().join("");

  if (palavra === palavraInvertida) {
    return "A palavra é um palimdromo";
  } else {
    return "A palavra não é um palimdromo";
  }
};

console.log(verificarPalimdromo("radar"))
console.log(verificarPalimdromo("BANAna"))
