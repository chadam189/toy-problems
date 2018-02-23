const fibRecursive = (n) => {
	counter++;
	if (n === 0 || n === 1) {
		return 1;
	}

	return fibRecursive(n - 1) + fibRecursive(n - 2);
}



var counter = 0;
let input = 5;
let result = fibRecursive(input);

console.log(`Solving fib of ${input} recursively takes ${counter} calls: ${result}` )