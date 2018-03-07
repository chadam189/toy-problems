/* 

Reverse chars in a string, in place, O(n) time.

From Ianna: https://ianna1009.gitbooks.io/leectcode/content/two-pointer_technique.html

*/

const reverseChars = (str) => {

	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		let temp = str[left];
		str[left++] = str[right];
		str[right--] = temp;
	}

  return str;

};

console.log(reverseChars('cat'));
console.log(reverseChars('boat'));