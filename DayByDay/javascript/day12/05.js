
function saoVizinhos(mapa, cidade1, cidade2) {

  if (!mapa[cidade1]) {
    return false;
  }

  if (!mapa[cidade2]) {
    return false;
  }

  if (mapa[cidade1].includes(cidade2)) {
    return true;
  }

  if (mapa[cidade2].includes(cidade1)) {
    return true;
  }

  return false;
}

const mapa = {
  Arapiraca: ["Maceió", "Palmeira"],
  Maceió: ["Arapiraca", "União"],
  Palmeira: ["Arapiraca"],
  União: ["Maceió"]
};

console.log(saoVizinhos(mapa, "Arapiraca", "Maceió")) 
console.log(saoVizinhos(mapa, "Palmeira", "União"))   
