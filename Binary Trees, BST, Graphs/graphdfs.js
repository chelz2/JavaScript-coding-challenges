// Graph - Depth Fisrt Traversal implementation

// Graph class - using adajacent list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex method - adds node property set to empty list
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
}

// Graph depth first traversal - using stack data structure - LIFO
function graphDepthFirstTraversal(graph, startingVertex) {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  const visited = {};
  const stack = [startingVertex];
  const result = [];

  visited[startingVertex] = true;

  while (stack.length) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }

  return result;
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "G");
g.addEdge("F", "G");

const dfs = graphDepthFirstTraversal(g, "A");
console.log(dfs); // a b c d e f g
