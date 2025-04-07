// Big O of n - linear time complexity

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    i++;
  }

  return sum;
}

const arr1 = [3, 5, 6, 2, 1];
const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);

console.time("sum of arr1 size");
sumArray(arr1);
console.timeEnd("sum of arr1 size");

console.time("sum of arr2 size");
sumArray(arr2);
console.timeEnd("sum of arr2 size");

// dice game - big O of n
