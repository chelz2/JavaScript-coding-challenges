// Graph representation - using Adjacency Matrix & Adjacency List

// Adjacency Matrix - 2D array with rows & columns representing vertices & boolean values 0 or 1 indicating edges between them
const AdjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

AdjacencyMatrix[1][3]; // vertex node 1 & 3 is coonected or not - 1 or 0

// Adjacency list - object with key as vertex having linklist with all connected vertex
const AdjacencyList = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2, 4, 5],
  4: [1, 2, 3, 5],
  5: [3, 4],
  name: "ravi",
};

AdjacencyList[1]; // list of all vertex connected to vertex 1
