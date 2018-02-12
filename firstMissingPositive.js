/* 

FIRST MISSING POSITIVE

https://leetcode.com/problems/first-missing-positive/description/

Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.

*/

const firstMissingPositive = (nums) => {
	// remove all zeroes and negative numbers from the array
  for (let i = 0; i < nums.length; i++) {
    while (i < nums.length && nums[i] < 1) {
      swap(nums, i, nums.length - 1);
      nums.pop();
    }
  }
  
	for (let i = 0; i < nums.length; i++) {
		if (Math.abs(nums[i - 1]) < nums.length) {
			nums[nums[i - 1]] = Math.abs(nums[nums[i - 1]]) * -1;
		}
	}
	
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
      return i + 1;
		}
	}

	return nums.length > 1 ? nums.length : 1;
};

const swap = (array, i, j) => {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

let input = [3, 4, -1, 1];
let result = 2;

console.log(`Input of ${JSON.stringify(input)} should find the first missing positive, which is ${result}: ${result === firstMissingPositive(input)}`);

let input = [1, 2, 0];
let result = 3;

console.log(`Input of ${JSON.stringify(input)} should find the first missing positive, which is ${result}: ${result === firstMissingPositive(input)}`);

/* 

SETUP

Strategy: 

Four steps:

	1) Iterate through array; while current element is zero or negative, swap it with the last element and pop it. We now have a revised array which contains only positive integers.

	2) Iterate through array again; if the absolute value of the current element is also a viable index in the array, make the value at that index negative (if it's not already).

	3) Iterate through array starting at index 1. The first time you come across a positive value, that index represents a positive number that wasn't in the original array. Return that value.

	4) If you complete step 3 then we found all numbers 1 through the length of the array - 1; therefore the first missing positive is the length of the array, so return that number. 

Big O: O(n) - three complete loops in series -> 3n -> O(n) = linear.

Input: const input = [3, 4, -1, 1];

Transformation: 

1) [3, 4, -1, 1] => [3, 4, 1, -1] => [3, 4, 1]

2) [3, 4, 1] => [3, -4, 1]

3) [3, -4, 1] => first non-zero index with a positive number is 2 => return 2

Output: const result = 2;

const firstMissingPositive = (nums) => {
  // for each number...
    // while current number is zero or negative
      // swap with the last element and pop it 
	// for each number...
	  // if absolute value of current number is less than length of array
	    // make the value at that index negative (if it's not already)
	// for each number starting at index 1...
	  // if current number is positive
	    // return that index
	// return length of array
};


*/