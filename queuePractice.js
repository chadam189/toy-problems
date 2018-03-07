/* 

Queue from CTCI

Features: enqueue, dequeue, peek, isEmpty, size

*/

// implemented using an array

const QueueArray = function () {
  let queue = [];

  this.enqueue = (val) => {
    queue.unshift(val);
  };

  this.dequeue = () => {
    if (this.isEmpty()) {
      return null;
    } else {
      return queue.pop(); 
    }
  };

  this.peek = () => {
    return this.isEmpty() ? null : queue[this.size() - 1];
  };

  this.isEmpty = () => {
    return (this.size() === 0);
  };

  this.size = () => {
    return queue.length;
  };
};

const QueueList = function () {

  let queue = {
    head: null,
    tail: null,
    size: 0
  }

  this.enqueue = (val) => {
    let node = {
      val,
      next: null
    };
    if (this.isEmpty()) {
      queue.head = node;
    } else {
      queue.tail.next = node;
    }
    queue.tail = node;
    queue.size++;
  };

  this.dequeue = () => {
    if (this.isEmpty()) {
      return null;
    } else {
      let firstVal = queue.head.val;
      queue.head = queue.head.next;
      queue.size--;
      if (this.isEmpty()) {
        queue.tail = null;
      }
      return firstVal;
    }
  };

  this.peek = () => {
    return queue.head ? queue.head.val : null;
  };

  this.isEmpty = () => {
    return (queue.size === 0);
  };

  this.size = () => {
    return queue.size;
  };

}


// let queue = new QueueArray();
let queue = new QueueList();

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