// Graph - Breadth First Traversal implementation - using Queue - FIFO

// Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add node vertex
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  // add edges between vertex
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex1].push(vertex1);
  }

  // print vertex node adjacent nodes
  print() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> this.adjacencyList[vertex].join(", ")`);
    }
  }

  // remove edge between vertex
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}

// Queue - FIFO
class Queue {
  constructor() {
    this.queue = [];
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
    return this.getLength() === 0;
  }

  // isFull - checks if queque is full
  isFull() {
    return this.getLength() === this.maxSize;
  }

  // enqueue - add element to the queque
  enqueue(val) {
    if (this.maxSize > 100) {
      return false;
    }
    this.queue[this.tail] = val;
    this.tail++;
  }

  // dequeue - removes & returns the first item from the queque
  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    //console.log(item);
    return item;
  }

  // peel - gives first index items
  peel() {
    return this.queue[this.head];
  }
}

// BFS traversal implementaion - using Queue - FIFO
function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const result = [];
  const queue = new Queue();

  queue.enqueue(startingVertex);
  visited.add(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);

    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return result;
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("C", "G");

const resultbfs = breadthFirstTraversal(graph, "A");
console.log(resultbfs);

const arr = [];
arr.push(1);
arr.push(1);
arr.push(1);
arr.push(1);

while (arr.length !== 0) {
  console.log("XOXOX");
  arr.pop();
}
