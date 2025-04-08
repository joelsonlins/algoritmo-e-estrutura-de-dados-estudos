let minhaString = "  Olá Mundo!  ";
console.log("String Inicial:", `'${minhaString}'`);
console.log("--------------------");

// 1. split() → Divide a string em um array.
let arrayDaString = minhaString.split(" ");
console.log("split(' '):", arrayDaString);
// Saída: ['', '', 'Olá', 'Mundo!', '', '']

let arrayDaString2 = "maçã,banana,laranja".split(",");
console.log("split(','):", arrayDaString2);
// Saída: ['maçã', 'banana', 'laranja']
console.log("--------------------");

// 2. trim() → Remove espaços extras no início/fim.
let stringTrimmed = minhaString.trim();
console.log("trim():", `'${stringTrimmed}'`);
// Saída: 'Olá Mundo!'
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 3. toUpperCase() → Converte para MAIÚSCULAS.
let stringMaiuscula = minhaString.toUpperCase();
console.log("toUpperCase():", stringMaiuscula);
// Saída: "  OLÁ MUNDO!  "
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 4. toLowerCase() → Converte para minúsculas.
let stringMinuscula = minhaString.toLowerCase();
console.log("toLowerCase():", stringMinuscula);
// Saída: "  olá mundo!  "
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 5. substring() → Extrai parte da string (índices).
let subString1 = minhaString.substring(2, 7);
console.log("substring(2, 7):", `'${subString1}'`);
// Saída: ' Olá'

let subString2 = minhaString.substring(5);
console.log("substring(5):", `'${subString2}'`);
// Saída: ' Mundo!  '
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 6. replace() → Substitui texto por outro.
let stringSubstituida = minhaString.replace("Mundo", "Brasil");
console.log("replace('Mundo', 'Brasil'):", `'${stringSubstituida}'`);
// Saída: '  Olá Brasil!  '

let stringSubstituidaRegex = minhaString.replace(/ /g, "_"); // Substitui todos os espaços
console.log("replace(/ /g, '_'):", `'${stringSubstituidaRegex}'`);
// Saída: '__Olá_Mundo!__'
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 7. includes() → Verifica se contém um texto.
let incluiOla = minhaString.includes("Olá");
console.log("includes('Olá'):", incluiOla);
// Saída: true

let incluiAdeus = minhaString.includes("Adeus");
console.log("includes('Adeus'):", incluiAdeus);
// Saída: false
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 8. startsWith() → Verifica se começa com um texto.
let comecaComEspaco = minhaString.startsWith(" ");
console.log("startsWith(' '):", comecaComEspaco);
// Saída: true

let comecaComOla = minhaString.startsWith("Olá");
console.log("startsWith('Olá'):", comecaComOla);
// Saída: false
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 9. endsWith() → Verifica se termina com um texto.
let terminaComEspaco = minhaString.endsWith(" ");
console.log("endsWith(' '):", terminaComEspaco);
// Saída: true

let terminaComExclamacao = minhaString.endsWith("!");
console.log("endsWith('!'):", terminaComExclamacao);
// Saída: false
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 10. charAt() → Retorna o caractere em uma posição.
let charNaPosicao3 = minhaString.charAt(3);
console.log("charAt(3):", `'${charNaPosicao3}'`);
// Saída: 'O'

let charNaPosicao10 = minhaString.charAt(10);
console.log("charAt(10):", `'${charNaPosicao10}'`);
// Saída: 'd'
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 11. charCodeAt() → Retorna o código Unicode do caractere.
let codigoDoChar3 = minhaString.charCodeAt(3);
console.log("charCodeAt(3):", codigoDoChar3);
// Saída: 79 (Unicode para 'O')

let codigoDoChar0 = minhaString.charCodeAt(0);
console.log("charCodeAt(0):", codigoDoChar0);
// Saída: 32 (Unicode para espaço)
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 12. padStart() → Preenche a string até um tamanho (no início).
let stringPaddedStart = "5".padStart(3, "0");
console.log("'5'.padStart(3, '0'):", `'${stringPaddedStart}'`);
// Saída: '005'

let outraStringPaddedStart = "abc".padStart(6, "*");
console.log("'abc'.padStart(6, '*'):", `'${outraStringPaddedStart}'`);
// Saída: '***abc'
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 13. padEnd() → Preenche a string até um tamanho (no final).
let stringPaddedEnd = "5".padEnd(3, "0");
console.log("'5'.padEnd(3, '0'):", `'${stringPaddedEnd}'`);
// Saída: '500'

let outraStringPaddedEnd = "abc".padEnd(6, "*");
console.log("'abc'.padEnd(6, '*'):", `'${outraStringPaddedEnd}'`);
// Saída: 'abc***'
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 14. repeat() → Repete a string N vezes.
let stringRepetida = "oi".repeat(3);
console.log("'oi'.repeat(3):", `'${stringRepetida}'`);
// Saída: 'oioioi'

let outraStringRepetida = "*".repeat(5);
console.log("'*'.repeat(5):", `'${outraStringRepetida}'`);
// Saída: '*****'
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 15. match() → Encontra correspondências com regex.
let matches = minhaString.match(/[A-Z]/g); // Encontra todas as letras maiúsculas
console.log("match(/[A-Z]/g):", matches);
// Saída: ['O', 'M']

let outroMatch = minhaString.match(/mundo/i); // Encontra "mundo" ignorando a case
console.log("match(/mundo/i):", outroMatch);
// Saída: ['Mundo', index: 6, input: '  Olá Mundo!  ', groups: undefined]
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 16. search() → Retorna o índice de uma regex match.
let indiceDeOla = minhaString.search(/Olá/);
console.log("search(/Olá/):", indiceDeOla);
// Saída: 2

let indiceDeNumero = minhaString.search(/\d/); // Procura por um dígito (não há)
console.log("search(/\\d/):", indiceDeNumero);
// Saída: -1
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 17. localeCompare() → Compara strings (para ordenação).
let comparacao1 = "banana".localeCompare("maçã"); // banana vem depois de maçã
console.log("'banana'.localeCompare('maçã'):", comparacao1);
// Saída: 1 (ou um número positivo dependendo da localidade)

let comparacao2 = "maçã".localeCompare("maçã");
console.log("'maçã'.localeCompare('maçã'):", comparacao2);
// Saída: 0

let comparacao3 = "maçã".localeCompare("banana"); // maçã vem antes de banana
console.log("'maçã'.localeCompare('banana'):", comparacao3);
// Saída: -1 (ou um número negativo dependendo da localidade)
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 18. concat() → Concatena strings (equivalente a +).
let stringConcatenada = minhaString.concat(" Bem vindo!");
console.log("concat(' Bem vindo!'):", `'${stringConcatenada}'`);
// Saída: '  Olá Mundo!   Bem vindo!'

let outraStringConcatenada = "Olá, ".concat("JavaScript!");
console.log("'Olá, '.concat('JavaScript!'):", `'${outraStringConcatenada}'`);
// Saída: 'Olá, JavaScript!'
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 19. slice() → Extrai parte da string (similar a substring).
let slice1 = minhaString.slice(2, 7);
console.log("slice(2, 7):", `'${slice1}'`);
// Saída: ' Olá'

let slice2 = minhaString.slice(-6); // Índices negativos contam do final
console.log("slice(-6):", `'${slice2}'`);
// Saída: 'undo!  '
console.log("String Original:", `'${minhaString}'`);
// Saída: '  Olá Mundo!  '
console.log("--------------------");

// 20. normalize() → Normaliza caracteres Unicode.
let stringNaoNormalizada = "\u00E9"; // 'é' usando um código
let stringNormalizadaNFC = stringNaoNormalizada.normalize("NFC");
let stringNormalizadaNFD = stringNaoNormalizada.normalize("NFD");

console.log("String Não Normalizada:", `'${stringNaoNormalizada}'`);
// Saída: 'é'
console.log("String Normalizada NFC:", `'${stringNormalizadaNFC}'`);
// Saída: 'é'
console.log("String Normalizada NFD:", `'${stringNormalizadaNFD}'`);
// Saída: 'é' (e seguido de um caractere combinador)
console.log("String Não Normalizada === Normalizada NFC:", stringNaoNormalizada === stringNormalizadaNFC);
// Saída: true
console.log("String Não Normalizada === Normalizada NFD:", stringNaoNormalizada === stringNormalizadaNFD);
// Saída: false
console.log("--------------------");