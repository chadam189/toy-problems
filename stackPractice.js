/* 

Stacks from CTCI

Features: pop, push, peek, isEmpty, size

*/

// implemented using an array

const StackArray = function () {
  let stack = [];
  
  this.push = (val) => {
    stack.push(val);
  };

  this.pop = () => {
    if (!this.isEmpty()) {
      return stack.pop();
    } else {
      return null;
    }
  };

  this.isEmpty = () => {
    return (stack.length === 0);
  };

  this.peek = () => {
    return this.size() ? stack[this.size() - 1] : null;
  };

  this.size = () => {
    return stack.length;
  };
}

// implemented using a doubly linked list

const StackList = function () {
  let list = {
    tail: null,
    size: 0
  };

  this.push = (val) => {
    let node = {
      val,
      next: null,
      prev: list.tail
    };
    if (!this.isEmpty()) {
      list.tail.next = node;
    } 
    list.tail = node;
    list.size++;
  };

  this.peek = () => {
    return !this.isEmpty() ? list.tail.val : null;
  };

  this.isEmpty = () => {
    return (list.tail === null && list.size === 0);
  };

  this.pop = () => {
    if (this.isEmpty()) {
      return null;
    } else {
      let topVal = list.tail.val;
      list.tail = list.tail.prev;
      list.size--;
      if (list.tail) {
        list.tail.next = null;
      }
      return topVal;
    }
  };

  this.size = () => {
    return list.size;
  };



};

// let stack = new StackArray();
let stack = new StackList();

console.log(`isEmpty should return true if no items are on stack: ${stack.isEmpty()}`);
console.log(`size should return 0 for empty stack: ${stack.size() === 0}`);
console.log(`pop should return null if no items are on stack: ${stack.pop() === null}`);

stack.push(5);
console.log(`push should add an item to stack, increasing the stack size: ${stack.isEmpty() === false && stack.size() === 1}`);
console.log(`push should add an item to top of stack: ${stack.peek() === 5}`);

stack.push(4);
console.log(`peek should return the most recently added item from stack: ${stack.peek() === 4}`);
console.log(`peek should not change the stack size: ${stack.size() === 2}`);

console.log(`pop should remove and return top item off stack: ${stack.pop() === 4 && stack.peek() === 5 && stack.isEmpty() === false && stack.size() === 1}`);

console.log(`pop on stack with one element should remove and return top item off stack, and result in an empty stack: ${stack.pop() === 5 && stack.peek() === null && stack.isEmpty() === true && stack.size() === 0}`);

console.log(`pop should return null when called after removing all items from a stack: ${stack.pop() === null}`);