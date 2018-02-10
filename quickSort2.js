// Quick sort, using recursion, in O(1) space

const recursiveQuickSort = (nums) => {
	if (nums.length < 2) {
		return nums;
	}

	let lesser = [];
	let greater = [];
	let pivot = nums[0];

	for (let i = 1; i < nums.length; i++) {
		// nums[i] < pivot ? lesser.push(nums[i]) : greater.push(nums[i]);
		if (nums[i] < pivot) {
			lesser.push(nums[i]);
		} else {
			greater.push(nums[i]);
		}
	}

	return recursiveQuickSort(lesser).concat(pivot, recursiveQuickSort(greater));
};

let input = [14, 4, 5, 63, 2, 15, 53, 12, 3, 43];
let result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63];

console.log(`it should return a sorted array: ${JSON.stringify(result) === JSON.stringify(recursiveQuickSort(input))}`);

/* 

SETUP

Strategy: 

	Parameter check: if low is undefined, init to 0; if high is undefined, init to array.length - 1

	Assuming low is less than high: 

		Pick element at index low as pivot, and two pointers - store (initialized to low + 1) and compare (initialized to low + 1). Check if element at compare is smaller, if so, swap with store and increment both. Else, if element at compare is larger, increment compare. Stop when compare is at end of array. Finally, swap (store - 1) and pivot to get pivot in the right place.

		We now have pivot in the right place, the sub-array to the left is lesser than pivot, and the sub-array to the right is greater than pivot. Create new variable called partition index.

		Run quicksort recursively on the sub-array to the left of the pivot, and the sub-array to the right of the pivot: 

		quicksort(array, low, partition index - 1)
		quicksort(array, partition index + 1, high)

	Finally, return array.


Big O: Who the hell even knows

Input: let input = [14, 4, 5, 63, 2, 15, 53, 12, 3, 43];

Transformation:

pivot = 14, store = 1, compare = 1
  [14, 4, 5, 63, 2, 15, 53, 12, 3, 43]
  store = 1, compare = 1 => swap => [14, 4, 5, 63, 2, 15, 53, 12, 3, 43] => store = 2, compare = 2
  [14, 4, 5, 63, 2, 15, 53, 12, 3, 43]
  store = 2, compare = 2 => swap => [14, 4, 5, 63, 2, 15, 53, 12, 3, 43] => store = 3, compare = 3
  [14, 4, 5, 63, 2, 15, 53, 12, 3, 43]
  store = 3, compare = 4 => swap => [14, 4, 5, 2, 63, 15, 53, 12, 3, 43] => store = 4, compare = 5
  [14, 4, 5, 2, 63, 15, 53, 12, 3, 43]
  store = 4, compare = 7 => swap => [14, 4, 5, 2, 12, 15, 53, 63, 3, 43] => store  = 5, compare = 8
  [14, 4, 5, 2, 12, 15, 53, 63, 3, 43]
  store = 5, compare = 9 => swap => [14, 4, 5, 2, 12, 3, 53, 63, 15, 43] => store = 6, compare = 10

  done comparing, so we need to swap (store - 1) and pivot to get pivot in the correct spot
  store - 1 = 5, pivot = 0 => swap => [3, 4, 5, 2, 12, 14, 53, 63, 15, 43], partition index = 5

  quicksort(array, 0, partition index - 1 = 4) => quicksort([3, 4, 5, 2, 12])
  quicksort(array, partition index + 1 = 6) => quicksort([53, 63, 15, 43])

  Result of those two = [2, 3, 4, 5, 12], 14 (our original pivot), [15, 43, 53, 63]

Output: let result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63];

const recursiveQuickSort = (nums, low , high) => {
  low = low || 0;
  high = high || nums.length - 1;

  // if low is less than high
    let pivot = nums[low];
    let store = low + 1;
    let compare = low + 1;

    // for each num in substring between store/compare and high
      // if element at compare is lower than pivot
        // swap compare with store
        // increment store
    // swap store - 1 and pivot
    // create new variable called partition index, init to store - 1

    // quicksort left sub-array, low, partitionIndex - 1
    // quicksort right sub-array, partitionIndex + 1, high

  return nums;
};


*/