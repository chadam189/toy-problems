

class Graph {
  constructor (verticesCount, isDigraph = false) {
  	this.verticesCount = verticesCount;
  	this.isDigraph = isDigraph;
  	this.adjacencyList = new Map();
  }

  // add vertex
  addVertex(v) {
  	if (!this.adjacencyList.has(v)) {
	  	this.adjacencyList.set(v, []);
  	}
  }

  // add edge 
  addEdge(src, dest) {
  	this.adjacencyList.get(src).push(dest);

  	if (!this.isDigraph) {
  		this.adjacencyList.get(dest).push(src);
  	}
  }

  // remove edge
  // remove vertex

  // print graph
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
		if (!visited.has(root)) {
			cb(root);
			visited.add(root);

			let neighbors = this.adjacencyList.get(root);

			neighbors.forEach(node => this.dfsRecursive(node, cb, visited));
		}
    
		// if root is not in visited
		  // run root thru callback
		  // add root to visited set
		  // for each of root's neighbors
		    // recursively call dfs

  }

  bfsIterative(start, cb = console.log) {
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


  }

}

let g = new Graph(6);

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
// g.bfsIterative('A');
g.bfsIterative('A', testFunc);

console.log(`iterative BFS output: ${JSON.stringify(iAnswer)}`);

// testFunc = (val) => rAnswer.push(val);
// g.dfsRecursive('A', testFunc);

// console.log(`recursive DFS output: ${JSON.stringify(rAnswer)}`);
// console.log(`iteratve ${iAnswer.toString()} and recursive ${rAnswer.toString()} DFS results are identical: ${iAnswer.toString() === rAnswer.toString()}`);
