// High order Array methods - Array.forEach(), Array.filter(), Array.map(),
// Array.reduce()

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

// return array with objects with name property with both first &
// last name as value & the email property and for the peaple of 25 & below

const peopleBelow25 = people
  .filter((peeps) => peeps.age <= 25)
  .map((peeps) => ({
    name: peeps.firstName + " " + peeps.lastName,
    email: peeps.email,
  }));

console.log(peopleBelow25);

// sum of all positive numbers in array

const numbers = [2, 45, -67, 7];

const positiveNumSum = numbers
  .filter((numbers) => numbers > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveNumSum);

// create a array of capitalize string from array of lowercase string items

const words = ["developer", "coder", "programmer"];

const capitalizeWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);

console.log(capitalizeWords);
