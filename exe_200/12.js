// Escreva um programa que verifica a situação de um estudandte de acordo com sua média final

function mediaDoAluno(mediaFinal){
  if(mediaFinal >= 7){
    return "Aprovado";
  }else if(mediaFinal >= 5 && mediaFinal <7){
    return "Recuperação";
  }else{
    return "Reprovado"
  }
}


console.log(mediaDoAluno(8))
console.log(mediaDoAluno(6))
console.log(mediaDoAluno(3))