let numeroExemplo = 123.456;
console.log("Número Inicial:", numeroExemplo);
console.log("--------------------");

// 1. toFixed() → Formata com casas decimais fixas.
let numeroFixado = numeroExemplo.toFixed(2);
console.log("toFixed(2):", numeroFixado);
// Saída: "123.46" (arredonda)

let numeroFixadoZero = numeroExemplo.toFixed(0);
console.log("toFixed(0):", numeroFixadoZero);
// Saída: "123"
console.log("Número Original:", numeroExemplo);
// Saída: 123.456
console.log("--------------------");

// 2. parseInt() → Converte string em número inteiro.
let stringInteira = "100px";
let inteiroConvertido = parseInt(stringInteira);
console.log("parseInt('100px'):", inteiroConvertido);
// Saída: 100

let outraStringInteira = "3.14";
let outroInteiroConvertido = parseInt(outraStringInteira);
console.log("parseInt('3.14'):", outroInteiroConvertido);
// Saída: 3
console.log("--------------------");

// 3. parseFloat() → Converte string em número decimal.
let stringDecimal = "3.14abc";
let decimalConvertido = parseFloat(stringDecimal);
console.log("parseFloat('3.14abc'):", decimalConvertido);
// Saída: 3.14

let outraStringDecimal = "10";
let outroDecimalConvertido = parseFloat(outraStringDecimal);
console.log("parseFloat('10'):", outroDecimalConvertido);
// Saída: 10
console.log("--------------------");

// 4. Math.random() → Gera número aleatório entre 0 (inclusive) e 1 (exclusive).
let numeroAleatorio = Math.random();
console.log("Math.random():", numeroAleatorio);
// Saída: Um número aleatório entre 0 e 1 (ex: 0.789...)
console.log("--------------------");

// 5. Math.floor() → Arredonda para baixo.
let numeroParaFloor = 3.7;
let floorResult = Math.floor(numeroParaFloor);
console.log("Math.floor(3.7):", floorResult);
// Saída: 3

let numeroNegativoFloor = -3.2;
let floorNegativoResult = Math.floor(numeroNegativoFloor);
console.log("Math.floor(-3.2):", floorNegativoResult);
// Saída: -4
console.log("--------------------");

// 6. Math.ceil() → Arredonda para cima.
let numeroParaCeil = 3.2;
let ceilResult = Math.ceil(numeroParaCeil);
console.log("Math.ceil(3.2):", ceilResult);
// Saída: 4

let numeroNegativoCeil = -3.7;
let ceilNegativoResult = Math.ceil(numeroNegativoCeil);
console.log("Math.ceil(-3.7):", ceilNegativoResult);
// Saída: -3
console.log("--------------------");

// 7. Math.round() → Arredonda para o inteiro mais próximo.
let numeroParaRound1 = 3.4;
let roundResult1 = Math.round(numeroParaRound1);
console.log("Math.round(3.4):", roundResult1);
// Saída: 3

let numeroParaRound2 = 3.6;
let roundResult2 = Math.round(numeroParaRound2);
console.log("Math.round(3.6):", roundResult2);
// Saída: 4

let numeroParaRound3 = 3.5;
let roundResult3 = Math.round(numeroParaRound3);
console.log("Math.round(3.5):", roundResult3);
// Saída: 4 (arredonda para cima em caso de empate)
console.log("--------------------");

// 8. Math.max() → Retorna o maior número.
let maxDeVarios = Math.max(10, 5, 20, 15);
console.log("Math.max(10, 5, 20, 15):", maxDeVarios);
// Saída: 20

let maxDeArray = Math.max(...[1, 8, 3]); // Usando spread operator
console.log("Math.max(...[1, 8, 3]):", maxDeArray);
// Saída: 8
console.log("--------------------");

// 9. Math.min() → Retorna o menor número.
let minDeVarios = Math.min(10, 5, 20, 15);
console.log("Math.min(10, 5, 20, 15):", minDeVarios);
// Saída: 5

let minDeArray = Math.min(...[1, 8, 3]); // Usando spread operator
console.log("Math.min(...[1, 8, 3]):", minDeArray);
// Saída: 1
console.log("--------------------");

// 10. Math.abs() → Retorna o valor absoluto.
let absolutoPositivo = Math.abs(5);
console.log("Math.abs(5):", absolutoPositivo);
// Saída: 5

let absolutoNegativo = Math.abs(-7);
console.log("Math.abs(-7):", absolutoNegativo);
// Saída: 7
console.log("--------------------");

// 11. Math.pow() → Potência (ex: Math.pow(2, 3) → 8).
let potencia = Math.pow(2, 3);
console.log("Math.pow(2, 3):", potencia);
// Saída: 8

let outraPotencia = Math.pow(5, 2);
console.log("Math.pow(5, 2):", outraPotencia);
// Saída: 25
console.log("--------------------");

// 12. Math.sqrt() → Raiz quadrada.
let raizQuadrada = Math.sqrt(9);
console.log("Math.sqrt(9):", raizQuadrada);
// Saída: 3

let outraRaizQuadrada = Math.sqrt(16);
console.log("Math.sqrt(16):", outraRaizQuadrada);
// Saída: 4
console.log("--------------------");

// 13. Math.trunc() → Remove a parte decimal.
let truncarPositivo = Math.trunc(3.7);
console.log("Math.trunc(3.7):", truncarPositivo);
// Saída: 3

let truncarNegativo = Math.trunc(-3.2);
console.log("Math.trunc(-3.2):", truncarNegativo);
// Saída: -3
console.log("--------------------");

// 14. Number.isNaN() → Verifica se é NaN (Not-a-Number).
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
// Saída: true

console.log("Number.isNaN(10):", Number.isNaN(10));
// Saída: false

console.log("isNaN('abc' * 2):", isNaN('abc' * 2)); // Global isNaN (comportamento diferente)
// Saída: true
console.log("--------------------");

// 15. Number.isFinite() → Verifica se é um número finito.
console.log("Number.isFinite(10):", Number.isFinite(10));
// Saída: true

console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
// Saída: false

console.log("Number.isFinite(NaN):", Number.isFinite(NaN));
// Saída: false
console.log("--------------------");

// 16. Number.isInteger() → Verifica se é inteiro.
console.log("Number.isInteger(5):", Number.isInteger(5));
// Saída: true

console.log("Number.isInteger(5.0):", Number.isInteger(5.0));
// Saída: true

console.log("Number.isInteger(5.5):", Number.isInteger(5.5));
// Saída: false
console.log("--------------------");

// 17. Number.parseFloat() → Similar a parseFloat().
let parseFloatNumber = Number.parseFloat("3.14xyz");
console.log("Number.parseFloat('3.14xyz'):", parseFloatNumber);
// Saída: 3.14
console.log("--------------------");

// 18. Number.parseInt() → Similar a parseInt().
let parseIntNumber = Number.parseInt("100abc");
console.log("Number.parseInt('100abc'):", parseIntNumber);
// Saída: 100
console.log("--------------------");

// 19. Math.sign() → Retorna o sinal (-1, 0, 1).
console.log("Math.sign(5):", Math.sign(5));
// Saída: 1

console.log("Math.sign(-5):", Math.sign(-5));
// Saída: -1

console.log("Math.sign(0):", Math.sign(0));
// Saída: 0
console.log("--------------------");

// 20. Math.log() → Logaritmo natural (base e).
let logDeE = Math.log(Math.E);
console.log("Math.log(Math.E):", logDeE);
// Saída: 1

let logDe10 = Math.log(10);
console.log("Math.log(10):", logDe10);
// Saída: Um valor aproximado de 2.302...
console.log("--------------------");