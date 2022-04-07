import printNodes, { invalidErrorMessage } from ".";

const message = "match snapshot for  ";
const MAX_LEVEL = 4;

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

let array = [null, 1];
(array => it(`should throw with invalid ${array}`, () => {
  expect(() => printNodes(array)).toThrow(invalidErrorMessage);
}))(array)
;

array = [1, null, 3, 4, 5, 6];
(array => it(`should fail with ${JSON.stringify(array)}`, () => {
  expect(() => printNodes(array)).toThrow(invalidErrorMessage);
}))(array);