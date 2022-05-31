import printNodes from "./printNodes";
import type { Args } from "./printNodes";
import toConsole from "./toConsole";
import treeNodeToBinaryArray from "./treeNodeToBinaryArray";
import toBinarySearchTree from "./toBinarySearchTree";

const a2bt = (args: Args) => toConsole(printNodes(args));
export default a2bt;
export { toConsole, printNodes, treeNodeToBinaryArray, toBinarySearchTree };
