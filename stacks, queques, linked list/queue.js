// queque - data structure - FIFO - using shift() array method

// class Queque {
//   constructor() {
//     this.queque = [];
//     this.size = 0;
//   }

//   // add to queque method
//   push(value) {
//     this.queque.push(value);
//     this.size++;
//   }

//   // remove from the queque - first element
//   remove() {
//     if (this.size > 0) {
//       this.queque.shift();
//       this.size--;
//     }
//   }

//   // return quque
//   quequeList() {
//     return this.queque;
//   }
// }

// const que1 = new Queque();
// que1.push(1);
// que1.push(2);
// que1.push(5);
// console.log(que1.quequeList());
// que1.remove();
// console.log(que1.quequeList());

// Queque implemention - without shift() - FIFO
class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  // getLength - size of queque - diff between head & tail index
  getLength() {
    return this.tail - this.head;
  }

  // isEmpty - checks if the queque is empty
  isEmpty() {
    return this.getLength() === 0;
  }

  // isFull - checks if queque is full
  isFull() {
    return this.getLength() === this.maxSize;
  }

  // enqueue - add element to the queque
  enqueue(val) {
    if (this.maxSize > 100) {
      return false;
    }
    this.queue[this.tail] = val;
    this.tail++;
  }

  // dequeue - removes & returns the first item from the queque
  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    //console.log(item);
    return item;
  }

  // peel - gives first index items
  peel() {
    return this.queue[this.head];
  }
}

const quque = new Queue();

quque.enqueue(3);
quque.enqueue(5);
quque.enqueue(7);

console.log(quque);

quque.dequeue();
console.log(quque.peel());
console.log(quque);

// Reverse String Challenge using Queue data structure
function reverseStringQueque(str) {
  const queue = new Queue();
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  for (let i = 0; i < str.length; i++) {
    reverseStr += queue.dequeue();
  }
  console.log(queue);
  return reverseStr;
}

console.log(reverseStringQueque("Hose")); // esoH

// Palindrome Challenge - using Stack & Queue

class Stack {
  // Stack object initializer
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  // push method - add item on top of the stack
  push(value) {
    if (this.isFull()) {
      return false;
    }

    this.top++;
    this.stack[this.top] = value;

    return true;
  }

  // isFull method - checks if stack is full
  isFull() {
    return this.maxSize === 100 - 1;
  }

  // isEmpty method - checks if stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // pop method - removes item from top of the stack
  pop() {
    if (this.isFull()) {
      return null;
    }

    this.top -= 1;

    return this.stack.pop();
  }

  // peel method - returns the top element of stack
  peep() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[this.top];
  }
}

const isPalindromeQueueStack = (str) => {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const queue = new Queue();
  const stack = new Stack();

  for (let i = 0; i < formattedStr.length; i++) {
    queue.enqueue(formattedStr[i]);
    stack.push(formattedStr[i]);
  }

  while (!queue.isEmpty()) {
    if (queue.dequeue() !== stack.pop()) {
      return false;
    }
  }

  return true;
};

console.log(isPalindromeQueueStack("A man, a plan, a canal, Panama"));
console.log(isPalindromeQueueStack("maLayalaM"));
console.log(isPalindromeQueueStack("323"));
