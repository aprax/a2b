#!/usr/bin/env/node
import meow from "meow";
import printNodes from "./printNodes/index.js";
// const colors = require('colors');

console.log(Date());
/*
printNodes([100, 2]);
printNodes([1, 2, 3]);
printNodes([1, 2, 13]);
printNodes([1, 2, 3, 4]);

printNodes([1, 2, 30000000000000, 205, 5, 14, 7, 5, 4, 9, 2]);
printNodes([1, 2, 3, 4, 5, 6]);
printNodes([1, 2, 3, 4, 5, 6, 7]);
printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1]);
printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7]);
printNodes([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);
printNodes([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
]);
*/
/*
printNodes([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
  63, 64, 65, 66, 67, 68, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
  95, 96, 97, 98, 99
]);
*/

const { input, flags } = meow(
  `
	Usage
	  $ array-to-ascii-tree <json_array>

	Options
	  --json, -j  Output tree to JSON string

	Examples
	  $ array-to-ascii-tree [1,2,3]
	       1
       /   \
      /     \
     2       3
`,
  {
    importMeta: import.meta,
    flags: {
      file: {
        type: "boolean",
        alias: "j",
      },
    },
  }
);

console.log(input[0]);
printNodes([], flags);
console.info("End of program");
