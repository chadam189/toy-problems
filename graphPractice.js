class Graph {
  constructor (isDigraph = false) {
    this.verticesCount = 0;
    this.isDigraph = isDigraph;
    this.adjacencyList = new Map();
  }

  addVertex(v) {
    if (!this.adjacencyList.has(v)) {
      this.adjacencyList.set(v, []);
      this.verticesCount++;
    }
  }

  addEdge(src, dest) {
    this.adjacencyList.get(src).push(dest);

    if (!this.isDigraph) {
      this.adjacencyList.get(dest).push(src);
    }
  }

  addEdge(src, dest) {
    let srcNeighbors = this.adjacencyList.get(src);

    if (srcNeighbors.indexOf(dest) === -1) {
      this.adjacencyList.get(src).push(dest);
    }

    this.addVertex(dest);

    if (!this.isDigraph) {
      let destNeighbors = this.adjacencyList.get(dest);

      if (destNeighbors.indexOf(src) === -1) {
        this.adjacencyList.get(dest).push(src);
      }
    }
  }

  // remove edge
  // remove vertex

  printGraph() {
    let keysList = [...this.adjacencyList.keys()];

    keysList.forEach(key => console.log(`${key} -> ${this.adjacencyList.get(key)}`));

  }

  dfsIterative(start, cb = console.log) {
    // create stack
    // create visited set

    // add starting node to stack

    // while (stack isn't empty)
      // current node = top item in stack
        // pop that item off stack
      // if current node isn't in visited set
        // run current node through callback
        // add current node to visited set
        // add current node's neighbors to stack

    let stack = [];
    let visited = new Set();

    stack.push(start);

    while(stack.length > 0) {
      let currentNode = stack.pop();
      
      if (!visited.has(currentNode)) {
        cb(currentNode);
        visited.add(currentNode);

        let neighbors = [...this.adjacencyList.get(currentNode)].reverse();

        neighbors.forEach((node) => {
          if (!visited.has(node)) {
            stack.push(node);
          }
        });

      }
    }

  }

  dfsRecursive(root, cb = console.log, visited = new Set()) {
    // if root is not in visited
      // run root thru callback
      // add root to visited set
      // for each of root's neighbors
        // recursively call dfs

    if (!visited.has(root)) {
      cb(root);
      visited.add(root);

      let neighbors = this.adjacencyList.get(root);
      neighbors.forEach(node => this.dfsRecursive(node, cb, visited));
    }
  }

  bfsIterative(start, cb = console.log) {
    // init queue
    // init visited as new Set

    // add start to queue

    // while (queue isn't empty)
      // current node = front item in queue
        // remove front item from queue 
      // if (currentNode is not in visited)
        // run current node thru cb
        // add current node to visited
      // for each neighbor of current node...
        // if this neighbor has not been visited
          // add this neighbor to end of queue

    let queue = [];
    let visited = new Set();

    queue.push(start);

    while(queue.length > 0) {

      let currentNode = queue.shift();

      if (!visited.has(currentNode)) {
        cb(currentNode);
        visited.add(currentNode);
        
        let neighbors = this.adjacencyList.get(currentNode);
        neighbors.forEach((node) => {
          if (!visited.has(node)) {
            queue.push(node);
          }
        });
      }

    }
  }

}

let g = new Graph();

let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

vertices.forEach(vertex => g.addVertex(vertex));

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('C', 'E');
g.addEdge('C', 'F');
g.addEdge('E', 'F');

g.printGraph();


let iAnswer = [];
let rAnswer = [];

let testFunc = (val) => iAnswer.push(val);
g.dfsIterative('A', testFunc);

console.log(`iterative DFS output: ${JSON.stringify(iAnswer)}`);

testFunc = (val) => rAnswer.push(val);
g.dfsRecursive('A', testFunc);

console.log(`recursive DFS output: ${JSON.stringify(rAnswer)}`);
console.log(`iteratve ${iAnswer.toString()} and recursive ${rAnswer.toString()} DFS results are identical: ${iAnswer.toString() === rAnswer.toString()}`);

iAnswer = [];
rAnswer = [];

testFunc = (val) => iAnswer.push(val);

g.bfsIterative('A', testFunc);

console.log(`iterative BFS output: ${JSON.stringify(iAnswer)}`);


const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
};


let g2 = new Graph();

for (let person in network) {
  g2.addVertex(person);
  network[person].forEach((friend) => g2.addEdge(person, friend));
}
  
g2.printGraph();

const hasIntersection = (set1, set2) => {
  for (let val of set1) {
    if (set2.has(val)) {
      return val;
    }
  }
  return null;
};

// let setA = new Set([1, 2, 4]);
// let setB = new Set([3, 4, 5]);
// let setC = new Set([5, 4, 6, 7]);
// let setD = new Set([8, 9]);

// console.log(hasIntersection(setA, setB));
// console.log(hasIntersection(setA, setC));
// console.log(hasIntersection(setA, setD));
// console.log(hasIntersection(setB, setC));

const shortestPath = (graph, s, t) => {
  let sVisited = new Set();
  let tVisited = new Set();

  let sQueue = [];
  sQueue.push(s);
  let tQueue = [];
  tQueue.push(t);

  let sParents = new Map().set(s, null);
  let tParents = new Map().set(t, null);

  while (sQueue.length && tQueue.length) {
    
    let sCurrent = sQueue.pop();
    sVisited.add(sCurrent);
    let sNeighbors = graph.adjacencyList.get(sCurrent);
    sNeighbors.forEach((neighbor) => {
      if (!sVisited.has(neighbor)) {
        sQueue.unshift(neighbor);
        sParents.set(neighbor, sCurrent);
      }
    });

    let tCurrent = tQueue.pop();
    tVisited.add(tCurrent);
    let tNeighbors = graph.adjacencyList.get(tCurrent);
    tNeighbors.forEach((neighbor) => {
      if (!tVisited.has(neighbor)) {
        tQueue.unshift(neighbor);
        tParents.set(neighbor, tCurrent);
      }
    });

    let intersectingNode = hasIntersection(sVisited, tVisited);

    if (intersectingNode) {
      let path1 = [];
      let node1 = intersectingNode;
      while (node1) {
        path1.push(node1);
        node1 = sParents.get(node1);
      }

      let path2 = [];
      let node2 = intersectingNode;
      while (node2) {
        path2.push(node2);
        node2 = tParents.get(node2);
      }

      path1.reverse();
      path1.pop();

      let finalPath = [...path1, ...path2];


      return finalPath;
    }
  }

  return null;
};


let memo = {};

for (let start of g2.adjacencyList.keys()) {
  for (let end of g2.adjacencyList.keys()) {
    if (start !== end) {
      let [name1, name2] = [start, end].sort();
      let key = [name1, name2].join(' & ');
      if (!memo[key]) {
        let result = shortestPath(g2, start, end);
        memo[key] = result;
        if (result) {
          console.log(`${start} & ${end}: [${result.join(' => ')}]`);
        }
      }
    }
  }
}

// console.log(shortestPath(g2, 'Jayden', 'Adam'));


/* 

SHORTEST PATH SETUP

Strategy: 

Perform BFS from each node, keeping track of visited nodes after each iteration as well as the path taken. If we have visited the same node in both searches, we have found a shortest path. Combine the two paths. Else, if we traverse entire graph from both nodes and don't find each other, then there is no path between the two.


let input = node1, node2;

let result = [node1, ..., node2];

const shortestPath = (node1, node2) => {
  
  // init visited for both nodes
  // init queues for both nodes
  // init parent maps for both node paths

  while (queues for both are not empty)

    // node1 = pop q1
    // add node1 children to node1 q
    // add node1 children to node1 visited
    // set node1 as parent of node1 children

    // same for node2

    // compare visited for eqaulity
      // for each val in visit1
        // check if in visit2

    // if so we found a match
      // path 1 = trace back node1 lineage
        // while parent != null
          // add curr node to path 1
      // repeat for path2
      // combine path1.reverse and path2
        // don't dupulicate middle element

    // else 
      // continue

};



*/



















