// big O of n^2 time complexity - nested loops

function sumArray(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];

    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }

  return [sum1, sum2];
}

console.time("sum array of arr1");
const result1 = sumArray([1, 2, 3]);
console.timeEnd("sum array of arr1");

const arr2 = Array.from({ length: 1000 }, (_, index) => index + 1);
//console.log(arr2);

console.time("sum array of arr2");
const result2 = sumArray(arr2);
console.timeEnd("sum array of arr2");

console.log(result1, result2);
