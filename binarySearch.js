const binarySearchIterative = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    searchCount++;
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return true;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle - 1;
    }
  }

  return false;
};

let nums = [1, 2, 4, 5, 7, 9, 12, 14, 16]
let target = 2;
let expected = true;
let searchCount = 0;
let expectedSearchCount = 2

console.log(`Input of ${nums} and target of ${target} should return ${expected} with a total comparison count of ${expectedSearchCount}: ${binarySearchIterative(nums, target)} with ${searchCount} search(es)`);

nums = [1, 2, 4, 5, 7, 9, 12, 14, 16]
target = 1;
expected = true;
searchCount = 0;
expectedSearchCount = 3

console.log(`Input of ${nums} and target of ${target} should return ${expected} with a total comparison count of ${expectedSearchCount}: ${binarySearchIterative(nums, target)} with ${searchCount} search(es)`);

nums = [1, 2, 4, 5, 7, 9, 12, 14, 16]
target = 0;
expected = false;
searchCount = 0;
expectedSearchCount = 4

console.log(`Input of ${nums} and target of ${target} should return ${expected} with a total comparison count of ${expectedSearchCount}: ${binarySearchIterative(nums, target)} with ${searchCount} search(es)`);

nums = [1, 2, 4, 5, 7, 9, 12, 14, 16]
target = 17;
expected = false;
searchCount = 0;
expectedSearchCount = 4

console.log(`Input of ${nums} and target of ${target} should return ${expected} with a total comparison count of ${expectedSearchCount}: ${binarySearchIterative(nums, target)} with ${searchCount} search(es)`);

nums = [1, 2, 4, 5, 7, 9, 12, 14, 16]
target = 3;
expected = false;
searchCount = 0;
expectedSearchCount = 4

console.log(`Input of ${nums} and target of ${target} should return ${expected} with a total comparison count of ${expectedSearchCount}: ${binarySearchIterative(nums, target)} with ${searchCount} search(es)`);





/* 

SETUP

Iterative Strategy: 

Start at middle index of the array. If current element equals target, return true. If target is larger than current element, search the right-half of the array; otherwise, if target is smaller than current element, search the left-half of the array. Continue using this method of halfing the section of the array we are searching to locate the target number. Stop searching if we have a sub-array with one element and the element doesn't equal the target. In this case since the target wasn't found, return false;

Big O: O(log n) - splitting array in half as we search for target - there are only log2(n) times we can split array until we're at subarray of length 1.

Input: let nums = [1, 2, 4, 5, 7, 9, 12, 14, 16], target = 2;

Output: let result = true;

const binarySearchIterative = (nums, target) => {
  // three variables to track:
    // left index of subarray (init to first index in array)
    // right index of subarray (init to last index in array)
    // middle index of subarray (init to (nums.length + 1) / 2)
  // while -----
    // if element at middle index equals target
      // return true
    // else if we're searching a subarray of length 1, the target is not in this array
      // return false
    // else if target is larger than element at middle index
      // left = middle + 1
      // middle = ((left + right) / 2)
    // else if target is smaller than element at middle index
      // right = middle - 1
      // middle = ((left + right) / 2)
  // return false
};

const binarySearchRecursive = (nums, target, low, high) => {
  
};


*/