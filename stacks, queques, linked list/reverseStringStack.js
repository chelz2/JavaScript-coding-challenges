const Stack = require("./stack");

function reverseStringStack(str) {
  const stackStr = new Stack();
  const chars = str.toLowerCase().split("");

  let reveseStr = "";
  for (let i = 0; i < chars.length; i++) {
    stackStr.stack.push(chars[i]);
  }

  // for (let i = 0; i < chars.length; i++) {
  //   reveseStr += stackStr.stack.pop();
  // }

  while (!stackStr.isEmpty()) {
    reveseStr += stackStr.stack.pop();
  }

  return reveseStr;
}

console.log(reverseStringStack("Hello")); // olleh
