// function Stack(){
//   var items =[]

//   this.push = function(element){
//     //adiciona um novo item à pilha
//     items.push(element)
//   }
//   this.pop = function(){
//     //remover o item do topo da pilha
//     return items.pop()    
//   }
//   this.peek = function(){
//     //devolve o elemento que está no topo da pilha
//     return items[items.length - 1]
//   }
//   this.isEmpty = function(){
//     //informar se a pilha está vazia ou não
//     return items.length === 0
//   }
//   this.clear = function(){
//     //limp a pilha
//     items = []
//   }
//   this.size = function(){
//     //informar o tamanho da pilha
//     return items.length
//   }

//   this.print = function(){
//     //imprime a pilha no console
//     console.log(items)
//   }
// }

// var pilha = new Stack()
// pilha.push(2)
// pilha.push(4)
// pilha.push(6)
// pilha.push(8)
// pilha.push(10)

// console.log(pilha.peek())
// pilha.print()
// console.log(pilha.isEmpty())

// function dec2Bin(decnumber){
//   var restStack = [],
//   rest,
//   binaryString = ''

//   while(decnumber>0){
//     rest = Math.floor(decnumber%2)
//     restStack.push(rest)
//     decnumber = Math.floor(decnumber/2)
//   }

//   while(restStack.length>0){
//     binaryString+=restStack.pop().toString()
//   }
//   return binaryString
// }

// console.log(dec2Bin(23))

// function baseConverter(decNumber, base){
//   var restStack = [],
//   rest,
//   baseString = '',
//   digits = '0123456789ABCDEF'

//   while(decNumber > 0){
//     rest = Math.floor(decNumber%base)
//     restStack.push(rest)
//     decNumber = Math.floor(decNumber/base)
//   }

//   while(restStack.length>0){
//     baseString += digits[restStack.pop()]
//   }

//   return baseString
// }

// console.log(baseConverter(123,8))

function Queue(){
  var items = []

  this.enqueue = function(elemento){
    //adicion um novo item
    items.push(elemento)
  }

  this.dequeue = function(){
    //remove um item
    return items.shift()
  }

  this.front = function(){
    //retorna o primeiro item
    return items[0]
  }

  this.isEmpty = function(){
    //verifica se a fila está vazia ou não
    return items = []
  }

  this.size = function(){
    //retorn o tamanho da fila
    return items.length
  }

  this.print = function(){
    //imprime a fila no console
    console.log(items.toString())
  }
}

var fila = new Queue()

// fila.enqueue('Carlos')
// fila.enqueue('Ana')
// fila.enqueue('Lucas')
// console.log(fila.front())

// fila.print()

// fila.dequeue()
// fila.print()
// console.log(fila.front())
// fila.dequeue()
// fila.print()

function PriorityQueue() {
  var items = []

  function QueueElement (element, priority) {
      this.element = element
      this.priority = priority
  }

  this.enqueue = function(element, priority) {
      var queueElement = new QueueElement(element, priority)
      var added = false

      for(var i = 0; i < items.length; i++) {
          if(queueElement.priority < items[i].priority) {
              items.splice(i, 0, queueElement)
              added = true
              break
          }
      }
      if(!added) {
          items.push(queueElement)
      }
  }

  this.dequeue = function() {
      return items.shift()
  }

  this.print = function() {
      for(var i = 0; i < items.length; i++) {
          console.log(items[i].element + ' ' + items[i].priority)
      }
  }
}

// var pqueue = new PriorityQueue()
// pqueue.enqueue('Carlos', 3)
// pqueue.enqueue('Ana', 1)
// pqueue.enqueue('Lucas', 1)
// pqueue.print()


function hotPotato(nameList, num) {
  var queue = new Queue()

  for(var i = 0; i < nameList.length; i++) {
      queue.enqueue(nameList[i])
  }

  var eliminated = ''

  while(queue.size() > 1) {
      for(var i = 0; i < num; i++) {
          queue.enqueue(queue.dequeue())
      }
      eliminated = queue.dequeue()
      console.log(eliminated + ' was eliminated from the Hot Potato game')
  }
  return queue.dequeue()
}

var names = ['João', 'José', 'Maria', 'Ana', 'Lucas']
var winner = hotPotato(names, 7)
console.log('The winner is: '+winner)