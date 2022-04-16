#!/usr/bin/env node
/* eslint-disable max-len */
import meow from "meow";
import printNodes from "./printNodes/index.js";
import toConsole from "./toConsole/index.js";

const usage = `
Usage
  $ a2bt <json_array>

  Use null for empty nodes, e.g. [1,null,2]
Options
  --json, -j  Output tree to JSON string
  --addend, -a Adds the constant to the height of the tree. Useful for when leaf nodes overlap due to long values.
  --grid, -g show number grid instead of whitespace
  --fgColor -f sets the color of the nodes using a ANSI foreground color code (30-37, 90-97) https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences
Example
  $ a2bt [1,2,3, null, 4]
       1        
      / \\       
     /   \\      
    /     \\     
   /       \\    
  2         3   
   \\            
    \\           
     4          
`;

const { input, flags: {json, addend, grid, fgColor} } = meow(usage, {
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
    fgColor: {
      type: "number",
      alias: "f",
    }
  },
});

const parsedInput: string[] = JSON.parse(input[0] || "[]");
if (parsedInput?.length <= 1 ?? true) {
  throw Error("---Array must be greater than a length of 1---");
}

const output = printNodes(parsedInput, addend, grid, fgColor);
if (!output) {
  process.exit(1);
}

if (json) {
  process.stdout.write(JSON.stringify(output));
} else {
  toConsole(output);
}
process.exit(0);
