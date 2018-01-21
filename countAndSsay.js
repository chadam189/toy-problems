/* 

Count And Say
https://leetcode.com/problems/count-and-say/description/

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
6.     312211
7.     13112221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"

Example 2:

Input: 4
Output: "1211"

*/ 

const countAndSay = (number) => {
  let currentTerm = '1';
  for (let i = 2; i <= number; i++) {
    currentTerm = generateNextSequence(currentTerm);
    console.log(`Term #${i} = ${currentTerm}`);
  }
  return currentTerm;
};

const generateNextSequence = (prevSeq) => {
  let nextSeq = '';
  for (let i = 0; i < prevSeq.length; i++) {
      let currentChar = prevSeq[i];
      let consecutiveCharCount = 1;
      while (i + consecutiveCharCount < prevSeq.length && prevSeq[i + consecutiveCharCount] === currentChar) {
        consecutiveCharCount++;
      }
      nextSeq += consecutiveCharCount + currentChar;
      i += consecutiveCharCount - 1; 
  }
  return nextSeq;
};


const answer = '13112221';

console.log(`Result of 7th term is: ${countAndSay(7)} and should equal ${answer}`);

/* 

SETUP

Strategy: Start with 1st term in sequence provided, and create next sequence based on previous sequence until we have created nth term, where n = input. Create next sequence by iterating over current sequence. When a number comes up, count how many more consecutive instances of that number are in the string, and track the index where the number changes. Add two characters to the next sequence string - the number of consecutive instances, then the number itself. Continue evaluating the previous sequence, starting at the index where the number changed. 

Big O: O(n * m)

Input: const num = 7;

Transformation: 

1.     1
2.     11
3.     21
4.     1211
5.     111221
6.     312211
7.     13112221

Output: const term = '13112221';

const countAndSay = (number) => {
  let prevSeq = '1';
  // for 2 through nth term...
    // generate next sequence via helper function
  // return nth term
};

const generateNextSequence = (prevSeq) => {
  let nextSeq = '';
  // iterate through chars in previous sequence 
      let currentChar = prevSeq[i];
      let consecutiveCharCount = 1;
      // while char at (i + consecutiveCharCount) equals currentChar, increment consecutiveCharCount
        // when we find a different number or are at end of previous sequence
        // add the count then the currentChar to nextSequence
        // increment i by (consecutiveCharCount - 1)
  // return nextSeq
};

*/