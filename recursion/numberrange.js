// array of number range

function numberRange(startNum, endNum) {
  let i = startNum;
  // base case
  if (startNum === endNum) {
    return [startNum];
  }

  //recursive
  number = numberRange(startNum, endNum - 1);
  number.push(endNum);
  return number;
}

console.log(numberRange(1, 5));
