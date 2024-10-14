// challenge
const arr = [1, 2, 3, 4, 5];

// add new item
arr.push(6);

// add new item on front
arr.unshift(0);

// reversing the order in array
arr.reverse();

console.log(arr);

// challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// remove 5 from arr2
arr2.shift();

// concat items in two array
const arr_concat1 = arr1.concat(arr2);
console.log(arr_concat1);

// concat using spread operator
const arr_concat2 = [...arr1, ...arr2];
console.log(arr_concat2);
