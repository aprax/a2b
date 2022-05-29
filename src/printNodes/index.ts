import isValidBinaryTree from "../isValidBinaryTree/index";
import formatValue from "./formatValue";
import getHeight from "../getHeight/index";
import toBinarySearchTree from "../toBinarySearchTree/index";

export const invalidErrorMessage = "Invalid Binary Tree";

export interface Args {
  nodes: (Object | null | undefined)[];
  heightAddend?: number;
  showGrid?: boolean;
  fgColor?: number | undefined;
  bst?: boolean;
}
const printNodes: (args: Args) => string[][] = ({
  nodes,
  heightAddend = 0,
  showGrid = false,
  fgColor = undefined,
  bst = false,
}) => {
  if (!isValidBinaryTree(nodes)) {
    throw new Error(invalidErrorMessage);
  }
  if (bst) {
    nodes = toBinarySearchTree(
      nodes.filter((node) => node).map((val) => val?.toString() ?? "")
    );
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

  let height = Math.floor(Math.log2(nodes.length)) + heightAddend;

  let branchCount = Math.pow(2, height);

  const leftChildHeight = getHeight(1, branchCount, nodes, "right");
  const rightChildHeight = getHeight(2, branchCount, nodes, "left");

  if (leftChildHeight > branchCount && rightChildHeight > branchCount) {
    height += 1;
  }

  branchCount = Math.pow(2, height);

  let branchHeight = 1;
  // Each iteration is the branches from the root and then the last child
  // x=0 is the root node
  for (let x = 1; x <= height; x++) {
    // + 1 is the child at the end of the branch
    branchHeight += Math.pow(2, x) + 1;
  }

  const branchWidth = 2 * branchHeight - 1;
  const colPos = Math.floor(branchWidth / 2);

  const output = Array<string[]>(branchHeight);

  for (let x = 0; x < output.length; x++) {
    if (showGrid) {
      output[x] = Array<string>(branchWidth);
      let counter = 1;
      for (let y = 0; y < branchWidth; y++) {
        output[x][y] = (counter++).toString();
        if (counter > 9) {
          counter = 0;
        }
      }
    } else {
      output[x] = Array<string>(branchWidth).fill(" ");
    }
  }

  const root = nodes[0] || 0;

  const rootString = root.toString();
  let rightSidePos = 0;
  for (let x = Math.floor(rootString.length / 2); x < rootString.length; x++) {
    output[0][colPos + rightSidePos++] = formatValue(
      rootString[x] || " ",
      fgColor
    );
  }
  let leftSidePos = 1;
  for (let x = Math.floor(rootString.length / 2) - 1; x >= 0; x--) {
    output[0][colPos - leftSidePos++] = formatValue(
      rootString[x] || " ",
      fgColor
    );
  }

  for (let y = 1; y <= branchCount; y++) {
    if (nodes[1]) {
      output[y][colPos - y] = "/";
    }

    if (nodes[2]) {
      output[y][colPos + y] = "\\";
    }
  }

  const numbersIndexToPosition = Array(nodes.length);
  numbersIndexToPosition[0] = [0, colPos];

  for (let x = 1; x < nodes.length; x++) {
    const isLeft = (x - 1) % 2 === 0;

    const value = nodes[x];
    if (!value) continue;

    const parentIndex = Math.floor((x - 1) / 2);
    const parentPos = numbersIndexToPosition[parentIndex];

    const rowLevel = Math.floor(Math.log2(x + 1));

    const parentBranchCount = Math.pow(2, Math.floor(height - rowLevel + 1));

    const rowPosition = parentPos[0] + parentBranchCount + 1;

    const colPosition = isLeft
      ? parentPos[1] - parentBranchCount - 1
      : parentPos[1] + parentBranchCount + 1;

    let rightSidePos = 0;

    const nodeString = value.toString().trim();
    const midPoint = Math.floor(nodeString.length / 2);
    for (let x = midPoint; x < nodeString.length; x++) {
      output[rowPosition][colPosition + rightSidePos++] = formatValue(
        nodeString[x] || " ",
        fgColor
      );
    }
    let leftSidePos = 1;
    for (let x = midPoint - 1; x >= 0; x--) {
      output[rowPosition][colPosition - leftSidePos++] = formatValue(
        nodeString[x] || " ",
        fgColor
      );
    }

    numbersIndexToPosition[x] = [rowPosition, colPosition];

    if (2 * x + 1 < nodes.length) {
      const branchCount = Math.pow(2, height - rowLevel);
      for (let y = rowPosition + 1; y <= rowPosition + branchCount; y++) {
        if (nodes[2 * x + 1]) {
          output[y][colPosition - y + rowPosition] = "/";
        }
        if (nodes[2 * x + 2]) {
          output[y][colPosition + y - rowPosition] = "\\";
        }
      }
    }
  }

  return output;
};

export default printNodes;
