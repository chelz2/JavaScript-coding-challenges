// Big - O of 1 constant time efficiency

function constTime(arr, index) {
  return arr[index]; // grad index array element
}

const arr2 = Array.from({ length: 1000 }, (_, index) => index + 1);

console.time("grab index 3 element time");
console.log(constTime(arr2, 3));
console.timeEnd("grab index 3 element time");

console.time("grab index 999 element time");
console.log(constTime(arr2, 99999));
console.timeEnd("grab index 999 element time");
