/* eslint-disable max-len */
import toBst from ".";

const testData = [
  ["1"],
  /*
  ["1", "2"],
  ["1", "2", "3"],
  ["1", "2", "3", "4"],
  ["1", "2", "3", "4", "5"],
  ["a", "d", "z"],
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ],
  */
];
for (const nodes of testData) {
  it(`should produce a binary search tree ordered array of ${nodes.toString()}`, () => {
    const actual = toBst(nodes);
    expect(actual).toMatchSnapshot();
  });
}
