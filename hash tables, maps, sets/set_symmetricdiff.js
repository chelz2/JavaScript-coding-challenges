function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const num of set1) {
    if (!set2.has(num)) {
      result.push(num);
    }
  }

  for (const num of set2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  console.log(result);
  return result;
}

symmetricDifference([3, 4, 5, 6], [5, 6, 6, 7]);

symmetricDifference([1, 2, 3], [3, 4, 5]);
// Output: [1, 2, 4, 5]

symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]);
// Output: [1, 5]

symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
// Output: []

symmetricDifference([1, 2, 3], [4, 5, 6]);
