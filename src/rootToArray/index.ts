export interface TreeNode {
  val: Object;
  left?: TreeNode | undefined;
  right?: TreeNode | undefined;
}

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
export default rootToArray;
