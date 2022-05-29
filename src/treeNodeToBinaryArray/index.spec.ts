import rootToArray, { TreeNode } from ".";

it("should match [1,2]", () => {
  const root: TreeNode = {
    val: 1,
    left: { val: 2 },
  };

  const actual = rootToArray(root);
  expect(actual).toMatchObject(["1", "2"]);
});

it("should match [1,2,3]", () => {
  const root: TreeNode = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  const actual = rootToArray(root);
  expect(actual).toMatchObject(["1", "2", "3"]);
});

it("should match [1,undefined,3]", () => {
  const root: TreeNode = {
    val: 1,
    right: { val: 3 },
  };
  const actual = rootToArray(root);
  expect(actual).toMatchObject(["1", undefined, "3"]);
});

(() => {
  const expected = [
    "1",
    "2",
    undefined,
    undefined,
    "5",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "11",
  ];
  it(`should match ${expected}`, () => {
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
    const actual = rootToArray(root);
    expect(actual).toMatchObject(expected);
  });
})();
