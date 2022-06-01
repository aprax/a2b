import printNodes, { invalidErrorMessage } from ".";

const message = "match snapshot for  ";
const MAX_LEVEL = 5;

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

let array = [null, 1];
((array) =>
  it(`should throw with invalid ${array}`, () => {
    expect(() => printNodes(array)).toThrow(invalidErrorMessage);
  }))(array);

array = [1, null, 3, 4, 5, 6];
((array) =>
  it(`should fail with ${JSON.stringify(array)}`, () => {
    expect(() => printNodes(array)).toThrow(invalidErrorMessage);
  }))(array);
