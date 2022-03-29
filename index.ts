import printNodes from './src/printNodes';
// const assert = require('assert').strict;
// const colors = require('colors');

console.log(Date());
printNodes([1, 2]);
printNodes([1, 2, 3]);
printNodes([1, 2, 3, 4]);

printNodes([1, 2, 3, 4, 5]);
printNodes([1, 2, 3, 4, 5, 6]);
printNodes([1, 2, 3, 4, 5, 6, 7]);
printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1]);
printNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7]);
console.info('End of program');