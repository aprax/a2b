const printNodes = (numbers: number[]) => {
	if (numbers.length < 1) {
		return console.log('---No arguments passed---');
	}
	if (numbers.length === 1) {
		return console.log(numbers[0])
	}
	//const root = convertToTreeNodes([1, 2, 3, 4, 5])
	const height = Math.floor(Math.log2(numbers.length));
	const width = 2 * height;

	let branchHeight = 1; //This is the last child in the tree
	// Each iteration is the branches from the root and then the last child child
	for (let x = 1; x <= height; x++) {
		branchHeight += Math.pow(2, x) + 1;
	}
	const branchWidth = 2 * branchHeight - 1;

	const output = Array(branchHeight);

	for (let x = 0; x < output.length; x++) {
		output[x] = Array(branchWidth).fill(' ')
	}

	const colPos = Math.floor(branchWidth / 2);
	const branchCount = Math.pow(2, height);

	output[0][colPos] = numbers[0];

	for (let y = 1; y <= branchCount; y++) {
		output[y][colPos - y] = '/';
		output[y][colPos + y] = '\\';
	}

	const numbersIndexToPosition = Array(numbers.length);
	numbersIndexToPosition[0] = [0, colPos];
	for (let x = 1; x < numbers.length; x++) {
		const parentIndex = Math.floor((x - 1) / 2)
		const parentPos = numbersIndexToPosition[parentIndex]; //Verify

		const rowLevel = Math.floor(Math.log2(x + 1));

		const parentBranchCount = Math.pow(2, Math.floor(height - rowLevel + 1)); // Verify
		const isLeft = (x - 1) % 2 === 0;

		const rowPosition = parentPos[0] + parentBranchCount + 1;

		const colPosition = isLeft ? parentPos[1] - parentBranchCount - 1 : parentPos[1] + parentBranchCount + 1;

		output[rowPosition][colPosition] = numbers[x];
		numbersIndexToPosition[x] = [rowPosition, colPosition]

		if (2 * x + 1 < numbers.length) {
			const branchCount = Math.pow(2, height - rowLevel);
			for (let y = rowPosition + 1; y <= rowPosition + branchCount; y++) {
				output[y][colPosition - y + rowPosition] = '/';
				output[y][colPosition + y - rowPosition] = '\\';
			}
		}
	}
	for (const row of output) {
		console.log(row.join(''))
	}
	console.log('');
	return output;
}

export default printNodes;