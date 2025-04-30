// Depth First Traversal - traversal algorithm - starting at root - backtracking - using stack

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.rigth = null;
  }
}

// DFS - backtracking along every branch depth implemention - using array as stack
function depthFirstTraversal(root) {
  if (!root) {
    return [];
  }

  const stack = [];
  const result = [];

  stack.push(root);

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.data);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }

    console.log(stack);
  }

  return result; // a b d e c f
}

// const root = new Node("a");
// const nodeB = new Node("b");
// const nodeC = new Node("c");
// const nodeD = new Node("d");
// const nodeE = new Node("e");
// const nodeF = new Node("f");

// root.left = nodeB;
// root.right = nodeC;
// nodeB.left = nodeD;
// nodeB.right = nodeE;
// nodeC.left = nodeF;

const result = depthFirstTraversal();
console.log(result);

//DFS - backtracking - using stack - LIFO
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

function depthFirstTraversalStack(root) {
  if (!root) {
    return [];
  }

  const stack = new Stack();
  const result = [];

  stack.push(root);

  while (!stack.isEmpty()) {
    const current = stack.pop();
    result.push(current.data);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

const root = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

const result2 = depthFirstTraversalStack(root);
console.log(result2); // [a, b, d, e, c, f]
