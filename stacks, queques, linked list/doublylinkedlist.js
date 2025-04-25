// doubly linked list - two pointers in each nodes with datas - both forward & backward - bidirectional linking

// doubly linked list implementation - using constructor function & protoype in JS

//Node function
function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
