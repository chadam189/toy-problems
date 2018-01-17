/* 

PROMPT

You are given two non-empty linked lists representing two non-negative integers. 

The digits are stored in reverse order and each of their nodes contain a single digit. 

Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, unless the entire number is 0.

A nodes values will be named val and next.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

-----------------------------------------------

SETUP

Summary: Calculate total by iterating through both lists and adding digits. Convert sum to linked list

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)

const listOne = {
  val: 2,
  next: {
    val: 4, 
    next: {
      val: 3, 
      next: null
    },
  }
}

const listTwo = {
  val: 5,
  next: {
    val: 6, 
    next: {
      val: 4, 
      next: null
    },
  }
}

Output: (7 -> 0 -> 8)

const result = {
  val: 8,
  next: {
    val: 0, 
    next: {
      val: 7, 
      next: null
    },
  }
}

Explanation: 342 + 465 = 807

runningTotal: 

0 + (10^1 * 7) = 7
7+ (10^1 * 10) = 107
107 + (10^2 * 7) = 807

result:

{} =>
{val: 7, next: null} => 
{val: 7, next: {val: 0, next: null}} =>
{val: 7, next: {val: 0, next: {val: 8, next: null}}}

const addTwoNumbers = (listOne, listTwo) => {
  let runningTotal = 0;
  let powerOfTen = 0;
  // simultaneously iterate through every node of the lists, using two pointers
    // if a node is null, value for that node is 0
    // add two node values together, multiply this sum by 10^powerOfTen
    // add this result to the runningTotal
    // move pointers to next node
      // if both nodes are null, then we've reached end of both lists
  
  // convert runningTotal to linkedList
  let result = {};
  // can split runningTotal into string, then iterating over the chars
    // starting at end and going backwards to first char to follow the correct order
  // each char becomes a node in this linkedList
  
  return result;
};

Big 0: iterate through the longest list once, then iterate through each digit of answer, so O(2n) -> 0(n)

*/

const addTwoNumbers = (listOne, listTwo) => {
  let runningTotal = 0;
  let powerOfTen = 0;
  let listOnePointer = listOne;
  let listTwoPointer = listTwo;

  // simultaneously iterate through every node of the lists, using two pointers
  while (listOnePointer && listTwoPointer) {
    // if a node is null, value for that node is 0
    let valOne = listOnePointer ? listOnePointer.val : 0;
    let valTwo = listTwoPointer ? listTwoPointer.val : 0;
    // add two node values together, multiply this sum by 10^powerOfTen
    // add this result to the runningTotal, and increment powerOfTen
    runningTotal += (valOne + valTwo) * Math.pow(10, powerOfTen++);
    // move pointers to next node
    listOnePointer = listOnePointer.next;
    listTwoPointer = listTwoPointer.next;
     // if both nodes are null, then we've reached end of both lists
  }
  // convert runningTotal to linkedList
  let result = {};
  let resultPointer = result;
  // can split runningTotal into string, then iterate over the chars
  runningTotal = runningTotal.toString();
  // starting at end and going backwards to first char to follow the correct order
  for (let i = runningTotal.length - 1; i > -1; i--) {
	  // each char becomes a node in this linkedList
    resultPointer.next = {
      val: parseInt(runningTotal[i]),
      next: null
    };
    resultPointer = resultPointer.next;
  }
  
  
  return result.next;
};

const listOne = {
  val: 2,
  next: {
    val: 4, 
    next: {
      val: 3, 
      next: null
    },
  }
};

const listTwo = {
  val: 5,
  next: {
    val: 6, 
    next: {
      val: 4, 
      next: null
    },
  }
};

console.log(addTwoNumbers(listOne, listTwo));