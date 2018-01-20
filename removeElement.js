/* 

Remove Element
https://leetcode.com/problems/remove-element/description/

Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

*/ 

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === val) {
      swap(nums, i, nums.length - 1);
      nums.pop();
    }
  }
  return nums.length;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const nums = [3,2,3,2,3,3,4,3], val = 3;
console.log(removeElement(nums, val));

/* 

SETUP

Strategy: Iterate through array, while current val equals target, swap it with last element and remove last element from array.

Big O: O(n)
Constraints: O(1) space complexity

Input: const nums = [3,2,3,2,3,3,4,3], val = 3;

Transformation: 

i = 0: [3,2,3,2,3,3,4,3] => [3,2,3,2,3,3,4] => [4,2,3,2,3,3]
i = 1: [4,2,3,2,3,3] // no change
i = 2: [4,2,3,2,3,3] => [4,2,3,2,3] => [4,2,3,2] => [4,2,2,3] => [4,2,2]

Output: length of current array ([4,2,2]) => 3

const removeElement = (nums, val) => {
  // for each nunmber...
    // while number equals target
      // swap current number with last element in nums
      // remove last element from nums
  // return length of nums
};

*/