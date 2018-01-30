

const maxRangeSum = (input) => {

	const delta = [];
  for (let i = 0; i < input.length - 2; i++) {
  	delta.push(input[i] + input[i+1]);
  }

  console.log(`delta = ${delta}`);

  const result = {
	  start: 0,
	  end: 0,
	  maxGain: 0
  };
  let currentGain = 0;

  for (let i = 0; i < delta.length; i++) {
  	if (delta[i] > result.maxGain + delta[i]) {
  		result.start = i;
  		result.end = i;
  		result.maxGain = delta[i];
  	} else {
  		currentGain += delta[i];
  		if (currentGain + result.maxGain > result.maxGain) {
  			result.maxGain = currentGain + result.maxGain;
  			result.end = i;
  			currentGain = 0;
  		}
  	}
  }

  return result;

};

const input = [7, -3, ,-11, -10, 4, 2, 8, -2, 4, -5, -6];
const input2 = [10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -6];


const expectedDelta = [-4, -7, 1, 14, -2, 6, -10, 6, -9, -11];

console.log(`delta should be this: ${expectedDelta}`);
console.log(`maxRangeSum for ${input} gives this: ${maxRangeSum(input)}`);

/* 

SETUP

Strategy: Iterate through array, finding deltas between each element, creating new delta array (length will equal input length - 1). Initialize result var, which has two pointers (start and end) and maxGain. For each delta, see if this delta is a better starting spot (aka is this delta by itself better than maxGain + delta?). If yes, update starting pointer and maxGain. If not, update currentGain to include this delta; if current + max is better than max, update max to include current, and move the end pointer so that this delta is captured, and finally reset currentgain to 0.

Big O = O(n). Linear time to create delta array (could do this all in one loop, but this make things very clear). Then, another loop through delta. So, O(2n) which reduces to O(n).

Input: const input = [7, -3, -11, -10, 4, 2, 8, -2, 4, -5, -6];
Output: [max gain]

Transformations: 

const delta = [-4, -7, 1, 14, -2, 6, -10, 6, -9, -11];

Iterate through array, finding deltas between each element
Iterate through deltas array (which will have length = input.length - 1)

const result = {
	start: 0,
	end: 0,
	maxGain: 0
};

let currentGain = 0;

for i in delta...
  if current delta is larger than delta+max, change the starting point - we've found a better place to start
  else 
    currentGain += currentDelta
    if current + max > max, update max to include current, move end pointer to i, and reset currentgain






const maxRangeSum = (input) => {
	const delta = [];

};

Strategy: 




*/