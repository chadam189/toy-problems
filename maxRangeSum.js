function maxRangeSum2(input) {
  let maxGain = 0;
  let currentSum = 0;
  input.forEach(gain => {
    currentSum += parseInt(gain);
    if (currentSum < 0) {
      currentSum = 0;
    }
    if (currentSum > maxGain) {
      maxGain = currentSum;
    }
  });
  console.log('mq answer', maxGain);
}



const maxRangeSum = (input) => {

  const delta = [];
  for (let i = 0; i < input.length - 1; i++) {
    delta.push(input[i + 1] - input[i]);
  }

  console.log(`delta = ${delta}`);

  const result = {
    start: 0,
    end: 0,
    maxGain: 0
  };
  let currentGain = 0;

  for (let i = 0; i < delta.length; i++) {
    if (delta[i] > result.maxGain && delta[i] > result.maxGain + currentGain + delta[i]) {
      result.start = i;
      result.end = i + 1;
      result.maxGain = delta[i];
      currentGain = 0;
    } else {
    currentGain += delta[i];
      if (currentGain > 0) {
        result.maxGain = currentGain + result.maxGain;
        result.end = i + 1;
        currentGain = 0;
      }
    }
  }

  return result;

};

const input = [7, -3, -11, -10, 4, 2, 8, -2, 4, -5, -6];
const input2 = [10, 7, -3, -10, 4, 2, 8, -20, 4, -5, -6];
maxRangeSum2(input);

const expectedDelta1 = [-10, -8, 1, 14, -2, 6, -10, 6, -9, -1];

// console.log(`delta should be this: ${expectedDelta}`);
console.log(`1) maxRangeSum for ${input} gives this: ${JSON.stringify(maxRangeSum(input))}`);

console.log(`2) maxRangeSum for ${input2} gives this: ${JSON.stringify(maxRangeSum(input2))}`);

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