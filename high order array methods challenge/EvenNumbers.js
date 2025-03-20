// even square sum challenge - return sum of square of even nums in array

function sumOfEvenSquares(arr) {
  const evenArr = arr.filter((num) => num % 2 === 0);
  const evenSqr = evenArr.map((num) => {
    if (num % 2 === 0) {
      return num * 2;
    }
  });
  const sumEvenSqr = evenSqr.reduce((t, i) => {
    return t + i;
  }, 0);

  console.log(sumEvenSqr, evenSqr);
  return sumEvenSqr;
}

//or - chaining high order methods together

function sumEvenSquares(arr) {
  const sumEvenArr = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((t, i) => {
      return t + i;
    }, 0);

  console.log(sumEvenArr);
  return sumEvenArr;
}

sumEvenSquares([66, 7, 3, 34, 4, 3]);
