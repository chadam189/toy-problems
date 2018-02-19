/* 

Build function to flatten an array

*/

const flatten = (arr, shallow = false) => {
	let results = [];

	arr.forEach((elem) => {
		if (Array.isArray(elem)) {
			if (shallow) {
				elem.forEach(val => results.push(val));
			} else {
				results = results.concat(flatten(elem));
			}
		} else {
			results.push(elem);
		}
	});
	
	return results;
};

let input = [1, 2, [3, 4], 5, [6, [7, 8], 9], 10];
let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`it should flatten nested arrays: ${JSON.stringify(flatten(input)) === JSON.stringify(result)}`);

input = [1, 2, [3, 4], 5, [6, [7, 8], 9], 10];
result = [1, 2, 3, 4, 5, 6, [7, 8], 9, 10];

console.log(`it should flatten nested arrays one level if shallow option is used: ${JSON.stringify(flatten(input, true)) === JSON.stringify(result)}`);

input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`it should return identical array if input is flat: ${JSON.stringify(flatten(input)) === JSON.stringify(result)}`);

input = [];
result = [];

console.log(`it should return empty array if input is empty: ${JSON.stringify(flatten(input)) === JSON.stringify(result)}`);

input = [[[]]];
result = [];

console.log(`it should return empty flattened array if input is nested and empty: ${JSON.stringify(flatten(input)) === JSON.stringify(result)}`);


/* 

SETUP: 

Strategy: 

Create results array. Iterate through input array, adding elements to results array if element is a number/string or primitive data type. If element is an array, recursively call function, and concat the output to the results array.

Big O: linear => O(n), space => O(n)

Input: let input = [1, 2, [3, 4], 5, [6, [7, 8], 9]], 10];

Output: let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const flatten = (arr) => {
	let results = [];

	// for each element in input...
	  // if element is array
	    // recursively call flatten, and concat output to results
    // else, push element onto results
	
	// return results
};




*/