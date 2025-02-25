// count no. of occurence of a letter in a given string

// function countOccurrence(str, char) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     //spelling error: length (**NOT lenght)
//     if (word[i] === letter) {
//       count++;
//       console.log(i);
//     }
//   }
//   return count;
// }

// Alternative
const countOccurrence = (str, char) => str.split(char).length - 1;

const result = countOccurrence("Helllo World", "l");

console.log("number of occurrence:", result);
