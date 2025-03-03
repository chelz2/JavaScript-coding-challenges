// function findMissingLetter(arr) {
//   const alpahabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const startIndex = alpahabet.indexOf(arr[0]);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alpahabet[startIndex + i]) {
//       return `missing letter: "${alpahabet[startIndex + i]}"`;
//     }
//   }
//   return "no missing letter";
// }

function findMissingLetter(arr) {
  const start = arr[0].charCodeAt(0);
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return " ";
}

const letter = ["u", "w", "x", "y", "z"];

const missingLetter = findMissingLetter(letter);

console.log(missingLetter);
