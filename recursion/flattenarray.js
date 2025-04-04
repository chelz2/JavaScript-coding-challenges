// flatttens nested arrays into single array

function flattenArray(arr) {
  result = [];

  for (item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([2, 3, 4, [5, 6, 7, [4, 3, 2]]]));
