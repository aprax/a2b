import printNodes from "./printNodes";
import type { Args, Node } from "./printNodes";
import toConsole from "./toConsole";
import treeNodeToBinaryArray from "./treeNodeToBinaryArray";
import toBinarySearchTree from "./toBinarySearchTree";

/**
 * @description  Prints a binary tree to the console
 * @param nodes  The array of nodes to be printed as a binary tree
 * @param args  The optional arguments to be passed to printNodes
 * @return  The output of printNodes to the console
 */
const a2bt = (nodes: Node[], args?: Args) => toConsole(printNodes(nodes, args));
export default a2bt;
export { toConsole, printNodes, treeNodeToBinaryArray, toBinarySearchTree };
