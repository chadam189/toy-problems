/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

const Tree = function (val) {
  this.val = val;
  this.children = [];
};

Tree.prototype.addChild = (val) => {
  let node = new Tree(val);
  this.children.push(node);
  return node;
};

Tree.prototype.BFSelect = (callback) => {
  let results = [];
  let depth = 0;

  let queue = [this];

  while (queue.length) {
    let currentNode = queue.shift();
    if (callback(currentNode.val, depth)) {
      results.push(currentNode.val);
    }
    currentNode.children.forEach(child => queue.push(child));
    depth++;
  }
  
  return results;
  
  // iterate through tree, BFS-style
    // for each node, input its vale and depth
    // if it passes callback's filter
      // add it to results
  
  // return results

};

let tree = new Tree(1);
let branch2 = tree.addChild(2);
let branch3 = tree.addChild(3);
let leaf4 = branch2.addChild(4);
let leaf5 = branch2.addChild(5);
let leaf6 = branch3.addChild(6);
let leaf7 = branch3.addChild(7);
let leaf8 = leaf7.addChild(8);

let inputFunc = (val, depth) => { return val % 2; };
let expected = [1, 3, 5, 7];

console.log(`it should produce correct output of answers, in order: ${expected.toString() === tree.BFSelect(inputFunc).toString()}`);

inputFunc = (val, depth) => { return depth === 2; };
expected = [4, 5, 6, 7];

console.log(`it should produce correct output of answers, in order: ${expected.toString() === tree.BFSelect(inputFunc).toString()}`);

inputFunc = (val, depth) => { return depth === 3; };
expected = [8];

console.log(`it should produce correct output when searching for depth: ${expected.toString() === tree.BFSelect(inputFunc).toString()}`);





