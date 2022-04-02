import type { TypedFlags } from "meow";

const printNodes = (
  numbers: number[],
  flags?: TypedFlags<{
    file: {
      type: "boolean";
      alias: string;
    };
  }> &
    Record<string, unknown>
) => {
  console.log(flags);
  if (numbers.length < 1) {
    return console.error("---No arguments passed---");
  }

  if (numbers.length === 1) {
    return console.log(numbers[0]);
  }
  let cellLength = Math.max(...numbers).toString().length;
  if (cellLength % 2 === 0) {
    cellLength++;
  }

  const height = Math.floor(Math.log2(numbers.length));

  let branchHeight = 1; // This is the last child in the tree
  // Each iteration is the branches from the root and then the last child child
  for (let x = 1; x <= height; x++) {
    branchHeight += Math.pow(2, x) + 1;
  }
  const branchWidth = 2 * branchHeight - 1;

  const output = Array(branchHeight);

  for (let x = 0; x < output.length; x++) {
    output[x] = Array(branchWidth).fill(" ".padEnd(Math.ceil(cellLength)));
  }

  const colPos = Math.floor(branchWidth / 2);
  const branchCount = Math.pow(2, height);

  const root = numbers[0] || 0;
  output[0][colPos] = root
    .toString()
    .padStart(Math.ceil(cellLength / 2))
    .padEnd(cellLength);

  for (let y = 1; y <= branchCount; y++) {
    output[y][colPos - y] = "/"
      .padStart(Math.ceil(cellLength / 2))
      .padEnd(cellLength);
    output[y][colPos + y] = "\\"
      .padEnd(Math.ceil(cellLength / 2))
      .padStart(cellLength);
  }

  const numbersIndexToPosition = Array(numbers.length);
  numbersIndexToPosition[0] = [0, colPos];
  for (let x = 1; x < numbers.length; x++) {
    const parentIndex = Math.floor((x - 1) / 2);
    const parentPos = numbersIndexToPosition[parentIndex];

    const rowLevel = Math.floor(Math.log2(x + 1));

    const parentBranchCount = Math.pow(2, Math.floor(height - rowLevel + 1));
    const isLeft = (x - 1) % 2 === 0;

    const rowPosition = parentPos[0] + parentBranchCount + 1;

    const colPosition = isLeft
      ? parentPos[1] - parentBranchCount - 1
      : parentPos[1] + parentBranchCount + 1;

    if (!numbers[x]) {
      numbers[x] = 0;
    }
    const value = numbers[x] || 0;
    output[rowPosition][colPosition] = isLeft
      ? value
        .toString()
        .padStart(Math.ceil(cellLength / 2))
        .padEnd(cellLength)
      : value
        .toString()
        .padEnd(Math.ceil(cellLength))
        .padStart(Math.ceil(cellLength));
    numbersIndexToPosition[x] = [rowPosition, colPosition];

    if (2 * x + 1 < numbers.length) {
      const branchCount = Math.pow(2, height - rowLevel);
      for (let y = rowPosition + 1; y <= rowPosition + branchCount; y++) {
        output[y][colPosition - y + rowPosition] = "/"
          .padStart(Math.ceil(cellLength / 2))
          .padEnd(cellLength);
        output[y][colPosition + y - rowPosition] = "\\"
          .padEnd(Math.ceil(cellLength / 2))
          .padStart(cellLength);
      }
    }
  }
  for (const row of output) {
    console.log(row.join(""));
  }
  console.log("");
  return output;
};

export default printNodes;
