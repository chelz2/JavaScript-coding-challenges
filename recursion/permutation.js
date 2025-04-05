// permutation using loops & recursion combination

function permutation(str) {
  let result = [];
  // base case
  if (str === "") {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfChar = str.slice(0, i) + str.slice(i + 1);
    const subPermutation = permutation(restOfChar);

    for (let j = 0; j < subPermutation.length; j++) {
      result.push(firstChar + subPermutation[j]);
    }
  }

  return result;
}

console.log(permutation("car")); // -> [ 'car', 'cra', 'acr', 'arc', 'rca', 'rac' ]
