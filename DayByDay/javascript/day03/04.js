/*
4. Inverter uma String
Contexto:
No seu sistema de segurança, há uma função que exige inverter strings como parte de um hash básico.
*/

function inverterString(word) {
  return word.split("").reverse().join("")
}

console.log(inverterString("cachorro"));
