/* 

Judge Route Circle
https://leetcode.com/problems/judge-route-circle/description/

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:

Input: "UD"
Output: true

Example 2:

Input: "LL"
Output: false

*/

const judgeCircle = (moves) => {
  const directions = {
    'U': 0,
    'D': 0,
    'L': 0,
    'R': 0
  }
  for (let i = 0; i < moves.length; i++) {
    directions[moves[i]]++;
  }
  return directions['U'] === directions['D'] && directions['L'] === directions['R'];
};

const moves = 'ULLRDLRR';
console.log(`This sequence ${moves} has a circle: ${judgeCircle(moves)}`); // => true

/*

SETUP

Strategy: Iterate through moves string, converting each move into a cooresponding change in (X,Y) coordinates; if at any point after move #1 the robot is at (0,0) then return true.

Big O: O(n) in worst case where we traverse entire move sequence before discovering the robot ended up back at the beginning spot.

Input: const moves = 'ULLRDLRR';
Transformation: 

[0, 0] => U => [1, 0]
[1, 0] => L => [1, -1]
[1, -1] => L => [1, -2]
[1, -2] => R => [1, -1]
[1, -1] => D => [0, -1]
[0, -1] => L => [0, -2]
[0, -2] => R => [0, -1]
[0, -1] => R => [0, 0]

Output: const result = true;
Constraints: none

const judgeCircle = (moves) => {
  const currentPosition = [0, 0];
  // for each char in moves...
    // convert current char into a move aka change to current position
  // if current position is (0, 0)
    // return true
  // else, return false
};

*/