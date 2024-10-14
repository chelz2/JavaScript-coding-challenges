// create array ofjs object literal
const library = [
  {
    title: "book1",
    author: "Author1",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "book2",
    author: "Author2",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "book13",
    author: "Author3",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// update object property key value for read & reading using dot notation

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;

// console.log(library);

// destructure the js object property & rename varaible to firstbook
// for title property

const { title: firstBook } = library[0];

console.log(firstBook);
// console.log(library);

// turn Js object into JSON string

const library2 = JSON.stringify(library);
console.log(library2);

// turn JSON string back to JS object literal

const library3 = JSON.parse(library2);

console.log(library3);
