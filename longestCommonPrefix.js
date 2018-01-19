/* 

Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

*/

const longestCommonPrefix = (strings) => {
  let result = '';
  
  // edge case checks: empty input array, empty string as first word
  if (strings.length === 0 || strings[0].length === 0) {
    return result;
  }
  
  // for each char in first word...
  for (let i = 0; i < strings[0].length; i++) {
    // initialize two variables: 
      // 1) character at position "i" of current word
      // 2) boolean flag - do all words have this character at position "i"? init to true
    let currentChar = strings[0][i];
    let isCharInCommonPrefix = true;
    
    // for each word in strings array (excluding first)...
    for (let j = 1; j < strings.length; j++) {
      // compare each character at position "i" to the first word's character at position "i"
      // if same, do nothing (continue to next word)
      // if different OR if this word has no more characters
      if (i >= strings[j].length || currentChar !== strings[j][i] ) {
        // 1) set flag to "false"
        // 2) break
        isCharInCommonPrefix = false;
        break;
      }
    }

    // if flag is true, add current character to result 
    if (isCharInCommonPrefix) {
      result += currentChar;
    } else { // if flag is "false", break 
      break;
    }
  }
  
  return result;
};

/* 

SETUP

Strategy: Iterate over first word, checking each char against char (in same position) against all other words. If char exists in same position for all words, add it to result and move to next char in first word.

Big O: sadly, it's O(n^2)...have to iterate over all words, and in a nested loop, iterate over each char in those words

Input: const strings = ['aaabb', 'aabb', 'aacc'];
Constraints: none
Edge Cases: empty input array, empty string as first word

Transformation of output, given input of ['aaabb', 'aabb', 'aacc']:

'' => 'a'
'a' => 'aa'
'aa'=> (loops break because 3rd char in second word, 'b', doesn't equal 3rd char in first word, 'a')
'aa' will be returned

Output: const expected = 'aa';

const longestCommonPrefix = (strings) => {
  let result = '';
  
  // edge case checks: empty input array, empty string as first word

  // for each char in first word...
    // initialize two variables: 
      // 1) character at position "i" of current word
      // 2) boolean flag - do all words have this character at position "i"? init to true
    // for each word in strings array (excluding first)...
      // compare each character at position "i" to the first word's character at position "i"
        // if same, do nothing (continue to next word)
        // if different OR if this word has no more characters
          // 1) set flag to "false"
          // 2) break
    // if flag is "false", break
    // if flag is true
      // add it to result 
  
  return result;
};

*/

/* TESTS */

let strings = ['aaabb', 'aabb', 'aacc', 'aaz'];
let expected = 'aa';

console.log(`expect function to return the longest common prefix: ${longestCommonPrefix(strings) === expected}`);

strings = ['aaabb', 'aabb', 'zacc'];
expected = '';

console.log(`expect function to return \'\' if there is no common prefix: ${longestCommonPrefix(strings) === expected}`);

strings = ['cats', 'cats', 'cats', 'cats'];
expected = 'cats';

console.log(`expect function to return the word if input elements are all equal: ${longestCommonPrefix(strings) === expected}`);

strings = ['', 'cats', 'cats', 'cats'];
expected = '';

console.log(`expect function to return \'\' if the first word is an empty string: ${longestCommonPrefix(strings) === expected}`);

strings = [];
expected = '';

console.log(`expect function to return \'\' if the input array is empty: ${longestCommonPrefix(strings) === expected}`);