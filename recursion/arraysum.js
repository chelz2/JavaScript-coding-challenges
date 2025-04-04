// sum of all the num in arrays recursively

function arraySum(arr) {
  // base case
  if (arr.length === 0) {
    return 0;
  }

  // recursive case
  return arr[0] + arraySum(arr.slice(1));
}

console.log(arraySum([1, 2, 3, 4, 5]));
