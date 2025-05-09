// Graph data structure implementation - using Adjacency List

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex method - add node as property set to empty list
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  // add edge method - adding edge between vertex nodes - pushing vertex/node to each nodes adjacent list
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // print method - prinsts vertex node & all its connected adjacent node vertexes
  print() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }

  // remove edge method - removing edges between vertexes
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // remove vertex method - removing vertex node from graph
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("CA");
graph.addVertex("LN");
graph.addVertex("NY");
graph.addEdge("CA", "LN");
graph.addEdge("CA", "NY");
graph.addEdge("LN", "NY");
graph.print();

console.log("/  /  /  /  /");
graph.removeEdge("CA", "LN");
graph.print();

console.log("/  /  /  /  /");
graph.removeVertex("LN");
graph.print();
