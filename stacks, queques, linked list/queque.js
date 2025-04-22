// queque - data structure - FIFO - using shift() array method

// class Queque {
//   constructor() {
//     this.queque = [];
//     this.size = 0;
//   }

//   // add to queque method
//   push(value) {
//     this.queque.push(value);
//     this.size++;
//   }

//   // remove from the queque - first element
//   remove() {
//     if (this.size > 0) {
//       this.queque.shift();
//       this.size--;
//     }
//   }

//   // return quque
//   quequeList() {
//     return this.queque;
//   }
// }

// const que1 = new Queque();
// que1.push(1);
// que1.push(2);
// que1.push(5);
// console.log(que1.quequeList());
// que1.remove();
// console.log(que1.quequeList());

// Queque implemention - without shift() - FIFO
class Queque {
  constructor() {
    this.queque = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  // getLength - size of queque - diff between head & tail index
  getLength() {
    return this.tail - this.head;
  }

  // isEmpty - checks if the queque is empty
  isEmpty() {
    return this.getLength === 0;
  }

  // isFull - checks if queque is full
  isFull() {
    return this.getLength() === this.maxSize;
  }

  // enquque - add element to the queque
  enquque(val) {
    if (this.maxSize > 100) {
      return false;
    }
    this.queque[this.tail] = val;
    this.tail++;
  }

  // dequque - removes & returns the first item from the queque
  dequque() {
    const item = this.queque[this.head];
    this.head++;
    console.log(item);
    return item;
  }

  // peel - gives first index items
  peel() {
    return this.queque[this.head];
  }
}

const quque = new Queque();

quque.enquque(3);
quque.enquque(5);
quque.enquque(7);

console.log(quque);

quque.dequque();
console.log(quque.peel());
console.log(quque);
