import isValidBinaryTree from ".";

let array: (Object | null)[] = [null, 1];

((array) => {
  it(`${JSON.stringify(array)} should be invalid`, () => {
    expect(isValidBinaryTree(array)).toBeFalsy();
  });
})(array);

array = [1];
((array) => {
  it(`${JSON.stringify(array)} should be valid`, () => {
    expect(isValidBinaryTree(array)).toBeTruthy();
  });
})(array);

array = [1, null, 3, 4, 5, 6];
((array) => {
  it(`${JSON.stringify(array)} should be invalid`, () => {
    expect(isValidBinaryTree(array)).toBeFalsy();
  });
})(array);

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

((array) => {
  it(`${JSON.stringify(array)} should be valid`, () => {
    expect(isValidBinaryTree(array)).toBeTruthy();
  });
})(array);


array = [1,null,2];
(array => {
  it(`${JSON.stringify(array)} should be valid`, () => {
    expect(isValidBinaryTree(array)).toBeTruthy();
  })
})(array)

array = [1,null,null,null];
(array => {
  it(`${JSON.stringify(array)} should be valid`, () => {
    expect(isValidBinaryTree(array)).toBeTruthy();
  });
})(array)