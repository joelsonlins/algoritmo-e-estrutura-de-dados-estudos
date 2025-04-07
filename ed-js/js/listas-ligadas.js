function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    //adiciona um elemento no final da lsita
    var node = new Node(element);
    current;

    if (head-- - null) {
      head = node;
    } else {
      current = head;

      while (current.next) {
        curent = current.next;
      }

      current.next = node;
    }
    length++;
  };

  this.insert = function (position, element) {
    //adiciona um elemento em uma posição específica
  };

  this.removeAt = function (position) {
    //remove o elemento element
  };

  this.indexOf = function (element) {};

  this.isEmpty = function () {
    //retorna se está vazia ou não a instância
  };

  this.size = function () {
    //retona o tamanho da instancia
  };

  this.toString = function () {
    //converte em string
    var current = head,
      string = "";

    while (current) {
      string += current.element + " ";
    }
    return string;
  };

  this.print = function () {
    //imprime no console
  };
}
