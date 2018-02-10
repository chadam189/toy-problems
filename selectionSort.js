const selectionSort = (nums) => {
  let n = nums.length - 1;
	while (n > 0) {
	  let max = 0;
	  for (let i = 1; i <= n; i++) {
      max = (nums[i] > nums[max]) ? i : max;
	  }
	  if (max !== n) {
	  	let temp = nums[max];
	  	nums[max] = nums[n];
	  	nums[n] = temp;
	  }
	  n--;
	}
	return nums;
};

let nums = [4, 1, 8, 9, 2, 6, 3];
let result = [1, 2, 3, 4, 6, 8, 9];

console.log(`it should sort an array of integers: ${JSON.stringify(result) === JSON.stringify(selectionSort(nums))}`);


/* 

SETUP 

Strategy: Iterate through array, find largest element and swap it with the last element. Repeat, searching for 2nd largest element (but ignoring the last element since we know it's the largest), and swapping it for the 2nd to last element in the array. Keep track of a counter that tells where to put the nth largest element - we'll start at the last index in the array, and decrement it each time. Decrementing this counter will allow us to effectively ignore the sorted section of the array at the end. Repeat until n = 0, which means we've sorted the array.

Big O: We search n numbers, then n-1 numbers, ... all the way to searching 1 number. Sum of n to 1 is N*N/2, meaning this leads to ~n^2/2 searches, so it's an O(n^2) algorithm.

Input: let nums = [4, 1, 8, 9, 2, 6, 3];

let n = nums.length - 1 = 6

n = 6: [4, 1, 8, 9, 2, 6, 3] => 9 is largest number, swap it with the element at n => [4, 1, 8, 3, 2, 6, 9]
n = 5: [4, 1, 8, 3, 2, 6, 9] => 8 is 2nd largest number, swap it with the element at n => [4, 1, 6, 3, 2, 8, 9]
n = 4: [4, 1, 6, 3, 2, 8, 9] => 6 is 3rd largest number, swap it with the element at n => [4, 1, 2, 3, 6, 8, 9]
n = 3: [4, 1, 2, 3, 6, 8, 9] => 4 is 4th largest number, swap it with the element at n => [3, 1, 2, 4, 6, 8, 9]
n = 2: [3, 1, 2, 4, 6, 8, 9] => 3 is 5th largest number, swap it with the element at n => [2, 1, 3, 4, 6, 8, 9]
n = 1: [2, 1, 3, 4, 6, 8, 9] => 3 is 5th largest number, swap it with the element at n => [1, 2, 3, 4, 6, 8, 9]
stop when n = 0 => result is [1, 2, 3, 4, 6, 8, 9]

Output: let result = [1, 2, 3, 4, 6, 8, 9];

const selectionSort = (nums) => {
  let n = nums.length - 1;
	// while n > 0
	  let max = 0;
	  // for each num from index 1 to index n
	    // if current number is larger than element at index max
	      // update max with index of largest number
	  // swap elements at index n and index max
	// return nums
};


*/