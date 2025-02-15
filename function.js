// farenheit to celcius converter function challenge

// using regular js function declartion
function getCelscius(f) {
  const temp = ((f - 32) * 5) / 9;
  return `the temp is ${temp} \xB0c `;
}

console.log(getCelscius(45));

// using arrow function expression

const getCelTemp = (f) => ((f - 32) * 5) / 9;

console.log(`the temp is ${getCelTemp(45)} \xB0c `);

// fuction returing object with the max & min value from array

const minMax = (arr) => ({
  maxNumber: Math.max(...arr),
  minNumber: Math.min(...arr),
});

console.log(minMax([1, 3, 5, 6, 7]));

// using regular function declation

function minMaxF(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMaxF([1, 2, 3, 4, 5, 6, 7]));

// IIFE(imediately invoked function)challeng - gives area of rectangle as page load

((l, b) => {
  area = l * b;
  console.log(
    `the area of the rectangle with lenght ${l} & breadth ${b} is ${area}`
  );
})(4, 5);
