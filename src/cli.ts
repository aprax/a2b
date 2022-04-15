#!/usr/bin/env node
/* eslint-disable max-len */
import meow from "meow";
import printNodes from "./printNodes/index.js";
import toConsole from "./toConsole/index.js";

const usage = `
Usage
  $ a2b <json_array>

Options
  --json, -j  Output tree to JSON string
  --addend, -a Adds the constant to the height of the tree. Useful for when leaf nodes overlap due to long values.
  --grid, -g show number grid instead of whitespace
Examples
  $ a2b [1,2,3]
      1
    /   \\
   /     \\
  2       3

`;

const { input, flags } = meow(usage, {
  importMeta: import.meta,
  flags: {
    json: {
      type: "boolean",
      alias: "j",
    },
    addend: {
      type: "number",
      alias: "a",
      default: 0,
    },
    grid: {
      type: "boolean",
      alias: "g",
      default: false,
    },
  },
});

const parsedInput: string[] = JSON.parse(input[0] || "[]");
if (parsedInput?.length <= 1 ?? true) {
  throw Error("---Array must be greater than a length of 1---");
}

const output = printNodes(parsedInput, flags.addend, flags.grid);
if (!output) {
  process.exit(1);
}

if (flags.json) {
  process.stdout.write(JSON.stringify(output));
} else {
  toConsole(output);
}
process.exit(0);
