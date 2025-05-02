// Breadth First Traversal algorithm through Tree

// Tree Node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//BFS traversal algorithm - using array - FIFO
function breadthFirstTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [];

  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.data);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}

// BFS traversal - using queue data structure - FIFO
// Queue - FIFO
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

function breadthFirstTraversalQueue(root) {
  if (!root) {
    return [];
  }

  const queue = new Queue();
  const result = [];

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    result.push(current.data);

    if (current.left) {
      queue.enqueue(current.left);
    }

    if (current.right) {
      queue.enqueue(current.right);
    }
  }

  return result; // [a b c d e f]
}

const root = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");

root.name = "GR";
root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

console.log(root);
const result = breadthFirstTraversal(root);
console.log(result); // [a b c d e f ]

console.log("/ / / / / / / / / /");
const result2 = breadthFirstTraversalQueue(root);
console.log("bfs queue result:", result2);
