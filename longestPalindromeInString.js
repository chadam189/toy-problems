/* 

FIND LONGEST PALINDROME SUBSTRING

https://leetcode.com/problems/longest-palindromic-substring/description/

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"

(Note: "aba" is also a valid answer)

Example 2:

Input: "cbbd"
Output: "bb"


*/


const findLongestPalindrome = (str) => {
	let currP = [];
	let maxP = [];

	// for each char...
	  // search for middle point
	    // if current char equals previous char, we've found a midpoint
	    // else, if current char equals previous previous char, the previous char is a midpoint
	    // if midpoint is found, enter while loop to find length of pally
	      // current pally = midpoint
	      // use two pointers - both at midpoint
	      // while left pointer >= 0 and right pointer < string.length
	        // if char at both pointers is same
	          // add that char to both front and end of current palindrome
          // else, stop the while loop
	  // if current palindrome is longer than max palindrome
	    // update max palindrome

	return maxP;
};


let input = 'csenutacocatdfb';
let expected = 'tacocat';

console.log(`Input of ${JSON.stringify(input)}should find the longest palindrome substring, which should be ${expected} and comes out as: ${findLongestPalindrome(input)}`);


/*

SETUP 

Strategy: Iterate through string of chars, keeping track of current palindrome. If length of current palindrome is greater than length of max palindrome, update max palindrome. Return max palindrome.

Big O: linear?

Input: let input = 'csenutacocatdfb';

Output: let expected = 'tacocat';

const findLongestPalindrome = (str) => {
	let currP = [];
	let maxP = [];

	// for each char...
	  // search for middle point
	    // if current char equals previous char, we've found a midpoint
	    // else, if current char equals previous previous char, the previous char is a midpoint
	    // if midpoint is found, enter while loop to find length of pally
	      // current pally = midpoint
	      // use two pointers - both at midpoint
	      // while left pointer >= 0 and right pointer < string.length
	        // if char at both pointers is same
	          // add that char to both front and end of current palindrome
          // else, stop the while loop
	  // if current palindrome is longer than max palindrome
	    // update max palindrome

	return maxP;
};


*/