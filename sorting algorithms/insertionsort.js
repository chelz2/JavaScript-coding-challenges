// Sorting algorithm - Insertion Sort - Divide & Conquer

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    console.log(arr);

    arr[j + 1] = currentElement;
  }

  return arr;
}

const sort = insertionSort([13, 3, 5, 4, 2]);
console.log(sort);
