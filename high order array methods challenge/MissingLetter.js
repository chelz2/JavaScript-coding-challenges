function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  const missigCharCode = arr
    .slice(1)
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });

  //console.log(missigCharCode);
  return missigCharCode ? String.fromCharCode(missigCharCode - 1) : "";
}

function findMissingLetter2(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) return false;
    const prevCharCode = arr[index - 1].charCodeAt(0);
    const currCharCode = char.charCodeAt(0);
    return currCharCode - prevCharCode > 1;
  })[0];

  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : "";
}

function findMissingLetter3(arr) {
  let start = arr[0].charCodeAt(0);
  const missigCharCode = arr.reduce((missing, char) => {
    const current = char.charCodeAt(0);
    if (current - start > 1 && missing === null) {
      missing = start + 1;
    }
    start = current;
    return missing;
  }, null);
  return missigCharCode ? String.fromCharCode(missigCharCode) : " ";
}

console.log(findMissingLetter3(["a", "b", "c", "e"]));
