import printNodes from "./printNodes/index.js";
import toConsole from "./toConsole/index.js";

export default printNodes;
export { toConsole };


const MAX_LEVEL = 5;
for (let x = 1; x <= MAX_LEVEL; x++) {
  const numbers = Array(Math.pow(2, x + 1) - 1);
  for (let y = 1; y <= numbers.length; y++) {
    numbers[y - 1] = y;
  }
    toConsole(printNodes(numbers, 0, false, 92));
    // toConsole(printNodes(numbers, 0, true));
    // toConsole(printNodes(numbers, 0, false));
}