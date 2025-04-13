// two sum - array & target value problem - return array of two element whose sum is equal to target value

function twoSum(arr, sum) {
  const setNum = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = sum - arr[i];

    if (setNum.has(complement)) {
      return [arr.indexOf(complement), i];
    }

    setNum.add(arr[i]);
  }

  return [];
}

const result = twoSum([3, 1, 5, 4], 7);
console.log(result);
