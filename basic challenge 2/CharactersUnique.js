// function areAllCharactersUnique(str) {
//   const charCount = {};
//   let char;
//   for (let i = 0; i < str.length; i++) {
//     char = str[i];
//     if (charCount[char]) {
//       return false;
//     }
//     charCount[char] = true;
//     console.log(charCount);
//   }

//   return true;
// }

// alternate using array
// function areAllCharactersUnique(str) {
//   const charCount = [];
//   let char;
//   for (let i = 0; i < str.length; i++) {
//     char = str[i];
//     if (charCount.includes(char)) {
//       return false;
//     }
//     charCount.push(char);
//     console.log(charCount);
//   }

//   return true;
// }

//alternate - using Set
function areAllCharactersUnique(str) {
  const charCount = new Set();
  let char;
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (charCount.has(char)) {
      return false;
    }
    charCount.add(char);
    console.log(charCount);
  }

  return true;
}

const allChars = areAllCharactersUnique("Apple");

console.log(allChars);
