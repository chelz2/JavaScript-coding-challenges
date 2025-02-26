function reverseString(str) {
  let reverse = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}

// alternate method ->
// const reverseString = (str) => str.toLowerCase().split("").reverse().join("");

const reverse = reverseString("hello World");
console.log(reverse);
