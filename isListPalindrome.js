const isListPalindrome = (list) => {
  const values = [];
  let dummyHead = list;
    while(dummyHead) {
      values.push(dummyHead.val);
      dummyHead = dummyHead.next;
    }
  
  for (let start = 0, end = values.length - 1; start < end; start++, end--) {
    if (values[start] !== values[end]) {
      return false;
    }
  }
  
  return true;
};

const input1 = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 0,
      next: null
    }
  }
};

const input2 = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null
      }
    }
  }
};

const expected1 = true;
const expected2 = false;

console.log(`should return true for a legit palindrome: ${isListPalindrome(input1)}`);
console.log(`should return false for something that is not a palindrome: ${isListPalindrome(input2)}`);

/*

Strategy:

Iterate through list, addding node values to an array. Once we have an array of all the values, use two pointers (one at beginning, one at end) to check if the values satisfy the palindrome requirements.

Big O: O(n) for time and space.

const isListPalindrome = (list) => {
  // Phase 1 = get array of all list values
  const values = [];
    // for each node...
      // add val to array
  
  // Phase 2 = check array to see if it's a palindrome
    let start = 0;
    let end = values.length - 1;
    // for each element in array...(while start hasn't crossed end)
      // compare start to end
        // if not equal, return false
        // else, advance pointers (increment start, decrement end)
    // return true
    
};

SETUP

Input: linked list

const input1 = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 0,
      next: null
    }
  }
};

const input2 = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null
      }
    }
  }
};

Output: boolean

const expected1 = true;
const expected2 = false;



*/