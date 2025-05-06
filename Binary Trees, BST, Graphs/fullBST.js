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
  remove(value) {
    //helper funct
    const removeNode = (node, value) => {
      // if value is less than current node value
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      // if value is less than current node value
      else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // case 1 - node with no child or only one child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        //case2 - node with two child - find smallest node in rigth subtree - replace node value with it (successor)
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        //case 3 - node is the root node - replace node's value with successor value
        node.value = tempNode.left;

        node.right = removeNode(node.right, tempNode.right);
        return node;
      }
    };
    this.root = removeNode(this.root, value); // starting from the root node
  }

  // print tree method
  printTree() {
    const printNode = (node) => {
      if (node === null) {
        return;
      }

      printNode(node.left);
      console.log(node.value);
      printNode(node.right);
    };

    printNode(this.root);
  }
}

const bst = new BinarySearchTree();
bst.insert(2);
bst.insert(5);
bst.insert(1);
bst.insert(3);

bst.remove(1);

console.log(bst);
bst.printTree();

console.log(bst.lookup(1));
