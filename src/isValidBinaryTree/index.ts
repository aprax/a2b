export default (array: (Object | null)[]) => {
  if (array.length <= 1) return true;

  for (let x = 1; x < array.length; x++) {
    if (!array[x]) {
      continue;
    }
    const parent = array[Math.floor((x - 1) / 2)];
    if (!parent) {
      return false;
    }
  }
  return true;
};
