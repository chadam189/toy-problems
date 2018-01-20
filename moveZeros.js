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
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let j = i + 1;
      while (nums[j] === 0 && j !== nums.length) {
        j++;
      }
      if (j === nums.length) {
        break;
      } else {
        swap (nums, i, j); 
      }
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

Strategy: Iterate through array. If current val equals 0, swap it with next non-zero number. Return when there are no more non-zero numbers to swap with.

Big O: O(n)
Constraints: O(1) space complexity

Input: const nums = [0, 1, 0, 3, 12];

Transformation: 

i = 0: [0, 1, 0, 3, 12] => [1, 0, 0, 3, 12]
i = 1: [1, 0, 0, 3, 12] => [1, 3, 0, 0, 12]
i = 2: [1, 3, 0, 0, 12] => [1, 3, 12, 0, 0]
i = 3: [1, 3, 12, 0, 0] => returns

Output: nums = [1, 3, 12, 0, 0];

const moveZeroes = (nums) => {
  // for each nunmber...
    // if current number is 0
      // find index of next non-zero number
        // if next index is within array, swap those elements
        // else, break (the rest of the array is 0's and we are finsihed)
  // return nums
};

*/