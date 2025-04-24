// Palindrome Challenge using Queue & Stack
const Stack = require("./stack");
const Queue = require("./queue");

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
