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
