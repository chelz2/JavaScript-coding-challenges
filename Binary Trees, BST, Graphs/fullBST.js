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
    //helper function
    const removeNode = (node, value) => {
      // if current node is null
      if (node === null) {
        return null;
      }
      // if value is less than current node value
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      // if value is more than current node value
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
        node.value = tempNode.value;

        node.right = removeNode(node.right, tempNode.value);
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
bst.insert(10);
bst.insert(4);

console.log(bst);
bst.printTree();

bst.remove(2);
console.log(bst);

console.log(bst.lookup(5));

// Validating BST - check roots & all subtree nodes

function isValidBST(root, min = null, max = null) {
  console.log("range", min, max);

  if (!root) {
    return true;
  }

  if (
    (min !== null && root.value <= min) ||
    (max !== null && root.value >= max)
  ) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}

const root = new Node(8);
const node4 = new Node(4); // left
const node10 = new Node(10); // right
const node2 = new Node(2); // left
const node6 = new Node(6); // right

root.left = node4;
root.right = node10;
node4.left = node2;
node4.right = node6;

console.log(isValidBST(root));
