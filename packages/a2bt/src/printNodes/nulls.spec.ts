import printNodes from ".";

const message = "match snapshot for";

it.each([
  [[1, 2, null, null, 5]],
  [[1, null, 3]],
  [[1, null, 3, null, null, 6]],
  [[1, null, 355, null, null, 6, 7, null, null, null, null, 12]],
  [[1, 2, 300, null, 50, null, 7, null, null, 10]],
])(`${message} %j`, (nodes) => {
  expect(printNodes(nodes)).toMatchSnapshot();
});
