// Sorting Algorithm - Bubble Sort - many ways to implement

// implementation 1 - using 2 loops
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const sort = bubbleSort([3, 5, 4, 10, 13, 7]); // O(n2)
console.log("implement 1", sort);

//const sort = bubbleSort([3, 4, 5, 6, 7, 8]); // O(n) - already sorted
// console.log(sort)

// implement 2 - while &  for loop

let swapped = false;
function bubbleSort2(arr) {
  while (!swapped) {
    swapped = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const swapp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = swapp;
        swapped = false;
      }
    }
  }
  return arr;
}

// const sort2 = bubbleSort2([3, 5, 4, 10, 13, 7]); // O(n2)
// console.log("approach 2", sort2);

const sort2 = bubbleSort2([3, 4, 5, 7, 10, 13]); // O(n2)
console.log("approach 2", sort2);
