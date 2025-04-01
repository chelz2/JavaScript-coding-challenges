function reverseString(str) {
  const arr = str.split();

  // base case
  if (str.length === 0) {
    return "";
  }

  // recursive case
  return reverseString(str.substring(1)) + str[0];
}

const reverse = reverseString("kelly");

console.log(reverse);
