import a2bt, { treeNodeToBinaryArray } from "a2bt";

const addend = 1;
const grid = true;
const nodes = ["aaa", "bbb", "ccc"];
const fgColor = 93;

a2bt(nodes, { heightAddend: addend, showGrid: grid, fgColor });

const root = {
	val: 1,
	left: {
		val: 2,
		right: {
			val: 4
		}
	},
	right: {
		val: 3
	}
}

a2bt(treeNodeToBinaryArray(root))