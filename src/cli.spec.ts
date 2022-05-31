import toConsole from "./toConsole";
import defaultArgs from "./defaultArgs";
import printNodes from "./printNodes";

jest.mock("./toConsole");
jest.mock("./printNodes");

const exitMessage = "process.exit() was called";

const args = ["node", "a2bt"];
const nodes = "[1,2,3]";
describe("on valid input", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(process, "exit").mockImplementation(() => {
      throw new Error(exitMessage);
    });
    jest.spyOn(process.stdout, "write").mockImplementation();
  });
  it("should exit with 0", () => {
    process.argv = [...args, nodes];
    expect(() => require("./cli")).toThrow(exitMessage);
    expect(printNodes).toHaveBeenCalledWith({
      ...defaultArgs,
      nodes: JSON.parse(nodes),
    });
    expect(toConsole).toHaveBeenCalled();
    expect(process.exit).toHaveBeenCalledWith(0);
  });

  describe("should output json", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.spyOn(process, "exit").mockImplementation(() => {
        throw new Error(exitMessage);
      });
      jest.spyOn(process.stdout, "write").mockImplementation();
    });
    it("if passed --json", () => {
      process.argv = [...args, "--json", nodes];
    });

    it("if passed -j", () => {
      process.argv = [...args, "-j", nodes];
    });
    afterEach(() => {
      expect(() => require("./cli")).toThrow(exitMessage);
      expect(process.stdout.write).toHaveBeenCalled();
    });
  });

  describe("should increase height", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.spyOn(process, "exit").mockImplementation(() => {
        throw new Error(exitMessage);
      });
      jest.spyOn(process.stdout, "write").mockImplementation();
    });
    it("if passed -a", () => {
      process.argv = [...args, "-a", "5", nodes];
    });

    it("if passed --addend", () => {
      process.argv = [...args, "--addend", "5", nodes];
    });
    afterEach(() => {
      expect(() => require("./cli")).toThrow(exitMessage);
      expect(printNodes).toHaveBeenCalledWith({
        ...defaultArgs,
        heightAddend: 5,
        nodes: JSON.parse(nodes),
      });

      expect(process.exit).toHaveBeenCalledWith(0);
    });
  });
});

describe("on invalid input", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(process, "exit").mockImplementation(() => {
      throw new Error(exitMessage);
    });
    jest.spyOn(console, "error").mockImplementation();
  });

  it("should exit with 1 with invalid array", () => {
    process.argv = [...args, "null,2,3]"];
    expect(() => require("./cli")).toThrow(exitMessage);
    expect((console.error as jest.Mock).mock.calls[0][0].message).toBe(
      "Unexpected token , in JSON at position 4"
    );
  });

  it("should exit with error when passed an invalid foreground color", () => {
    process.argv = [...args, "-f", "invalid", "[1,2,3]"];
    expect(() => require("./cli")).toThrow(exitMessage);
    expect(console.error).toHaveBeenCalledWith("fgColor must be a number");
    expect(process.exit).toHaveBeenCalledWith(1);

    jest.clearAllMocks();
    process.argv = [...args, "--fgColor", "invalid", "[1,2,3]"];
    expect(() => require("./cli")).toThrow(exitMessage);
    expect(console.error).toHaveBeenCalledWith("fgColor must be a number");
  });

  it("should exit with error when passed an invalid addend", () => {
    process.argv = [...args, "-a", "invalid", "[1,2,3]"];
    expect(() => require("./cli")).toThrow(exitMessage);
    expect(console.error).toHaveBeenCalledWith("addend must be a number");
    expect(process.exit).toHaveBeenCalledWith(1);

    jest.clearAllMocks();
    process.argv = [...args, "--addend", "invalid", nodes];
    expect(() => require("./cli")).toThrow(exitMessage);
    expect(console.error).toHaveBeenCalledWith("addend must be a number");
  });
  afterEach(() => {
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});
