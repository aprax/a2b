export default (output: string[][]) => {
  for (const row of output) {
    console.log(row.join(""));
  }
};
