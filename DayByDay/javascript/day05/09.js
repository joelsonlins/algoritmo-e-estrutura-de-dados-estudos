function contarFolhas(no) {
  if (!no) {
    return 0;
  }
  if (!no.esquerdo && !no.direito) {
    return 1;
  }

  return contarFolhas(no.esquerdo) + contarFolhas(no.direito);
}

const arvore = {
  valor: 1,
  esquerdo: { valor: 2 },
  direito: {
    valor: 3,
    esquerdo: { valor: 4 },
    direito: { valor: 5 },
  },
};

console.log(contarFolhas(arvore));
