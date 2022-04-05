#!/usr/bin/env node
// import meow from "meow";
import printNodes from "./printNodes/index.js";
import toConsole from "./toConsole/index.js";
// const colors = require('colors');

const MAX_LEVEL = 7; // Currently does not work for MAX_LEVEL >= 4
/*
for (let x = MAX_LEVEL; x >= 0; x--) {
  const totalNodes = Math.pow(2, MAX_LEVEL - x) ;
  const numbers = Array(totalNodes);
  for (let y = 1; y <= totalNodes; y++) {
    numbers[y - 1] = y;
  }

  const actual = printNodes(numbers);

  toConsole(actual);
  console.log('')
}
*/
for (let length = 1; length <= Math.pow(2, MAX_LEVEL); length++) {
  const numbers = Array(length);
  for (let y = 0; y <= numbers.length; y++) {
    numbers[y - 1] = y;
  }
  const actual = printNodes(numbers);
  toConsole(actual);
  console.log("");
}

/*
const usage = `
Usage
  $ a2b <json_array>

Options
  --json, -j  Output tree to JSON string

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
  toConsole(output);
}
process.exit(0);
*/
