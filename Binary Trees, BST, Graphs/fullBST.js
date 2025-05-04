//Full Binary Search Tree implemention

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST class implementation
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert method - add new nodes to the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  // lookup method - returns node with specific value
  lookup(value) {
    let currentNode = this.root;

    if (!currentNode) {
      return null;
    }

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return null;
  }

  // remove method - removes specific node with spevific value
  remove(value) {}
}

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(5);
bst.insert(2);
bst.insert(3);

console.log(bst);
console.log(bst.lookup(1));
