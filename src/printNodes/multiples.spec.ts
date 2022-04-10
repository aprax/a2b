import printNodes from ".";

it("should match the expected snapshot", () => {
  const numbers = Array(50);
  for (let y = 0; y < numbers.length; y++) {
    numbers[y] = y + 100;
  }
  expect(printNodes(numbers)).toMatchSnapshot();
});
