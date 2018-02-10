


let input = [14, 4, 5, 63, 2, 15, 53, 12, 3, 43];
let result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63];

console.log(`it should return a sorted array: ${JSON.stringify(result) === JSON.stringify(mergeSort(input))}`);

console.log(`results: ${JSON.stringify(mergeSort(input))}`);


/* 

SETUP

Strategy: 

Merge sort main function: 

If array is of size 1 or zero, return it. Otherwise, split array into two equaly sized arrays (or if array size is odd, into (n-1)/2 and (n+1)/2 sized arrays). Merge sort each of these arrays recursively, then merge them. (The "merge" helper is what actually does the sorting.)

Merge helper function:

Assumes the two arrays are sorted. We'll need one pointer for each array, starting at first element, and a results array. Compare the two elements at the pointers; push the smaller element onto the results array, and increment that pointer. Repeat until one of the arrays has been traversed (aka its pointer has moved past the last index in that array), then push the remaining elements of the other array onto results. Return the results array.

Input: let input = [14, 4, 5, 63, 2, 15, 53, 12, 3, 43];

Transformation: 

[14, 4, 5, 63, 2, 15, 53, 12, 3, 43] => [14, 4, 5, 63, 2] and [15, 53, 12, 3, 43]
	[14, 4, 5, 63, 2] => [14, 4, 5] and [63, 2]
		[14, 4, 5] => [14, 4] and [5]
			[14, 4] => [14] and [4] => return and merge! => [4, 14]
		[4, 14] and [5] => return and merge! => [4, 5, 14]
		[63, 2] => [63] and [2] => return and merge! => [2, 63]
	[4, 5, 14] and [2, 63] => return and merge! => [2, 4, 5, 14, 63]

	At this point the left half of the initial input array has been sorted; we repeat the above for the right half, which will sort [15, 53, 12, 3, 43] into [3, 12, 15, 43, 53]

[2, 4, 5, 14, 63] and [3, 12, 15, 43, 53] => merge!

pointerA = 0, pointerB = 0, [2, 4, 5, 14, 63] and [3, 12, 15, 43, 53]

results = [2], pointerA = 1
results = [2, 3], pointerB = 1
results = [2, 3, 4], pointerA = 2
results = [2, 3, 4, 5], pointerA = 3
results = [2, 3, 4, 5, 12], pointerB = 2
results = [2, 3, 4, 5, 12, 14], pointerA = 4
results = [2, 3, 4, 5, 12, 14, 15], pointerB = 3
results = [2, 3, 4, 5, 12, 14, 15, 43], pointerB = 4
results = [2, 3, 4, 5, 12, 14, 15, 43, 53], pointerB = 5 => pointerB is equal to its array's length
we now add the rest of the other array onto results, which in this case is only 63
results = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63]

We return this array, and we're done.


Output: let result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63];

const mergeSort = (input) => {
	// if array length < 2
	  // return
	// find middle index (length / 2)
	let middle = input.length / 2;
	let left = [...input.slice(0, middle)];
	let right = [...input.slice(middle, input.length - 1)];

	// sort both of these arrays, merge them, and return them
};

const merge = (arr1, arr2) => {
	const results = [];
	let pointer1 = 0;
	let pointer2 = 0;

	// while both pointer1 and pointer2 are "in bounds"
	  // compare elements at arr1[pointer1] and arr2[pointer2]
	  // push smaller element into results
	  // increment pointer of smaller element
	  // if incremented pointer is "out of bounds"
	    // push remaining elements in other array onto results

	// return results
};


*/