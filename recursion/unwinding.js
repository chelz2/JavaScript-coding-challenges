// unwinding - sum of n numbers

function sumUpTo(n) {
  // base case
  if (n === 1) {
    console.log(`sumUpTo(${n}) returns 1`);
    return 1;
  }

  // recursive case
  return n + sumUpTo(n - 1);
}

const sum = sumUpTo(5);

console.log(sum);
