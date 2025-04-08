// Escreva um programa que verifica se uma pessoa pode dirigir com base na idade

const permissaoParaDirigir = (idade) => {
  if (idade >= 18) {
    return `Você tem permissão para dirigir`;
  } else {
    return `Você não tem permissão para dirigir`;
  }
};
