#!/usr/bin/env node
import printNodes from "./printNodes";
import toConsole from "./toConsole";
import process from "process";
import defaultArgs from "./defaultArgs";

/**
 * @module @a2b/cli
 * @description  Prints a binary tree to the console
 * @example
 * a2bt [1,2,3, null, 4]
 *    1
 *   / \
 *  /   \
 * /     \
 * 2     3
 *  \
 *   \
 *    4
 */
export default (() => {
  const usage = `
Usage
  $ a2bt '<json_array_of_level_order_nodes>'

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

  let nodes = [];

  const args = { ...defaultArgs };
  if (!process.argv[2]) {
    console.log(usage);
    process.exit(1);
  }
  for (let x = 2; x < process.argv.length; x++) {
    const param = process.argv[x];
    if (param[0] !== "-") {
      try {
        nodes = JSON.parse(process.argv[x]);
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
      break;
    }
    switch (param) {
      case "-h":
      case "--help":
        console.log(usage);
        break;
      case "--json":
      case "-j":
        args.json = true;
        break;
      case "--addend":
      case "-a":
        args.heightAddend = Number(process.argv[++x]);
        if (Number.isNaN(args.heightAddend)) {
          console.error("addend must be a number");
          process.exit(1);
        }
        break;
      case "--grid":
      case "-g":
        args.showGrid = true;
        break;
      case "--fgColor":
      case "-f":
        args.fgColor = Number(process.argv[++x]);
        if (Number.isNaN(args.fgColor)) {
          console.error("fgColor must be a number");
          process.exit(1);
        }
        break;
      case "--bst":
        args.bst = true;
        break;
      default:
        console.error(`unknown arg ${process.argv[x]}`);
        process.exit(1);
    }
  }

  if (nodes?.length <= 1 ?? true) {
    console.error("---Array must be greater than a length of 1---");
    process.exit(1);
  }

  const output = printNodes(nodes, { ...args });

  if (args.json) {
    process.stdout.write(JSON.stringify(output));
  } else {
    toConsole(output);
  }
  process.exit(0);
})();
