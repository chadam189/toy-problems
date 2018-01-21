/* 

Move Zeroes
https://leetcode.com/problems/move-zeroes/description/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/ 

const moveZeroes = (nums) => {
  let lowestZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, i, lowestZeroIndex++);
    }
  }
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(`nums should equal [1, 3, 12, 0, 0]: ${JSON.stringify(nums)}`);

/* 

SETUP

Strategy: Iterate through array with two pointers. If current element equals 0, incrememt only the main pointer. Otherwise, swap the current element with the element at the other pointer, which will be pointing to the lowest-inedexed zero element...and then increment both pointers.

Big O: O(n)
Constraints: O(1) space complexity

Input: const nums = [0, 1, 0, 3, 12];

Transformation: 

i = 0: [0, 1, 0, 3, 12] => lowestZeroIndex= 0
i = 1: [0, 1, 0, 3, 12] => [1, 0, 0, 3, 12], lowestZeroIndex= 1
i = 2: [1, 0, 0, 3, 12] // no change
i = 3: [1, 0, 0, 3, 12] => [1, 3, 0, 0, 12], lowestZeroIndex = 2
i = 3: [1, 3, 0, 0, 12] => returns

Output: nums = [1, 3, 12, 0, 0];

const moveZeroes = (nums) => {
  let lowestZeroIndex = 0;
  // for each nunmber...
    // if current number is not a zero
      // swap current element with the earliest (lowest index) zero
      // increment the lowest zero pointer

};

*/