/* 

Stacks from CTCI

Features: pop, push, peek, isEmpty

*/

// implemented using an array

const StackArray = () => {
  let stack = [];
	
	this.push = (val) => {
		stack.push(val);
	};

	this.pop = () => {
		if (!this.isEmpty()) {
			return stack.pop();
		} else {
      return null;
		}
	};

	this.isEmpty = () => {
    return (stack.length === 0);
	};

	this.peek = () => {
    return stack[stack.length - 1];
	};

}

let stack = new StackArray();

console.log(`isEmpty should return true if no items are on stack: ${stack.isEmpty()}`);

stack.push(5);
console.log(`push should add an item to stack: ${stack.peek() === 5 && !stack.isEmpty()}`);

stack.push(4);
console.log(`peek should return top item off stack: ${stack.peek() === 4}`);

console.log(`pop should remove and return top item off stack: ${stack.pop() === 4 && stack.peep() === 5}`);



