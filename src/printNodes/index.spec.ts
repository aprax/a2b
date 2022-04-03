import printNodes from ".";

const message = "should match the expected structure for ";
const MAX_LEVEL = 4; // Currently does not work for MAX_LEVEL >= 4

for (let x = MAX_LEVEL; x >= 0; x--) {
  const totalNodes = Math.pow(2, MAX_LEVEL - x) - 1;
  const numbers = Array(totalNodes);
  for (let y = 1; y <= totalNodes; y++) {
    numbers[y - 1] = y;
  }

  const actual = JSON.stringify(printNodes(numbers));
  it(`${message} ${JSON.stringify(numbers)}`, () => {
    expect(actual).toMatchSnapshot();
  });
}
