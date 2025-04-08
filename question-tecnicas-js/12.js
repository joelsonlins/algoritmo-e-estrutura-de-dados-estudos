/*

12. Verificador de Anagrama
Verifique se duas palavras são anagramas (mesmas letras em ordes diferentes)
*/

function saoAnagramas(palavra1, palavra2) {
  const letrasPalavra1 = palavra1.split('').sort().join('');
  const letrasPalavra2 = palavra2.split('').sort().join('');
  return letrasPalavra1 === letrasPalavra2;
}

const palavra1 = "roma";
const palavra2 = "amor";
const resultado = saoAnagramas(palavra1, palavra2);
console.log(resultado);