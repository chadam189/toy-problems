const findXOverlap = (a, b) => {

  let [left, width] = [null, null];

  if (a.left > b.left) {
  	if (b.left + b.width > a.left) {
  		left = a.left;
  		result = Math.min(b.left + b.width - a.left, a.width);
  	}

  } else {
    if (a.left + a.width > b.left) {
			left = b.left;
	    width = Math.min(a.left + a.width - b.left, b.width);
    }
  }
  return [left, width];
}

const findYOverlap = (a, b) => {

  let [bottom, height] = [null, null];

  if (a.bottom > b.bottom) {
  	if (b.bottom + b.height > a.bottom) {
  		bottom = a.bottom;
  		result = Math.min(b.bottom + b.height - a.bottom, a.height);
  	}

  } else {
    if (a.bottom + a.height > b.bottom) {
			bottom = b.bottom;
	    height = Math.min(a.bottom + a.height - b.bottom, b.height);
    }
  }
  return [bottom, height];
}

const overlapRectangles = (a, b) => {

  let left = null;
  let bottom = null;
  let width = null;
  let height = null;

	// find horizontal overlap (if one exists)

	[left, width] = findXOverlap(a, b);

	[bottom, height] = findYOverlap(a, b);

	let result = {
		left,
		bottom,
		width,
		height
	};

	return result;

};



const a = {
	left: 1,
	bottom: 1,
	width: 6,
	height: 3
};

const b = {
	left: 5,
	bottom: 2,
	width: 3,
	height: 6
};

const c = {
	left: 10,
	bottom: 5,
	width: 1,
	height: 1
};

const d = {
	left: 7,
	bottom: 4,
	width: 1,
	height: 1
};

const answerAB = {
	left: 5,
	bottom: 2,
	width: 2,
	height: 2
};

const nullAnswer = {
	left: null,
	bottom: null,
	width: null,
	height: null
};

// console.log(`X overlap of A and A: ${JSON.stringify(findXOverlap(a, a))}`);
// console.log(`X overlap of A and B: ${JSON.stringify(findXOverlap(a, b))}`);
// console.log(`X overlap of A and C: ${JSON.stringify(findXOverlap(a, c))}`);
// console.log(`X overlap of A and D: ${JSON.stringify(findXOverlap(a, d))}`);

// console.log(`Y overlap of A and A: ${JSON.stringify(findYOverlap(a, a))}`);
// console.log(`Y overlap of A and B: ${JSON.stringify(findYOverlap(a, b))}`);
// console.log(`Y overlap of A and C: ${JSON.stringify(findYOverlap(a, c))}`);
// console.log(`Y overlap of A and D: ${JSON.stringify(findYOverlap(a, d))}`);

console.log(`expect A and A overlap to equal ${JSON.stringify(a)} ${JSON.stringify(overlapRectangles(a, a)) === JSON.stringify(a)}`);
console.log(`expect A and B overlap to equal ${JSON.stringify(answerAB)}: ${JSON.stringify(overlapRectangles(a, b)) === JSON.stringify(answerAB)}`);
console.log(`expect A and C overlap to equal null: ${JSON.stringify(overlapRectangles(a, c))}`);
console.log(`expect A and D overlap to equal null even though edges touch: ${JSON.stringify(overlapRectangles(a, d))}`);


