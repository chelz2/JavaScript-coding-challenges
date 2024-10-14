// capitalize "developer" to "Developer"

const myString = "developer";

let myNewString;

myNewString = myString[0].toUpperCase() + myString.slice(1);

console.log(myNewString);
