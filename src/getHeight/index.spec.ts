import getHeight from ".";

const branchCount = Math.pow(2, 3);
const nodes = [1, 2, 3, 4, 5, null, null, null, null, 10];

it("should calculate the height", () => {
  expect(getHeight(1, branchCount, nodes, "left")).toBe(5);
  expect(getHeight(1, branchCount, nodes, "right")).toBe(5);
  expect(getHeight(2, branchCount, nodes, "left")).toBe(0);
});
