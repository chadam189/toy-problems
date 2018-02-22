/* 

Distribute Candies:

https://leetcode.com/problems/distribute-candies/description/

Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.

Example 1:

Input: candies = [1,1,2,2,3,3]
Output: 3

Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
The sister has three different kinds of candies. 

Example 2:

Input: candies = [1,1,2,3]
Output: 2

Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1]. 
The sister has two different kinds of candies, the brother has only one kind of candies. 
Note:

The length of the given array is in range [2, 10,000], and will be even.
The number in given array is in range [-100,000, 100,000].


*/

const distributeCandies = (candies) => {
	let candyTypes = new Set();

	candies.forEach(candy => candyTypes.add(candy));

	return Math.min(candies.length / 2, candyTypes.size);
};

let input = [1,1,2,2,3,3];
let result = 3;

console.log(`it should return ${result} for input ${input}: ${distributeCandies(input) === result}`);



/* 

SETUP 

Strategy:

	Iterate through candies, adding all candies to a set.

	We now have a list of all candy varieties, so we know how many unique candies there are. The most candies that one person can receive is (length of candies / 2). So, if we have as many or more unique candies than that max, we can return that. Otherwise, we'd give the sister the highest number of unique candies, so we'd return that number. 

	Return minimum value between the length of set, and (candies length / 2).

Big O = Linear for one loop over candies array. O(n).

Input: let candies = [1,1,2,2,3,3];

set = {}
Next candy = 1 => {1}
Next candy = 1 => {1}
Next candy = 2 => {1, 2}
Next candy = 2 => {1, 2}
Next candy = 3 => {1, 2, 3}
Next candy = 3 => {1, 2, 3}

set.length = 3
candies.length / 2 = 6 / 2 = 3

return min of (3,3) => 3 


Output: let result = 3;


const distributeCandies = (candies) => {
	let candyTypes = new Set();

	// for each candy
	  // add candy to set

	// return minimum value between (candies.length / 2) and candyTypes.size
};

*/



