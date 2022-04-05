import printNodes from ".";

const message = "match snapshot for  ";
const MAX_LEVEL = 4; // Currently does not work for MAX_LEVEL >= 4

for (let length = 1; length <= Math.pow(2, MAX_LEVEL); length++) {
  const numbers = Array(length);
  for (let y = 0; y <= numbers.length; y++) {
    numbers[y - 1] = y;
  }
  it(`${message} ${JSON.stringify(numbers)}`, () => {
    const actual = printNodes(numbers);
    expect(actual).toMatchSnapshot();
  });
}
