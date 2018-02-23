const fibRecursive = (n) => {
	counter++;
	if (n === 0 || n === 1) {
		return 1;
	}

	return fibRecursive(n - 1) + fibRecursive(n - 2);
};

const fibMemo = (n) => {
	let memo = {};

  const fibHelper = (num) => {
  	counter++;
  	if (memo[num]) {
  		return memo[num];
  	}

  	if (num === 0 || num === 1) {
  		return 1;
  	}

  	let result = fibHelper(num - 1) + fibHelper(num - 2);
  	memo[num] = result;
  	return result;

  };

  return fibHelper(n);
}

const fibTailUp = (n) => {

	if (n === 0 || n === 1) {
		return 1;
	}

	let a = 0;
	let b = 1;
	let counter = 2;

	while (counter <= n) {
    let temp = a + b;
    a = b;
    b = temp;
    counter++;
	}

	return a + b;
};



var counter = 0;
let input = 20;
let result = fibRecursive(input);

console.log(`Solving fib of ${input} recursively takes ${counter} calls: ${result}` );

counter = 0;
result = fibMemo(input);

console.log(`Solving fib of ${input} with memoizing takes ${counter} calls: ${result}` );

result = fibTailUp(input);

console.log(`Solving fib of ${input} with 'tail up' takes ${1} call: ${result}` );