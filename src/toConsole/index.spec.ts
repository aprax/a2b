import toConsole from ".";

it("should be defined", () => {
  console.log = jest.fn();
  toConsole([
    ["a", "b", "c"],
    ["c", "d", "e"],
  ]);
  expect(console.log).toHaveBeenCalledWith("abc");
  expect(console.log).toHaveBeenCalledWith("cde");
});
