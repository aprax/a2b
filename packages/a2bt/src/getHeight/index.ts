/**
 * Gets the height of a binary tree array
 *
 * @param index The index of the node to get the height of
 * @param branchCount The number of branches in the binary tree array
 * @param nodes The binary tree array
 * @param side The side of the tree to get the height of
 *
 * @return The height of the node
 */
export default (
  index: number,
  branchCount: number,
  nodes: unknown[],
  side: "left" | "right"
) => {
  let height = 0;
  let step = 1;
  const addend = side === "left" ? 1 : 2;
  while (2 * index + addend < nodes.length && nodes[2 * index + addend]) {
    height += branchCount / Math.pow(2, step++) + 1;
    index = index * 2 + addend;
  }
  return height;
};
