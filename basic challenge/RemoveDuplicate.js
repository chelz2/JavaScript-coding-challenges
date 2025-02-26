// function removeDuplicates(arr) {
//   const distinctArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!distinctArr.includes(arr[i])) {
//       distinctArr.push(arr[i]);
//     }
//     return distinctArr;
//   }
// }

// alternate way
const removeDuplicates = (arr) => Array.from(new Set(arr));

const duplicateArray = ["a", "a", "x", "x", "x", "b", "a", "a", "a", "b"];

console.log(removeDuplicates(duplicateArray));
