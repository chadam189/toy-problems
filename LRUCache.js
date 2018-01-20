const LRUCache = function (capacity) {
  this.cache = [];
  this.hash = {};
  this.capacity = capacity;
};

LRUCache.prototype.set = function (key, value) {
  // if cache is at capacity
  if (this.cache.length === this.capacity) {
    // remove the last item from cache
    const ejectedKey = this.cache.pop();
    // remove key from hash
    delete this.hash[ejectedKey];
    
  }
  // add new key to beginning of cache, and add key/value to hash
  this.cache.unshift(key);
  this.hash[key] = value;
};

LRUCache.prototype.get = function (key) {
  // is key in hash?
  if (!this.hash[key]) {
    // if no, return -1
    return -1;
  } else {
    // if yes, move key to front of cache
    this.cache.splice(this.cache.indexOf(key), 1);
    this.cache.unshift(key);
    // return value from hash for the given key
    return this.hash[key];
  }
};

/* 

https://leetcode.com/problems/lru-cache/description/

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache(2); // 2 is capacity

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

SETUP

Strategy: 

Use array, order items in array so that most recently accessed item is at front. 
When new item is added to cache, eject the item at the end, then add new item to front.
When item is retreived, move it to front of array as it's been the most recently accessed item.


Input: const cache = new LRUCache (2); // capacity of example is 2

Transformations/Outputs: 

cache.set(1, 1); // cache = 1(1)
cache.set(2, 2); // cache = 2(2), 1(1) ... 2 is most recently used and therefore at front
cache.get(1);    // cache = 1(1), 2(2)
cache.set(3, 3); // need to bump something to make room for 3...and 2 is least recently used
                 // cache = 1(1), 2(2) => 1(1) => 3(3), 1(1)
                 // remove 2, then add 3 into the front


const LRUCache = function (capacity) {
  this.cache = [];
  this.hash = {};
  this.capacity = capacity;
};

LRUCache.prototype.set = (key, value) => {
  // if cache is at capacity
    // remove the last item from cache
    // remove key from hash
  // add new key to beginning of cache, and add key/value to hash
};

LRUCache.prototype.get = (key) => {
  // is key in hash?
    // if no, return -1
    // if yes
      // move key to front of cache
      // return value from hash for the given key
};

Big O: set is constant time, get is O(n) due to resorting the array

*/
const cache = new LRUCache (2);

cache.set(1, 1);
cache.set(2, 2);
console.log(cache.get(1));       // returns 1
cache.set(3, 3);                 // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
cache.set(4, 4);                 // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4