const printNodes: (nodes: Object[]) => string[][] = (nodes) => {
  if (nodes.length <= 1) {
    return [[]];
  }
  let cellLength = Math.max(...nodes.map((node) => node.toString().length));
  if (cellLength % 2 === 0) {
    cellLength++;
  }

  const height = Math.floor(Math.log2(nodes.length)) + 1;

  let branchHeight = 1; // This is the last child in the tree
  // Each iteration is the branches from the root and then the last child child
  for (let x = 1; x <= height; x++) {
    branchHeight += Math.pow(2, x) + 1;
  }
  const branchWidth = 2 * branchHeight - 1;

  const output = Array<string[]>(branchHeight);

  for (let x = 0; x < output.length; x++) {
    output[x] = Array<string>(branchWidth).fill(
      " ".padEnd(Math.ceil(cellLength))
    );
  }

  const colPos = Math.floor(branchWidth / 2);
  const branchCount = Math.pow(2, height);

  const root = nodes[0] || 0;
  output[0]![colPos] = root
    .toString()
    .padStart(Math.ceil(cellLength / 2))
    .padEnd(cellLength);

  for (let y = 1; y <= branchCount; y++) {
    output[y]![colPos - y] = "/"
      .padStart(Math.ceil(cellLength / 2))
      .padEnd(cellLength);
    output[y]![colPos + y] = "\\"
      .padEnd(Math.ceil(cellLength / 2))
      .padStart(cellLength);
  }

  const numbersIndexToPosition = Array(nodes.length);
  numbersIndexToPosition[0] = [0, colPos];
  for (let x = 1; x < nodes.length; x++) {
    const parentIndex = Math.floor((x - 1) / 2);
    const parentPos = numbersIndexToPosition[parentIndex];

    const rowLevel = Math.floor(Math.log2(x + 1));

    const parentBranchCount = Math.pow(2, Math.floor(height - rowLevel + 1));
    const isLeft = (x - 1) % 2 === 0;

    const rowPosition = parentPos[0] + parentBranchCount + 1;

    const colPosition = isLeft
      ? parentPos[1] - parentBranchCount - 1
      : parentPos[1] + parentBranchCount + 1;

    const value = nodes[x] || 0;
    output[rowPosition]![colPosition] = isLeft
      ? value
          .toString()
          .padStart(Math.ceil(cellLength / 2))
          .padEnd(cellLength)
      : value
          .toString()
          .padEnd(Math.ceil(cellLength))
          .padStart(Math.ceil(cellLength));
    numbersIndexToPosition[x] = [rowPosition, colPosition];

    if (2 * x + 1 < nodes.length) {
      const branchCount = Math.pow(2, height - rowLevel);
      for (let y = rowPosition + 1; y <= rowPosition + branchCount; y++) {
        output[y]![colPosition - y + rowPosition] = "/"
          .padStart(Math.ceil(cellLength / 2))
          .padEnd(cellLength);
        output[y]![colPosition + y - rowPosition] = "\\"
          .padEnd(Math.ceil(cellLength / 2))
          .padStart(cellLength);
      }
    }
  }

  return output;
};

export default printNodes;
