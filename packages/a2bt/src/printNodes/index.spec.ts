import printNodes from ".";

const message = "match snapshot for  ";
const MAX_LEVEL = 5;

it("should return a single node for an array of length 1", () => {
  expect(printNodes([1])).toEqual([["1"]]);
});

it("should return an empty array for an array of length 0", () => {
  expect(printNodes([])).toHaveLength(0);
});
for (let x = 1; x <= MAX_LEVEL; x++) {
  const numbers = Array(Math.pow(2, x + 1) - 1);
  for (let y = 1; y <= numbers.length; y++) {
    numbers[y - 1] = y;
  }
  it(`${message} ${JSON.stringify(numbers)}`, () => {
    const actual = printNodes(numbers);
    expect(actual).toMatchSnapshot();
    const grid = printNodes(numbers, { showGrid: true });
    expect(grid).toMatchSnapshot();
    const addend = printNodes(numbers, { showGrid: false });
    expect(addend).toMatchSnapshot();
  });
}
