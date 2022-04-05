export default (array: (Object | null)[]) => {
  if (array.length <= 1) return true;

  for (let x = 1; x < array.length; x++) {
    const parent = array[Math.floor(x / 2)];
    if (!parent) {
      return false;
    }
  }
  return true;
};
