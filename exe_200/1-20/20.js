// Escreva um programa que imprime uma classificação baseada na nota de um aluno

const posicaoDoAluno = (nota) => {
  if (nota >= 90) {
    return "A";
  } else if (nota >= 80) {
    return "B";
  } else if (nota >= 70) {
    return "C";
  } else if (nota >= 60) {
    return "D";
  } else {
    return "E";
  }
};

console.log(posicaoDoAluno(95))
console.log(posicaoDoAluno(23))
console.log(posicaoDoAluno(65))
