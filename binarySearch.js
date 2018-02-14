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

const binarySearchRecursive = (nums, target) => {
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

	Track three pointers which will correspond to indices in the input array: left (init to 0), middle, and right (init to array length - 1, aka last index in array). 

	While left pointer is less than/equal to the right pointer, perform the following loop:

		1) Recalculate middle pointer to be floor of (left + right) / 2.

		2) If middle element (the element in the arra at middle pointer) equals target, return true.

		3) However, if target is smaller than middle element, search the items to the left of the middle element...this effectively halves the subarray that we are searching. Set right pointer to middle - 1, and repeat the loop.

		4) Similarly, if target is larger than middle element, search the items to the left of the middle element...this effectively halves the subarray that we are searching. Set left pointer to middle + 1, and repeat the loop.

	We should either find the target element in the array and have returned true, or if we exit the loop above, the target element was not in the array, and we should return false.

Recursive Strategy:



Big O: O(log n) - splitting array in half as we search for target - there are only log2(n) times we can split array until we're at subarray of length 1.

Input: let nums = [1, 2, 4, 5, 7, 9, 12, 14, 16], target = 2;

Output: let result = true;

const binarySearchIterative = (nums, target) => {
  // three variables to track:
    // left index of subarray (init to first index in array)
    // right index of subarray (init to last index in array)
    // middle index of subarray (init to (nums.length + 1) / 2)
  // while (left is less than or equal to right)
    // middle = ((left + right) / 2)
    // if element at middle index equals target
      // return true
    // else if target is larger than element at middle index
      // left = middle + 1
    // else if target is smaller than element at middle index
      // right = middle - 1
  // return false
};

const binarySearchRecursive = (nums, target, low, high) => {
  
};


*/