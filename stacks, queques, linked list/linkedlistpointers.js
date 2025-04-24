// Working with Pointers in LinkedList - Fast & Slow Pointer Pattern - Not explicitly used like in C/C++

const a = 2;
const b = a;
a = 3;
console.log(b); // 2 , value assingned for primitive data types Vs reference in Array, object data structure

const person = {
  name: " john",
  age: 45,
};
const p = person;
person.name = "Alex";
console.log(p.name); // Alex, refernce pointer to memory allocate for array , object data structure

// Fast & Slow Pointer - using two pointers to traverse through linkedlist
