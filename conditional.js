// calculator challenge - function takes 3 args - num1, num2, math operator & return result

// using if-else statement

function calculator(n1, n2, operator) {
  let res;
  if (operator === "+") {
    res = n1 + n2;
  } else if (operator === "-") {
    res = n1 - n2;
  } else if (operator === "*") {
    res = n1 * n2;
  } else if (operator === "/") {
    res = n1 / nn2;
  } else {
    res = "error: invalid operator";
  }
  console.log(res);
  return res;
}

// using switch

function calculation(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "error: invalid operator";
  }
  console.log(result);
  return result;
}

calculator(5, 4, "*");
calculation(5, 4, "*");
