#!/usr/bin/env/node
import meow from "meow";
import printNodes from "./printNodes/index.js";
// const colors = require('colors');

const usage = `
Usage
  $ array-to-ascii-tree <json_array>

Options
  --json, -j  Output tree to JSON string

Examples
  $ array-to-ascii-tree [1,2,3]
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
  },
});

const parsedInput: string[] = JSON.parse(input[0] || "[]");
if (parsedInput?.length <= 1 ?? true) {
  console.error("---Array must be greater than a length of 1---");
  process.exit(1);
}
const output = printNodes(parsedInput);
if (!output) {
  process.exit(1);
}
if (flags.json) {
  process.stdout.write(JSON.stringify(output));
} else {
  for (const row of output) {
    console.log(row.join(""));
  }
}
process.exit(0);
