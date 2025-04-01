// basic recursion concept example - countdown problem

function countDown(num) {
  //base case
  if (num <= 0) {
    console.log("all done !!!");
    return;
  }

  // recursive case
  console.log(num);
  num = num - 1;
  countDown(num);
}

countDown(10);
