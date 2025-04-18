// custom Hash Table Map implemention

class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  // hashing key
  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  // print out hash table method
  printTable() {
    console.log(this.storage);
  }

  // set key value pair to hash table method
  set(key, value) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      // collision handling
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if ((this.storage[index][i][0] = key)) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  // get key value method
  get(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  // remove key value pairs from hash table
  remove(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    }
  }

  // get all values in an array method
  getValues() {
    const values = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          values.push(this.storage[i][j][1]);
        }
      }
    }
    return values;
  }

  // has method - checks if key exist - boolean
  has(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          //console.log(this.storage[index][i]);
          return true;
        }
      }
    }
    return false;
  }
}

const hashTable = new HashTable();
hashTable.set("chan", "9898898");

hashTable.printTable();
console.log(hashTable.get("chan"));

// challenge - word instance counter in a string
function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(" ");
  const wordFreq = new HashTable();
  const targeWord = word.toLowerCase();
  let count = 0;

  for (const currentWord of words) {
    if (currentWord === " ") continue;

    if (wordFreq.has(currentWord)) {
      wordFreq.set(currentWord, wordFreq.get(currentWord) + 1);
    } else {
      wordFreq.set(currentWord, 1);
    }

    if (currentWord === targeWord) {
      count = wordFreq.get(currentWord);
    }
  }

  //console.log(wordFreq.printTable());
  return count;
}

console.log(wordInstanceCounter("the apple is shining in the sun", "the"));
