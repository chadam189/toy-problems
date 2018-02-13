/* 

FIND MEDIAN OF TWO SORTED ARRAYS

https://leetcode.com/problems/median-of-two-sorted-arrays/description/

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

const findMedianSortedArrays = (nums1, nums2) => {
  // merge two arrays into a new array
  let results = [];
  let p1 = 0;
  let p2 = 0;

  // while p1 and p2 are valid pointers
    // add smaller of two values at p1 and p2 to results
    // increment the pointer that was at the smaller value

  // add remainder of other array to results

  // if results has an odd number of elements
    // return value at index ((length + 1) / 2)
  // else, return average of values at the two middle indices
  	// index1 = (length + 1) / 2
  	// index2 = (length - 1) / 2
  	// return (value at index1 + value at index2) / 2

};


const nums1 = [1, 5, 8], nums2 = [2, 6, 13, 13];
const result = 6;

console.log(`Input of ${JSON.stringify(nums1)} and ${JSON.stringify(nums2)} should find the median value, which is ${result}: ${result === findMedianSortedArrays(nums1, nums2)}`);

/* 

SETUP

Strategy: 

1) Merge two sorted arrays into new sorted array (similar to tactic used in merge sort). 

	Use two pointers, one for each array, initialized to start at index 0. Compare values from the arrays at each pointer; add the smaller to the results array and increment that value's pointer. Continue until one pointer goes past the end of its array, then add the remainder of the other array to the results array.

2) Return median value (which is either a single value if the new array is odd, or the average of two values if the array is even).

Big O: O(nums1.length + nums2.length) => more commonly stated as O(n + m)

Input: const nums1 = [1, 5, 8], nums2 = [2, 6, 13, 13];

Transformation: [1, 2, 5, 6, 8, 13, 13] => median index is ((length + 1) / 2) = 4, and value at 4th index is 6

Output: 6

const findMedianSortedArrays = (nums1, nums2) => {
  // merge two arrays into a new array
  let results = [];
  let p1 = 0;
  let p2 = 0;

  // while p1 and p2 are valid pointers
    // add smaller of two values at p1 and p2 to results
    // increment the pointer that was at the smaller value

  // add remainder of other array to results

  // if results has an odd number of elements
    // return value at index ((length + 1) / 2)
  // else, return average of values at the two middle indices
  	// index1 = (length + 1) / 2
  	// index2 = (length - 1) / 2
  	// return (value at index1 + value at index2) / 2

};


*/