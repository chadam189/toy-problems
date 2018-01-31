const overlapRectangles = (a, b) => {

  const result = {
  	left: null,
  	bottom: null,
  	width: null,
  	height: null
  }
	// find if there is a valid left

	if (a.width > b.left - a.left) {
    result.left = b.left;
    result.width = Math.min(a.left + a.width - b.left, b.width);
	} else if (b.width > a.left - b.left) {
    result.left = a.left;
    result.width = Math.min(b.left + b.width - a.left, a.width);
	} else {
		return null;
	}

	// find if there is a valid bottom

	if (a.height > b.bottom - a.bottom) {
    result.bottom = b.bottom;
    result.height = Math.min(a.bottom + a.height - b.bottom, b.height);
	} else if (b.height > a.bottom - b.bottom) {
    result.bottom = a.bottom;
    result.height = Math.min(b.bottom + b.height - a.bottom, a.height);
	} else {
		return null;
	}

	// we have coordinates, return with calculated height/width
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
	left: 1,
	bottom: 5,
	width: 1,
	height: 1
};

const answerAB = {
	left: 5,
	bottom: 2,
	width: 2,
	height: 2
};

console.log(`expect A and B overlap to equal ${JSON.stringify(answerAB)}: ${JSON.stringify(overlapRectangles(a, b))}`);
console.log(`expect A and C overlap to equal null: ${JSON.stringify(overlapRectangles(a, c))}`);

// 1 => 7
// 1 => 4

// 5 => 8
// 2 => 8

// 5 => 7
// 2 => 4

