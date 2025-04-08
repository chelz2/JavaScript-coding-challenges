// big O of log(n)

// power of a number using recursion logarithmicly - divide & conquer
function findPower(num, exponent) {
  //base
  if (exponent === 0) {
    return 1;
  }

  //recursion
  if (exponent % 2 === 0) {
    const halfPower = findPower(num, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(num, (exponent - 1) / 2);
    return num * halfPower * halfPower;
  }
}

// power of a mu using recursion
function findPower2(num, exponent) {
  //base
  if (exponent === 0) {
    return 1;
  }
  //recursive
  return num * findPower2(num, exponent - 1);
}

console.time("recursion logarithmicly");
findPower(2, 5000);
console.timeEnd("recursion logarithmicly");

console.time("recursion logarithmicly");
findPower(2, 50000005);
console.timeEnd("recursion logarithmicly");

console.time("recursion without logarithmic");
findPower2(2, 5000);
console.timeEnd("recursion without logarithmic");
