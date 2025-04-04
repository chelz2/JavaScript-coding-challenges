// Fibonacci problems

function fibonacci(num) {
  // base case
  if (num < 2) return num;

  // recursive case
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// 1 line using arrow func

const fibonacci = (num) =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);

const fib_num = fibonacci(5);
console.log(fib_num);
