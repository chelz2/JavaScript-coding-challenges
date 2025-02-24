function calculator(n1, n2, operator) {
  //   if (operator === "+") {
  //     return n1 + n2;
  //   } else if (operator === "-") {
  //     return n1 - n2;
  //   } else if (operator === "/") {
  //     return n1 / n2;
  //   } else if (operator === "*") {
  //     return n1 * n2;
  //   } else {
  //     return "invalid operator";
  //   }

  let result;

  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    default:
      throw new Error("Invalid Operator");
  }
  return result;
}

console.log(calculator(3, 3, "fdlkgk"));
