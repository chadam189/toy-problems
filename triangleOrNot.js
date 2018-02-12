function triangleOrNot(a, b, c) {
  return a.map((elem, index, a) => {
     return (
         (a[index] + b[index] > c[index]) && 
         (b[index] + c[index] > a[index]) &&
         (a[index] + c[index] > b[index])
      ) ? 'Yes' : 'No';
  });
}

/* 

SETUP: 

Strategy:

For a triangle to be non-degenerate, it has to be A)

Assume all three arrays will have the same length. Create a results array. Iterate through arrays, comparing the element at index 'i' in each of the three arrays to the others. By checking that each element is smaller than the sum of the other two elements, we can see if the three elements can form a non-degenerate triangle. (To clarify - we will perform three checks for every instance of i.) Assign either 'Yes' or 'No' to index i of the results array depending if the tests are passed.

Big O: We loop through each array once, so linear time - O(n).

Inputs: 

const a = [7, 3, 7];
const b = [2, 10, 4];
const c = [2, 3, 4];

Transformation: 

Length of a is 3, so results will also have 3 elements.

i = 0: 

  a[0] = 7, b[0] = 2, c[0] = 2 => 
  fails test #2 (a[0] is not smaller than b[0] + c[0]) =>
  results[0] = 'No'

i = 1: 

  a[1] = 3, b[1] = 3, c[1] = 3 => 
  fails test #3 (b[1] is not smaller than a[1] + c[1]) =>
  results[1] = 'No'

i = 2: 

  a[2] = 7, b[2] = 4, c[2] = 4 => 
  all three tests pass =>
  results[2] = 'Yes'


Output: const result = ['No', 'No', 'Yes'];

function triangleOrNot(a, b, c) {
  // create new 'results' array
    // for each index in a...
      // if the following 3 expressions return true: 
          // c is smaller than a + b
          // a is smaller than b + c
          // b is smaller than a + c
        // set the value of this index in the results array to 'Yes'
      // else, set value of this inex in results array to 'No'
  // return 'results' array
  
}

*/