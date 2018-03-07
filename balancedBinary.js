/* 

https://www.interviewcake.com/question/javascript/balanced-binary-tree



*/


const BinaryTreeNode = (value) => {
    this.value = value;
    this.left  = null;
    this.right = null;
};

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

let root = new BinaryTreeNode(10);
root.insertLeft(6).insertLeft(4).insertLeft(2);
root.left.insertRight(8);
root.insertRight(15);




/* 

Strategy: 

	Iterate through tree via BFS. Keep track of current depth. When we find a leaf, we'll check one more level, and if the next level has any non-leaf nodes, return false.

Input: tree

	let root = new BinaryTreeNode(10);
	root.insertLeft(6).insertLeft(4).insertLeft(2);
	root.left.insertRight(8);
	root.insertRight(15);

Output: boolean

	let result = false;

const isTreeSuperBalanced = (tree) => {

	let shallowestLeafFound = false;

	let queue = []; 
	// init queue with tree

  while (queue isn't empty) {
  	let children = [];
    // for each item on 
    // if either child is null, we're at a leaf
      // at this point, check child of every remaining item on queue
        // if we see anything besides a null, the tree isn't super-balanced
  }
	
};



*/



