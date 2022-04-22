import printNodes, { toConsole, rootToArray } from ".";

it("printNodes should be exported correctly", () => {
  expect(printNodes({ nodes: [1, 2] })).toMatchSnapshot();
});

it("toConsole should be exported correct", () => {
  jest.spyOn(console, "log");
  toConsole([["a"]]);
  expect(console.log).toHaveBeenCalled();
});

it("rootToArray should be exported correctly", () => {
  const actual: string[] = [];
  rootToArray(actual, { val: 1 });
  expect(actual).toMatchObject(["1"]);
});
