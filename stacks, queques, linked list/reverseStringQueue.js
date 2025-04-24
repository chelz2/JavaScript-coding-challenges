// Reverse String Challenge using Queue data structure

const Queue = require("./queue");

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
