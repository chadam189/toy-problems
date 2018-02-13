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


const longestPalindrome = (str) => {

  if (str.length < 2) {
    return str;
  }

  let currPalindrome = '';
  let maxPalindrome = '';
  
  for (let i = 1; i < str.length; i++) {

    let pally1 = expandFromCenter(str, i, i);
    let pally2 = expandFromCenter(str, i - 1, i);

    currPalindrome = pally1.length > pally2.length ? pally1 : pally2;

    maxPalindrome = currPalindrome.length > maxPalindrome.length ? currPalindrome : maxPalindrome;
  }

  return maxPalindrome;
};

const expandFromCenter = (str, left, right) => {
  let palindrome = '';

  if (left === right) {
    palindrome = str.charAt(left--);
    right++;
  } 
  

  while (left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)) {
      palindrome = str.charAt(left--) + palindrome + str.charAt(right++);
  }

  return palindrome;
};


let input = 'csenutacocatdfb';
let expected = 'tacocat';

console.log(`Input of ${input} should find the longest palindrome substring, which should be ${expected} and comes out as: ${longestPalindrome(input)}`);


input = 'cbbd';
expected = 'bb';

console.log(`Input of ${input} should find the longest palindrome substring, which should be ${expected} and comes out as: ${longestPalindrome(input)}`);

/*

SETUP 

Strategy: Iterate through string of chars, keeping track of current palindrome. If length of current palindrome is greater than length of max palindrome, update max palindrome. Return max palindrome.

Big O: linear?

Input: let input = 'csenutacocatdfb';

Output: let expected = 'tacocat';

const longestPalindrome = (str) => {
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