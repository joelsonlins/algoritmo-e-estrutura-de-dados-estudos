function ehPalindromo(palavra) {
  let minusPalavra = palavra.toLowerCase()
  let newPalavra = minusPalavra.split("").reverse().join("");

  return newPalavra === palavra ? true : false;
}

console.log(ehPalindromo("radar"))
console.log(ehPalindromo("javascript"))