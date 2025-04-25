// Singlely Linked List data structure implementation

// Node class - use to create nodes with value & pointer in linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// single linked list class - with head & tail nodes
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add method - add new node to linked list
  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  // print all - print out all nodes in linked list
  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current);
      current = current.next;
    }
  }

  // get method - get node data at specific index
  get(index) {
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    console.log(current.data);
    return current.data;
  }

  // insert at - insert new node at specific index in linked list
  insertAt(index, data) {
    if (index === 0) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      const node = new Node(data);
      node.next = current;
      previous.next = node;
    }
  }

  // remove node - at specific index
  removeFrom(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      previous.next = current.next;
    }
  }
}

const linkList = new LinkedList();
linkList.add(1);
linkList.add(2);
linkList.add(3);

linkList.printAll();

linkList.get(2);

linkList.insertAt(1, 7);
linkList.printAll();

linkList.removeFrom(1);
linkList.printAll();

console.log("///////////");
console.log("///////////");

// Reverse String Challenge using LinkedList data structure
function reverseStringLinkedList(str) {
  let linklist = new LinkedList();
  for (let i = str.length - 1; i >= 0; i--) {
    linklist.add(str[i]);
  }

  let reverseStr = "";
  let current = linklist.head;

  while (current !== null) {
    reverseStr += current.data;
    current = current.next;
  }

  return reverseStr;
}

console.log(reverseStringLinkedList("hello"));
console.log(reverseStringLinkedList("uiux"));
console.log(reverseStringLinkedList("design"));

console.log("///////////");
console.log("///////////");

// Working with Pointers in LinkedList - Fast & Slow Pointer Pattern - Not explicitly used like in C/C++

let a = 2;
const b = a;
a = 3;
console.log(b); // 2 , value assingned for primitive data types Vs reference in Array, object data structure

const person = {
  name: " john",
  age: 45,
};
const p = person;
person.name = "Alex";
console.log(p.name); // Alex, refernce pointer to memory allocate for array , object data structure

// Fast & Slow Pointer - using two pointers to traverse through linkedlist at different speed

// Linked List Pointer Challenge - Find Mid value / Mid Node using Fast & Slow pointer pattern

function findMidlle(linklist) {
  let slow = linklist.head;
  let fast = linklist.head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = prev.next;
  }

  if (fast === null) {
    // even number of nodes
    return prev.next.data;
  } else {
    // odd number of nodes
    return slow.data;
  }
}

const linkedlist2 = new LinkedList();
linkedlist2.add(4);
linkedlist2.add(7);
linkedlist2.add(4);
linkedlist2.add(8);
linkedlist2.add(6);
linkedlist2.add(9);

console.log("Mid Value/ Node:", findMidlle(linkedlist2)); // 4
