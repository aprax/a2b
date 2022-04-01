import printNodes from '.';
const message = "should match the expected structure for ";
it(`${message} [1, 2, 30000000000000, 205, 5, 14, 7, 5, 4, 9, 2]`, () =>
  expect(
    printNodes([1, 2, 30000000000000, 205, 5, 14, 7, 5, 4, 9, 2])
  ).toMatchSnapshot());

it(`${message} [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]`, () =>
  expect(
    printNodes([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
  ).toMatchSnapshot());

it(`${message} [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]`, () =>
  expect(
    printNodes([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    ])
  ).toMatchSnapshot());
