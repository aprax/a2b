import printNodes from "..";

const message = "should match the expected structure for ";
it(`${message} [1,2]`, () => {
  expect(printNodes([1, 2])).toMatchSnapshot();
});

it(`${message} [1,2,3]`, () => {
  expect(printNodes([1, 2, 3])).toMatchSnapshot();
});

it(`${message} [1,2,3,4]`, () => {
  expect(printNodes([1, 2, 3, 4])).toMatchSnapshot();
});

it(`${message} [1,2,3,4,5]`, () => {
  expect(printNodes([1, 2, 3, 4, 5])).toMatchSnapshot();
});

it(`${message} [1,2,3,4,5,6]`, () => {
  expect(printNodes([1, 2, 3, 4, 5, 6])).toMatchSnapshot();
});

it(`${message} [1,2,4,5,6,7]`, () => {
  expect(printNodes([1, 2, 3, 4, 5, 6, 7])).toMatchSnapshot();
});

it(`${message} [1, 2, 3, 4, 5, 6, 7, 8, 9]`, () => {
  expect(printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9])).toMatchSnapshot();
});

it(`${message} [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1]`, () => {
  expect(
    printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1])
  ).toMatchSnapshot();
});

it(`${message} [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7]`, () => {
  expect(
    printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7])
  ).toMatchSnapshot();
});
