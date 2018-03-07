/* 

Reverse chars in a string, in place, O(n) time.

From Ianna: https://ianna1009.gitbooks.io/leectcode/content/two-pointer_technique.html

*/

const reverseChars = (str) => {

  let left = 0;
  let right = str.length - 1;

  let arr = str.split('');

  while (left < right) {
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }

  return arr.join('');

};

console.log(reverseChars('cat'));
console.log(reverseChars('boat'));