// Array inicial para os exemplos
let meuArray = [10, 20, 30, 40, 50];
console.log("Array Inicial:", meuArray);
console.log("--------------------");

// 1. push() → Adiciona elemento(s) ao final.
meuArray.push(60);
console.log("push(60):", meuArray);
// Saída: [10, 20, 30, 40, 50, 60]

meuArray.push(70, 80);
console.log("push(70, 80):", meuArray);
// Saída: [10, 20, 30, 40, 50, 60, 70, 80]
console.log("--------------------");

// 2. pop() → Remove o último elemento.
let ultimoElementoRemovido = meuArray.pop();
console.log("pop():", meuArray);
// Saída: [10, 20, 30, 40, 50, 60, 70]
console.log("Último Elemento Removido:", ultimoElementoRemovido);
// Saída: 80
console.log("--------------------");

// 3. shift() → Remove o primeiro elemento.
let primeiroElementoRemovido = meuArray.shift();
console.log("shift():", meuArray);
// Saída: [20, 30, 40, 50, 60, 70]
console.log("Primeiro Elemento Removido:", primeiroElementoRemovido);
// Saída: 10
console.log("--------------------");

// 4. unshift() → Adiciona elemento(s) no início.
meuArray.unshift(5);
console.log("unshift(5):", meuArray);
// Saída: [5, 20, 30, 40, 50, 60, 70]

meuArray.unshift(0, 15);
console.log("unshift(0, 15):", meuArray);
// Saída: [0, 15, 5, 20, 30, 40, 50, 60, 70]
console.log("--------------------");

// 5. slice() → Retorna uma cópia de parte do array.
let parteDoArray = meuArray.slice(2, 5);
console.log("slice(2, 5):", parteDoArray);
// Saída: [5, 20, 30]

let outraParteDoArray = meuArray.slice(3);
console.log("slice(3):", outraParteDoArray);
// Saída: [20, 30, 40, 50, 60, 70]
console.log("Array Original (slice não modifica):", meuArray);
// Saída: [0, 15, 5, 20, 30, 40, 50, 60, 70]
console.log("--------------------");

// 6. splice() → Altera o array (adiciona/remove).
let elementosRemovidosSplice = meuArray.splice(2, 3);
console.log("splice(2, 3):", meuArray);
// Saída: [0, 15, 40, 50, 60, 70]
console.log("Elementos Removidos (splice):", elementosRemovidosSplice);
// Saída: [5, 20, 30]

meuArray.splice(1, 0, 8, 9);
console.log("splice(1, 0, 8, 9):", meuArray);
// Saída: [0, 8, 9, 15, 40, 50, 60, 70]

meuArray.splice(4, 1, 45);
console.log("splice(4, 1, 45):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 7. concat() → Combina arrays.
let outroArray = [100, 200];
let arrayCombinado = meuArray.concat(outroArray);
console.log("concat([100, 200]):", arrayCombinado);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70, 100, 200]
console.log("Array Original (concat não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 8. join() → Converte array em string com separador.
let stringDoArray = meuArray.join("-");
console.log("join('-'):", stringDoArray);
// Saída: "0-8-9-15-45-50-60-70"

let outraStringDoArray = meuArray.join(); // Separador padrão é vírgula
console.log("join():", outraStringDoArray);
// Saída: "0,8,9,15,45,50,60,70"
console.log("Array Original (join não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 9. indexOf() → Retorna o índice de um elemento.
let indiceDo15 = meuArray.indexOf(15);
console.log("indexOf(15):", indiceDo15);
// Saída: 3

let indiceDo99 = meuArray.indexOf(99); // Elemento não existe
console.log("indexOf(99):", indiceDo99);
// Saída: -1
console.log("Array Original (indexOf não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 10. includes() → Verifica se um elemento existe.
let incluiO15 = meuArray.includes(15);
console.log("includes(15):", incluiO15);
// Saída: true

let incluiO99 = meuArray.includes(99);
console.log("includes(99):", incluiO99);
// Saída: false
console.log("Array Original (includes não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 11. find() → Retorna o primeiro elemento que passa em um teste.
let primeiroMaiorQue20 = meuArray.find(elemento => elemento > 20);
console.log("find(elemento => elemento > 20):", primeiroMaiorQue20);
// Saída: 45

let primeiroMaiorQue100 = meuArray.find(elemento => elemento > 100);
console.log("find(elemento => elemento > 100):", primeiroMaiorQue100);
// Saída: undefined
console.log("Array Original (find não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 12. filter() → Filtra elementos com base em uma condição.
let maioresQue20 = meuArray.filter(elemento => elemento > 20);
console.log("filter(elemento => elemento > 20):", maioresQue20);
// Saída: [45, 50, 60, 70]

let menoresQue10 = meuArray.filter(elemento => elemento < 10);
console.log("filter(elemento => elemento < 10):", menoresQue10);
// Saída: [0, 8, 9]
console.log("Array Original (filter não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 13. map() → Transforma cada elemento do array.
let dobrarArray = meuArray.map(elemento => elemento * 2);
console.log("map(elemento => elemento * 2):", dobrarArray);
// Saída: [0, 16, 18, 30, 90, 100, 120, 140]
console.log("Array Original (map não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 14. reduce() → Reduz o array a um único valor.
let somaDoArray = meuArray.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log("reduce((acumulador, elemento) => acumulador + elemento, 0):", somaDoArray);
// Saída: 257

let produtoDoArray = meuArray.reduce((acumulador, elemento) => acumulador * elemento, 1);
console.log("reduce((acumulador, elemento) => acumulador * elemento, 1):", produtoDoArray);
// Saída: 0 (por causa do 0 no array)
console.log("Array Original (reduce não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 15. forEach() → Executa uma função para cada elemento.
console.log("forEach(elemento => console.log(elemento + 1)):");
meuArray.forEach(elemento => console.log(elemento + 1));
// Saída (imprime cada elemento + 1 no console):
// 1
// 9
// 10
// 16
// 46
// 51
// 61
// 71
console.log("Array Original (forEach não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 16. some() → Verifica se pelo menos um elemento passa no teste.
let temMaiorQue60 = meuArray.some(elemento => elemento > 60);
console.log("some(elemento => elemento > 60):", temMaiorQue60);
// Saída: true

let temMenorQueMenos1 = meuArray.some(elemento => elemento < -1);
console.log("some(elemento => elemento < -1):", temMenorQueMenos1);
// Saída: false
console.log("Array Original (some não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 17. every() → Verifica se todos os elementos passam no teste.
let todosSaoPositivos = meuArray.every(elemento => elemento >= 0);
console.log("every(elemento => elemento >= 0):", todosSaoPositivos);
// Saída: true

let todosSaoMaioresQue10 = meuArray.every(elemento => elemento > 10);
console.log("every(elemento => elemento > 10):", todosSaoMaioresQue10);
// Saída: false
console.log("Array Original (every não modifica):", meuArray);
// Saída: [0, 8, 9, 15, 45, 50, 60, 70]
console.log("--------------------");

// 18. sort() → Ordena o array (modifica o original).
let arrayDesordenado = [5, 1, 4, 2, 8];
console.log("Array Desordenado:", arrayDesordenado);
// Saída: [5, 1, 4, 2, 8]

arrayDesordenado.sort(); // Ordenação padrão (alfabética para strings, pode ser estranha para números)
console.log("sort() (padrão):", arrayDesordenado);
// Saída: [1, 2, 4, 5, 8]

let arrayDesordenadoNumerico = [5, 1, 4, 2, 8];
arrayDesordenadoNumerico.sort((a, b) => a - b); // Ordenação numérica crescente
console.log("sort((a, b) => a - b) (numérico crescente):", arrayDesordenadoNumerico);
// Saída: [1, 2, 4, 5, 8]

let arrayDesordenadoDecrescente = [5, 1, 4, 2, 8];
arrayDesordenadoDecrescente.sort((a, b) => b - a); // Ordenação numérica decrescente
console.log("sort((a, b) => b - a) (numérico decrescente):", arrayDesordenadoDecrescente);
// Saída: [8, 5, 4, 2, 1]
console.log("--------------------");

// 19. reverse() → Inverte a ordem do array.
let arrayParaInverter = [1, 2, 3, 4, 5];
console.log("Array para inverter:", arrayParaInverter);
// Saída: [1, 2, 3, 4, 5]

arrayParaInverter.reverse();
console.log("reverse():", arrayParaInverter);
// Saída: [5, 4, 3, 2, 1]
console.log("--------------------");

// 20. flat() → "Achata" arrays aninhados (ex: [1, [2]] → [1, 2]).
let arrayAninhado = [1, [2, 3], [4, [5, 6]]];
console.log("Array Aninhado:", arrayAninhado);
// Saída: [1, [2, 3], [4, [5, 6]]]

let arrayAchatado = arrayAninhado.flat(); // Profundidade padrão é 1
console.log("flat():", arrayAchatado);
// Saída: [1, 2, 3, 4, [5, 6]]

let arrayAchatadoProfundamente = arrayAninhado.flat(2); // Achatando até a profundidade 2
console.log("flat(2):", arrayAchatadoProfundamente);
// Saída: [1, 2, 3, 4, 5, 6]
console.log("--------------------");