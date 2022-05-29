#!/usr/bin/env node
console.log("pre start of program");
import printNodes from "./printNodes/index";
import toConsole from "./toConsole/index";
import process from "process";

console.log("Start of program");
const usage = `
Usage
  $ a2bt <json_array>

  Use null for empty nodes, e.g. [1,null,2]
Options
  --json, -j  Output tree to JSON string
  --addend, -a Increase the height of each level Useful for overlapping values.
  --grid, -g show number grid instead of whitespace
  --fgColor -f set the node color with an ANSI foreground color (30-37, 90-97)
  --bst output as BST
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
let json = false;
let heightAddend = 0;
let showGrid = false;
let fgColor = 30;
let bst = false;
for (let x = 2; x < process.argv.length; x++) {
  switch (process.argv[x]) {
    case "-h":
    case "--help":
      console.log(usage);
      break;
    case "--json":
    case "-j":
      json = true;
      break;
    case "--addend":
    case "-a":
      heightAddend = Number(process.argv[++x]);
      if (Number.isNaN(heightAddend)) {
        console.error("addend must be a number");
        process.exit(1);
      }
      break;
    case "--grid":
    case "-g":
      showGrid = true;
      break;
    case "--fgColor":
    case "-f":
      fgColor = Number(process.argv[++x]);
      if (Number.isNaN(fgColor)) {
        console.error("fgColor must be a number");
        process.exit(1);
      }
      break;
    case "--bst":
      bst = true;
      break;
    default:
      console.error(`unknown arg ${process.argv[x]}`);
      process.exit(1);
  }
}
if (!process.argv.length) {
  console.log(usage);
}

const nodes: string[] = JSON.parse(process.argv.at(-1) || "[]");
if (nodes?.length <= 1 ?? true) {
  throw Error("---Array must be greater than a length of 1---");
}

const output = printNodes({
  nodes,
  heightAddend,
  showGrid,
  fgColor,
  bst,
});

if (json) {
  process.stdout.write(JSON.stringify(output));
} else {
  toConsole(output);
}
process.exit(0);
