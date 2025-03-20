// high order array method : Map, Filter, Reduce, ForEach

// simple example

const numbers = [44, 7, 2, 1, 99];

// map method - takes in function & returns new array with result of calling func on each elements
const doublenumbers = numbers.map((num) => num * 2);
console.log(doublenumbers);

// filter method - takes in function & returns new arrays with elements that pass the test
const filterNumbers = numbers.filter((num) => num % 2 === 0);
console.log(filterNumbers);

// reduce method - takes in fuction & returns single value
const sumNumbers = numbers.reduce((total, num) => {
  return total + num; // total - accumates , num - initial value = 0
}, 0);

console.log(sumNumbers);

// forEach method - takes in function & returns value for elements
numbers.forEach((num) => console.log(num % 3 === 0));
