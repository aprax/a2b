import printNodes from "./printNodes";
import type { Args, Node } from "./printNodes";
import toConsole from "./toConsole";
import treeNodeToBinaryArray from "./treeNodeToBinaryArray";
import toBinarySearchTree from "./toBinarySearchTree";
import isValidBinaryTree from "./isValidBinaryTree";

const a2bt = (nodes: Node[], args?: Args) => toConsole(printNodes(nodes, args));
export default a2bt;
export {
  toConsole,
  printNodes,
  treeNodeToBinaryArray,
  toBinarySearchTree,
  isValidBinaryTree,
};
