// base exponent power

function power(base, exponent) {
  // base case
  if (exponent === 0) {
    return 1;
  }

  // recursive
  return base * power(base, exponent - 1);
}

console.log(power(2, 5));
