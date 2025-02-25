// function findMaxNumber(numberArray) {
//    let number = 0;
//   for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] > number) {
//       number = numberArray[i];
//     }
//   }
//   return number;
// }

// Alternate way
function findMaxNumber(numArr) {
  return Math.max(...numArr);
}

const num = findMaxNumber([33, 76, 103, 34, 95]);
console.log("Max number is:", num);
