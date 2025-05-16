// Sorting Algorithm - Quick Sort implementation - divide & conquer

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const rigth = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  console.log("left -", left, "rigth -", rigth, "pivot -", pivot);
  return [...quickSort(left), pivot, ...quickSort(rigth)];
}

const sort = quickSort([7, 3, 2, 6, 5, 1]);
console.log(sort);
