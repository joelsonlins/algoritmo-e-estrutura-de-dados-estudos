/*
Você está manipulando uma fila de atendimento e precisa revertê-la
*/
function reverterFila(fila) {
  return [...fila].reverse();
}
arr = ["Ana", "Bruno", "Carlos"];
console.log(reverterFila(arr));
console.log(arr);
