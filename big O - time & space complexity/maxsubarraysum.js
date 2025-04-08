// Max Sub Array - solution in big O of n^2 quadratic

function maxSubArray1(arr, size) {
  let maxSum = 0;

  for (let i = 0; i <= arr.length - size; i++) {
    let currentSum = 0;

    for (let j = i; j < i + size; j++) {
      currentSum += arr[j];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const arr = [2, 3, 4, 5, 1];
console.log(maxSubArray(arr, 3));

// Max sub array solution - using Sliding Window Technique - big O of n linear time

function maxSubArray(arr, size) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let j = size; j < arr.length; j++) {
    currentSum = currentSum - arr[j - size] + arr[j];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArray([3, 4, 5, 6, 1, 12], 2));

// nested loop - qudratic time
console.time("sub array using nested loops");
maxSubArray1([3, 4, 5, 2, 7, 4, 1, 9, 8, 3, 1, 8, 4, 7, 6], 3);
console.timeEnd("sub array using nested loops"); // 0.049 ms

// sliding window - linear time
console.time("sub array using Slidng Window technique");
maxSubArray([3, 4, 5, 2, 7, 4, 1, 9, 8, 3, 1, 8, 4, 7, 6], 3);
console.timeEnd("sub array using Slidng Window technique"); // 0.009ms
