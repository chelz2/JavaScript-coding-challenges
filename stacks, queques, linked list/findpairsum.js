// Find Pair Sum Challenge
const DoublyLinkedList = require("./doublylinkedlist");
function findPair(arr, targetSum) {
  const doublylinklist = new DoublyLinkedList();

  for (const num of arr) {
    const diff = targetSum - num;
    if (doublylinklist.contains(diff)) {
      console.log(doublylinklist);
      return [diff, num];
    }
    doublylinklist.append(num);
  }

  console.log(doublylinklist);
  return null;
}

console.log(findPair([2, 3, 4], 6));
