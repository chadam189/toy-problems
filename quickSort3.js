// quick sort in one line

const quickSort = a => a.length < 1 ? a : [...quickSort(a.filter(x => x < a[0])), ...a.filter(x => x === a[0]), ...quickSort(a.filter(x => x > a[0]))];

let input = [14, 4, 5, 63, 2, 15, 53, 12, 3, 43];
let result = [2, 3, 4, 5, 12, 14, 15, 43, 53, 63];

console.log(`it should return a sorted array: ${JSON.stringify(result) === JSON.stringify(quickSort(input))}`);

console.log(`results: ${JSON.stringify(quickSort(input))}`);
