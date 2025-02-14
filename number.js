const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

const multiply = x * y;
const multOutput = `${x} * ${y} = ${multiply}`;

const sub = x - y;
const subOutput = `${x} - ${y} = ${sub}`;

const division = x / y;
const divOutput = `${x} / ${y} = ${division}`;

const remainder = x % y;
const remainderOutput = `${x} % ${y} = ${remainder}`;

console.log(sumOutput);
console.log(subOutput);
console.log(multOutput);
console.log(divOutput);
console.log(remainderOutput);

console.log(Math.random());
