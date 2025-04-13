let meuArray = [1, 2, 2, 3, 4, 4, 5];
console.log("Array Inicial:", meuArray);
console.log("--------------------");

// 1. Set → Remove duplicatas de um array.
let meuSet = new Set(meuArray);
console.log("new Set(meuArray):", meuSet);
// Saída: Set { 1, 2, 3, 4, 5 }
console.log("--------------------");

// 2. Converter Set de volta para array.
let arraySemDuplicatas = [...meuSet];
console.log("[...meuSet]:", arraySemDuplicatas);
// Saída: [ 1, 2, 3, 4, 5 ]
console.log("--------------------");

// 3. add(valor) → Adiciona um novo valor ao Set.
meuSet.add(6);
console.log("meuSet.add(6):", meuSet);
// Saída: Set { 1, 2, 3, 4, 5, 6 }
console.log("--------------------");

// 4. delete(valor) → Remove o valor especificado do Set.
meuSet.delete(2);
console.log("meuSet.delete(2):", meuSet);
// Saída: Set { 1, 3, 4, 5, 6 }
console.log("--------------------");

// 5. has(valor) → Verifica se o valor especificado existe no Set.
console.log("meuSet.has(1):", meuSet.has(1));
// Saída: true
console.log("meuSet.has(2):", meuSet.has(2));
// Saída: false
console.log("--------------------");

// 6. clear() → Remove todos os valores do Set.
meuSet.clear();
console.log("meuSet.clear():", meuSet);
// Saída: Set {}
console.log("--------------------");

// 7. forEach(callbackFn[, thisArg]) → Executa a função callbackFn para cada valor no Set.
meuSet.add(1).add(2).add(3);
meuSet.forEach(valor => console.log("Valor:", valor));
// Saída:
// Valor: 1
// Valor: 2
// Valor: 3
console.log("--------------------");

// 8. values() → Retorna um novo objeto Iterator que contém os valores do Set.
for (const valor of meuSet.values()) {
  console.log("Valor do Iterator:", valor);
}
// Saída:
// Valor do Iterator: 1
// Valor do Iterator: 2
// Valor do Iterator: 3
console.log("--------------------");

// 9. size → Propriedade que retorna o número de valores no Set.
console.log("meuSet.size:", meuSet.size);
// Saída: 3
console.log("--------------------");