const nums = [1, 10, -5, 1, -100];

/* 

SETUP

Strategy

Track:

Largest three positives, largest two negatives

input = array
output = product

*/

const highestProductOfThree = (numbers) => {
  const largestThreePos = [];
  const largestTwoNegs = [];
  const smallestThreeNegs = [];

  if (numbers.length < 3) {
    return 0;
  }

  if (numbers.length === 3) {
    return numbers.reduce((product, num) => product *= num);
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      if (largestThreePos.length < 3) {
        largestThreePos.push(numbers[i]);
      } else if (numbers[i] > largestThreePos[2]) {
        largestThreePos.push(numbers[i]);
        largestThreePos.sort((a, b) => b - a);
        largestThreePos.pop();
      }
    } else {
      if (numbers[i] !== 0) {
        if (largestTwoNegs.length < 2) {
          largestTwoNegs.push(numbers[i]);
        } else if (numbers[i] < largestTwoNegs[1]) {
          largestTwoNegs.push(numbers[i]);
          largestTwoNegs.sort((a, b) => a - b);
          largestTwoNegs.pop();
        }
      }
      if (smallestThreeNegs.length < 3) {
        smallestThreeNegs.push(numbers[i]);
      } else if (numbers[i] < smallestThreeNegs[2]) {
        smallestThreeNegs.push(numbers[i]);
        // console.log(JSON.stringify(smallestThreeNegs));
        smallestThreeNegs.sort((a, b) => a > b);
        // console.log(JSON.stringify(smallestThreeNegs));
        smallestThreeNegs.pop();
      }
    }
  }

  console.log(JSON.stringify(smallestThreeNegs));

  if (!largestThreePos.length) {
    return smallestThreeNegs.reduce((product, num) => product *= num);
  }

  for (let i = 0; i < largestThreePos.length - 3; i++) {
    largestThreePos.push[0];
  }

  for (let i = 0; i < largestTwoNegs.length - 2; i++) {
    largestTwoNegs.push[0];
  }

  console.log(JSON.stringify(largestThreePos));
  console.log(JSON.stringify(largestTwoNegs));
  // console.log(JSON.stringify(smallestThreeNegs));

  let largestNegProd = largestTwoNegs[0] * largestTwoNegs[1];
  let smallestPosProd = largestThreePos[1] * largestThreePos[2];

  return largestNegProd > smallestPosProd ? (largestThreePos[0] * largestNegProd) : (largestThreePos[0] * smallestPosProd);
  
};

const input = [0, 4, 7, -20, -3, 6, 8];

console.log(highestProductOfThree(input));
