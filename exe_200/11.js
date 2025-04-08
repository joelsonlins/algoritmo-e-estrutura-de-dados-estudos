// Escreva um programa que verifica se uma pessoa pode votar com base na idade

function votaOuNao(idade) {
  if (idade >= 18 && idade < 70) {
    return "o voto é obrigatório";
  } else if ((idade >= 16 && idade < 18) || idade >= 70) {
    return "o voto é facultativo";
  } else {
    return "você não pode votar";
  }
}

console.log(votaOuNao(20));
console.log(votaOuNao(75));
console.log(votaOuNao(14));
