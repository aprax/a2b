/**
 * @module a2bt/isValidBinaryTree
 * Checks if an array is a valid binary tree
 * @param array The array to be validated
 * @return Whether or not the array is a valid binary tree
 */
export default (array: unknown[]) => {
  if (array.length <= 1) return true;

  for (let x = 1; x < array.length; x++) {
    if (!array[x]) {
      continue;
    }
    const parent = array[Math.floor((x - 1) / 2)];
    if (!parent) {
      return false;
    }
  }
  return true;
};
