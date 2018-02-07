/*

SETUP

Summary: Reverse a linked list, O(n) time

Strategy: Create result (initialize to null) and current (initialize to input). Traverse current; each loop will take the current head, and make it the head of results, keeping what we've previously stored in results as head.next. This will reverse the list.

*/

const reverseList = (list) => {
	let current = list;
	let result = null;

  while (current) {
    let temp = {
      val = current.val;
      next = result;
    };

    result = temp;
    current = current.next;
   }

	return result;
};

const input = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 5,
        next: null
      }
    }
  }
};

const result = {
  val: 5,
  next: {
    val: 3,
    next: {
      val: 1,
      next: {
        val: 0,
        next: null
      }
    }
  }
};

console.log(`should properly reverse a linked list: ${JSON.stringify(result) === JSON.stringify(reverseList(input))}`);



/*

const reverseList = (list) => {
	let current = list;
	let result = null;

  // while current is not null
    // let temp = current.next
    // curr.next = result;
    // result = current;
    // current = temp;

	return result;
};

Input: const input = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 5,
        next: null
      }
    }
  }
};

Output: const result = {
  val: 5,
  next: {
    val: 3,
    next: {
      val: 1,
      next: {
        val: 0,
        next: null
      }
    }
  }
};

*/