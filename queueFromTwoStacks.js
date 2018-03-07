/* 

Implement a queue using two stacks
Required methods are: enqueue, dequeue, size, peek, isEmpty

Stack has been taken from stackPractice
Queue tests have been take from queuePractice


*/


const Stack = function () {
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
};

const Queue = function () {

  let addStack = new Stack();
  let removeStack = new Stack();

  this.enqueue = (val) => {
    addStack.push(val);
  };

  this.dequeue = () => {
    if (removeStack.isEmpty()) {
      if (addStack.isEmpty()) {
        return null;
      }
      this.pushAddStackOntoRemoveStack();
    }
    return removeStack.pop();
  };

  this.peek = () => {
    if (removeStack.isEmpty()) {
      if (addStack.isEmpty()) {
        return null;
      }
      this.pushAddStackOntoRemoveStack();
    }
    return removeStack.peek();
  };

  this.size = () => {
    return addStack.size() + removeStack.size();
  };

  this.isEmpty = () => {
    return this.size() === 0;
  };

  this.pushAddStackOntoRemoveStack = () => {
    while(!addStack.isEmpty()) {
      removeStack.push(addStack.pop());
    }
  };

};

let queue = new Queue();


console.log(`isEmpty should return true if no items are on queue: ${queue.isEmpty()}`);
console.log(`size should return 0 for empty queue: ${queue.size() === 0}`);
console.log(`dequeue should return null if no items are on queue: ${queue.dequeue() === null}`);

queue.enqueue(5);
console.log(`enqueue should add an item to queue, increasing the queue size: ${queue.isEmpty() === false && queue.size() === 1}`);
console.log(`enqueue should add an item to bottom of queue: ${queue.peek() === 5}`);

queue.enqueue(4);
console.log(`peek should return the oldest item from queue: ${queue.peek() === 5}`);
console.log(`peek should not change the queue size: ${queue.size() === 2}`);

console.log(`dequeue should remove and return oldest item from queue: ${queue.dequeue() === 5 && queue.peek() === 4 && queue.isEmpty() === false && queue.size() === 1}`);

console.log(`dequeue on queue with one element should remove and return oldest item from queue, and result in an empty queue: ${queue.dequeue() === 4 && queue.peek() === null && queue.isEmpty() === true && queue.size() === 0}`);

console.log(`dequeue should return null when called after removing all items from a queue: ${queue.dequeue() === null}`);