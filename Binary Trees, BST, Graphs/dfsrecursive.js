// DFS traversal implementation using recursion

// Node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.rigth = null;
  }
}

// Recursive DFS traversal
function recDepthFirstTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node) {
      result.push(node.data);
      traverse(node.left);
      traverse(node.rigth);
    }
  }

  traverse(root);
  return result;
}

const root = new Node("a");
root.left = new Node("b");
root.rigth = new Node("c");
root.left.left = new Node("d");
root.left.rigth = new Node("e");
root.rigth.rigth = new Node("f");

const result = recDepthFirstTraversal(root);
console.log(result); // [a b d e c f]
