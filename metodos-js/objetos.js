let meuObjeto = {
  nome: "João",
  idade: 30,
  cidade: "Maceió"
};
console.log("Objeto Inicial:", meuObjeto);
console.log("--------------------");

// 1. Object.keys() → Retorna um array das chaves.
let chavesDoObjeto = Object.keys(meuObjeto);
console.log("Object.keys(meuObjeto):", chavesDoObjeto);
// Saída: ['nome', 'idade', 'cidade']
console.log("--------------------");

// 2. Object.values() → Retorna um array dos valores.
let valoresDoObjeto = Object.values(meuObjeto);
console.log("Object.values(meuObjeto):", valoresDoObjeto);
// Saída: ['João', 30, 'Maceió']
console.log("--------------------");

// 3. Object.entries() → Retorna [chave, valor] em arrays.
let entradasDoObjeto = Object.entries(meuObjeto);
console.log("Object.entries(meuObjeto):", entradasDoObjeto);
// Saída: [ [ 'nome', 'João' ], [ 'idade', 30 ], [ 'cidade', 'Maceió' ] ]
console.log("--------------------");

// 4. Object.assign() → Copia propriedades entre objetos.
let outroObjeto = { profissao: "Engenheiro" };
let objetoCombinado = Object.assign({}, meuObjeto, outroObjeto);
console.log("Object.assign({}, meuObjeto, outroObjeto):", objetoCombinado);
// Saída: { nome: 'João', idade: 30, cidade: 'Maceió', profissao: 'Engenheiro' }
console.log("Objeto Original (meuObjeto):", meuObjeto);
// Saída: { nome: 'João', idade: 30, cidade: 'Maceió' }
console.log("--------------------");

// 5. Object.freeze() → "Congela" o objeto (não pode ser modificado).
let objetoCongelado = { valor: 10 };
Object.freeze(objetoCongelado);
objetoCongelado.valor = 20; // Tentativa de modificar (falha silenciosamente em strict mode)
console.log("Objeto Congelado:", objetoCongelado);
// Saída: { valor: 10 }
console.log("Object.isFrozen(objetoCongelado):", Object.isFrozen(objetoCongelado));
// Saída: true
console.log("--------------------");

// 6. Object.seal() → Impede adição/remoção de propriedades.
let objetoSelado = { item: "Caneta" };
Object.seal(objetoSelado);
objetoSelado.cor = "Azul"; // Tentativa de adicionar (falha silenciosamente em strict mode)
delete objetoSelado.item; // Tentativa de remover (falha silenciosamente em strict mode)
objetoSelado.item = "Lápis"; // Tentativa de modificar (sucesso)
console.log("Objeto Selado:", objetoSelado);
// Saída: { item: 'Lápis' }
console.log("Object.isSealed(objetoSelado):", Object.isSealed(objetoSelado));
// Saída: true
console.log("--------------------");

// 7. Object.create() → Cria um novo objeto com protótipo definido.
let prototipo = { saudacao: function() { console.log(`Olá, meu nome é ${this.nome}`); } };
let novoObjeto = Object.create(prototipo);
novoObjeto.nome = "Maria";
novoObjeto.saudacao();
// Saída: Olá, meu nome é Maria
console.log("Object.getPrototypeOf(novoObjeto):", Object.getPrototypeOf(novoObjeto));
// Saída: { saudacao: [Function: saudacao] }
console.log("--------------------");

// 8. Object.hasOwnProperty() → Verifica se uma propriedade existe diretamente no objeto.
console.log("meuObjeto.hasOwnProperty('nome'):", meuObjeto.hasOwnProperty('nome'));
// Saída: true
console.log("meuObjeto.hasOwnProperty('toString'):", meuObjeto.hasOwnProperty('toString'));
// Saída: false (toString é herdado do protótipo)
console.log("--------------------");

// 9. Object.defineProperty() → Define uma propriedade com configurações.
let objetoComDefProp = {};
Object.defineProperty(objetoComDefProp, 'mensagem', {
  value: 'Olá!',
  writable: false, // Não pode ser alterado
  enumerable: true, // Aparece em loops
  configurable: false // Não pode ser deletado ou reconfigurado
});
console.log("objetoComDefProp.mensagem:", objetoComDefProp.mensagem);
// Saída: Olá!
objetoComDefProp.mensagem = 'Tchau!'; // Falha silenciosamente (em strict mode)
console.log("objetoComDefProp.mensagem (após tentativa de alterar):", objetoComDefProp.mensagem);
// Saída: Olá!
console.log("--------------------");

// 10. Object.getPrototypeOf() → Retorna o protótipo do objeto.
console.log("Object.getPrototypeOf(meuObjeto):", Object.getPrototypeOf(meuObjeto));
// Saída: {} (o protótipo padrão de objetos literais é Object.prototype)
console.log("--------------------");

// 11. Object.setPrototypeOf() → Altera o protótipo do objeto.
let objetoParaSetProto = {};
let novoPrototipo = { metodo: function() { console.log("Método do protótipo"); } };
Object.setPrototypeOf(objetoParaSetProto, novoPrototipo);
objetoParaSetProto.metodo();
// Saída: Método do protótipo
console.log("Object.getPrototypeOf(objetoParaSetProto):", Object.getPrototypeOf(objetoParaSetProto));
// Saída: { metodo: [Function: metodo] }
console.log("--------------------");

// 12. Object.is() → Comparação estrita (similar a ===).
console.log("Object.is(10, 10):", Object.is(10, 10));
// Saída: true
console.log("Object.is('a', 'a'):", Object.is('a', 'a'));
// Saída: true
console.log("Object.is({}, {}):", Object.is({}, {}));
// Saída: false (objetos diferentes)
console.log("Object.is(+0, -0):", Object.is(+0, -0));
// Saída: false (diferente de === que retorna true)
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));
// Saída: true (diferente de === que retorna false)
console.log("--------------------");

// 13. Object.fromEntries() → Converte [chave, valor] em objeto.
let entradas = [['nome', 'Carlos'], ['idade', 25]];
let objetoDeEntradas = Object.fromEntries(entradas);
console.log("Object.fromEntries(entradas):", objetoDeEntradas);
// Saída: { nome: 'Carlos', idade: 25 }
console.log("--------------------");

// 14. Agrupamento de elementos por critério (substituindo Object.groupBy)
const pessoas = [
  { nome: 'Ana', idade: 28 },
  { nome: 'Bruno', idade: 30 },
  { nome: 'Carla', idade: 28 }
];

// Agrupa as pessoas por idade utilizando Array.prototype.reduce()
const pessoasPorIdade = pessoas.reduce((acc, pessoa) => {
  const { idade } = pessoa;
  if (!acc[idade]) {
    acc[idade] = [];
  }
  acc[idade].push(pessoa);
  return acc;
}, {});

console.log("Agrupadas por idade (reduce):", pessoasPorIdade);
// Saída: { '28': [ { nome: 'Ana', idade: 28 }, { nome: 'Carla', idade: 28 } ], '30': [ { nome: 'Bruno', idade: 30 } ] }

console.log("--------------------");

// 15. Object.preventExtensions() → Impede novas propriedades.
let objetoNaoExtensivel = { valorInicial: 5 };
Object.preventExtensions(objetoNaoExtensivel);
objetoNaoExtensivel.novaPropriedade = 10; // Tentativa de adicionar (falha silenciosamente em strict mode)
console.log("Objeto Não Extensível:", objetoNaoExtensivel);
// Saída: { valorInicial: 5 }
console.log("Object.isExtensible(objetoNaoExtensivel):", Object.isExtensible(objetoNaoExtensivel));
// Saída: false
console.log("--------------------");

// 16. Object.isFrozen() → Verifica se o objeto está "congelado".
let outroObjetoCongelado = { valor: 10 };
console.log("Object.isFrozen(outroObjetoCongelado) (antes freeze):", Object.isFrozen(outroObjetoCongelado));
// Saída: false
Object.freeze(outroObjetoCongelado);
console.log("Object.isFrozen(outroObjetoCongelado) (após freeze):", Object.isFrozen(outroObjetoCongelado));
// Saída: true
console.log("--------------------");

// 17. Object.isSealed() → Verifica se o objeto está "selado".
let outroObjetoSelado = { item: "Livro" };
console.log("Object.isSealed(outroObjetoSelado) (antes seal):", Object.isSealed(outroObjetoSelado));
// Saída: false
Object.seal(outroObjetoSelado);
console.log("Object.isSealed(outroObjetoSelado) (após seal):", Object.isSealed(outroObjetoSelado));
// Saída: true
console.log("--------------------");

// 18. Object.getOwnPropertyNames() → Retorna todas as propriedades (diretas e não enumeráveis).
let objetoComNaoEnum = { chave1: 'valor1' };
Object.defineProperty(objetoComNaoEnum, 'chaveNaoEnum', {
  value: 'valorNaoEnum',
  enumerable: false
});
console.log("Objeto com propriedade não enumerável:", objetoComNaoEnum);
// Saída: { chave1: 'valor1', chaveNaoEnum: 'valorNaoEnum' }
console.log("Object.getOwnPropertyNames(objetoComNaoEnum):", Object.getOwnPropertyNames(objetoComNaoEnum));
// Saída: ['chave1', 'chaveNaoEnum'] (inclui não enumerável)
console.log("Object.keys(objetoComNaoEnum):", Object.keys(objetoComNaoEnum));
// Saída: ['chave1'] (apenas enumeráveis)
console.log("--------------------");

// 19. Object.getOwnPropertyDescriptors() → Retorna descritores de todas as propriedades diretas.
let objetoComDescritores = { propriedadeA: 10, propriedadeB: 'texto' };
let descritores = Object.getOwnPropertyDescriptors(objetoComDescritores);
console.log("Object.getOwnPropertyDescriptors(objetoComDescritores):", descritores);
// Saída (aproximada):
// {
//   propriedadeA: { value: 10, writable: true, enumerable: true, configurable: true },
//   propriedadeB: { value: 'texto', writable: true, enumerable: true, configurable: true }
// }
console.log("--------------------");

// 20. Object.isExtensible() → Verifica se o objeto pode receber novas propriedades.
let objetoExtensivel = {};
console.log("Object.isExtensible(objetoExtensivel) (inicial):", Object.isExtensible(objetoExtensivel));
// Saída: true
Object.preventExtensions(objetoExtensivel);
console.log("Object.isExtensible(objetoExtensivel) (após preventExtensions):", Object.isExtensible(objetoExtensivel));
// Saída: false
console.log("--------------------");