/*

https://leetcode.com/problems/reverse-integer/description/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:

Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  // check for overflow - is abs(x) larger than 2^31? 
  if (x === 0 || x > 2147483647 || x < -2147483647) {
    return 0;
  }
  let reverse = x.toString();
  reverse = reverse.split('');
  while (reverse[reverse.length - 1] === '0') {
    reverse.splice(reverse.length - 1, 1);
  }
  reverse = reverse.reverse();
  if (reverse[reverse.length - 1] === '-') {
    reverse.unshift(reverse.pop());
  }
  reverse = reverse.join('');
  if (parseInt(reverse) < -2147483647 || parseInt(reverse) > 2147483647) {
      return 0;
  }
  return parseInt(reverse);
};

console.log(reverse(321));
console.log(reverse(-543));
console.log(reverse(-989));
console.log(reverse(-1200));