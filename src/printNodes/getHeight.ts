export default (
  index: number,
  branchCount: number,
  nodes: unknown[],
  side: "left" | "right"
) => {
  let height = 0;
  let step = 1;
  while (index < nodes.length) {
    height += branchCount / Math.pow(2, step++) + 1;
    index = index * 2 + (side === "left" ? 1 : 2);
  }
  return height;
};
