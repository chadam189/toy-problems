/* 

SETUP

Strategy: For each element in array, start at beginning and swap current num with next num if next num is smaller. Search through entire array the first time, and if array.length is n, then decrement n after each subsequent pass. Stop when a pass has been performed where no search takes place.

Big O = O(n^2)

Input: const input = [5, 1, 8, 4, 2, 6];

round 0: [5, 1, 8, 4, 2, 6] => [1, 5, 8, 4, 2, 6] => [1, 5, 4, 8, 2, 6] => [1, 5, 4, 2, 8, 6] => [1, 5, 4, 2, 6, 8];

round 1: [1, 5, 4, 2, 6, 8] => [1, 4, 5, 2, 6, 8] => [1, 4, 2, 5, 6, 8]

round 2: [1, 4, 2, 5, 6, 8] => [1, 2, 4, 5, 6, 8]

round 3: [1, 2, 4, 5, 6, 8] => no swaps made, so we return

Output: const result = [1, 2, 4, 5, 6, 8];

const bubbleSort = (nums) => {
	let n = nums.length - 1;
	// for each num...
	  let swapped = false;
	  let j = 0;
	  // while j < n
		  // if j > j + 1, swap
		    // swap numbers
		    // swapped = true;
		  // increment j
    // if swapped is false, return
};

*/

