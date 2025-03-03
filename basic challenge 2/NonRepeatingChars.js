// function findFirstNonRepeatingCharacter(str) {
//   const charCount = {};
//   let char;
//   for (i = 0; i < str.length; i++) {
//     char = str[i];
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   console.log(charCount);
//   for (const char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }

function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();
  let char;
  for (const char of str) {
    charCount.set(char, (charCount[char] || 0) + 1);
  }
  console.log(charCount);
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }
  return null;
}

const w = findFirstNonRepeatingCharacter("aappLe");
console.log(w);
