import isValidBinaryTree from "../isValidBinaryTree/index.js";

export const invalidErrorMessage = "Invalid Binary Tree";

const printNodes: (nodes: (Object | null)[]) => string[][] = (nodes) => {
  if (!isValidBinaryTree(nodes)) {
    throw new Error(invalidErrorMessage);
  }
  if (nodes.length <= 1) {
    return [[]];
  }
  let cellLength = Math.max(
    ...nodes.map((node) => (node ? node.toString().length : 0))
  );
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
    output[x] = Array<string>(branchWidth).fill(" ");
  }

  const colPos = Math.floor(branchWidth / 2);
  const branchCount = Math.pow(2, height);

  const root = nodes[0] || 0;

  const rootString: string = root.toString();
  let rightSidePos = 0;
  for (let x = Math.floor(rootString.length / 2); x < rootString.length; x++) {
    output[0]![colPos + rightSidePos++] = rootString[x] as string;
  }
  let leftSidePos = 1;
  for (let x = Math.floor(rootString.length / 2) - 1; x >= 0; x--) {
    output[0]![colPos - leftSidePos++] = rootString[x] as string;
  }

  for (let y = 1; y <= branchCount; y++) {
    if (nodes[1]) {
      output[y]![colPos - y] = "/";
    }

    if (nodes[2]) {
      output[y]![colPos + y] = "\\";
    }
  }

  const numbersIndexToPosition = Array(nodes.length);
  numbersIndexToPosition[0] = [0, colPos];

  for (let x = 1; x < nodes.length; x++) {
    const value = nodes[x];
    if (!value) continue;

    const parentIndex = Math.floor((x - 1) / 2);
    const parentPos = numbersIndexToPosition[parentIndex];

    const rowLevel = Math.floor(Math.log2(x + 1));

    const parentBranchCount = Math.pow(2, Math.floor(height - rowLevel + 1));
    const isLeft = (x - 1) % 2 === 0;

    const rowPosition = parentPos[0] + parentBranchCount + 1;

    const colPosition = isLeft
      ? parentPos[1] - parentBranchCount - 1
      : parentPos[1] + parentBranchCount + 1;

    let rightSidePos = 0;

    const nodeString = value.toString();
    const midPoint = Math.floor(nodeString.length / 2);
    for (let x = midPoint; x < nodeString.length; x++) {
      output[rowPosition]![colPosition + rightSidePos++] = nodeString[
        x
      ] as string;
    }
    let leftSidePos = 1;
    for (let x = midPoint - 1; x >= 0; x--) {
      output[rowPosition]![colPosition - leftSidePos++] = nodeString[
        x
      ] as string;
    }

    numbersIndexToPosition[x] = [rowPosition, colPosition];

    if (2 * x + 1 < nodes.length) {
      const branchCount = Math.pow(2, height - rowLevel);
      for (let y = rowPosition + 1; y <= rowPosition + branchCount; y++) {
        if (nodes[2 * x + 1]) {
          output[y]![colPosition - y + rowPosition] = "/";
        }
        if (nodes[2 * x + 2]) {
          output[y]![colPosition + y - rowPosition] = "\\";
        }
      }
    }
  }

  return output;
};

export default printNodes;
