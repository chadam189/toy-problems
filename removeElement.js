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
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  console.log(JSON.stringify(nums));
  return nums.length;
};

const nums = [3,2,2,3], val = 3;
console.log(removeElement(nums, val));

/* 

SETUP

Strategy: Iterate through array. If array[i] equals target, splice it. At end, return 

Big O: O(n^2) in worst case

Input: const nums = [3,2,2,3], val = 3;
Constraints: O(1) space complexity

Transformation: 

[3,2,2,3] => [2,2,3]
[2,2,3] // no change
[2,2,3] // no change
[2,2,3] => [2,2]

Output: length of current array ([2,2]) => 2

const removeElement = (nums, val) => {
  // for each nunmber...
    // if number equals target
      // splice current number from nums
  // return nums length
};

*/