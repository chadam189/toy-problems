/* 

ROBOT PATHS

https://leetcode.com/problems/unique-paths/description/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.

*/

// SIMPLEST SOLUTION
const robotPaths = (rows, columns) => {
  // if rows or columns equals zero
    // we're off the board, so return 0
  // else if rows and columns both equal 1
    // return 1 since we've found a valid path
  // else return sum of valid paths from moving down and from moving right
  if (!rows || !columns) {
    return 0;
  } else if (rows === 1 && columns === 1) {
    return 1;
  } else {
    return robotPaths(rows - 1, columns) + robotPaths(rows, columns - 1);
  }
}


// SOLUTION WITH OPTIMIZATIONS THAT I SPELLED OUT IN MY STRATEGY
const robotPaths2 = (rows, columns) => {
  if (rows === 1 && columns === 1) {
    return 1;
  } 
  let validPaths = 0;
  if (rows > 1) {
    validPaths += robotPaths(rows - 1, columns);
  }
  if (columns > 1) {
    validPaths += robotPaths(rows, columns - 1);
  }
  return validPaths;
}

/* 

SOLUTION WITH OPTIMIZATIONS AND MEMOIZATION
const robotPaths3 = (rows, columns) => {
  const visitedSpots = {};

  const countPaths = (r, c) => {
    if (r === 1 && c === 1) {
      return 1;
    } 

    if (visitedSpots[r + ',' + c]) {
      return visitedSpots[r + ',' + c];
    } else {
      let downPaths = 0;
      let rightPaths = 0
      if (rows > 1) {
        downPaths = countPaths(rows - 1, columns);
        visitedSpots[(r - 1) + ',' + c] = downPaths;
      }
      if (columns > 1) {
        rightPaths = countPaths(rows, columns - 1);
        visitedSpots[r + ',' + (c - 1)] = rightPaths;
      }
      visitedSpots[r + ',' + c] = downPaths + rightPaths;
    }
  };

  countPaths(rows, columns);

  return visitedSpots[rows + ',' + columns];
}

*/ 

const rows = 15, columns = 7;

let time = Date.now();
let result = robotPaths(rows, columns);

console.log(`For inputs ${rows} and ${columns}, it took ${Date.now() - time} ms to find all ${result} valid paths, `);

time = Date.now();
result = robotPaths2(rows, columns);

console.log(`For inputs ${rows} and ${columns}, it took ${Date.now() - time} ms to find all ${result} valid paths, `);

// time = Date.now();
// result = robotPaths3(rows, columns);

// console.log(`For inputs ${rows} and ${columns}, it took ${Date.now() - time} ms to find all ${result} valid paths, `);

/* 

SETUP

--------

Strategy: 

The two inputs (row and column) signify how many steps down (rows - 1) and how many steps right (columns - 1) we need to take to reach the bottom right corner of the grid.

If rows or columns is zero, return 0 because we've gone off the grid/board.

Initialize a counter to track the number of correct paths.

Explore two options from the current position:

1) Move down one step, assuming we are not already at the bottom row
   If we are at the bottom right step after this move (aka row = 1 and column = 1, return 1 as we've found a valid path
   Else, recursively call this function with new inputs of: (rows - 1, column), and add the result of this call to the counter
2) Move right one step, assuming we are not already at the rightmost column
   If we are at the bottom right step after this move (aka row = 1 and column = 1, return 1 as we've found a valid path
   Else, recursively call this function with new inputs of: (rows, column - 1). and add the result of this call to the counter

Return the number of correct paths.


Big O: I don't know man. Binary tree is involved, which means 2^depth that we can go, but how to calculate the depth? Is it columns? rows? columns + rows? My best guess is: 2^(r-1) + 2^(c-1), which will converge to 2^(n-1) depending on which number between r and c is larger?

If I memoized, this could be O(r * c), but I would have to set up an inner recursive function for that.

---------


Input: const rows = 15, columns = 7;

Transformation: 

rP(14,7) + rP(15,6) => rP(13,7) + rP(14,6) + rP(14,6) + rP(15,5) => ....

Output: const result = 'I have no idea what the right answer is';

const robotPaths = (rows, columns) => {
  // if rows and columns both equal 1
    // return 1 since we've found a valid path
  let validPaths = 0;
  // if rows are greater than 1
    // find valid path count if we move down by calling rP(r - 1, c)
  // if columns are greater than 1
    // find valid path count if we move right by calling rP(r, c - 1)

  // return sum of valid paths from moving down and from moving right
};

*/