import printNodes from "./printNodes";
// const assert = require('assert').strict;
// const colors = require('colors');

console.log(Date());
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
console.info("End of program");
