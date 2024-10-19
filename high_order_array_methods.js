// High order Array methods - Array.forEach(), Array.filter(), Array.map(), Array.reduce()

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

// return array with objects with name property that with both first & last name as value and for the peaple of 25 & below

const peopleBelow25 = people
  .filter((peeps) => peeps.age <= 25)
  .map((peeps) => ({
    name: peeps.firstName + " " + peeps.lastName,
    email: peeps.email,
  }));

console.log(peopleBelow25);
