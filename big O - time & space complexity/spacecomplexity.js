// space complexity - same as Time complexity -
//  big O of constant(1), linear(n), quadratic(n^2), log(n)

// constant space - big O of 1
function add(n1, n2) {
  return n1 + n2;
}

// linear space - big O of n
function arrSize(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

// quadradtic space - big O of n^2
function createMatrix(num) {
  const matrix = [];

  for (let i = 0; i < num; i++) {
    matrix[i] = [];

    for (let j = 0; j < num; j++) {
      matrix[i][j] = i + j;
    }
  }

  return matrix;
}

// logarithmic spcae - big O of log(n) - divide & conquer - recursive function calls
function findPower(base, exponent) {
  //base case
  if (exponent === 1) {
    return 1;
  }
  // divide & conquer - using recursion
  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}

// time vs space complexity - constant time with linear space
function addArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
