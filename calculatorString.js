/* 

Given an arithmetic equation consisting of positive integers, +, -, *, and / (but no parenthesies), compute the result.

Input: '2*3+5/6*3+15'
Output: 23.5

*/

const calculatorString = (str) => {
  let chars = str.split('');
  
  let numbers = [];
  let operators = [];
  let currNum = 0;
  for (let i = 0; i < chars.length; i++) {
    let digit = parseInt(chars[i]);
    if (isNaN(digit)) {
      numbers.push(currNum);
      currNum = 0;
      operators.push(chars[i]);
    } else {
      currNum = (currNum * 10) + digit;
    }
  }
  numbers.push(currNum);

  let numbers2 = [];
  let addOrSubtract = [];

  for (let j = 0; j < operators.length; j++) {
    if (operators[j] === '+' || operators[j] === '-') {
      numbers2.push(numbers[j]);
      addOrSubtract.push(operators[j]);
    } else if (operators[j] === '*' || operators[j] === '/') {
      let result = operators[j] === '*' ? numbers[j] * numbers[j + 1] : numbers[j] / numbers[j + 1];
      numbers[j + 1] = result;
    }
  }
  numbers2.push(numbers.pop());

  for (let k = 0; k < addOrSubtract.length; k++) {
    let result = addOrSubtract[k] === '+' ? numbers2[k] + numbers2[k + 1] : numbers2[k] - numbers2[k + 1];
    numbers2[k + 1] = result;
  }
   
  return numbers2.pop();
};

let input = '2*3+5/6*3+15';
let result = 23.5;

console.log(`it should return correct answer for input of ${input}: ${calculatorString(input) === result}`);

input = '2*3-5/6*3+15';
result = 18.5;

console.log(`it should return correct answer for input of ${input}: ${calculatorString(input) === result}`);


/* 

SETUP

Strategy: 

  Split string into array. Loop through once, combining neighboring digits into numbers. Loop through a second time, performing multiplication and division. Loop through a third time, performing addtion and subtraction.

Input: let string = '2*3+5/6*3+15';
Output: let result = 23.5;

const calculatorString = (str) => {
  let chars = str.split('');
  
  let numbersAndOperators = [];
  let currNum = 0;
  // for each element in chars...
    // run char through parseInt
      // if NaN, it's an operator
        // push currNum to NAO
        // reset currNum to zero
        // push char to NAO
      // else it's a digit
        // currNum = currNum * 10 plus parseInt(char)

  let numsAndAddSubtract = [];
  // for each number/operator in NAO...
    // if add or subtract or (number and next operator is add or subtract)
      // push it onto NAAS
    // else if multiply or divide
      // grab number before and after the operator
      // perform appropriate operation
      // push result onto NAAS


  let answer = 0;
  // for each number/operator in NAAS...
    // if number, continue
    // else
      // grab numbers before and after the operator
      // perform appropriate operation
      // add result to answer

   return answer
  
};

*/