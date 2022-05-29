import a2bt from ".";
import type { Args } from "./printNodes";

it("a2bt should be exported", () => {
  const nodes: Args["nodes"] = [1, 2, 3];
  jest.spyOn(console, "log").mockImplementation();

  a2bt({ nodes });
  expect(console.log).toHaveBeenCalled();
});
