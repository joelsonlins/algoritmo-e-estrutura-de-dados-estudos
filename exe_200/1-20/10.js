// Escreva um programa que recebe duas notas de aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado
//(considerando que a média para aprovação é 7)

function resultadoAvaliacao(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}


console.log(resultadoAvaliacao(7,8))
