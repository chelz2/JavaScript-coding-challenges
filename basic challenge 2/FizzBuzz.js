function fizzBuzzArray(num) {
  let array = [];
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("fizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }

  return array;
}

const arrayFizzBuzz = fizzBuzzArray(30);

console.log(arrayFizzBuzz);
