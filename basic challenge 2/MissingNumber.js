function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  // let actualSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   actualSum += arr[i];
  // }

  //alternate - using reducer
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  console.log(actualSum, expectedSum);
  return expectedSum - actualSum;
}

const arr = [10, 11, 12, 13, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("missing value is: ", findMissingNumber(arr));
