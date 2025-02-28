// function arrayIntersection(arr1, arr2) {
//   let intersectArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersectArr.includes(arr1[i])) {
//       intersectArr.push(arr1[i]);
//     }
//   }
//   return intersectArr;
// }

//aternate
function arrayIntersection(arr1, arr2) {
  const setArray1 = new Set(arr1);
  let intersectArr = [];

  for (let num of arr2) {
    if (setArray1.has(num) && !intersectArr.includes(num)) {
      intersectArr.push(num);
    }
  }
  return intersectArr;
}

const arr1 = [4, 5, 4, 5, 2, 2, 2, 2, 4, 3, 6, 7, 7, 7, 7, 7];
const arr2 = [5, 6, 7, 3, 2, 2, 2];

const intersectedArr = arrayIntersection(arr1, arr2);

console.log(intersectedArr);
