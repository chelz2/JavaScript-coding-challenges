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

// append - prototype method - add node at end of ldoubly linked list
DoublyLinkedList.prototype.append = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
};

// printAll - prototype method - prints out all the data in doubly linked list
DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

// prepend - prototype method - adds the new node at the beginning of the doubly linked list
DoublyLinkedList.prototype.prepend = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  this.length++;
};

// insert - prototype method - insert new node at specific index
DoublyLinkedList.prototype.insert = function (index, data) {
  if (index < 0 || index > this.length) {
    return null;
  }

  if (index === 0) {
    return this.prepend(data);
  }

  if (index === this.length) {
    return this.append(data);
  }

  const newNode = new Node(data);
  let currentNode = this.head;

  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  console.log(currentNode.data, "curr Node");

  newNode.next = currentNode.next;
  newNode.prev = currentNode;
  currentNode.next.prev = newNode;
  currentNode.next = newNode;

  this.length++;
};

// get - protoype method - get node at specific index
DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) {
    return null;
  }

  let currentNode = this.head;
  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

// remove - prototype method - remove specific node from doubly linkedlist
DoublyLinkedList.prototype.remove = function (data) {
  if (!this.head) return;

  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.data === data) {
      if (currentNode === this.head) {
        this.head = currentNode.next;
        if (this.head) {
          this.head.prev = null;
        }
      } else if (currentNode === this.tail) {
        this.tail = currentNode.prev;
        this.tail.next = null;
      } else {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      }
      this.length--;
      return true;
    }

    currentNode = currentNode.next;
  }

  return false;
};

// contains - protoype method - checks if nodes contains specific data
DoublyLinkedList.prototype.contains = function (data) {
  // Set the current node to the head
  let current = this.head;

  // Iterate through the list
  while (current) {
    // If the data of the current node is equal to the data we are looking for, return true
    if (current.data === data) {
      return true;
    }
    current = current.next;
  }

  return false;
};

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend("Hello");
list.insert(2, "World");

console.log(list);
list.printAll();

console.log("//////////////////////////////");

list.remove("Hello");
list.printAll();

// Find Pair Sum Challenge
function findPair(arr, targetSum) {
  const doublylinklist = new DoublyLinkedList();

  for (const num of arr) {
    const diff = targetSum - num;
    if (doublylinklist.contains(diff)) {
      console.log(doublylinklist);
      return [diff, num];
    }
    doublylinklist.append(num);
  }

  console.log(doublylinklist);
  return null;
}

console.log(findPair([2, 3, 4], 6));
