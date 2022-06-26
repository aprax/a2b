import type { TreeNode } from ".";
import treeNodeToBinaryArray from ".";
import isValidBinaryTree from "../isValidBinaryTree";

it("should match [1,2]", () => {
  const root: TreeNode = {
    val: 1,
    left: { val: 2 },
  };

  const actual = treeNodeToBinaryArray(root);
  expect(isValidBinaryTree(actual)).toBeTruthy();
  expect(actual).toMatchObject(["1", "2"]);
});

it("should match [1,2,3]", () => {
  const root: TreeNode = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  const actual = treeNodeToBinaryArray(root);
  expect(isValidBinaryTree(actual)).toBeTruthy();
  expect(actual).toMatchObject(["1", "2", "3"]);
});

it("should match [1,undefined,3]", () => {
  const root: TreeNode = {
    val: 1,
    right: { val: 3 },
  };
  const actual = treeNodeToBinaryArray(root);
  expect(isValidBinaryTree(actual)).toBeTruthy();
  expect(actual).toMatchObject(["1", undefined, "3"]);
});

(() => {
  const root: TreeNode = {
    val: 1,
    left: {
      val: 2,
      right: {
        val: 5,
        right: {
          val: 11,
        },
      },
    },
  };
  it(`should match snapshot for ${JSON.stringify(root)}`, () => {
    const actual = treeNodeToBinaryArray(root);
    expect(isValidBinaryTree(actual)).toBeTruthy();
    expect(actual).toMatchSnapshot();
  });
})();

(() => {
  const root = {
    val: 3,
    left: null,
    right: { val: 9, left: null, right: null },
  };

  it(`should match snapshot for ${JSON.stringify(root)}`, () => {
    const actual = treeNodeToBinaryArray(root);
    expect(isValidBinaryTree(actual)).toBeTruthy();
    expect(actual).toMatchSnapshot();
  });
})();
