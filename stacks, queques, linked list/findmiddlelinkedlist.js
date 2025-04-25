// Linked List Pointer Challenge - Find Mid value / Mid Node using Fast & Slow pointer pattern
const LinkedList = require("./singlelylinkedlist");

function findMidlle(linklist) {
  let slow = linklist.head;
  let fast = linklist.head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = prev.next;
  }

  if (fast === null) {
    // even number of nodes
    return prev.next.data;
  } else {
    // odd number of nodes
    return slow.data;
  }
}

const linkedlist2 = new LinkedList();
linkedlist2.add(4);
linkedlist2.add(7);
linkedlist2.add(4);
linkedlist2.add(8);
linkedlist2.add(6);

console.log("Mid Value/ Node:", findMidlle(linkedlist2)); // 4
