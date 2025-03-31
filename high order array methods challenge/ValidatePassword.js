function validatePassword(str) {
  const isLengthValid = str.length >= 8;

  const hasUpperCase = str
    .split("")
    .some((ele) => ele === ele.toUpperCase() && ele !== ele.toLowerCase());

  const hasLowerCase = str
    .split("")
    .some((ele) => ele === ele.toLowerCase() && ele !== ele.toUpperCase());

  return isLengthValid && hasLowerCase && hasUpperCase;
}

const validTest = validatePassword("fgfggfdgdFgg2");

console.log(validTest);
