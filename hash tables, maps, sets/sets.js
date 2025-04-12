// set - data structure use to store unique datas of any dtype

// create set - "new" & Set() contructor
const nameSet = new Set(["randeep", "shalini", "supreet", "supreet"]);
console.log(nameSet); // no duplicte values - contains only unique values

// add data - .add() method
nameSet.add("pinky");
console.log(nameSet);

// check for value - .has() method
console.log(nameSet.has("supreet")); // returns boolean

// delete data - .delete() method
nameSet.delete("pinky");
console.log(nameSet);

// size of set - .size property
console.log(nameSet.size);

// get all values - .values() method returns iterator
console.log(nameSet.values());

// loop through set - for of
for (const name of nameSet) {
  console.log(name);
}

// convert set to array - Array from
const nameArr = Array.from(nameSet);
console.log(nameArr);

// convert array to set - new Set()
const nameSets = new Set(nameArr);
console.log(nameSets);

// delete all set data - clear() method
nameSet.clear();
console.log(nameSet);
