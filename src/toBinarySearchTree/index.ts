type ToBst = (
	nodes: Object[], bst: string[], start?: number, end?: number) => void;
const toBst: ToBst = (nodes, bst, start = 0, end) => {
	let mid;
	if (start === end) {
		mid = start;
	} else {
		mid = Math.floor(start + (nodes.length - 1) / 2);
		if (end !== undefined) {
			mid = Math.floor((start + end) / 2);
		} else {
			end = nodes.length - 1;
		}
	}
	let ptr = 0;
	while (bst[ptr] !== undefined) {
		if (nodes[mid].toString() > bst[ptr]) {
			ptr = 2 * ptr + 2;
		} else {
			ptr = 2 * ptr + 1;
		}
	}
	bst[ptr] = nodes[mid].toString();
	if (start !== mid) {
		toBst(nodes, bst, start, mid - 1);
	}
	if (start !== end) {
		toBst(nodes, bst, mid + 1, end);
	}
}
export default toBst;