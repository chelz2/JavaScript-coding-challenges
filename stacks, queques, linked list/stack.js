// stack - custom built data structure - LIFO

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

const stack1 = new Stack();
console.log(stack1);

stack1.push("e");
stack1.push("0");
stack1.push("f");

console.log(stack1);

console.log(stack1.peep());

stack1.pop();

console.log(stack1);

// challenge - reverse string using stack

function reverseStringStack(str) {
  const stackStr = new Stack();
  const chars = str.toLowerCase().split("");

  let reveseStr = "";
  for (let i = 0; i < chars.length; i++) {
    stackStr.push(chars[i]);
  }

  // for (let i = 0; i < chars.length; i++) {
  //   reveseStr += stackStr.stack.pop();
  // }

  while (!stackStr.isEmpty()) {
    reveseStr += stackStr.pop();
  }
  return reveseStr;
}

console.log(reverseStringStack("Hello"));

// challenge - balanced parenthesis (symmetry in string )

function isBalanced(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.isEmpty()) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.isEmpty();
}

console.log(isBalanced("()()))(("));
