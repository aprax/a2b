export interface TreeNode {
  val: Object;
  left?: TreeNode | undefined;
  right?: TreeNode | undefined;
}

/**
 * Converts a TreeNode and its descendants to an indexed array.
 * @param {string[]} result An array to be used for storing the indexed array
 * @param {TreeNode} node a TreeNode root
 * @param {number} [parentIndex] The parent of the current node
 * @param {boolean} [isLeft=false] Whether the node is a left or right child.
 */
const rootToArray = (
  result: string[],
  node: TreeNode,
  parentIndex?: number,
  isLeft = false
) => {
  let index = 0;
  if (typeof parentIndex === "number") {
    index = isLeft ? 2 * parentIndex + 1 : 2 * parentIndex + 2;
  }

  result[index] = node.val.toString();
  if (node.left) {
    rootToArray(result, node.left, index, true);
  }
  if (node.right) {
    rootToArray(result, node.right, index, false);
  }
};
/**
 * Converts a tree node and its descendants to an indexed array.
 * @param {TreeNode} node The node to convert
 * @return {string[]} The binary array
 */
const convertTreeNodeToBinaryArray = (node: TreeNode) => {
  const result: string[] = [];
  rootToArray(result, node);
  return result;
};
export default convertTreeNodeToBinaryArray;
