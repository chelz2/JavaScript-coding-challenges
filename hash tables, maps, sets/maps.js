//built in Map - creating Maps

const nameMaps = new Map([
  [1, "john"],
  [2, "Sam"],
  [3, "Danny"],
]);

console.log(nameMaps);

// map2 - with different key types - diff object Vs Map

const myFunc = () => {};
const myObj = {};

const map2 = new Map([
  [1, "johny"],
  ["johus", 4],
  [true, [true]],
  [false, "false"],
  [myFunc, "empty func"],
  [myObj, "empty obj"],
]);

console.log(map2);

// map methods - get, set, has, delete, clear, size(map property)

// get method - retive value of key
console.log(nameMaps.get(2));
console.log(map2.get(myFunc));

// set method - set/update value / data to key or add new key value / data
console.log(nameMaps.set(1, "Johhny"));
console.log(nameMaps.set(5, "Joseph"));

// has method - returns boolean - checks if key exist
console.log(nameMaps.has(4));

// delete method - deletes key-value / data from map
nameMaps.delete(1);
console.log(nameMaps);

// size property - returns size / no. of key value pairs of the map
console.log(nameMaps.size);

// Map iteration / looping - for of loop, forEach
for (const [key, val] of map2) {
  console.log(key, val);
}

nameMaps.forEach((val, key) => {
  console.log(key, val);
});

// clear method - clears the map
nameMaps.clear();
console.log(nameMaps);
