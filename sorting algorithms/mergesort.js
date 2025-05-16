// Sorting Algorithm - Merge Sort implementation - Divide & Conquer - using helper function

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  console.log("left - ", left);
  const rigth = mergeSort(arr.slice(mid));
  console.log("rigth - ", rigth);

  return merge(left, rigth);
}

// helper - merge function
function merge(left, rigth) {
  const merged = [];
  let leftIndex = 0;
  let rigthIndex = 0;

  while (leftIndex < left.length && rigthIndex < rigth.length) {
    if (left[leftIndex] < rigth[rigthIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(rigth[rigthIndex]);
      rigthIndex++;
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(rigth.slice(rigthIndex));
}

const sort = mergeSort([5, 11, 2, 3, 40, 7, 5, 8]);
console.log(sort);
