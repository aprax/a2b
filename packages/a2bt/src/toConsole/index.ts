/**
 * @module @a2b/toConsole
 * @description Prints a binary tree array to the console
 * @param output The binary tree array to be printed to the console
 */
export default (output: string[][]) => {
  for (const row of output) {
    console.log(row.join(""));
  }
};
