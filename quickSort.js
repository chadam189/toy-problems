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

let input = [2, 4, 5, 63, 14, 15, 53, 12, 3, 43];
let result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63];

console.log(`it should return a sorted array: ${JSON.stringify(result) === JSON.stringify(recursiveQuickSort(input))}`);

/* 

SETUP

Strategy: If array size is 0 or 1, return input array. Else, pick first element as pivot. Make two arrays, lesser and greater, and iterate through input array. If current nunmber is less than pivot, put it into lesser; if it's larger than pivot, put it into greater. Recursively run quicksort on lesser, and concat the results with pivot and the results of quicksort on greater (also called recursively), which looks like this: 

   [quicksort results of lesser array, pivot, quicksort results of greater array]

Big O: Who the hell even knows

Input: let input = [2, 4, 5, 63, 14, 15, 53, 12, 3, 43];

pivot = 2, lesser = [], greater = [4, 5, 63, 14, 15, 53, 12, 3, 43]

result = [2].concat(quicsort(greater)) => 
  pivot = 4, lesser = [3], greater = [5, 63, 14, 15, 53, 12, 43] => 
  result = [3, 4].concat(quicksort(greater)) =>
    pivot = 5, lesser = [], greater = [63, 14, 15, 53, 12, 43] => 
    result = [5].concat(quicksort(greater)) =>
      pivot = 63, lesser = [14, 15, 53, 12, 43], greater = [] =>
      result = quicksort(lesser).concat[63] => 
        pivot = 14, lesser = [12], greater = [15, 53, 43] => 
        result => [12, 14].concat(quicksort(greater)) => 
          pivot = 15, lesser = [], greater= [53, 43] => 
          result = [15].concat(quicksort(greater)) => 
            pivot = 53, lesser = [43], greater = [] => 
            result = [43, 53]

            we have reached bottom of recursion thank fucking god

          result = [15, 43, 53]
        result = [12, 14, 15, 43, 53]
      result = [12, 14, 15, 43, 53, 63]
    result = [5, 12, 14, 15, 43, 53, 63]
  result = [3, 4, 5, 12, 14, 15, 43, 53, 63]
result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63]


Output: let result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63];

const recursiveQuickSort = (nums) => {
	// if nums has zero or 1 element
	  // return nums
	let lesser = [];
	let greater = [];
	let pivot = nums[0];
	// for each number...
	  // if number is less than pivot
	    // push result onto lesser
	  // else
	    // push result onto greater
	// return concated array of: quicksort(lesser), pivot, quicksort(greater)
};


*/