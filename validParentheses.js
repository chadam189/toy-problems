// Begin your set-up revision for "isValidParentheses()" here.



const isValidParentheses = (string) => {
  // quick check if length is odd, if it is, string is invalid
  if (string.length % 2 === 1 || string.length === 0) {
    return false;
  }
  
  // create object with key/value pairs for the opening/closing brackets
  const complements = {
    "{": "}",
    "(": ")",
    "[": "]"
  };
  
  // create array for tracking opening brackets
  const openingChars = [];

  // for each char in string...
  for (let i = 0; i < string.length; i++) {
    // if current char is opening bracket, put char into tracking array
    if (string[i] === "(" || string[i] === "{" ||string[i] === "[") {
      openingChars.push(string[i]);
    } else {
    // else, compare char to the last item in the array 
      if (string[i] !== complements[openingChars[openingChars.length - 1]]) {
        // if they don't complement, return false...the string is not valid
        return false;
      } else {
        // if they do, delete last item in tracking array (pop)
        openingChars.pop();
      }
    }
  }

  // if we successfully make it through the loop, the string is valid
  return true;
};

let example = "({[({})]})";
console.log(`expect function to return true for valid string ${example}: ${isValidParentheses(example)}`);

example = "({})()";
console.log(`expect function to return true for valid string ${example}: ${isValidParentheses(example)}`);

example = "({[([)]]})";
console.log(`expect function to return false for invalid string ${example}: ${isValidParentheses(example)}`);

example = "({[})";
console.log(`expect function to return false for odd length input: ${isValidParentheses(example)}`);

/* 

SETUP

Input: const string = "({})()";
Output: const result = true;
Constraints: n/a
Edge Cases: empty string?

const isValidParentheses = (string) => {
  // quick check if length is odd, if it is, string is invalid
  
  // create object with key/value pairs for the opening/closing brackets
  
  // create array for tracking opening brackets


  // for each char in string...
    // if current char is opening bracket, put char into tracking array
    // else, compare char to the last item in the array 
      // if they don't complement, return false...the string is not valid
      // if they do, delete last item in tracking array (pop)
  
  // if we successfully make it through the loop, the string is valid   
    
};

Transformation steps:

input: "({})()", length 6
tracking array: empty;

At chars 0 - 5:

0) tracking array: (
1) tracking array: ({
2) compare } to last item in tracking array, a } => good to proceed, pop } from array
  tracking array is now: (
3) compare ) to last item in tracking array, a ) => good to proceed, pop ) from array
  tracking array is now: empty
4) tracking array: (
5) compare ) to last item in tracking array, a ) => good to proceed, pop ) from array
  tracking array is now: empty

returns true for this input

*/